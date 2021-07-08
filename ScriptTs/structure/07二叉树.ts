/// <reference path="./utility/Node.ts" />
namespace structure{

    class BinarySearchTree {
        protected root:TreeNode<number>
        constructor() {
          this.root = null
        }
        /* 私有方法 */
        protected insertNode(node: TreeNode<number>, key: number) {
          //插入操作实体函数
          if (key > node.key) {
            //在右边插入
            if (node.right === null) {
              //如果左节点为空 插入 --出口
              node.right = new TreeNode(key)
            } else {
              //否则进入递归  --入口
              this.insertNode(node.right, key)
            }
          } else {
            //在左边插入同理
            if (node.left === null) {
              node.left = new TreeNode(key)
            } else {
              this.insertNode(node.left, key)
            }
          }
        }
        protected preOrderTraverseNode(
          node: TreeNode<number>,
          callback: (key: number) => void
        ) {
          //先序遍历实体函数
          if (node != null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
          }
        }
        protected inOrderTraverseNode(
          node: TreeNode<number>,
          callback: (key: number) => void
        ) {
          //中序遍历实体函数
          if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
          }
        }
        protected postOrderTraverseNode(
          node: TreeNode<number>,
          callback: (key: number) => void
        ) {
          //后序遍历实体函数
          if (node !== null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
          }
        }
        protected getMinNode(node: TreeNode<number>) {
          //得到最小的节点
          while (node !== null && node.left !== null) {
            node = node.left
          }
          return node
        }
        protected getMaxNode(node: TreeNode<number>) {
          //得到最大的节点
          while (node !== null && node.right !== null) {
            node = node.right
          }
          return node
        }
        protected searchNode(node: TreeNode<number>, key: number) {
          //根据键值查找节点 递归版
          if (node === null) return false
          if (key > node.key) return this.searchNode(node.right, key)
          if (key < node.key) return this.searchNode(node.left, key)
          return true
        }
        protected removeNode(node: TreeNode<number>, key: number) {
          if (node === null) return null
          if (key === node.key) {
            //执行删除
            if (node.left === null || node.right === null) {
              //第二种情况,节点只有一个子节点
              node = node.right || node.left
              return node
            } else {
              //第三种情况 ,节点有两个子节点
              const aux = this.getMinNode(node.right)
              node.key = aux.key
              node.right = this.removeNode(node.right, aux.key)
              return node
            }
          } else if (key > node.key) {
            //指定的key较大 传入右节点递归
            node.right = this.removeNode(node.right, key)
            return node
          } else if (key < node.key) {
            //指定的key较小 传入左节点递归
            node.left = this.removeNode(node.left, key)
            return node
          }
        }
      
        /* 外部方法  */
        insert(key: number) {
          //向数中插入一个新的键
          if (this.root === null) {
            //如果树为空 直接插入
            this.root = new TreeNode(key)
          } else {
            //否则交给 插入函数去处理
            this.insertNode(this.root, key)
          }
        }
        search(key: number) {
          //在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回false
          // ----递归版本
          return this.searchNode(this.root, key)
          // ----while循环版本 帮助理解
          // let node = this.root
          // while (node !== null) {
          //   if (key > node.key) {
          //     node = node.right
          //   } else if (key < node.key) {
          //     node = node.left
          //   } else {
          //     return true
          //   }
          // }
          // return false
        }
        preOrderTraverse(callback: (key: number) => void) {
          //先序遍历
          this.preOrderTraverseNode(this.root, callback)
        }
        inOrderTraverse(callback: (key: number) => void) {
          //中序遍历
          this.inOrderTraverseNode(this.root, callback)
        }
        postOrderTraverse(callback: (key: number) => void) {
          //后序遍历
          this.postOrderTraverseNode(this.root, callback)
        }
      
        min() {
          //返回数中最小的键
          if (this.root === null) return null
          return this.getMinNode(this.root).key
        }
        max() {
          //返回数中最大的键
          if (this.root === null) return null
          return this.getMaxNode(this.root).key
        }
        remove(key: number) {
          //从树中移除某个键
          this.root = this.removeNode(this.root, key)
        }

    }

    class RedBlackTree extends BinarySearchTree{
        root:RBNode<number>;
        constructor(){
            super()
        }

        insert(key:number){
            if(this.root == null){
                this.root = new RBNode(key);
                this.root.color = ColorType.Black;
            }else{
                const newNode = this.insertNode(this.root,key);
                this.fixTreeProperties(newNode);    
            }            
        }


        insertNode(node:RBNode<number>,key:number){
            if(key > node.key){
                if(node.right === null){
                    node.right = new RBNode(key);
                    node.right.parent = node;
                }else{
                    return this.insertNode(node.right,key);
                }
            }else{
                if(node.left === null){
                    node.left = new RBNode(key);
                    node.left.parent = node;
                }else{
                    return this.insertNode(node.left,key);
                }
            }
        }

        private fixTreeProperties(node:RBNode<number>){
            while(node && node.parent && node.parent.isRed() && node.isRed()){
                let parnet = node.parent;
                const grandParent = parnet.parent;
                if(grandParent && grandParent.left == parnet){
                    //p =G.L
                    const uncle = grandParent.right;
                    if(uncle && uncle.isRed()){
                        grandParent.color = ColorType.Red;
                        parnet.color = ColorType.Black;
                        uncle.color = ColorType.Black;
                        node = grandParent;
                    }else{
                        if(node === parnet.right){
                            this.rotaionRR(parnet);
                            node = parnet;
                            parnet = node.parent;
                        }
                        this.rotaionLL(grandParent);
                        parnet.color = ColorType.Black;
                        grandParent.color = ColorType.Red;
                        node.parent;
                    }
                }else{
                    const uncle = grandParent.left;
                    if(uncle && uncle.isRed()){
                        grandParent.color = ColorType.Red;
                        uncle.color = ColorType.Black;
                        parnet.color = ColorType.Black;
                        node = grandParent;
                    }else{
                        if(node == parnet.left){
                            this.rotaionLL(parnet);
                            node = parnet;
                            parnet = grandParent;
                        }
                    }

                    this.rotaionRR(grandParent);
                    parnet.color = ColorType.Black;
                    grandParent.color =ColorType.Red;
                    node = parnet;
                }
            }
        }

        private rotaionRR(node:RBNode<number>){
            const tmp = node.right;
            node.right = tmp.left;

            if(tmp.left && tmp.left.key){
                tmp.left.parent = node.right;
            }

            tmp.parent = node.parent;

            if(!tmp.parent){
                this.root = tmp.parent;
            }else{
                if( tmp.parent.left== node){
                    tmp.parent.left = tmp;
                }else{
                    tmp.parent.right = tmp;
                }
            }
            tmp.left = node;
            node.parent = tmp;
        }

        private rotaionLL(node:RBNode<number>){
            const tmp = node.left;
            node.left = tmp .right

            if(tmp.right && tmp.right.key){
                tmp.right.parent = node
            }

            tmp.parent = node.parent;

            if(!tmp.parent){
                this.root = tmp.parent;
            }else{
                if(tmp.parent.left == node){
                    tmp.parent.left = tmp;
                }else{
                    tmp.parent.right = tmp;
                }
            }
            tmp.left = node;
            node.parent = tmp;
        }

    }
}