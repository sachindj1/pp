const express= reuqire("express");
const app= express();

app.get("/", ()=>{
res.send("hello world hey !!!");


})

app.listen(5000, ()=>{
console.log("app is listening on port 5000")

})
