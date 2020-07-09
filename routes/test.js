var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log('get请求成功!');
    // console.log(req.query);
    global.data = req.query;
    // var arr = eval(global.data.arr);
    // global.data.arr = arr;
    console.log(global.data);
    // console.log(data)
    res.send('请求成功!');
});
router.get('/use', function (req, res, next) {
    console.log('请求成功!');
    // console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    var data = global.data;
    // console.log(req);
    console.log(data);
    res.send(data);
});
module.exports = router;
