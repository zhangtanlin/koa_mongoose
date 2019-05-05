var mongoose = require('mongoose');

//其他数据类型
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

//创建schema
var outreachlogSchema = new mongoose.Schema({
    id: {
        type: String
    },
    shortname: {
        type: String
    },
    deviceid: {
        type: Long
    },
    voltage: {
        type: Number,
        ref: 'stationcoll'
    },
    bssid: {
        type: String
    },
    ssid: {
        type: String
    },
    singal: {
        type: Number
    },
    wlanstamac: {
        type: String
    },
    wlancomm: {
        type: Number
    },
    isover_signal: {
        type: Number
    },
    isover_commtime_hp: {
        type: Number
    },
    isover_commtime_wsta: {
        type: Number
    },
    isover_lasttimeinte_hp: {
        type: Number
    },
    isover_lasttimeinte_wsta: {
        type: Number
    },
    isalarm_hp: {
        type: Number
    },
    isalarm_wsta: {
        type: Number
    },
    stadevalarm: {
        type: Number
    },
    stamac: {
        type: String
    },
    staip: {
        type: String
    },
    protoname: {
        type: String
    },
    isalarm_sta: {
        type: Number
    },
    isalarm_sta_proto: {
        type: Number
    },
    stacomm: {
        type: Number
    },
    ctime: {
        type: Long
    },
    chantime: {
        type: Long
    },
    prostatus: {
        type: Number
    },
    remarks: {
        type: String
    },
    opername: {
        type: String
    },
    protime: {
        type: Long
    },
    warnlevel: {
        type: Number
    }
}, {
    versionKey: false, //禁止保存版本号__v
    collection: 'outreach_log' //数据库集合
});
module.exports = outreachlogSchema;