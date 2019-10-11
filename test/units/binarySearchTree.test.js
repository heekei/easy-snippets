const { describe, it } = require('mocha');
const assert = require('assert');
const { binarySearchTree } = require('../../src/index');
const bst = new binarySearchTree();

describe('binarySearchTree', function () {
  describe('instantiate', function () {
    it('Instance "t" should be instance of binarySearchTree', function () {
      assert.equal(bst instanceof binarySearchTree, true);
    });
  });
  describe('insert 1', function () {
    bst.insert(1);
    it('key of root node should be 1', function () {
      assert.equal(bst.show().key, 1);
    });
  });
  // describe('("1.2.3","1.2.3")', function () {
  //   it('should return -1 when v1=v2', function () {
  //     assert.equal(compareVersion('1.2.3','1.2.3'), 0);
  //   });
  // });
});