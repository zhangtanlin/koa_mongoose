//引入外联日志schema
const outreachlogSchema = require('../schemas/outreachlog')
//引入外联日志schema
const stationcollSchema = require('../schemas/stationcoll')

//扩展外联日志方法
outreachlogSchema.statics = {
    findStationcollByDeviceid: function(deviceid, callback) {
        let sid = deviceid.toString().substr(0, 9)
        console.log('sid', sid)
        return this.findOne({
                'sid': Long.fromString(Number(sid))
            }).populate('sid')
            .exec(callback)
    }
};

//导出外联日志模型
var Outreachlog = mongoose.model('Outreachlog', outreachlogSchema);
module.exports = Outreachlog;