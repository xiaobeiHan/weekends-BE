
const initApp = require('../service/init');
const app = initApp.getExpress();
const mysqlCnn = initApp.getMysqlCnn();
const sqlSet = require('../dao/sqlSet')
//查询出所有数据
app.get('/api/createTable', (req, res) => {
	const sqlStr = sqlSet.createTable;
	mysqlCnn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '创建失败',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: '创建成功'
		})
	})
});
app.get('/api/insertPlace', (req, res) => {
	const sqlStr = sqlSet.insertPlace;
	mysqlCnn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '创建失败',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: '创建成功'
		})
	})
});
app.get('/api/dropTable', (req, res) => {
	const sqlStr = sqlSet.dropTable;
	mysqlCnn.query(sqlStr, (err, results) => {
        console.log(err, results, 'results')
		if (err) return res.json({
			err_code: 1,
			message: '删除失败',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: '删除成功'
		})
	})
});
app.listen(3000, () => {
	console.log('正在监听端口3000,http://193.112.56.98:3000');
})