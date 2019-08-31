// $el: 挂载的DOM元素
// $options: 当前的实例的参数
// $refs: 获取DOM元素
// $set : 向data的对象新增一些属性
// $delete ：删除
// $destroy ： 销毁vue的实例
// $mount : 挂载
// $on : 订阅
// $emit : 发布
// $off : 移出
// $forceUpdate: 强制更新，不能在beforeUpdate和updated使用，会递归
// $nextTick：
    // 当数组发生了改变之后，DOM需要重新渲染刷新，但是DOM渲染是异步的，下面的代码不会等到DOM渲染完毕再往下运行；
    // VUE中DOM的渲染是异步的；
    // $nextTick也需要传递一个回调函数；会当真实的DOM异步加载完毕，会立即执行$nextTick绑定的回调函数；
    // this.$nextTick(()=>{
    //     console.log(this.$refs.oLis.length);
    // });