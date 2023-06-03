const express = require('express')
const app = express()

const STU_ARR = [
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 19 },
    { id: 3, name: '王五', age: 20 },
]

// 解析req.body中的数据
app.use(express.urlencoded({ extended: true }))
// 解析json格式的数据
app.use(express.json())

// 定义学生信息相关的路由
app.get('/students', (req, res) => {
    // 返回学生信息列表
    res.send(STU_ARR)
})

// 定义添加学生的路由
app.post('/students', (req, res) => {
    // 获取要添加的学生信息
    // 直接解构也可
    const stu = req.body
    // 生成学生id
    stu.id = STU_ARR[STU_ARR.length - 1].id + 1
    // 将学生信息添加到数组中
    STU_ARR.push({
        id: stu.id,
        name: stu.name,
        age: stu.age
    })
    // 返回添加结果
    res.send({
        msg: '添加成功',
        stu: STU_ARR
    })

    // console.log(req.body);
    // res.send({
    //     msg: '添加成功',
    //     stu:req.body
    // })
})

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
    console.log('Server is running on port 3000' + '\n' + 'http://localhost:3000/')
}
)