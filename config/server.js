//本地mongodb数据库
// const mongodb = {
//     host: '127.0.0.1',
//     port: '27017',
//     database: 'monitor2',
//     user: 'monitor2',
//     password: 'monitor2',
//     authMechanism: 'SCRAM-SHA-1',
//     authSource: 'monitor2'
// };
//本地redis数据库
// const redis = {
//     host: '127.0.0.1', //服务器IP
//     port: 6379, //端口号
//     user: '', //用户名
//     pwd: '', //密码
//     db: 1 //集合
// };


//远程mongodb数据库
const mongodb = {
    host: '172.16.4.28',
    port: '27017',
    database: 'cap',
    user: 'admin',
    password: 'nesec110',
    authMechanism: 'SCRAM-SHA-1',
    authSource: 'cap'
};

//远程redis数据库
const redis = {
    host: '172.16.4.28', //服务器IP
    port: 6379, //端口号
    user: '', //用户名
    pwd: '', //密码
    db: 1 //集合
};

//导出的文件
const server = {
    mongodb: mongodb,
    redis: redis
};
module.exports = server;