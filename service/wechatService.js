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
              "pagepath": "pages/index/index",
              "thumb_media_id": "XrfwjfAMf820PzHu9s5GYgOJbfbnoUucToD7A5HFbBM6_nU6TzR4EGkCFTTHLo0t"
            }
          }
          
      })
      .then(function (response) {
        console.log(response.body);
      })
      .catch(function (error) {
        console.log(error.body);
      });
}

module.exports = {
    sendMiniAppCard
  };