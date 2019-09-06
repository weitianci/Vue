// 在实例生成以及后期的数据中，有8个钩子函数
// 1-4 初始化实例时会默认按照先后顺序执行，更新数据时，不再执行
// 1、beforeCreate
    // 实例、组件通过new Vue() 创建出来之后会初始化事件和生命周期，然后就会执行beforeCreate钩子函数，这个时候，数据还没有挂载呢，只是一个空壳，无法访问到数据和真实的dom，一般不做操作

// 2、created
    // 挂载数据，绑定事件等等，然后执行created函数，这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数，在这里可以在渲染前倒数第二次更改数据，不会触发其他的钩子函数，一般可以在这里做初始数据的获取

// 3、beforeMount
    // 接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染，然后执行beforeMount钩子函数，在这个函数中虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取

// 4、mounted
    // 接下来开始render，渲染出真实dom，然后执行mounted钩子函数，此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情...

// 5、beforeUpdate
    // 当组件或实例的数据更改之后，会立即执行beforeUpdate，然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染，一般不做什么事儿

// 6、updated
    // 当更新完成后，执行updated，数据已经更改完成，dom也重新render完成，可以操作更新后的虚拟dom

// 7、beforeDestroy
    // 当经过某种途径调用$destroy方法后，立即执行beforeDestroy，一般在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等

// 8、destroyed
    // 组件的数据绑定、监听...去掉后只剩下dom空壳，这个时候，执行destroyed，在这里做善后工作也可以
let vm = new Vue({
    el: '#app',
    data: {
        arr:["a,","b"]
    },
    // 即将数据绑定
    beforeCreate() {
        // 不能获取Data中的数据
        // 不能操作DOM
    },
    // 数据绑定
    created() {
        // 可以获取data中的数据；但是不能操作DOM；
        // 可以在数据渲染之前更改data中的数据，优化性能
        this.arr=["d","v"];
    },
    // 即将挂载
    beforeMount() {
        // 不能操作DOM
        // 在这个钩子函数之前，判断是否有el，template
    },
    // 挂载
    mounted() {
        // 如果el，template没有绑定元素，执行该函数
        // 挂载之后，把vue实例生成虚拟的DOM挂载真实的DOM上
        // 可以最终获得DOM元素
    },
    // 即将更新数据
    beforeUpdate() {
        
    },
    // 更新数据
    updated() {
        // 重新渲染和修补虚拟DOM
    },
    // 即将销毁：子组件，watchers程序监视器,事件监听器
    beforeDestroy() {
        
    },
    // 销毁
    destroyed() {
        // 销毁后视图不再更新
    },
});