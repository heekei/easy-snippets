const { describe, it } = require('mocha');
const assert = require('assert');
const { compareVersion } = require('../../src/index');
describe('compareVersion',function(){
  describe('("1.4.3","1.3.2")', function () {
    it('should return -1 when v1>v2', function () {
      assert.equal(compareVersion('1.4.3','1.3.2'), 1);
    });
  });
  describe('("1.2.3","1.3.2")', function () {
    it('should return -1 when v1<v2', function () {
      assert.equal(compareVersion('1.2.3','1.3.2'), -1);
    });
  });
  describe('("1.2.3","1.2.3")', function () {
    it('should return -1 when v1=v2', function () {
      assert.equal(compareVersion('1.2.3','1.2.3'), 0);
    });
  });
});