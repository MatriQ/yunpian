'use strict';
/*
* 云片短信网关
*/
var yunpian = module.exports;

// 查询账户信息https地址
var get_user_info_uri = '/v1/user/get.json';
// 智能匹配模板发送https地址
var sms_host = 'sms.yunpian.com';
var voice_host = 'voice.yunpian.com';

var send_sms_uri = '/v1/sms/send.json';
// 指定模板发送接口https地址
var send_tpl_sms_uri = '/v1/sms/tpl_send.json';
// 发送语音验证码接口https地址
var send_voice_uri = '/v1/voice/send.json';


yunpian.send_sms = function (apikey,mobile,text) {
  var post_data = {
    'apikey': apikey,
    'mobile':qs.escape(mobile),
    'text':text,
    };//这是需要提交的数据
    var content = qs.stringify(post_data);
    post(sms_host,uri,content);
};

yunpian.send_tpl_sms = function (apikey,mobile,tpl_id,tpl_value) {
  var post_data = {
    'apikey': apikey,
    'mobile':qs.escape(mobile),
    'tpl_id':tpl_id,
    'tpl_value':qs.stringify(tpl_value),
    };//这是需要提交的数据
    var content = qs.stringify(post_data);
    post(sms_host,uri,content);
};

yunpian.send_voice_sms = function (apikey,mobile,code) {
  var post_data = {
   'apikey': apikey,
   'mobile':mobile,
   'code':code,
   };//这是需要提交的数据
   var content = qs.stringify(post_data);
   console.log(content);
   post(voice_host,uri,content);
};

function post(host,uri,content){
    var options = {
        hostname: host,
        port: 443,
        path: uri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };
    var req = https.request(options, function (res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    //console.log(content);
    req.write(content);

    req.end();
}
