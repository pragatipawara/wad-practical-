function saveData()
{
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

```
let user = {
    name: name,
    email: email,
    password: password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Registration Successful!");

console.log(user);
```

}
