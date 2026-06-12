const express = require('express');

const app = express();

app.use(express.json());

let students = [
{
id:1,
name:"Pragati"
}
];

/* CREATE */

app.post('/student',(req,res)=>{

```
students.push(req.body);

res.send("Student Added");
```

});

/* READ */

app.get('/student',(req,res)=>{

```
res.json(students);
```

});

/* UPDATE */

app.put('/student/:id',(req,res)=>{

```
let id = req.params.id;

students = students.map(student =>
    student.id == id
    ? req.body
    : student
);

res.send("Student Updated");
```

});

/* DELETE */

app.delete('/student/:id',(req,res)=>{

```
let id = req.params.id;

students = students.filter(
    student => student.id != id
);

res.send("Student Deleted");
```

});

app.listen(3000,()=>{

```
console.log("Server Running");
```

});
