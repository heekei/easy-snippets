/**
 * 二叉搜索树的构造函数
 */
module.exports =  function BinarySearchTree(compareMinFn) {
  /**
   * 二叉搜索树键的构造函数
   * @param {Number} key 要生成的键值
   */
  var Node = function (key) {
    // 键值
    this.key = key;
    // 左子节点
    this.left = null;
    // 右子节点
    this.right = null;
  };

  /**
   * 二叉树的根节点，不存在时表示为Null
   * @type {Null or Number}
   */
  var root = null;

  /**
   * 插入某个键到二叉树中
   * @param  {Number} key 要插入的键值
   */
  this.insert = function (key) {
    // 用传入的值生成二叉树的键
    var newNode = new Node(key);

    // 根节点为Null时，传入的键则为根节点
    // 否则调用insertNode函数来插入子节点
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  /**
   * 用于插入子节点。
   * @param  {Node} node    根节点
   * @param  {Node} newNode 要插入的节点
   */
  var insertNode = function (node, newNode) {
    //由于二叉搜索树的性质，所以当键值小于当前所在节点的键值
    //则使得左子结点成为新的要比较的节点，进行递归调用
    //如果左子结点为null，则将键值赋值给左子结点。
    //如果键值大于当前所在节点的键值，原理同上。
    if (compareMinFn) {
      var min = compareMinFn(node, newNode);
      if (newNode === min) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    } else {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  };
  this.show = () => root;
  /**
   * 中序遍历操作，常用于排序。会把树中元素从小到大的打印出来。
   * 因为在javascript的递归中，遇到递归是，会优先调用递归的函数。直到递归不再进行。
   * 然后会在递归调用的最后一个函数中执行其它语句。再一层层的升上去。
   * 所以中序遍历会有从小到大的输出结果。
   * 后续的先序和后续遍历和这个原理差不多，取决于callback放在哪儿。
   * 
   * @param  {Function} callback 获取到节点后的回调函数
   */
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };

  /**
   * 中序遍历的辅助函数，用于遍历节点
   * @param  {Node}   node     遍历开始的节点，默认为root
   * @param  {Function} callback 获取到节点后的回调函数
   * @return {[type]}            [description]
   */
  var inOrderTraverseNode = function (node, callback) {
    // 当前节点不为NULL则继续递归调用
    if (node != null) {
      inOrderTraverseNode(node.left, callback);
      // 获取到节点后，调用的函数
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  /**
   * 前序遍历操作，常用于打印一个结构化的文档
   * @param  {Function} callback 获取到节点后的回调函数
   */
  this.preOrderTranverse = function (callback) {
    preOrderTranverseNode(root, callback);
  };

  /**
   * 前序遍历的辅助函数，用于遍历节点
   * @param  {Node}   node     遍历开始的节点，默认为root
   * @param  {Function} callback 获取到节点后的回调函数
   */
  var preOrderTranverseNode = function (node, callback) {
    if (node != null) {
      callback(node.key);
      preOrderTranverseNode(node.left, callback);
      preOrderTranverseNode(node.right, callback);
    }
  };

  /**
   * 后序遍历操作，常用于计算所占空间
   * @param  {Function} callback 获取到节点后的回调函数
   */
  this.postOrderTranverse = function (callback) {
    postOrderTranverseNode(root, callback);
  };

  /**
   * 后序遍历的辅助函数，用于遍历节点
   * @param  {Node}   node     遍历开始的节点，默认为root
   * @param  {Function} callback 获取到节点后的回调函数
   */
  var postOrderTranverseNode = function (node, callback) {
    if (node != null) {

      postOrderTranverseNode(node.left, callback);
      postOrderTranverseNode(node.right, callback);
      callback(node.key);
    }
  };
  /**
   * 返回树中最小的值
   * @return {Function} min函数的辅助函数
   */
  this.min = function () {
    return minNode(root);
  };

  /**
   * min函数的辅助函数
   * @param  {Node} node 查找开始的节点，默认为root
   */
  var minNode = function (node) {
    // 如果node存在，则开始搜索。能避免树的根节点为Null的情况
    if (node) {
      // 只要树的左侧子节点不为null，则把左子节点赋值给当前节点。
      // 若左子节点为null，则该节点肯定为最小值。
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
};