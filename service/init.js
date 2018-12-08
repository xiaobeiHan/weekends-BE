const getMysqlCnn = function () {
    const _mysql = require('mysql');
    const conn = _mysql.createConnection({
        host: '193.112.56.98', //数据库地址
        user: 'root', //账号
        password: 'Hanjie289@123!', //密码
        database: 'mytest', //库名
        multipleStatements: true //允许执行多条语句
    });
    console.log('---mysql connected---')
    return conn
}
const getExpress = function () {
    const _express = require('express');
    let app = _express();
    return app
}
module.exports = {
    getMysqlCnn,
    getExpress
}