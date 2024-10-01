//Tue Oct 01 2024 03:38:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("汪汪庄园合成");
const bdy_0x2cad47 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x58737d = require("./function/dylans.js"),
  bdy_0x1eda30 = $.isNode() ? require("./sendNotify") : "";
let bdy_0x5dc51e = [],
  bdy_0x21cd03 = "",
  bdy_0x407adf = false;
if ($.isNode()) {
  Object.keys(bdy_0x2cad47).forEach(_0x51b65f => {
    bdy_0x5dc51e.push(bdy_0x2cad47[_0x51b65f]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x5dc51e = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x4e6284($.getdata("CookiesJD") || "[]").map(_0x5be737 => _0x5be737.cookie)].filter(_0x38ea37 => !!_0x38ea37);
}
$.JOY_COIN_MAXIMIZE = 0;
message = "";
!(async () => {
  if (!bdy_0x5dc51e[0]) {
    const _0x192fbb = {
      "open-url": "https://bean.m.jd.com/"
    };
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", _0x192fbb);
    return;
  }
  console.log("\n跑几次会黑，一周后解黑！！！");
  console.log("问题建议：https://t.me/dylan_jdpro");
  if (process.env.JD_JOY_PARK && process.env.JD_JOY_PARK === "false") {
    console.log("\n******检测到您设置了不运行汪汪乐园，停止运行此脚本******\n");
    return;
  }
  for (let _0x197534 = 0; _0x197534 < bdy_0x5dc51e.length; _0x197534++) {
    bdy_0x21cd03 = bdy_0x5dc51e[_0x197534];
    if (bdy_0x21cd03) {
      $.UserName = decodeURIComponent(bdy_0x21cd03.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x21cd03.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x197534 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.maxJoyCount = 10;
      $.UA = require("./USER_AGENTS").UARAM();
      await bdy_0x381ead();
      if (!$.isLogin) {
        const _0x34c7f0 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x34c7f0);
        $.isNode() && (await bdy_0x1eda30.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      $.hasJoyCoin = true;
      await bdy_0x25e115(true);
      await $.wait(500);
      if (!$.joyBaseInfo) {
        continue;
      }
      $.joyBaseInfo.joyCoin == 0 && ($.log("还未过新手任务，去完成！！！"), await bdy_0xa808c4(), await $.wait(200), await bdy_0x25e115(), await $.wait(200), await bdy_0x5e4052("{\"guideStep\":11,\"joyOneId\":" + $.newjoylist[0].id + ",\"joyTwoId\":" + $.newjoylist[1].id + ",\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}"), await $.wait(200), await bdy_0x5e4052("{\"guideStep\":12,\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}"), await $.wait(200), await bdy_0x25e115());
      $.activityJoyList = [];
      $.workJoyInfoList = [];
      await bdy_0x7021bc(true);
      await $.wait(500);
      await bdy_0x38c486();
      await $.wait(500);
      await bdy_0x65a97a($.workJoyInfoList);
      try {
        await bdy_0x208ca7($.activityJoyList);
        await $.wait(200);
      } catch (_0x8f66ae) {
        $.logErr(_0x8f66ae);
      }
      await $.wait(2500);
    }
  }
})().catch(_0x3df7a2 => $.logErr(_0x3df7a2)).finally(() => $.done());
async function bdy_0x25e115(_0x4cd45f = false) {
  return new Promise(async _0x35ddba => {
    let _0x29e1bc = await bdy_0x2cd694("joyBaseInfo", "{\"taskId\":\"\",\"inviteType\":\"\",\"inviterPin\":\"\",\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "4abce");
    $.post(_0x29e1bc, async (_0x36670b, _0x176a33, _0x435134) => {
      try {
        _0x36670b ? (console.log("" + JSON.stringify(_0x36670b)), console.log("getJoyBaseInfo API请求失败，请检查网路重试")) : (_0x435134 = JSON.parse(_0x435134), _0x435134.success ? _0x4cd45f && ($.log("等级:" + _0x435134.data.level + "|金币:" + bdy_0x1446f0(_0x435134.data.joyCoin)), _0x435134.data.level >= 30 && $.isNode() && (await bdy_0x1eda30.sendNotify($.name + " - 账号" + $.index + " - " + $.nickName, "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n当前等级: " + _0x435134.data.level + "\n已达最高30级\n请到京东极速版APP提现6.66\n提现入口：我的->汪汪乐园->点左上角等级"), $.log("\n开始解锁新场景...\n"))) : $.log(_0x435134.errMsg), $.joyBaseInfo = _0x435134.data);
      } catch (_0x22adc4) {
        $.logErr(_0x22adc4, _0x176a33);
      } finally {
        _0x35ddba($.joyBaseInfo);
      }
    });
  });
}
function bdy_0x7021bc(_0xfea20 = false) {
  return new Promise(async _0x372459 => {
    let _0x234e4d = await bdy_0x430746("joyList", "{\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "e18ed");
    $.get(_0x234e4d, async (_0x3de3f5, _0x454093, _0xdb6aa1) => {
      try {
        if (_0x3de3f5) {
          console.log("" + JSON.stringify(_0x3de3f5));
          console.log($.name + " API请求失败，请检查网路重试");
        } else {
          _0xdb6aa1 = JSON.parse(_0xdb6aa1);
          if (_0xdb6aa1.success) {
            if (_0xfea20) {
              $.log("\n===== JOY 状态 start =====");
              $.log("在逛街的JOY ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️");
              for (let _0x109cd4 = 0; _0x109cd4 < _0xdb6aa1.data.activityJoyList.length; _0x109cd4++) {
                $.log("id:" + _0xdb6aa1.data.activityJoyList[_0x109cd4].id + "|name: " + _0xdb6aa1.data.activityJoyList[_0x109cd4].name + "|level: " + _0xdb6aa1.data.activityJoyList[_0x109cd4].level);
                _0xdb6aa1.data.activityJoyList[_0x109cd4].level >= 30 && $.isNode() && (await bdy_0x1eda30.sendNotify($.name + " - 账号" + $.index + " - " + $.nickName, "【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "\n当前等级: " + _0xdb6aa1.data.level + "\n已达到单次最高等级奖励\n请尽快前往活动查看领取\n活动入口：京东极速版APP->汪汪乐园\n"));
              }
              $.log("\n在铲土的JOY ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️");
              for (let _0x58dfd3 = 0; _0x58dfd3 < _0xdb6aa1.data.workJoyInfoList.length; _0x58dfd3++) {
                $.log("工位: " + _0xdb6aa1.data.workJoyInfoList[_0x58dfd3].location + " [" + (_0xdb6aa1.data.workJoyInfoList[_0x58dfd3].unlock ? "已开" : "未开") + "]|JOY= " + (_0xdb6aa1.data.workJoyInfoList[_0x58dfd3].joyDTO ? "id:" + _0xdb6aa1.data.workJoyInfoList[_0x58dfd3].joyDTO.id + "|name: " + _0xdb6aa1.data.workJoyInfoList[_0x58dfd3].joyDTO.name + "|level: " + _0xdb6aa1.data.workJoyInfoList[_0x58dfd3].joyDTO.level : "空位"));
              }
              $.log("===== JOY 状态  end  =====\n");
            }
          } else {
            $.log(_0xdb6aa1.errMsg);
          }
          $.activityJoyList = _0xdb6aa1.data.activityJoyList;
          $.workJoyInfoList = _0xdb6aa1.data.workJoyInfoList;
        }
      } catch (_0x27615e) {
        $.logErr(_0x27615e, _0x454093);
      } finally {
        _0x372459(_0xdb6aa1.data);
      }
    });
  });
}
function bdy_0x38c486() {
  return new Promise(async _0x23d67b => {
    let _0x167f74 = await bdy_0x2cd694("gameShopList", "{\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "");
    $.post(_0x167f74, async (_0x5f4cba, _0xd4be24, _0x18b455) => {
      try {
        _0x5f4cba ? (console.log("" + JSON.stringify(_0x5f4cba)), console.log("getGameShopList API请求失败，请检查网路重试")) : _0x18b455 = JSON.parse(_0x18b455).data.filter(_0x2039ef => _0x2039ef.shopStatus === 1);
      } catch (_0x1d9b60) {
        $.logErr(_0x1d9b60, _0xd4be24);
      } finally {
        _0x23d67b(_0x18b455);
      }
    });
  });
}
async function bdy_0x1a3fd6(_0x2e086c, _0x147629) {
  let _0x4daa7e = _0x147629.filter(_0x2793fa => _0x2793fa.unlock && _0x2793fa.joyDTO === null);
  if (_0x2e086c.length !== 0 && _0x4daa7e.length !== 0) {
    let _0x16bb36 = Math.max.apply(Math, _0x2e086c.map(_0x4b4ec7 => _0x4b4ec7.level)),
      _0x150af2 = _0x2e086c.filter(_0x46e3ab => _0x46e3ab.level === _0x16bb36);
    $.log("下地干活！ joyId= " + _0x150af2[0].id + " location= " + _0x4daa7e[0].location);
    await bdy_0x153c69(_0x150af2[0].id, _0x4daa7e[0].location);
    await bdy_0x7021bc();
    await bdy_0x1a3fd6($.activityJoyList, $.workJoyInfoList);
  } else {
    $.JOY_COIN_MAXIMIZE && (await bdy_0x57ff0a(_0x4daa7e));
  }
}
async function bdy_0x57ff0a(_0x493627) {
  if (_0x493627.length !== 0 && $.hasJoyCoin) {
    $.log("竟然还有工位挖土？开启瞎买瞎下地模式！");
    let _0x3edc8c = await bdy_0x25e115(),
      _0x6179d4 = _0x3edc8c.joyCoin;
    $.log("还有" + _0x6179d4 + "金币,看看还能买啥下地");
    let _0x5b1def = await bdy_0x38c486(),
      _0x493091 = false;
    for (let _0x458920 = _0x5b1def.length - 1; _0x458920 >= 0 && _0x458920 - 3 >= 0; _0x458920--) {
      if (_0x6179d4 > _0x5b1def[_0x458920].consume) {
        $.log("买一只 " + _0x5b1def[_0x458920].userLevel + "级的！");
        _0x6179d4 = _0x6179d4 - _0x5b1def[_0x458920].consume;
        let _0xc1606b = await bdy_0x5a4124(_0x5b1def[_0x458920].userLevel);
        if (!_0xc1606b.success) {
          break;
        } else {
          _0x493091 = true;
          $.hasJoyCoin = false;
          _0x458920++;
        }
      }
    }
    $.hasJoyCoin = false;
    _0x493091 && (await bdy_0x7021bc(), await $.wait(200), await bdy_0x1a3fd6($.activityJoyList, $.workJoyInfoList), await $.wait(200), await bdy_0x25e115());
  }
}
async function bdy_0x65a97a(_0x451282) {
  if (_0x451282.filter(_0x578009 => _0x578009.joyDTO).length === 0) {
    $.log("工位清理完成！");
    return true;
  }
  for (let _0x1d9c7d = 0; _0x1d9c7d < _0x451282.length; _0x1d9c7d++) {
    _0x451282[_0x1d9c7d].unlock && _0x451282[_0x1d9c7d].joyDTO && ($.log("从工位移除 => id:" + _0x451282[_0x1d9c7d].joyDTO.id + "|name: " + _0x451282[_0x1d9c7d].joyDTO.name + "|level: " + _0x451282[_0x1d9c7d].joyDTO.level), await bdy_0x153c69(_0x451282[_0x1d9c7d].joyDTO.id, 0));
  }
  await bdy_0x7021bc();
  await $.wait(200);
  await bdy_0x65a97a($.workJoyInfoList);
}
async function bdy_0x208ca7(_0x49783) {
  let _0x472f14 = Math.min.apply(Math, _0x49783.map(_0xf0b9c1 => _0xf0b9c1.level)),
    _0x3ceb0c = _0x49783.filter(_0x1c3c0d => _0x1c3c0d.level === _0x472f14),
    _0xd2cf9e = await bdy_0x25e115();
  await $.wait(1000);
  !_0xd2cf9e.fastBuyLevel && (await $.wait(2000), _0xd2cf9e = await bdy_0x25e115());
  if (!_0xd2cf9e.fastBuyLevel) {
    $.log("获取信息失败，下地后跳出......");
    await bdy_0x1a3fd6($.activityJoyList, $.workJoyInfoList);
    return false;
  }
  let _0x26eec5 = _0xd2cf9e.fastBuyLevel;
  if (_0x26eec5 > 25) {
    return;
  }
  if (_0x3ceb0c.length >= 2) {
    $.log("开始合成" + (_0x472f14 + 1) + "级JOY");
    await $.wait(2000);
    await bdy_0x50a692(_0x3ceb0c[0].id, _0x3ceb0c[1].id);
    if (bdy_0x407adf) {
      _0xd2cf9e = await bdy_0x25e115();
      await $.wait(200);
      await bdy_0x1a3fd6($.activityJoyList, $.workJoyInfoList);
      return false;
    }
    await bdy_0x7021bc();
    await $.wait(200);
    await bdy_0x208ca7($.activityJoyList);
  } else {
    if (_0x3ceb0c.length === 1 && _0x3ceb0c[0].level < _0x26eec5) {
      let _0x34689a = await bdy_0x5a4124(_0x3ceb0c[0].level, $.activityJoyList);
      await $.wait(200);
      _0x34689a.success ? (await bdy_0x7021bc(), await $.wait(200), await bdy_0x208ca7($.activityJoyList)) : ($.log("完成！"), await bdy_0x1a3fd6($.activityJoyList, $.workJoyInfoList));
    } else {
      $.log("没有可合成的JOY开始买买买🛒🛒🛒");
      $.log("最高能买" + _0x26eec5 + "级的JOY，剩余" + bdy_0x1446f0(_0xd2cf9e.joyCoin) + "金币");
      let _0x3a86d4 = await bdy_0x5a4124(_0x26eec5, $.activityJoyList);
      await $.wait(1000);
      _0x3a86d4.success ? (await bdy_0x7021bc(), await $.wait(200), await bdy_0x208ca7($.activityJoyList)) : ($.log("完成！"), await bdy_0x1a3fd6($.activityJoyList, $.workJoyInfoList));
    }
  }
}
function bdy_0x153c69(_0x15b61a, _0x44ac18) {
  return new Promise(async _0x77dd30 => {
    let _0x26495e = await bdy_0x430746("joyMove", "{\"joyId\":" + _0x15b61a + ",\"location\":" + _0x44ac18 + ",\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "50788");
    $.post(_0x26495e, async (_0x59b7ea, _0x4a3ad7, _0x44df51) => {
      try {
        _0x59b7ea ? (console.log("" + JSON.stringify(_0x59b7ea)), console.log("doJoyMove请求失败，请检查网路重试")) : (_0x44ac18 !== 0 && $.log("下地完成！"), _0x44df51 = JSON.parse(_0x44df51));
      } catch (_0x15008b) {
        $.logErr(_0x15008b, _0x4a3ad7);
      } finally {
        _0x77dd30(_0x44df51.data);
      }
    });
  });
}
function bdy_0x50a692(_0x232103, _0x56c59e) {
  return new Promise(async _0x24bea5 => {
    let _0x39d7b9 = await bdy_0x430746("joyMergeGet", "{\"joyOneId\":" + _0x232103 + ",\"joyTwoId\":" + _0x56c59e + ",\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "c3beb");
    $.get(_0x39d7b9, async (_0x465fb4, _0x270a91, _0x4d3420) => {
      try {
        _0x465fb4 ? (console.log("" + JSON.stringify(_0x465fb4)), console.log("doJoyMerge API请求失败，请检查网路重试"), _0x4d3420 = {}, bdy_0x407adf = true) : (_0x4d3420 = JSON.parse(_0x4d3420), $.log("合成" + (_0x4d3420.success ? "成功！" : "失败！【" + _0x4d3420.errMsg + "】 code=" + _0x4d3420.code)), _0x4d3420.code == "1006" && (bdy_0x407adf = true));
      } catch (_0xb61354) {
        $.logErr(_0xb61354, _0x270a91);
        bdy_0x407adf = true;
      } finally {
        _0x24bea5(_0x4d3420.data);
      }
    });
  });
}
async function bdy_0x5a4124(_0xb65846, _0x4a2d11) {
  return new Promise(async _0x15d158 => {
    let _0x3f7260 = await bdy_0x2cd694("joyBuy", "{\"level\":" + _0xb65846 + ",\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "ffb36");
    $.post(_0x3f7260, async (_0x1c1a97, _0x5ba5b3, _0x5f0f25) => {
      try {
        if (_0x1c1a97) {
          console.log("" + JSON.stringify(_0x1c1a97));
          console.log("doJoyBuy API请求失败，请检查网路重试");
        } else {
          _0x5f0f25 = JSON.parse(_0x5f0f25);
          let _0x1dd6aa = "【不知道啥意思】";
          switch (_0x5f0f25.code) {
            case 519:
              _0x1dd6aa = "【没钱了】";
              break;
            case 518:
              _0x1dd6aa = "【没空位】";
              if (_0x4a2d11) {
                $.log("满员了，删掉低级JOY");
                let _0xbaa716 = Math.min.apply(Math, _0x4a2d11.map(_0x393528 => _0x393528.level));
                await bdy_0x359b50(_0x4a2d11.filter(_0x20d862 => _0x20d862.level === _0xbaa716)[0].id);
              }
              break;
            case 0:
              _0x1dd6aa = "【OK】";
              break;
          }
          $.log("购买" + _0xb65846 + "级JOY " + (_0x5f0f25.success ? "成功！" : "失败！code=" + _0x5f0f25.code + " 意思是" + _0x1dd6aa));
        }
      } catch (_0x1aa2f8) {
        $.logErr(_0x1aa2f8, _0x5ba5b3);
      } finally {
        _0x15d158(_0x5f0f25);
      }
    });
  });
}
function bdy_0x359b50(_0x33fcfb) {
  return new Promise(async _0x33c28c => {
    let _0x4b591a = await bdy_0x2cd694("joyRecovery", "body={\"joyId\":" + _0x33fcfb + ",\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "");
    $.post(_0x4b591a, async (_0x374540, _0x27d91f, _0x262173) => {
      try {
        _0x374540 ? (console.log("" + JSON.stringify(_0x374540)), console.log("doJoyRecovery API请求失败，请检查网路重试"), _0x262173 = {}) : (_0x262173 = JSON.parse(_0x262173), $.log("回收🐶 " + (_0x262173.success ? "成功！" : "失败！【" + _0x262173.errMsg + "】 code=" + _0x262173.code)));
      } catch (_0x5b997a) {
        $.logErr(_0x5b997a, _0x27d91f);
      } finally {
        _0x33c28c(_0x262173);
      }
    });
  });
}
function bdy_0x36b4ae() {
  return new Promise(async _0x4ea9f8 => {
    let _0x14a241 = await bdy_0x2cd694("joyRestart", "{\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "");
    $.post(_0x14a241, async (_0x35b125, _0x12afab, _0x5f4dd1) => {
      try {
        _0x35b125 ? (console.log("" + JSON.stringify(_0x35b125)), console.log("doJoyRestart API请求失败，请检查网路重试")) : (_0x5f4dd1 = JSON.parse(_0x5f4dd1), $.log("新场景解锁 " + (_0x5f4dd1.success ? "成功！" : "失败！【" + _0x5f4dd1.errMsg + "】 code=" + _0x5f4dd1.code)));
      } catch (_0x20b698) {
        $.logErr(_0x20b698, _0x12afab);
      } finally {
        _0x4ea9f8(_0x5f4dd1);
      }
    });
  });
}
function bdy_0xa808c4() {
  return new Promise(async _0x4664fd => {
    let _0x402312 = await bdy_0x2cd694("newStartReward", "{\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "");
    $.post(_0x402312, async (_0x33b26e, _0x1b7de8, _0x176e62) => {
      try {
        _0x33b26e ? (console.log("" + JSON.stringify(_0x33b26e)), console.log("newStartReward API请求失败，请检查网路重试")) : (_0x176e62 = JSON.parse(_0x176e62), $.newjoylist = _0x176e62.data);
      } catch (_0xf82ade) {
        $.logErr(_0xf82ade, _0x1b7de8);
      } finally {
        _0x4664fd(_0x176e62);
      }
    });
  });
}
function bdy_0x5e4052(_0x7a6fd5) {
  return new Promise(async _0x50ea60 => {
    let _0x47823d = await bdy_0x2cd694("joyGuide", _0x7a6fd5, "");
    $.post(_0x47823d, async (_0x5344f7, _0x51941b, _0x2add39) => {
      try {
        _0x5344f7 ? (console.log("" + JSON.stringify(_0x5344f7)), console.log("joyGuide API请求失败，请检查网路重试")) : _0x2add39 = JSON.parse(_0x2add39);
      } catch (_0x3d1a67) {
        $.logErr(_0x3d1a67, _0x51941b);
      } finally {
        _0x50ea60(_0x2add39);
      }
    });
  });
}
function bdy_0x4ebf49() {
  return new Promise(async _0x380f74 => {
    let _0x537dd0 = await bdy_0x2cd694("gameMyPrize", "{\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "");
    $.post(_0x537dd0, async (_0x3c8052, _0x225224, _0x48d9b8) => {
      try {
        if (_0x3c8052) {
          console.log("" + JSON.stringify(_0x3c8052));
          console.log("getGameMyPrize API请求失败，请检查网路重试");
        } else {
          _0x48d9b8 = JSON.parse(_0x48d9b8);
          if (_0x48d9b8.success && _0x48d9b8.data) {
            $.Vos = _0x48d9b8.data.gamePrizeItemVos;
            $.overVos = _0x48d9b8.data.gameBigPrizeVO;
            for (let _0x5b0668 = 0; _0x5b0668 < $.Vos.length; _0x5b0668++) {
              $.Vos[_0x5b0668].prizeType == 4 && $.Vos[_0x5b0668].status == 1 && $.Vos[_0x5b0668].prizeTypeVO.prizeUsed == 0 && ($.log("\n当前账号有【" + $.Vos[_0x5b0668].prizeName + "】可提现"), $.id = $.Vos[_0x5b0668].prizeTypeVO.id, $.poolBaseId = $.Vos[_0x5b0668].prizeTypeVO.poolBaseId, $.prizeGroupId = $.Vos[_0x5b0668].prizeTypeVO.prizeGroupId, $.prizeBaseId = $.Vos[_0x5b0668].prizeTypeVO.prizeBaseId, await bdy_0x338b8c($.id, $.poolBaseId, $.prizeGroupId, $.prizeBaseId));
            }
            $.overVos && $.overVos.prizeType == 4 && $.overVos.topLevelStatus == 1 && $.overVos.prizeTypeVO.prizeUsed == 0 && ($.log("\n当前账号有【" + $.overVos.bigPrizeName + "】可提现"), $.id = $.overVos.prizeTypeVO.id, $.poolBaseId = $.overVos.prizeTypeVO.poolBaseId, $.prizeGroupId = $.overVos.prizeTypeVO.prizeGroupId, $.prizeBaseId = $.overVos.prizeTypeVO.prizeBaseId, await bdy_0x338b8c($.id, $.poolBaseId, $.prizeGroupId, $.prizeBaseId));
          }
        }
      } catch (_0x1de125) {
        $.logErr(_0x1de125, _0x225224);
      } finally {
        _0x380f74(_0x48d9b8);
      }
    });
  });
}
function bdy_0x338b8c(_0x2824b3, _0x5eb2b0, _0x1bed99, _0x115fa2) {
  return new Promise(async _0x46a382 => {
    let _0x13dd32 = await bdy_0x2cd694("apCashWithDraw", "{\"businessSource\":\"JOY_PARK\",\"base\":{\"id\":" + _0x2824b3 + ",\"business\":\"joyPark\",\"poolBaseId\":" + _0x5eb2b0 + ",\"prizeGroupId\":" + _0x1bed99 + ",\"prizeBaseId\":" + _0x115fa2 + ",\"prizeType\":4},\"linkId\":\"99DZNpaCTAv8f4TuKXr0Ew\"}", "");
    $.post(_0x13dd32, async (_0x27cddc, _0x44ed8d, _0xe2f07a) => {
      try {
        _0x27cddc ? (console.log("" + JSON.stringify(_0x27cddc)), console.log("apCashWithDraw API请求失败，请检查网路重试")) : (_0xe2f07a = JSON.parse(_0xe2f07a), _0xe2f07a.success && _0xe2f07a.data && console.log("提现结果：" + JSON.stringify(_0xe2f07a)));
      } catch (_0x55edc5) {
        $.logErr(_0x55edc5, _0x44ed8d);
      } finally {
        _0x46a382(_0xe2f07a);
      }
    });
  });
}
async function bdy_0x2cd694(_0x4883be, _0x3a8fd1, _0x132c77) {
  let _0x3f04bc,
    _0x52af31 = $.UA.split(";")[2];
  if (_0x132c77) {
    let _0x4af881 = {
      appId: _0x132c77,
      functionId: _0x4883be,
      body: _0x3a8fd1,
      appid: "activities_platform",
      clientVersion: _0x52af31,
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x3f04bc = await bdy_0x58737d.getbody(_0x4af881);
  } else {
    _0x3f04bc = "functionId=" + _0x4883be + "&body=" + _0x3a8fd1 + "&appid=activities_platform&client=android&clientVersion=" + _0x52af31 + "&t=" + Date.now() + "&uuid=";
  }
  const _0x53734a = {
    "User-Agent": $.UA,
    "Content-Type": "application/x-www-form-urlencoded",
    Host: "api.m.jd.com",
    Origin: "https://joypark.jd.com",
    Referer: "https://joypark.jd.com/",
    Cookie: bdy_0x21cd03
  };
  const _0x42b296 = {
    url: "https://api.m.jd.com/api",
    body: _0x3f04bc,
    headers: _0x53734a
  };
  return _0x42b296;
}
async function bdy_0x430746(_0x194883, _0x274944, _0x228476) {
  let _0x48eed2,
    _0x128229 = $.UA.split(";")[2];
  if (_0x228476) {
    let _0x49645b = {
      appId: _0x228476,
      functionId: _0x194883,
      body: _0x274944,
      appid: "activities_platform",
      clientVersion: _0x128229,
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x48eed2 = await bdy_0x58737d.getbody(_0x49645b);
  } else {
    _0x48eed2 = "functionId=" + _0x194883 + "&body=" + _0x274944 + "&appid=activities_platform&client=android&clientVersion=" + _0x128229 + "&t=" + Date.now() + "&uuid=";
  }
  const _0x20c411 = {
    "User-Agent": $.UA,
    "Content-Type": "application/x-www-form-urlencoded",
    Host: "api.m.jd.com",
    Origin: "https://joypark.jd.com",
    Referer: "https://joypark.jd.com/",
    Cookie: bdy_0x21cd03
  };
  const _0x1aefe3 = {
    url: "https://api.m.jd.com/client.action?functionId=" + _0x194883 + "&" + _0x48eed2,
    headers: _0x20c411
  };
  return _0x1aefe3;
}
function bdy_0x381ead() {
  return new Promise(_0x3c111b => {
    const _0xb588be = {
      Cookie: bdy_0x21cd03,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0xda26ea = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0xb588be,
      timeout: 10000
    };
    $.get(_0xda26ea, (_0x557a57, _0x5760db, _0x3cfecc) => {
      try {
        if (_0x3cfecc) {
          _0x3cfecc = JSON.parse(_0x3cfecc);
          if (!(_0x3cfecc.islogin === "1")) {
            _0x3cfecc.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x5e68ec) {
        console.log(_0x5e68ec);
      } finally {
        _0x3c111b();
      }
    });
  });
}
function bdy_0x2456c2(_0x1831b1) {
  _0x1831b1 = _0x1831b1 || 32;
  let _0xec2bea = "abcdef0123456789",
    _0x2a0fdd = _0xec2bea.length,
    _0x1e76ce = "";
  for (i = 0; i < _0x1831b1; i++) {
    _0x1e76ce += _0xec2bea.charAt(Math.floor(Math.random() * _0x2a0fdd));
  }
  return _0x1e76ce;
}
function bdy_0x4e6284(_0x432ab3) {
  if (typeof _0x432ab3 == "string") {
    try {
      return JSON.parse(_0x432ab3);
    } catch (_0x1c117a) {
      console.log(_0x1c117a);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function bdy_0x1446f0(_0xb29c5d) {
  const _0x243bec = ["", "", ""];
  let _0x580922 = 1000,
    _0x4b81ed = 3,
    _0x8ee0ad = "",
    _0x21eaff = 1;
  while (_0xb29c5d / _0x580922 >= 1) {
    _0x580922 *= 10;
    _0x4b81ed += 1;
  }
  if (_0x4b81ed <= 4) {
    _0x243bec[0] = parseInt(_0xb29c5d / 1000) + "";
    _0x243bec[1] = "千";
  } else {
    if (_0x4b81ed <= 8) {
      _0x8ee0ad = parseInt(_0x4b81ed - 4) / 3 > 1 ? "千万" : "万";
      _0x21eaff = _0x8ee0ad === "万" ? 10000 : 10000000;
      _0xb29c5d % _0x21eaff === 0 ? _0x243bec[0] = parseInt(_0xb29c5d / _0x21eaff) + "" : _0x243bec[0] = parseFloat(_0xb29c5d / _0x21eaff).toFixed(2) + "";
      _0x243bec[1] = _0x8ee0ad;
    } else {
      if (_0x4b81ed <= 16) {
        _0x8ee0ad = (_0x4b81ed - 8) / 3 > 1 ? "千亿" : "亿";
        _0x8ee0ad = (_0x4b81ed - 8) / 4 > 1 ? "兆" : _0x8ee0ad;
        _0x8ee0ad = (_0x4b81ed - 8) / 7 > 1 ? "千兆" : _0x8ee0ad;
        _0x21eaff = 1;
        if (_0x8ee0ad === "亿") {
          _0x21eaff = 100000000;
        } else {
          if (_0x8ee0ad === "千亿") {
            _0x21eaff = 100000000000;
          } else {
            if (_0x8ee0ad === "兆") {
              _0x21eaff = 1000000000000;
            } else {
              _0x8ee0ad === "千兆" && (_0x21eaff = 1000000000000000);
            }
          }
        }
        _0xb29c5d % _0x21eaff === 0 ? _0x243bec[0] = parseInt(_0xb29c5d / _0x21eaff) + "" : _0x243bec[0] = parseFloat(_0xb29c5d / _0x21eaff).toFixed(2) + "";
        _0x243bec[1] = _0x8ee0ad;
      }
    }
  }
  _0xb29c5d < 1000 && (_0x243bec[0] = _0xb29c5d + "", _0x243bec[1] = "");
  return _0x243bec.join("");
}
function Env(t, e) {
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