// 引入jwt
const jwt = require("jsonwebtoken");

// 创建一个对象
const obj = {
  name: "孙悟空",
  age: 18,
  gender: "男",
  address: "花果山",
};

// 使用jwt对对象进行加密
// 参数1：加密的对象
// 参数2：加密的秘钥
// 参数3：加密的配置项 expiresIn:过期时间
// 参数4：加密后的回调函数

// jwt.sign(obj,'hello',{expiresIn:'1h'},(err,token)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(token);
//     }
// }
// )

const token = jwt.sign(obj, "hello", { expiresIn: "1h" });
// console.log(token);
// 服务器收到客户端的token后，需要对token进行解密
// 参数1：客户端传递的token
// 参数2：加密的秘钥
// 参数3：解密后的回调函数

jwt.verify(token, "hello", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
