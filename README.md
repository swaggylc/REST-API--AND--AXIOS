## AJAX简介

#### *CORS（跨域资源共享）*

##### *跨域请求*

*如果两个网站的完整的域名不相同，那么就是跨域请求*

*跨域需要检查三个地方*

*协议  http/https*

*域名  localhost/*

端口号 3000/8080

*如果三个地方有一个不同，那么就是跨域请求*

当我们通过Ajax发送请求的时候，浏览器会自动检查是否是跨域请求

​	如果是跨域请求，那么浏览器会自动阻止js读取服务器的数据

​	如果不是跨域请求，那么浏览器会自动读取服务器的数据

##### *解决跨域请求的方案*

*在服务器中设置一个允许跨域的头*

Access-Control-Allow-Origin: * 

*这个头的意思是允许所有的域名都可以访问服务器的数据*

```JS
app.use((req, res, next) => {
  // 设置响应头
  // 若设置指定值，则只能设置一个域名
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置允许请求的方式
  res.setHeader("Access-Control-Allow-Methods", "*");
  // 设置允许携带的请求头
  res.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应头
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  // 放行
  next();
});
```



#### *fetch*

*fetch是xhr的升级版，采用的是promise的方式处理请求*

*作用和AJAX一样，都是用来发送请求的，但使用起来更加友好*

*fetch是原生js支持的一种AJAX请求的方式*

```js
fetch('http://localhost:3000/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: '小明',
                age: 18
            })
        }).then((res) => {
            if (res.status ==== 200) {
                return res.json()
            } else {
                console.log('请求失败');
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log("出现了错误" + err);
        }
```

```js
fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    // 通过请求头来指定数据的类型
                    'Content-Type': 'application/json'
                },
                // 通过body去发送数据时，必须通过设置请求头来指定数据的类型
                body: JSON.stringify({
                    id: 11,
                    name: '张三',
                    age: 18
                })
            })
```





















