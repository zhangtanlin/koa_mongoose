const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const acl = require('acl');
const mongoose = require('mongoose');

//mongodb数据库连接
var server = require('./config/server'); //配置文件
var mongodb = 'mongodb://' + server.mongodb.user +
    ':' +
    server.mongodb.password +
    '@' + server.mongodb.host +
    ':' + server.mongodb.port +
    '/' +
    server.mongodb.database +
    '?authMechanism=' +
    server.mongodb.authMechanism +
    '&authSource=' +
    server.mongodb.authSource;
mongoose.connect(mongodb, {
    useNewUrlParser: true
}, (err, db) => {
    global.acl = new acl.mongodbBackend(db, 'acl_');
})

//解决跨域
app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Content-Length', 'X-Requested-With', 'Access-Control-Allow-Headers', 'token', 'auth'],
}));

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 路由分发
var registRouter = require('./routes/index');
app.use(registRouter())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app