const express = require("express");
const app = express();

const STU_ARR = [
  { id: 1, name: "张三", age: 18 },
  { id: 2, name: "李四", age: 19 },
  { id: 3, name: "王五", age: 20 },
];

// 解析req.body中的数据
app.use(express.urlencoded({ extended: true }));
// 解析json格式的数据
app.use(express.json());

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

// 定义一个登陆的路由
app.post("/login", (req, res) => {
  // 获取请求参数
  const { username, password } = req.body;
  // 判断用户名和密码是否正确
  if (username === "admin" && password === "123123") {
    // 返回登陆成功的信息
    res.send({
      status: 200,
      msg: "登陆成功",
      data: {
        username,
        password,
      },
    });
  } else {
    // 返回登陆失败的信息
    res.send({
      status: 403,
      msg: "登陆失败",
      data: "用户名或密码错误",
    });
  }
});

// 定义学生信息相关的路由
app.get("/students", (req, res) => {
  // 设置响应头
  // 若设置指定值，则只能设置一个域名
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 返回学生信息列表
  // console.log('收到请求');
  res.send({
    status: 200,
    msg: "获取成功",
    data: STU_ARR,
  });
});

// 定义获取指定学生信息的路由
// app.post('/students/:id', (req, res) => {
//     // 获取要获取的学生id
//     if(req.params.id==null){
//         res.send({
//             status: 403,
//             msg: '获取失败',
//             data: null
//         })
//     }
//     const id = req.params.id
//     // 根据id查找学生信息
//     const stu = STU_ARR.find(item => item.id == id)
//     // 返回学生信息
//     res.send({
//         status: 200,
//         msg: '获取成功',
//         data: stu
//     })
// })

// 定义添加学生的路由
app.post("/students", (req, res) => {
  // 获取要添加的学生信息
  // 直接解构也可
  const stu = req.body;
  // 生成学生id
  stu.id = STU_ARR[STU_ARR.length - 1].id + 1;
  // 将学生信息添加到数组中
  STU_ARR.push({
    id: stu.id,
    name: stu.name,
    age: stu.age,
  });
  // 返回添加结果
  res.send({
    msg: "添加成功",
    stu: STU_ARR,
  });

  // console.log(req.body);
  // res.send({
  //     msg: '添加成功',
  //     stu:req.body
  // })
});

// 删除学生信息的路由
// app.delete('/students/:id', (req, res) => {
//     // 获取要删除的学生id
//     const id = req.params.id
//     // 根据id删除学生信息
//     const index = STU_ARR.findIndex(item => item.id == id)
//     STU_ARR.splice(index, 1)
//     // 返回删除结果
//     res.send({ msg: '删除成功' })
// })

app.listen(3000, () => {
  console.log(
    "Server is running on port 3000" + "\n" + "http://localhost:3000/"
  );
});
