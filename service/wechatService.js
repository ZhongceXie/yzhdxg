const axios = require('axios').default;

sendMiniAppCard = (toUserName) => {
    axios({
        method: 'post',
        url: 'http://api.weixin.qq.com/cgi-bin/message/custom/send',
        data: {
            "touser": toUserName,
            "msgtype": "miniprogrampage",
            "miniprogrampage":
            {
              "title": "商城：燕谷珍馐农场",
              "appid":"wx223dece5248f620e",
              "pagepath": "pages/index/index",
              "thumb_media_id": "J1u3keFImkOcXwqB3Kovs-pMcbsHdxBx5EXtydx-VzILikaZ8Z6IUuDH1Udi1e7G",
              "media_id": "J1u3keFImkOcXwqB3Kovs-pMcbsHdxBx5EXtydx-VzILikaZ8Z6IUuDH1Udi1e7G"
            }
          }
          
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = {
    sendMiniAppCard
  };