var util       = require('./util');
var postJSON   = util.postJSON;
var make       = util.make;
var wrapper    = util.wrapper;
var checkParam = util.checkParams;
var _          = require('underscore');

/**
 * 查账户信息
 *@param {json} params
 *参数见  http://www.yunpian.com/api/user.html#a1
 * @param {Function} callback 回调函数
 **/
make(exports, "getUser", function (params, callback) {
    var url      = "http://yunpian.com/v1/user/get.json";
    var required = ["apikey"];
    var data     = _.extend({
        apikey: this.apikey
    }, params);
    var status   = checkParam(data, required);

    if (!status.status) {
        if (callback != null) {
            callback(status.msg);
        }
        else {
            return Promise.reject(status.msg);
        }
        return
    }

    if (callback != null) {
        this.request(url, postJSON(data), wrapper(callback));
    }
    else {
        this.request(url, postJSON(data));
    }
});


/**
 * 修改账户信息
 *@param {json} params
 *参数见  http://www.yunpian.com/api/user.html#a1
 * @param {Function} callback 回调函数
 **/
make(exports, "setUser", function (params, callback) {
    var url      = "http://yunpian.com/v1/user/set.json";
    var required = ["apikey"];
    var data     = _.extend({
        apikey: this.apikey
    }, params);
    var status   = checkParam(data, required);
    if (!status.status) {
        if (callback != null) {
            callback(status.msg);
        }
        else {
            return Promise.reject(status.msg);
        }
        return
    }

    if (callback != null) {
        this.request(url, postJSON(data), wrapper(callback));
    }
    else {
        this.request(url, postJSON(data));
    }
});
