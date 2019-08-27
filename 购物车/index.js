let vm = new Vue({
    el: '#app',
    data: {
        checkAll:false,
        products: [],
    },
    created() {
        this.getData();
    },
    methods: {
        getData(){
            axios.get('./carts.json').then(data => {
                this.products = data.data;
                this.checkOne();
            }, err => {
                console.log(err);
            });
        },
        checkOne(){
            this.checkAll = this.products.every(item=>{
                return item.isSelected
            })
        },
        changeAll(){
            this.products.forEach(item => {
                item.isSelected = this.checkAll;
            });
        },
        remove(val){
            this.products=this.products.filter(item=>item!==val);
        },
        sum(){
            return this.products.reduce((prev,next)=>{
                if (next.isSelected) {
                    return prev+next.productPrice*next.productCount
                }else{
                    return prev
                }
            },0)
        }
    },
    filters:{
        toFixed(num){
            return "￥"+num.toFixed(2)
        }
    },
});