function zero(a,b){
  return  0
}
module.exports ={
  add:(...args)=>{
    return args.reduce((prev,cur)=>{
      //数组的方法，用来累加数组，prev：初始值，return的值给了prev，自动返回prev，cur现在的数组值 
      return prev+cur;
    })
  },
  mul:(...args)=>{
    return args.reduce((prev,cur)=>{
      return prev*cur;
    })
  },
  cover:(a,b)=>{
    if(a >b){
      return a;
    }else if(a <b){
      return b;
    }else{
      return zero(a ,b);
    }
  }
}
