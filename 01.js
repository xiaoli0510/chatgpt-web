//express_demo.js 文件
var express = require("express");
const cors = require("cors");
var app = express();
// 允许所有来源的跨域请求
app.use(cors());

app.get("/login", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/event-stream");
  let count = 0; // 计数器，用于发送 10 条数据
  let arrStream = [
    { data: { event: "ping" } },
    
    { data: { event: "ping" } },
    
    { data: { event: "ping" } },
    
    { data: { event: "cmpl", text: "\n" } },
    
    // { data: { event: "cmpl", text: "`" } },
    
    // { data: { event: "cmpl", text: "`" } },
    
    // { data: { event: "cmpl", text: "`" } },
    
    { data: { event: "cmpl", text: "j" } },
    
    { data: { event: "cmpl", text: "a" } },
    
    { data: { event: "cmpl", text: "v" } },
    
    { data: { event: "cmpl", text: "a" } },
    
    { data: { event: "cmpl", text: "s" } },
    
    { data: { event: "cmpl", text: "c" } },
    
    { data: { event: "cmpl", text: "r" } },
    
    { data: { event: "cmpl", text: "i" } },
    
    { data: { event: "cmpl", text: "p" } },
    
    { data: { event: "cmpl", text: "t" } },
    
    { data: { event: "cmpl", text: "\n" } },
    
    { data: { event: "cmpl", text: "l" } },
    
    { data: { event: "cmpl", text: "e" } },
    
    { data: { event: "cmpl", text: "t" } },
    
    { data: { event: "cmpl", text: " " } },
    
    { data: { event: "cmpl", text: "d" } },
    
    { data: { event: "cmpl", text: " " } },
    
    { data: { event: "cmpl", text: "=" } },
    
    { data: { event: "cmpl", text: "1" } },
    
    { data: { event: "cmpl", text: "\n" } },
    
    // { data: { event: "cmpl", text: "`" } },
    
    // { data: { event: "cmpl", text: "`" } },
    
    // { data: { event: "cmpl", text: "`" } },
    
    { data: { event: "all_done" } },
  ];
  let len = arrStream.length;
  const intervalId = setInterval(() => {
    if (count < len) {
      // 发送数据
      const data = `data: ${JSON.stringify(arrStream[count].data)}\n\n`;
      console.log(data);
      res.write(data); // 写入数据
      count++; // 增加计数器
    } else {
      // 发送完成后关闭连接
      clearInterval(intervalId);
      res.end();
    }
  }, 1000);
});

var server = app.listen(1010, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
