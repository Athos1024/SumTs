var structure,sort;console.log("1111"),structure=structure||{},new class{constructor(){this.list=[]}push(t){return this.list.push(t)}pop(){return this.list.pop()}isEmpty(){return!!this.list.length}size(){return this.list.length}peek(){return this.list[this.list.length-1]}clear(){this.list=[]}toString(){return this.list.toString()}},function(t){t.Node=class{constructor(t){this.element=t,this.next=null}};t.DoublyNode=class{constructor(t){this.element=t,this.prev=null,this.next=null}},t.defaultEquals=function(t,r){return t===r};class r{constructor(t){this.key=t,this.right=null,this.left=null}}t.TreeNode=r;t.RBNode=class extends r{constructor(t){super(t),this.parent=null,this.color=0}isRed(){return 0==this.color}}}(structure=(structure=structure||{})||{}),structure=(structure=(structure=(structure=(structure=(structure=structure||{})||{})||{})||{})||{})||{},function(){function t(t){return function r(s,e,u){if(1<s.length){let t=o(s,e,u);console.log("index",t),e<t-1&&r(s,e,t-1),t<u&&r(s,t,u)}}(t,0,t.length-1),t}function o(t,r,s){var e,u,o,n=t[Math.floor((r+s)/2)];let l=r,i=s;for(;l<=i;){for(;t[l]<n;)l++;for(;t[i]>n;)i--;l<=i&&(e=t,u=l,o=i,[e[u],e[o]]=[e[o],e[u]],l++,i--)}return l}var r=[15,4,53,1,3,3,5,45,45];((structure||(structure={})).quickSort=t)(r),console.log(r)}(),sort=(sort=(sort=(sort=(sort=(sort=sort||{})||{})||{})||{})||{})||{};