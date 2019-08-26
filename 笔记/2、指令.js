// 0、{{}}：可进行字符串拼接,数学运算,支持三元运算符
    // {{a+b}}=ab   {{1+2}}=3   {{1+2>5?true:false}}
// 1、v-text：防止{{}}在页面上显示，功能和{{}}一样
    // <div v-text="msg"></div>===<div>{{msg}}</div> 
// 2、v-html：
// 3、v-show：操作样式，频繁的切换dom时使用
// 4、v-if：
// 5、v-else：
// 6、v-else-if：
// 7、v-for：
// 8、v-on：
// 9、v-bind：
// 10、v-model:双向绑定,一般用于表单元素
    // <input type="text" v-model="msg">
// 11、v-slot：
// 12、v-pre：
// 13、v-cloak：
// 14、v-once：