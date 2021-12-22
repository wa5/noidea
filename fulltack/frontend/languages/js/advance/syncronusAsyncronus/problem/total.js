import snehaprice from './sneha.js'
var final



 async function add(){
    var dishprice1=20
    var dishprice2=30
    var dishprice3=40

   var snp=await setTimeout(()=>{
     snp=snehaprice
console.log(dishprice1+dishprice2+dishprice3+snp)
    return dishprice1+dishprice2+dishprice3+snp
    },2000)
    console.log(">>>>",snp)
    
    return  snp
}



add().then((data)=>{
    console.log("gfgfgf",data)
 
})
