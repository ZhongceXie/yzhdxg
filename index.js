const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const logger = morgan("tiny");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

const {sendMiniAppCard} = require("./service/wechatService")

//微信推送
app.post("/message", async (req, res) => {
  console.log("Event Received...")
  console.log(req.body)

  if(req.body && req.body.Event === "subscribe") {
    console.log("Subscribe")
    sendMiniAppCard(req.body.FromUserName)
  } 

    res.send({
      code: 0,
      data: req.body
    });
})

// 小程序调用，获取微信 Open ID
app.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});

const port = process.env.PORT || 80;

async function bootstrap() {
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}


bootstrap();
