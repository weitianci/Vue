// 0、{{}}：
    // 可进行字符串拼接,数学运算,支持三元运算符
    // {{a+b}}=ab   {{1+2}}=3   {{1+2>5?true:false}}
// 1、v-text：
    // 给元素赋值文本内容的指令，innerText,如果元素有内容会被覆盖，防止{{}}在页面上显示，功能和{{}}一样
    // <div v-text="msg"></div>===<div>{{msg}}</div> 
// 2、v-html：
    // 可以识别标签
// 3、v-show：
    // 显示隐藏，频繁的切换dom时使用，优化性能
// 4、v-if、v-else、v-else-if：
    // 直接控制DOM节点，判断true或false，控制显示或隐藏
// 5、v-for：
    // 可以遍历数组、字符串、数子、对象
    // v-for="(item,index) in arr" 
    // 如果是数组遍历：item代表数组每一项，index代表索引 arr代表循环的数组
    // 如果是对象遍历：item代表每个对象的值，index代表每个对象的键 arr代表循环的对象
    // v-fot="0 in 10" 输出0到10之间的数字
// 6、v-on： 
    // v-on 缩写 @
    // v-on:click="fn($event,a)"
    // fn(e,a){
        // 1、如果绑定时没有小括号，定义时有参数，那么第一个参数是事件对象
        // 2、如果绑定时有小括号，那么第一个参数就是undefined
        // 3、如果绑定时有小括号，并且需要事件对象，需要在绑定的小括号中用$event占位 
    // }
// 7、v-bind：
    // v-bind 缩写 ：
    // 值可以是数组，对象，字符串
    // <div :class = {x:true}></div> 对象情况下第二个参数为出执行第一个参数
    // <div :class = [x,y]></div> 数组情况下多个css样式组合在一起
    // <div :style = []>
    // 将行内属性转换为动态属性，去获取data中的数据
// 8、v-model:
    // 双向绑定,一般用于表单元素
    // <input type="text" v-model="msg">
// 9、v-slot：
// 10、v-pre：
// 11、v-cloak：
    // 在父元素添加v-cloak后，父元素下所有的子元素都会解决{{}}闪烁问题和v-text类似，使用时需要添加css样式[v-cloak]{display:none}
// 12、v-once：
    // 只绑定一次 当数据再次发生变化 也不会导致页面刷新