//Mon Sep 23 2024 14:18:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x23d0c8 = require("crypto-js");
const _0x28f785 = require("axios");
class _0x2180b6 {
  constructor() {}
  wait(_0x511a4d) {
    return new Promise(_0x2b4afe => setTimeout(_0x2b4afe, _0x511a4d));
  }
  async redis_connect() {
    if (process.env.PRO_REDIS_URL) {
      try {
        let _0x1bdf11 = require("redis");
        const _0x3a587f = {
          url: process.env.PRO_REDIS_URL
        };
        let _0xcc3be6 = await _0x1bdf11.createClient(_0x3a587f);
        if (_0xcc3be6) {
          console.log("本地Redis已检测到配置链接");
          await _0xcc3be6.connect();
        }
        return _0xcc3be6;
      } catch (_0x2cfb55) {
        console.log(_0x2cfb55.message);
        console.log("本地Redis连接失败, 退出执行！！！");
        process.exit(1);
      }
    }
  }
  timestampToTime(_0x1cf75e) {
    let _0x4397e5 = new Date(_0x1cf75e),
      _0x53b8b3 = _0x4397e5.getFullYear(),
      _0x1e3f90 = _0x4397e5.getMonth() + 1,
      _0x3f42ec = _0x4397e5.getDate(),
      _0x5d86cf = _0x4397e5.getHours(),
      _0xc9279d = _0x4397e5.getMinutes(),
      _0x1e55b3 = _0x4397e5.getSeconds(),
      _0x33a488 = _0x53b8b3 + "-" + this.getzf(_0x1e3f90) + "-" + this.getzf(_0x3f42ec) + " " + this.getzf(_0x5d86cf) + ":" + this.getzf(_0xc9279d) + ":" + this.getzf(_0x1e55b3);
    return _0x33a488;
  }
  getzf(_0x50663c) {
    if (parseInt(_0x50663c) < 10) {
      _0x50663c = "0" + _0x50663c;
    }
    return _0x50663c;
  }
  needAl(_0x2803bc = false) {
    let _0x4a202c = process.argv[1];
    if (_0x2803bc == true) {
      if (!(_0x4a202c.indexOf("feverrun") > -1)) {
        console.log("问题反馈(请拉取完整库): https://t.me/proenvc");
        process.exit(1);
      }
    }
  }
  timeFormat(_0x820730 = +new Date()) {
    var _0x19e64a = new Date(_0x820730 + 28800000);
    return _0x19e64a.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, ".");
  }
  getUA(_0x328dc6 = "") {
    let _0x8f8093 = ["jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/1112.2.0.0 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 11; RMX2001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/1112.2.0.0 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13; M2012K11C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.117 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.28 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/89.0.4389.86 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; MI 9) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.0.0; Pixel C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 5.1; Tesla Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.0.0 Mobile Safari/537.36 YaApp_Android/9.50/apad YaSearchBrowser/9.50", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 7.1.1; Pixel C Build/NMF26H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.135 Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; SM-A415F) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/87.0.4280.88 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/87.0.4280.141 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; M2007J3SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/98990;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(_0x23d0c8.SHA1("12.2.0").toString()) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(Buffer.from(_0x23d0c8.SHA1(_0x328dc6).toString()).toString("base64")) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 7.0; SM-G920F) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.152 Mobile Safari/537.36"];
    let _0x2bb95f = parseInt(Math.random() * _0x8f8093.length);
    let _0x207f17 = _0x8f8093[_0x2bb95f];
    return _0x207f17;
  }
  getUA1(_0x5b453d = "") {}
  getUA2(_0x164f5f = "") {
    let _0x111940 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309091b)XWEB/8461"];
    let _0xafa4fe = parseInt(Math.random() * _0x111940.length);
    let _0x31e8d8 = _0x111940[_0xafa4fe];
    return _0x31e8d8;
  }
  async setIp() {
    return new Promise(async _0x207421 => {
      if (process.env.PROENV_PROXY_API) {
        let _0x41e8c3;
        try {
          await this.wait(parseInt(Math.random() * 250 + 150, 10));
          let _0x3c98a7 = await this.getIp();
          if (_0x3c98a7 != "") {
            console.log("当前: " + _0x3c98a7);
            _0x41e8c3 = _0x3c98a7.split(":");
            await this.wait(parseInt(Math.random() * 250 + 150, 10));
          } else {
            console.log("代理获取失败");
          }
        } catch (_0x23600a) {
          console.log("代理获取失败");
          _0x41e8c3 = [];
        } finally {
          _0x207421(_0x41e8c3 || []);
        }
      } else {
        console.log("PROENV_PROXY_API, 可选择性的设置api代理");
        _0x207421([]);
      }
    });
  }
  getIp() {
    try {
      const _0x146d43 = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x1d44a5 = {
        headers: _0x146d43,
        timeout: 30000
      };
      return _0x28f785.get(process.env.PROENV_PROXY_API, _0x1d44a5).then(function (_0x5310b2) {
        if (_0x5310b2.status == 200 && _0x5310b2.data) {
          _0x5310b2 = _0x5310b2.data;
          if (typeof _0x5310b2 == "object") {
            return JSON.stringify(_0x5310b2);
          } else {
            return _0x5310b2;
          }
        } else {
          console.log(_0x5310b2.status);
          return "";
        }
      }).catch(function (_0x219cc0) {
        console.log(_0x219cc0.message);
        return "";
      });
    } catch (_0x7ad81a) {
      console.log(_0x7ad81a.message);
      return "";
    }
  }
  getUUID(_0x3bd977 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x324945 = 0) {
    let _0x526828;
    return _0x3bd977.replace(/[xy]/g, function (_0x4ed099) {
      var _0x598cf6 = 16 * Math.random() | 0,
        _0x2cf527 = "x" == _0x4ed099 ? _0x598cf6 : 3 & _0x598cf6 | 8;
      _0x526828 = _0x324945 ? _0x2cf527.toString(36).toUpperCase() : _0x2cf527.toString(36);
      return _0x526828;
    });
  }
  randomString(_0x5d94ca) {
    _0x5d94ca = _0x5d94ca || 32;
    let _0x2ed8df = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789",
      _0x17695b = _0x2ed8df.length,
      _0x59f047 = "";
    for (let _0x8ceb16 = 0; _0x8ceb16 < _0x5d94ca; _0x8ceb16++) {
      _0x59f047 += _0x2ed8df.charAt(Math.floor(Math.random() * _0x17695b));
    }
    return _0x59f047;
  }
  getTG() {
    console.log("问题反馈: https://t.me/proenvc");
    console.log();
  }
  async getUAUA(_0x25124b = "", _0x3d22f4 = "jd") {
    const _0x681b9f = {
      app: "jdapp",
      appBuild: "168960",
      client: "iPhone",
      clientVersion: "12.3.1"
    };
    const _0x50c267 = {
      app: "jdltapp",
      appBuild: "1490",
      client: "iPhone",
      clientVersion: "6.14.0"
    };
    const _0x4f13ff = {
      jd: _0x681b9f,
      lite: _0x50c267
    };
    const _0x33b2ed = _0x3d22f4 === "lite" ? "lite" : "jd",
      {
        app: _0x380f5c,
        appBuild: _0x68875e,
        client: _0x19afdb,
        clientVersion: _0x245edd
      } = _0x4f13ff[_0x33b2ed],
      _0x276365 = ["17.3", "17.2", "17.1", "16.7", "15.6"],
      _0xfe3b23 = _0x276365[Math.floor(Math.random() * _0x276365.length)],
      _0x4eb7bb = "iPhone; CPU iPhone OS " + _0xfe3b23.replace(".", "_") + " like Mac OS X",
      _0x12c08b = await this.genEp(_0x25124b, _0x33b2ed, _0xfe3b23),
      _0x500c3d = await this.genUuid(),
      _0xb825 = [_0x380f5c, _0x19afdb, _0x245edd, "", "rn/" + _0x500c3d, "M/5.0", "appBuild/" + _0x68875e, "jdSupportDarkMode/0", "ef/1", "ep/" + encodeURIComponent(_0x12c08b), "Mozilla/5.0 (" + _0x4eb7bb + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""],
      _0x5b462f = _0xb825.join(";");
    return _0x5b462f;
  }
  genEp(_0x10cb2c = "", _0xb67906 = "", _0x55b39d = "17.3") {
    const _0x2dcd95 = {
      ud: this.llllll(_0x23d0c8.SHA1(_0x10cb2c).toString()),
      sv: this.llllll(_0x55b39d),
      iad: ""
    };
    const _0x277034 = {
      ciphertype: 5,
      cipher: _0x2dcd95,
      ts: Math.floor(Date.now() / 1000),
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      version: "1.0.3",
      appname: _0xb67906 === "lite" ? "com.jd.jdmobilelite" : "com.360buy.jdmobile",
      ridx: -1
    };
    return JSON.stringify(_0x277034);
  }
  ssssss(_0x1ba680) {
    _0x1ba680 = _0x1ba680.replace(/rn/g, "n");
    let _0x1247f6, _0x3fb8b8;
    for (let _0x3467fc = 0; _0x3467fc < _0x1ba680.length; _0x3467fc++) {
      _0x1247f6 = "";
      _0x3fb8b8 = _0x1ba680.charCodeAt(_0x3467fc);
      if (_0x3fb8b8 < 128) {
        _0x1247f6 += String.fromCharCode(_0x3fb8b8);
      } else {
        if (_0x3fb8b8 > 127 && _0x3fb8b8 < 2048) {
          _0x1247f6 += String.fromCharCode(_0x3fb8b8 >> 6 | 192);
          _0x1247f6 += String.fromCharCode(_0x3fb8b8 & 63 | 128);
        } else {
          _0x1247f6 += String.fromCharCode(_0x3fb8b8 >> 12 | 224);
          _0x1247f6 += String.fromCharCode(_0x3fb8b8 >> 6 & 63 | 128);
          _0x1247f6 += String.fromCharCode(_0x3fb8b8 & 63 | 128);
        }
      }
    }
    return _0x1247f6;
  }
  llllll(_0x58ad42, _0x560a25 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let _0x3badbe = "",
      _0x6a3d5b,
      _0x30f5e5,
      _0x3ecf4d,
      _0x106520,
      _0x58d291,
      _0x4a684d,
      _0x27f097,
      _0x30810e = 0;
    _0x58ad42 = this.ssssss(_0x58ad42);
    while (_0x30810e < _0x58ad42.length) {
      _0x6a3d5b = _0x58ad42.charCodeAt(_0x30810e++);
      _0x30f5e5 = _0x58ad42.charCodeAt(_0x30810e++);
      _0x3ecf4d = _0x58ad42.charCodeAt(_0x30810e++);
      _0x106520 = _0x6a3d5b >> 2;
      _0x58d291 = (_0x6a3d5b & 3) << 4 | _0x30f5e5 >> 4;
      _0x4a684d = (_0x30f5e5 & 15) << 2 | _0x3ecf4d >> 6;
      _0x27f097 = _0x3ecf4d & 63;
      if (isNaN(_0x30f5e5)) {
        _0x4a684d = _0x27f097 = 64;
      } else {
        isNaN(_0x3ecf4d) && (_0x27f097 = 64);
      }
      _0x3badbe = _0x3badbe + _0x560a25.charAt(_0x106520) + _0x560a25.charAt(_0x58d291) + _0x560a25.charAt(_0x4a684d) + _0x560a25.charAt(_0x27f097);
    }
    while (_0x3badbe.length % 4 > 1) {
      _0x3badbe += "=";
    }
    return _0x3badbe;
  }
  genUuid(_0xbd7c95 = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", _0x1a9fca = "0123456789abcdef") {
    let _0x4b4067 = "";
    for (let _0x36933f of _0xbd7c95) {
      if (_0x36933f == "x") {
        _0x4b4067 += _0x1a9fca.charAt(Math.floor(Math.random() * _0x1a9fca.length));
      } else {
        _0x36933f == "X" ? _0x4b4067 += _0x1a9fca.charAt(Math.floor(Math.random() * _0x1a9fca.length)).toUpperCase() : _0x4b4067 += _0x36933f;
      }
    }
    return _0x4b4067;
  }
  async x_api_eid_token(_0x1bd60f = "") {
    const _0x48acd0 = new Date().getTime();
    const _0x6e46ed = {
      pin: "",
      oid: "",
      bizId: "jd-babelh5",
      fc: "",
      mode: "strict",
      p: "s",
      fp: "26402d879256c911a19f750ac9e6137b",
      ctype: 1,
      v: "3.1.1.1",
      f: "3",
      o: "pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html",
      qi: ""
    };
    const _0x5545de = this.TDEncrypt(_0x6e46ed);
    let _0x7b9c90 = "{\"ts\":{\"deviceTime\":1684749932883,\"deviceEndTime\":1684749932968},\"ca\":{\"tdHash\":\"ae7bb88f7eac3baa052a6d2fd3c4eab8\",\"contextName\":\"webgl,experimental-webgl\",\"webglversion\":\"WebGL 1.0 (OpenGL ES 2.0 Chromium)\",\"shadingLV\":\"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)\",\"vendor\":\"WebKit\",\"renderer\":\"WebKit WebGL\",\"extensions\":[\"ANGLE_instanced_arrays\",\"EXT_blend_minmax\",\"EXT_color_buffer_half_float\",\"EXT_float_blend\",\"EXT_texture_filter_anisotropic\",\"WEBKIT_EXT_texture_filter_anisotropic\",\"EXT_sRGB\",\"OES_element_index_uint\",\"OES_fbo_render_mipmap\",\"OES_standard_derivatives\",\"OES_texture_float\",\"OES_texture_float_linear\",\"OES_texture_half_float\",\"OES_texture_half_float_linear\",\"OES_vertex_array_object\",\"WEBGL_color_buffer_float\",\"WEBGL_compressed_texture_astc\",\"WEBGL_compressed_texture_etc\",\"WEBGL_compressed_texture_etc1\",\"WEBGL_debug_renderer_info\",\"WEBGL_debug_shaders\",\"WEBGL_depth_texture\",\"WEBKIT_WEBGL_depth_texture\",\"WEBGL_lose_context\",\"WEBKIT_WEBGL_lose_context\",\"WEBGL_multi_draw\"],\"wuv\":\"Qualcomm\",\"wur\":\"Adreno (TM) 730\"},\"m\":{\"compatMode\":\"CSS1Compat\"},\"fo\":[\"Bauhaus 93\",\"Casual\"],\"n\":{\"vendorSub\":\"\",\"productSub\":\"20030107\",\"vendor\":\"Google Inc.\",\"maxTouchPoints\":5,\"hardwareConcurrency\":8,\"cookieEnabled\":true,\"appCodeName\":\"Mozilla\",\"appName\":\"Netscape\",\"appVersion\":\"\",\"platform\":\"Linux aarch64\",\"product\":\"Gecko\",\"userAgent\":\"\",\"language\":\"zh-CN\",\"onLine\":true,\"webdriver\":false,\"javaEnabled\":false,\"deviceMemory\":8,\"enumerationOrder\":[\"vendorSub\",\"productSub\",\"vendor\",\"maxTouchPoints\",\"userActivation\",\"doNotTrack\",\"geolocation\",\"connection\",\"plugins\",\"mimeTypes\",\"webkitTemporaryStorage\",\"webkitPersistentStorage\",\"hardwareConcurrency\",\"cookieEnabled\",\"appCodeName\",\"appName\",\"appVersion\",\"platform\",\"product\",\"userAgent\",\"language\",\"languages\",\"onLine\",\"webdriver\",\"getBattery\",\"getGamepads\",\"javaEnabled\",\"sendBeacon\",\"vibrate\",\"scheduling\",\"mediaCapabilities\",\"locks\",\"wakeLock\",\"usb\",\"clipboard\",\"credentials\",\"keyboard\",\"mediaDevices\",\"storage\",\"serviceWorker\",\"deviceMemory\",\"bluetooth\",\"getUserMedia\",\"requestMIDIAccess\",\"requestMediaKeySystemAccess\",\"webkitGetUserMedia\",\"clearAppBadge\",\"setAppBadge\"]},\"p\":[],\"w\":{\"devicePixelRatio\":3,\"screenTop\":0,\"screenLeft\":0},\"s\":{\"availHeight\":904,\"availWidth\":407,\"colorDepth\":24,\"height\":904,\"width\":407,\"pixelDepth\":24},\"sc\":{\"ActiveBorder\":\"rgb(255, 255, 255)\",\"ActiveCaption\":\"rgb(204, 204, 204)\",\"AppWorkspace\":\"rgb(255, 255, 255)\",\"Background\":\"rgb(99, 99, 206)\",\"ButtonFace\":\"rgb(221, 221, 221)\",\"ButtonHighlight\":\"rgb(221, 221, 221)\",\"ButtonShadow\":\"rgb(136, 136, 136)\",\"ButtonText\":\"rgb(0, 0, 0)\",\"CaptionText\":\"rgb(0, 0, 0)\",\"GrayText\":\"rgb(128, 128, 128)\",\"Highlight\":\"rgb(181, 213, 255)\",\"HighlightText\":\"rgb(0, 0, 0)\",\"InactiveBorder\":\"rgb(255, 255, 255)\",\"InactiveCaption\":\"rgb(255, 255, 255)\",\"InactiveCaptionText\":\"rgb(127, 127, 127)\",\"InfoBackground\":\"rgb(251, 252, 197)\",\"InfoText\":\"rgb(0, 0, 0)\",\"Menu\":\"rgb(247, 247, 247)\",\"MenuText\":\"rgb(0, 0, 0)\",\"Scrollbar\":\"rgb(255, 255, 255)\",\"ThreeDDarkShadow\":\"rgb(102, 102, 102)\",\"ThreeDFace\":\"rgb(192, 192, 192)\",\"ThreeDHighlight\":\"rgb(221, 221, 221)\",\"ThreeDLightShadow\":\"rgb(192, 192, 192)\",\"ThreeDShadow\":\"rgb(136, 136, 136)\",\"Window\":\"rgb(255, 255, 255)\",\"WindowFrame\":\"rgb(204, 204, 204)\",\"WindowText\":\"rgb(0, 0, 0)\"},\"ss\":{\"cookie\":true,\"localStorage\":true,\"sessionStorage\":true,\"globalStorage\":false,\"indexedDB\":true},\"tz\":-480,\"lil\":\"\",\"wil\":\"\"}";
    _0x7b9c90 = JSON.parse(_0x7b9c90);
    _0x7b9c90.ts.deviceTime = _0x48acd0;
    _0x7b9c90.ts.deviceEndTime = _0x48acd0 + 77;
    _0x7b9c90.n.appVersion = _0x1bd60f.substring(_0x1bd60f.indexOf("appBuild/") + 9);
    _0x7b9c90.n.userAgent = _0x1bd60f;
    let _0xfcb931 = "https://gia.jd.com/jsTk.do?a=" + encodeURIComponent(_0x5545de) + "&d=" + encodeURIComponent(this.TDEncrypt(_0x7b9c90));
    let _0x3e32c0 = "";
    const _0x24411f = {
      Host: "gia.jd.com",
      Connection: "keep-alive",
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "*/*",
      Origin: "https://pro.m.jd.com",
      "X-Requested-With": "com.jd.jdlite",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html?babelChannel=ttt6",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "User-Agent": _0x1bd60f
    };
    const _0x1be5a3 = {
      headers: _0x24411f,
      timeout: 30000
    };
    return _0x28f785.post(_0xfcb931, _0x3e32c0, _0x1be5a3).then(function (_0x1c656e) {
      const _0x1e18f7 = {
        token: "",
        eid: ""
      };
      try {
        if (_0x1c656e) {
          if (_0x1c656e.status == 200 && _0x1c656e.data) {
            _0x1c656e = _0x1c656e.data;
            let _0x2daa03 = _0x1c656e.data.token || "";
            let _0x12d500 = _0x1c656e.data.eid || "";
            _0x1e18f7.token = _0x2daa03;
            _0x1e18f7.eid = _0x12d500;
            return _0x1e18f7;
          } else {
            return _0x1e18f7;
          }
        }
      } catch (_0x2500c4) {
        return _0x1e18f7;
      }
    }).catch(function (_0xd501de) {
      const _0x35ac33 = {
        token: "",
        eid: ""
      };
      return _0x35ac33;
    });
  }
  TDEncrypt(_0x29ae43) {
    _0x29ae43 = JSON.stringify(_0x29ae43);
    _0x29ae43 = encodeURIComponent(_0x29ae43);
    var _0x1e32ac = "",
      _0x339059 = 0;
    let _0x5b5afa = "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-";
    do {
      var _0x1505ec = _0x29ae43.charCodeAt(_0x339059++);
      var _0x5b6cbb = _0x29ae43.charCodeAt(_0x339059++);
      var _0x32ed76 = _0x29ae43.charCodeAt(_0x339059++);
      var _0x138d98 = _0x1505ec >> 2;
      _0x1505ec = (_0x1505ec & 3) << 4 | _0x5b6cbb >> 4;
      var _0x3a46d5 = (_0x5b6cbb & 15) << 2 | _0x32ed76 >> 6;
      var _0x8bcd85 = _0x32ed76 & 63;
      isNaN(_0x5b6cbb) ? _0x3a46d5 = _0x8bcd85 = 64 : isNaN(_0x32ed76) && (_0x8bcd85 = 64);
      _0x1e32ac = _0x1e32ac + _0x5b5afa.charAt(_0x138d98) + _0x5b5afa.charAt(_0x1505ec) + _0x5b5afa.charAt(_0x3a46d5) + _0x5b5afa.charAt(_0x8bcd85);
    } while (_0x339059 < _0x29ae43.length);
    return _0x1e32ac + "/";
  }
  getAxiosData(_0x53e307) {
    if (_0x53e307.status == 200 && _0x53e307.data) {
      _0x53e307 = _0x53e307.data;
      if (typeof _0x53e307 == "object") {
        return JSON.stringify(_0x53e307);
      } else {
        return _0x53e307;
      }
    } else {
      return "";
    }
  }
  async httpOptions() {
    const _0x28ce81 = {
      secureProtocol: "TLSv1_2_method",
      ciphers: ["TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256", "TLS_RSA_WITH_AES_128_GCM_SHA256", "TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384", "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384", "TLS_RSA_WITH_AES_256_GCM_SHA384", "TLS_RSA_WITH_AES_256_CBC_SHA256"].join(":")
    };
    return _0x28ce81;
  }
  async x_api_eid_token1(_0x4fea1c = "") {
    var _0x51157f = function () {
      function _0x4c1ab2(_0x27e6bb, _0x295b47) {
        _0x27e6bb = [_0x27e6bb[0] >>> 16, 65535 & _0x27e6bb[0], _0x27e6bb[1] >>> 16, 65535 & _0x27e6bb[1]];
        _0x295b47 = [_0x295b47[0] >>> 16, 65535 & _0x295b47[0], _0x295b47[1] >>> 16, 65535 & _0x295b47[1]];
        var _0x2e246f = [0, 0, 0, 0];
        _0x2e246f[3] += _0x27e6bb[3] + _0x295b47[3];
        _0x2e246f[2] += _0x2e246f[3] >>> 16;
        _0x2e246f[3] &= 65535;
        _0x2e246f[2] += _0x27e6bb[2] + _0x295b47[2];
        _0x2e246f[1] += _0x2e246f[2] >>> 16;
        _0x2e246f[2] &= 65535;
        _0x2e246f[1] += _0x27e6bb[1] + _0x295b47[1];
        _0x2e246f[0] += _0x2e246f[1] >>> 16;
        _0x2e246f[1] &= 65535;
        _0x2e246f[0] += _0x27e6bb[0] + _0x295b47[0];
        _0x2e246f[0] &= 65535;
        return [_0x2e246f[0] << 16 | _0x2e246f[1], _0x2e246f[2] << 16 | _0x2e246f[3]];
      }
      function _0x1fe5bc(_0x40bf9d, _0x14bc88) {
        _0x40bf9d = [_0x40bf9d[0] >>> 16, 65535 & _0x40bf9d[0], _0x40bf9d[1] >>> 16, 65535 & _0x40bf9d[1]];
        _0x14bc88 = [_0x14bc88[0] >>> 16, 65535 & _0x14bc88[0], _0x14bc88[1] >>> 16, 65535 & _0x14bc88[1]];
        var _0x3a32ba = [0, 0, 0, 0];
        _0x3a32ba[3] += _0x40bf9d[3] * _0x14bc88[3];
        _0x3a32ba[2] += _0x3a32ba[3] >>> 16;
        _0x3a32ba[3] &= 65535;
        _0x3a32ba[2] += _0x40bf9d[2] * _0x14bc88[3];
        _0x3a32ba[1] += _0x3a32ba[2] >>> 16;
        _0x3a32ba[2] &= 65535;
        _0x3a32ba[2] += _0x40bf9d[3] * _0x14bc88[2];
        _0x3a32ba[1] += _0x3a32ba[2] >>> 16;
        _0x3a32ba[2] &= 65535;
        _0x3a32ba[1] += _0x40bf9d[1] * _0x14bc88[3];
        _0x3a32ba[0] += _0x3a32ba[1] >>> 16;
        _0x3a32ba[1] &= 65535;
        _0x3a32ba[1] += _0x40bf9d[2] * _0x14bc88[2];
        _0x3a32ba[0] += _0x3a32ba[1] >>> 16;
        _0x3a32ba[1] &= 65535;
        _0x3a32ba[1] += _0x40bf9d[3] * _0x14bc88[1];
        _0x3a32ba[0] += _0x3a32ba[1] >>> 16;
        _0x3a32ba[1] &= 65535;
        _0x3a32ba[0] += _0x40bf9d[0] * _0x14bc88[3] + _0x40bf9d[1] * _0x14bc88[2] + _0x40bf9d[2] * _0x14bc88[1] + _0x40bf9d[3] * _0x14bc88[0];
        _0x3a32ba[0] &= 65535;
        return [_0x3a32ba[0] << 16 | _0x3a32ba[1], _0x3a32ba[2] << 16 | _0x3a32ba[3]];
      }
      function _0x3579ee(_0x414140, _0x2c4398) {
        return 32 === (_0x2c4398 %= 64) ? [_0x414140[1], _0x414140[0]] : 32 > _0x2c4398 ? [_0x414140[0] << _0x2c4398 | _0x414140[1] >>> 32 - _0x2c4398, _0x414140[1] << _0x2c4398 | _0x414140[0] >>> 32 - _0x2c4398] : (_0x2c4398 -= 32, [_0x414140[1] << _0x2c4398 | _0x414140[0] >>> 32 - _0x2c4398, _0x414140[0] << _0x2c4398 | _0x414140[1] >>> 32 - _0x2c4398]);
      }
      function _0xdb341a(_0x2bcb88, _0x21dd02) {
        return 0 === (_0x21dd02 %= 64) ? _0x2bcb88 : 32 > _0x21dd02 ? [_0x2bcb88[0] << _0x21dd02 | _0x2bcb88[1] >>> 32 - _0x21dd02, _0x2bcb88[1] << _0x21dd02] : [_0x2bcb88[1] << _0x21dd02 - 32, 0];
      }
      function _0x56fd1f(_0x496503, _0x271afc) {
        return [_0x496503[0] ^ _0x271afc[0], _0x496503[1] ^ _0x271afc[1]];
      }
      function _0x3a36ff(_0x49cda0) {
        return _0x56fd1f(_0x49cda0 = _0x1fe5bc(_0x49cda0 = _0x56fd1f(_0x49cda0 = _0x1fe5bc(_0x49cda0 = _0x56fd1f(_0x49cda0, [0, _0x49cda0[0] >>> 1]), [4283543511, 3981806797]), [0, _0x49cda0[0] >>> 1]), [3301882366, 444984403]), [0, _0x49cda0[0] >>> 1]);
      }
      const _0x4ec847 = {
        hash128: function (_0xf5d877, _0x15f697) {
          var _0x549329 = _0x15f697 || 0;
          _0x15f697 = (_0xf5d877 = _0xf5d877 || "").length % 16;
          var _0x4e470e = _0xf5d877.length - _0x15f697,
            _0x492a86 = [0, _0x549329];
          _0x549329 = [0, _0x549329];
          for (var _0x11d970, _0x28b050, _0x30c60d = [2277735313, 289559509], _0x1ec883 = [1291169091, 658871167], _0x370af1 = 0; _0x370af1 < _0x4e470e; _0x370af1 += 16) {
            _0x11d970 = [255 & _0xf5d877.charCodeAt(_0x370af1 + 4) | (255 & _0xf5d877.charCodeAt(_0x370af1 + 5)) << 8 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 6)) << 16 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 7)) << 24, 255 & _0xf5d877.charCodeAt(_0x370af1) | (255 & _0xf5d877.charCodeAt(_0x370af1 + 1)) << 8 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 2)) << 16 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 3)) << 24];
            _0x28b050 = [255 & _0xf5d877.charCodeAt(_0x370af1 + 12) | (255 & _0xf5d877.charCodeAt(_0x370af1 + 13)) << 8 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 14)) << 16 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 15)) << 24, 255 & _0xf5d877.charCodeAt(_0x370af1 + 8) | (255 & _0xf5d877.charCodeAt(_0x370af1 + 9)) << 8 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 10)) << 16 | (255 & _0xf5d877.charCodeAt(_0x370af1 + 11)) << 24];
            _0x492a86 = _0x4c1ab2(_0x1fe5bc(_0x492a86 = _0x4c1ab2(_0x492a86 = _0x3579ee(_0x492a86 = _0x56fd1f(_0x492a86, _0x11d970 = _0x1fe5bc(_0x11d970 = _0x3579ee(_0x11d970 = _0x1fe5bc(_0x11d970, _0x30c60d), 31), _0x1ec883)), 27), _0x549329), [0, 5]), [0, 1390208809]);
            _0x549329 = _0x4c1ab2(_0x1fe5bc(_0x549329 = _0x4c1ab2(_0x549329 = _0x3579ee(_0x549329 = _0x56fd1f(_0x549329, _0x28b050 = _0x1fe5bc(_0x28b050 = _0x3579ee(_0x28b050 = _0x1fe5bc(_0x28b050, _0x1ec883), 33), _0x30c60d)), 31), _0x492a86), [0, 5]), [0, 944331445]);
          }
          switch (_0x11d970 = [0, 0], _0x28b050 = [0, 0], _0x15f697) {
            case 15:
              _0x28b050 = _0x56fd1f(_0x28b050, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 14)], 48));
            case 14:
              _0x28b050 = _0x56fd1f(_0x28b050, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 13)], 40));
            case 13:
              _0x28b050 = _0x56fd1f(_0x28b050, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 12)], 32));
            case 12:
              _0x28b050 = _0x56fd1f(_0x28b050, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 11)], 24));
            case 11:
              _0x28b050 = _0x56fd1f(_0x28b050, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 10)], 16));
            case 10:
              _0x28b050 = _0x56fd1f(_0x28b050, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 9)], 8));
            case 9:
              _0x549329 = _0x56fd1f(_0x549329, _0x28b050 = _0x1fe5bc(_0x28b050 = _0x3579ee(_0x28b050 = _0x1fe5bc(_0x28b050 = _0x56fd1f(_0x28b050, [0, _0xf5d877.charCodeAt(_0x370af1 + 8)]), _0x1ec883), 33), _0x30c60d));
            case 8:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 7)], 56));
            case 7:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 6)], 48));
            case 6:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 5)], 40));
            case 5:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 4)], 32));
            case 4:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 3)], 24));
            case 3:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 2)], 16));
            case 2:
              _0x11d970 = _0x56fd1f(_0x11d970, _0xdb341a([0, _0xf5d877.charCodeAt(_0x370af1 + 1)], 8));
            case 1:
              _0x492a86 = _0x56fd1f(_0x492a86, _0x11d970 = _0x1fe5bc(_0x11d970 = _0x3579ee(_0x11d970 = _0x1fe5bc(_0x11d970 = _0x56fd1f(_0x11d970, [0, _0xf5d877.charCodeAt(_0x370af1)]), _0x30c60d), 31), _0x1ec883));
          }
          _0x492a86 = _0x56fd1f(_0x492a86, [0, _0xf5d877.length]);
          _0x549329 = _0x4c1ab2(_0x549329 = _0x56fd1f(_0x549329, [0, _0xf5d877.length]), _0x492a86 = _0x4c1ab2(_0x492a86, _0x549329));
          _0x492a86 = _0x3a36ff(_0x492a86);
          _0x549329 = _0x4c1ab2(_0x549329 = _0x3a36ff(_0x549329), _0x492a86 = _0x4c1ab2(_0x492a86, _0x549329));
          return ("00000000" + (_0x492a86[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x492a86[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x549329[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x549329[1] >>> 0).toString(16)).slice(-8);
        }
      };
      return _0x4ec847;
    }();
    function _0x2ced73(_0x118a77) {
      _0x118a77 = JSON.stringify(_0x118a77);
      _0x118a77 = encodeURIComponent(_0x118a77);
      var _0x99d300 = "",
        _0x28defa = 0;
      do {
        var _0x5a9f80 = _0x118a77.charCodeAt(_0x28defa++),
          _0x1ed4dd = _0x118a77.charCodeAt(_0x28defa++),
          _0x14b004 = _0x118a77.charCodeAt(_0x28defa++),
          _0x3a867c = _0x5a9f80 >> 2;
        _0x5a9f80 = (3 & _0x5a9f80) << 4 | _0x1ed4dd >> 4;
        var _0x56dbbc = (15 & _0x1ed4dd) << 2 | _0x14b004 >> 6,
          _0x355f79 = 63 & _0x14b004;
        isNaN(_0x1ed4dd) ? _0x56dbbc = _0x355f79 = 64 : isNaN(_0x14b004) && (_0x355f79 = 64);
        _0x99d300 = _0x99d300 + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x3a867c) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x5a9f80) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x56dbbc) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x355f79);
      } while (_0x28defa < _0x118a77.length);
      return _0x99d300 + "/";
    }
    var _0x2a05ab = [_0x4fea1c.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "896x414", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null],
      _0x5eeff7 = _0x51157f.hash128(_0x2a05ab.join("~~~"), 31),
      _0x2a7712 = {
        pin: "",
        oid: "",
        bizId: "JD-DCHD",
        fc: "",
        mode: "strict",
        p: "s",
        fp: _0x5eeff7,
        ctype: 1,
        v: "3.1.1.0",
        f: "3",
        o: "spa.jd.com/home",
        qs: "",
        jsTk: "",
        qi: ""
      },
      _0x1aca50 = _0x2ced73(_0x2a7712),
      _0x573f31 = {
        ts: {}
      },
      _0x2a05ab = new Date();
    _0x573f31.ts.deviceTime = _0x2a05ab.getTime();
    const _0x4598c8 = {
      tdHash: null
    };
    _0x573f31.ca = _0x4598c8;
    const _0x48ac5e = {
      compatMode: "CSS1Compat"
    };
    _0x573f31.m = _0x48ac5e;
    _0x573f31.fo = ["Arial Black", "Bauhaus 93", "Chalkduster", "GungSeo", "Hiragino Sans GB", "Impact", "Menlo", "Papyrus", "Rockwell"];
    const _0xb3a3cc = {
      vendorSub: "",
      productSub: "20030107",
      vendor: "Apple Computer, Inc.",
      maxTouchPoints: 1,
      pdfViewerEnabled: !1,
      hardwareConcurrency: 10,
      cookieEnabled: !0,
      appCodeName: "Mozilla",
      appName: "Netscape",
      appVersion: /\/(.+)/g.exec(_0x4fea1c) && /\/(.+)/g.exec(_0x4fea1c)[1] || _0x4fea1c,
      platform: "iPhone",
      product: "Gecko",
      userAgent: _0x4fea1c,
      language: "zh-CN",
      onLine: !0,
      webdriver: !1,
      javaEnabled: !1,
      deviceMemory: 8,
      enumerationOrder: ["vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "bluetooth", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage", "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "ink", "hid", "locks", "mediaCapabilities", "mediaSession", "permissions", "presentation", "serial", "gpu", "usb", "windowControlsOverlay", "xr", "userAgentData", "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "setAppBadge", "webkitGetUserMedia", "getInstalledRelatedApps", "registerProtocolHandler", "unregisterProtocolHandler"]
    };
    _0x573f31.n = _0xb3a3cc;
    _0x573f31.p = [];
    const _0x1df3e2 = {
      devicePixelRatio: 1,
      screenTop: 0,
      screenLeft: 0
    };
    _0x573f31.w = _0x1df3e2;
    const _0x298a56 = {
      availHeight: 896,
      availWidth: 414,
      colorDepth: 24,
      height: 896,
      width: 414,
      pixelDepth: 24
    };
    _0x573f31.s = _0x298a56;
    const _0x38cdcc = {
      ActiveBorder: "rgb(118, 118, 118)",
      ActiveCaption: "rgb(0, 0, 0)",
      AppWorkspace: "rgb(255, 255, 255)",
      Background: "rgb(255, 255, 255)",
      ButtonFace: "rgb(239, 239, 239)",
      ButtonHighlight: "rgb(239, 239, 239)",
      ButtonShadow: "rgb(239, 239, 239)",
      ButtonText: "rgb(0, 0, 0)",
      CaptionText: "rgb(0, 0, 0)",
      GrayText: "rgb(128, 128, 128)",
      Highlight: "rgb(181, 213, 255)",
      HighlightText: "rgb(0, 0, 0)",
      InactiveBorder: "rgb(118, 118, 118)",
      InactiveCaption: "rgb(255, 255, 255)",
      InactiveCaptionText: "rgb(128, 128, 128)",
      InfoBackground: "rgb(255, 255, 255)",
      InfoText: "rgb(0, 0, 0)",
      Menu: "rgb(255, 255, 255)",
      MenuText: "rgb(0, 0, 0)",
      Scrollbar: "rgb(255, 255, 255)",
      ThreeDDarkShadow: "rgb(118, 118, 118)",
      ThreeDFace: "rgb(239, 239, 239)",
      ThreeDHighlight: "rgb(118, 118, 118)",
      ThreeDLightShadow: "rgb(118, 118, 118)",
      ThreeDShadow: "rgb(118, 118, 118)",
      Window: "rgb(255, 255, 255)",
      WindowFrame: "rgb(118, 118, 118)",
      WindowText: "rgb(0, 0, 0)"
    };
    _0x573f31.sc = _0x38cdcc;
    const _0x213dd7 = {
      cookie: !0,
      localStorage: !0,
      sessionStorage: !0,
      globalStorage: !1,
      indexedDB: !0
    };
    _0x573f31.ss = _0x213dd7;
    _0x573f31.tz = -480;
    _0x573f31.lil = "";
    _0x573f31.wil = "";
    _0x573f31.ts.deviceEndTime = new Date().getTime();
    var _0x41d553 = _0x2ced73(_0x573f31);
    let _0x444c62 = "https://gia.jd.com/jsTk.do?a=" + _0x1aca50 + "&d=" + _0x41d553;
    let _0xc94e6 = "";
    const _0x488aa9 = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Origin: "https://spa.jd.com",
      Referer: "https://spa.jd.com",
      "User-Agent": _0x4fea1c
    };
    const _0x48908e = {
      headers: _0x488aa9,
      timeout: 30000
    };
    return _0x28f785.post(_0x444c62, _0xc94e6, _0x48908e).then(function (_0x285b5f) {
      const _0x12824f = {
        token: "",
        eid: ""
      };
      try {
        if (_0x285b5f) {
          if (_0x285b5f.status == 200 && _0x285b5f.data) {
            _0x285b5f = _0x285b5f.data;
            let _0x47ed99 = _0x285b5f.data.token || "";
            let _0x297034 = _0x285b5f.data.eid || "";
            _0x12824f.token = _0x47ed99;
            _0x12824f.eid = _0x297034;
            return _0x12824f;
          } else {
            return _0x12824f;
          }
        }
      } catch (_0x197276) {
        return _0x12824f;
      }
    }).catch(function (_0x51ee77) {
      const _0xe38d89 = {
        token: "",
        eid: ""
      };
      return _0xe38d89;
    });
  }
}
module.exports = new _0x2180b6();