'use strict'

var yunpian = require('../index');
var assert = require("assert");

var apikey='8a2882a33573950dc784f4026f86c960';

describe('yunpian', function(){
	describe('#send_sms()', function(){
    	it('shoud send sms', function(done){
            yunpian.send_sms(apikey,'18615707343','9527',function(data){
                var result=JSON.parse(data);
                assert.equal(!!result,true);
                
                if(result.code!=0){
                    console.log(data);
                }
                assert.equal(result.code,0);
            });
		});
	}),
    describe('#send_sms()', function(){
    	it('shoud send sms to more phone', function(done){
            yunpian.send_sms(apikey,'18615707343,18602867152','9527',function(data){
                var result=JSON.parse(data);
                assert.equal(!!result,true);
                
                if(result.code!=0){
                    console.log(data);
                }
                assert.equal(result.code,0);
            });
		});
	}),
    describe('#send_tpl_sms()', function(){
    	it('shoud send sms by template', function(done){
            yunpian.send_sms(apikey,'18615707343','9527',function(data){
                var result=JSON.parse(data);
                assert.equal(!!result,true);
                
                if(result.code!=0){
                    console.log(data);
                }
                assert.equal(result.code,0);
            });
		})
	}),
    describe('#send_voice_sms()', function(){
    	it('shoud send voice sms', function(done){
            yunpian.send_sms(apikey,'18615707343','9527',function(data){
                var result=JSON.parse(data);
                assert.equal(!!result,true);
                
                if(result.code!=0){
                    console.log(data);
                }
                assert.equal(result.code,0);
            });
		});
	})
})