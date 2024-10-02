//Wed Oct 02 2024 01:40:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("删除优惠券");
global_agent_http_proxy_isopen = false;
api_proxy_open = false;
const proenv_0x497aa2 = $.isNode() ? require("./jdCookie.js") : "";
let proenv_0x242a96 = [],
  proenv_0x6e6c1a = "",
  proenv_0x128b8c;
const proenv_0x135cf5 = require("./utils/proenv/proenv.js");
const proenv_0x51b84c = require("./utils/proenv/pro471.js");
const proenv_0x1a8dd9 = require("axios");
const proenv_0x47c1f0 = require("https");
if ($.isNode()) {
  Object.keys(proenv_0x497aa2).forEach(_0x53e779 => {
    proenv_0x242a96.push(proenv_0x497aa2[_0x53e779]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x242a96 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x391243($.getdata("CookiesJD") || "[]").map(_0xb2e6ef => _0xb2e6ef.cookie)].filter(_0x3f90b0 => !!_0x3f90b0);
}
!(async () => {
  if (!proenv_0x242a96[0]) {
    console.log("未检测到cookie");
    process.exit(1);
    return;
  }
  proenv_0x135cf5.needAl(true);
  proenv_0x135cf5.getTG();
  await $.wait(parseInt(Math.random() * 2500 + 500, 10));
  for (let _0x134f57 = 0; _0x134f57 < proenv_0x242a96.length; _0x134f57++) {
    if (proenv_0x242a96[_0x134f57]) {
      proenv_0x6e6c1a = proenv_0x242a96[_0x134f57];
      $.UserName = decodeURIComponent(proenv_0x6e6c1a.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x6e6c1a.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x134f57 + 1;
      $.isLogin = true;
      $.nickName = "";
      proenv_0x128b8c = "";
      console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
      $.uuid = proenv_0x288a06("xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx");
      $.eu = $.uuid.split("-")[0];
      $.fv = $.uuid.split("-")[1];
      $.UA = await proenv_0x135cf5.getUA($.UserName);
      await proenv_0x30f126();
      await $.wait(parseInt(Math.random() * 15000 + 5500, 10));
    }
  }
  process.exit(1);
})().catch(_0x3a6d7c => $.logErr(_0x3a6d7c)).finally(() => $.done());
async function proenv_0x30f126() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.ECONNRESET = 0;
    $.couponinfolist = "";
    $.isLogin = true;
    for (let _0xa86b44 = 0; _0xa86b44 < 20; _0xa86b44++) {
      tokeneid = await proenv_0x135cf5.x_api_eid_token($.UA);
      $.x_api_eid_token = tokeneid.token;
      await $.wait(parseInt(Math.random() * 1500 + 1000, 10));
      await proenv_0x552420("queryJdCouponListAppletForJd");
      if ($.isLogin == false) {
        return;
      }
      await $.wait(parseInt(Math.random() * 1500 + 1000, 10));
      if ($.couponinfolist != "") {
        await proenv_0x552420("deleteCouponListApplet");
        await $.wait(parseInt(Math.random() * 1500 + 1000, 10));
      } else {
        console.log("暂无券待删除");
        break;
      }
      await $.wait(parseInt(Math.random() * 2500 + 2000, 10));
    }
  } catch (_0xa74625) {
    console.log(_0xa74625.message);
  }
}
async function proenv_0x552420(_0x276fbb) {
  let _0x1bee4c = "";
  let _0x2b5f3b = "";
  let _0x5c290f = "POST";
  switch (_0x276fbb) {
    case "queryJdCouponListAppletForJd":
      _0x5c290f = "get";
      const _0x1807be = {
        bizModelCode: "6",
        externalLoginType: 8,
        bizModeClientType: "M",
        appId: "m91d27dbf599dff74",
        token: "3852b12f8c4d869b7ed3e2b3c68c9436",
        tenantCode: "jgm",
        sourceType: "h5_inter_myjd_couponlist",
        state: 1,
        wxadd: 1,
        filterswitch: 1
      };
      bo = _0x1807be;
      bb = await proenv_0x2c35c6(_0x276fbb, "7478f", "jd-cphdeveloper-m", bo);
      h5st = await proenv_0x51b84c.h5st471("7478f", bb, $.UA);
      _0x1bee4c = "https://api.m.jd.com/client.action?functionId=" + _0x276fbb + "&appid=" + bb.appid + "&body=" + encodeURIComponent(JSON.stringify(bo)) + "&loginType=2&uuid=" + $.uuid + "&openudid=" + $.uuid + "&client=" + bb.client + "&clientVersion=" + bb.clientVersion + "&x-api-eid-token=" + $.x_api_eid_token + "&h5st=" + encodeURIComponent(h5st) + "&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=&g_tk=1940854999&g_ty=ls&appCode=ms0ca95114&t=" + bb.t;
      break;
    case "deleteCouponListApplet":
      _0x5c290f = "get";
      const _0x4a93b7 = {
        bizModelCode: "6",
        externalLoginType: 8,
        bizModeClientType: "M",
        appId: "m91d27dbf599dff74",
        token: "3852b12f8c4d869b7ed3e2b3c68c9436",
        tenantCode: "jgm",
        sourceType: "h5_inter_myjd_couponlist",
        couponinfolist: $.couponinfolist
      };
      bo = _0x4a93b7;
      bb = await proenv_0x2c35c6(_0x276fbb, "7478f", "jd-cphdeveloper-m", bo);
      h5st = await proenv_0x51b84c.h5st471("7478f", bb, $.UA);
      _0x1bee4c = "https://api.m.jd.com/client.action?functionId=" + _0x276fbb + "&appid=" + bb.appid + "&body=" + encodeURIComponent(JSON.stringify(bo)) + "&loginType=2&uuid=" + $.uuid + "&openudid=" + $.uuid + "&client=" + bb.client + "&clientVersion=" + bb.clientVersion + "&x-api-eid-token=" + $.x_api_eid_token + "&h5st=" + encodeURIComponent(h5st) + "&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=&g_tk=1940854999&g_ty=ls&appCode=ms0ca95114&t=" + bb.t;
      break;
    default:
      console.log("错误: " + _0x276fbb);
      break;
  }
  let _0x4efb63 = proenv_0x13d1d1(_0x276fbb, _0x1bee4c, _0x2b5f3b, _0x5c290f);
  if (api_proxy_open == true || global_agent_http_proxy_isopen == true) {
    await $.wait(parseInt(Math.random() * 150 + 150, 10));
  } else {
    await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
  }
  options = {};
  if (api_proxy_open == true) {
    let _0x1648f6 = "http://" + $.ip + ":" + $.ipo;
    let _0x424504 = await new HttpsProxyAgent.HttpsProxyAgent(_0x1648f6);
    let _0x20d00a = _0x424504;
    _0x20d00a.options = await proenv_0x135cf5.httpOptions();
    _0x424504.options = await proenv_0x135cf5.httpOptions();
    const _0x51d04e = {
      headers: _0x4efb63.headers,
      timeout: _0x4efb63.timeout,
      proxy: false,
      httpAgent: _0x20d00a,
      httpsAgent: _0x424504
    };
    options = _0x51d04e;
  } else {
    proenv_0x1a8dd9.defaults.httpsAgent = new proenv_0x47c1f0.Agent(await proenv_0x135cf5.httpOptions());
    const _0x3f23cb = {
      headers: _0x4efb63.headers,
      timeout: _0x4efb63.timeout
    };
    options = _0x3f23cb;
  }
  if (_0x5c290f.toLowerCase().includes("post")) {
    return proenv_0x1a8dd9.post(_0x1bee4c, _0x2b5f3b, options).then(function (_0x4cfc88) {
      _0x4cfc88 = proenv_0x30f830(_0x4cfc88);
      if (_0x4cfc88) {
        proenv_0x523dcc(_0x276fbb, _0x4cfc88);
      }
    }).catch(async function (_0x5575e3) {
      if (_0x5575e3.response) {
        console.log(_0x5575e3.response.status);
        if (!(api_proxy_open == true || global_agent_http_proxy_isopen == true)) {
          if (_0x5575e3.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x5575e3.response.status == "403";
      }
      console.log("错误码1: " + _0x276fbb + " - " + _0x5575e3.code);
      if (api_proxy_open == true && (_0x5575e3.code == "ECONNRESET" || _0x5575e3.code == "ECONNREFUSED" || _0x5575e3.code == "ETIMEDOUT")) {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
        if ($.ECONNRESET >= 50) {
          console.log("代理失败太多(可能代理失效了，请检查代理白名单是否掉出，额度是否超了), 强制退出");
          process.exit(1);
        } else {
          $.ECONNRESET += 1;
          $.getIpStatus = true;
          await setIp();
          await proenv_0x552420(_0x276fbb);
        }
      }
      if (_0x5575e3.code == "ECONNABORTED" || _0x5575e3.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x276fbb) || _0x5575e3.code == "ERR_BAD_RESPONSE" || _0x5575e3.code == "EAI_AGAIN" || _0x5575e3.code == "ETIMEDOUT") {
        if ($.ERR_BAD_REQUEST >= 5) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          await proenv_0x552420(_0x276fbb);
        }
      }
    });
  } else {
    if (_0x5c290f == "get" || _0x5c290f == "GET") {
      return proenv_0x1a8dd9.get(_0x1bee4c, options).then(function (_0x3bc01a) {
        _0x3bc01a = proenv_0x30f830(_0x3bc01a);
        if (_0x3bc01a) {
          proenv_0x523dcc(_0x276fbb, _0x3bc01a);
        }
      }).catch(async function (_0x2c94e7) {
        if (_0x2c94e7.response) {
          console.log(_0x2c94e7.response.status);
          if (!(api_proxy_open == true || global_agent_http_proxy_isopen == true)) {
            if (_0x2c94e7.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0x2c94e7.response.status == "403";
        }
        console.log("错误码2: " + _0x276fbb + " - " + _0x2c94e7.code);
        if (api_proxy_open == true && (_0x2c94e7.code == "ECONNRESET" || _0x2c94e7.code == "ECONNREFUSED" || _0x2c94e7.code == "ETIMEDOUT")) {
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if ($.ECONNRESET >= 50) {
            console.log("代理失败太多(可能代理失效了，请检查代理白名单是否掉出，额度是否超了), 强制退出");
            process.exit(1);
          } else {
            $.ECONNRESET += 1;
            $.getIpStatus = true;
            await setIp();
            await proenv_0x552420(_0x276fbb);
          }
        }
        if (_0x2c94e7.code == "ECONNABORTED" || _0x2c94e7.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x276fbb) || _0x2c94e7.code == "ERR_BAD_RESPONSE" || _0x2c94e7.code == "EAI_AGAIN" || _0x2c94e7.code == "ETIMEDOUT") {
          if ($.ERR_BAD_REQUEST >= 5) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 350, 10));
            await proenv_0x552420(_0x276fbb);
          }
        }
      });
    }
  }
}
function proenv_0x523dcc(_0x28f964 = "", _0x37386d = "") {
  return new Promise(async _0x557c7a => {
    let _0x253a6a = "";
    try {
      if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x28f964)) {
        if (_0x37386d) {
          _0x253a6a = JSON.parse(_0x37386d);
        }
      }
    } catch (_0x2945cb) {
      console.log(_0x28f964 + " 执行任务异常");
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
    }
    try {
      switch (_0x28f964) {
        case "queryJdCouponListAppletForJd":
          if (_0x253a6a.code == 0 && _0x253a6a.coupon) {
            let _0x2ec02c = _0x253a6a.coupon.useable || [];
            let _0x5cc3e1 = _0x253a6a.coupon.useable_count || 0;
            console.log("券数量: " + _0x5cc3e1);
            $.couponinfolist = "";
            if (_0x2ec02c.length >= 1) {
              let _0x420c0d = 0;
              for (let _0x1ee515 of _0x2ec02c) {
                _0x420c0d += 1;
                if (_0x420c0d > 20) {
                  break;
                }
                $.couponinfolist += _0x1ee515.couponid + "," + _0x1ee515.coupontype + "," + _0x1ee515.couponStyle + "|";
              }
              $.couponinfolist = proenv_0xf6757a($.couponinfolist, "|");
            }
          } else {
            if (_0x253a6a.errorCode == 1 || _0x253a6a.state == 0) {
              console.log("未登录");
              $.isLogin = false;
            }
          }
          break;
        case "deleteCouponListApplet":
          if (_0x37386d.indexOf("deleteresult") > -1) {
            let _0x3672cc = _0x253a6a.deleteresult || [];
            if (_0x3672cc.length >= 1) {
              console.log("删除券成功");
            }
          }
          break;
        default:
          console.log(_0x28f964 + "-> " + _0x37386d);
          break;
      }
    } catch (_0x58ccac) {
      console.log(_0x28f964 + " 执行任务异常！！！");
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
    }
    _0x557c7a(_0x37386d || "");
  });
}
function proenv_0x13d1d1(_0x38b80f, _0x11f86e, _0x4b18b6, _0x4a9844 = "post") {
  const _0x333015 = {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: proenv_0x6e6c1a,
    Origin: "https://my.m.jd.com",
    Referer: "https://my.m.jd.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": $.UA
  };
  if (_0x4a9844.toLowerCase().includes("get")) {
    const _0x368657 = {
      url: _0x11f86e,
      method: _0x4a9844,
      headers: _0x333015,
      timeout: 30000
    };
    return _0x368657;
  } else {
    if (_0x4a9844.toLowerCase().includes("post")) {
      const _0x1230fa = {
        url: _0x11f86e,
        method: _0x4a9844,
        headers: _0x333015,
        body: _0x4b18b6,
        timeout: 30000
      };
      return _0x1230fa;
    }
  }
}
function proenv_0x2c35c6(_0x3cb445, _0x316983, _0x229868, _0x5706bd) {
  const _0x35db06 = {
    appid: _0x229868,
    functionId: _0x3cb445,
    clientVersion: "12.2.0",
    client: "android",
    body: _0x5706bd,
    pin: $.UserName,
    t: Date.now()
  };
  bb = _0x35db06;
  return bb;
}
function proenv_0x30f830(_0x4644c1) {
  if (_0x4644c1.status == 200 && _0x4644c1.data) {
    _0x4644c1 = _0x4644c1.data;
    if (typeof _0x4644c1 == "object") {
      return JSON.stringify(_0x4644c1);
    } else {
      return _0x4644c1;
    }
  } else {
    return "";
  }
}
function proenv_0xf6757a(_0x3b73d5, _0x182ee5) {
  var _0x387144 = _0x3b73d5.lastIndexOf(_0x182ee5);
  if (_0x387144 > -1) {
    _0x3b73d5 = _0x3b73d5.substring(0, _0x387144);
  }
  return _0x3b73d5;
}
function proenv_0x50055e(_0xd3f1a2) {
  try {
    if (typeof JSON.parse(_0xd3f1a2) == "object") {
      return true;
    }
  } catch (_0x248c43) {
    console.log(_0x248c43);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function proenv_0x391243(_0xac1567) {
  if (typeof _0xac1567 == "string") {
    try {
      return JSON.parse(_0xac1567);
    } catch (_0x519483) {
      console.log(_0x519483);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function proenv_0x30d3ba(_0x89e7b0, _0x223f3d) {
  _0x89e7b0 = _0x89e7b0 || 32;
  _0x223f3d = _0x223f3d || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  a = _0x223f3d.length;
  n = "";
  for (i = 0; i < _0x89e7b0; i++) {
    n += _0x223f3d.charAt(Math.floor(Math.random() * a));
  }
  return n;
}
function proenv_0x288a06(_0xdd9f6a = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x254367 = 0) {
  return _0xdd9f6a.replace(/[xy]/g, function (_0x3c5b27) {
    var _0x4c3b21 = 16 * Math.random() | 0,
      _0x4ecf7b = "x" == _0x3c5b27 ? _0x4c3b21 : 3 & _0x4c3b21 | 8;
    uuid = _0x254367 ? _0x4ecf7b.toString(36).toUpperCase() : _0x4ecf7b.toString(36);
    return uuid;
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}