const mongoose = require('mongoose')

//导入用户schema
const userSchema = require('../schemas/user')

//导出用户模型
module.exports = mongoose.model('User', userSchema)