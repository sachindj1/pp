const express= reuqire("express");
const app= express();

app.get("/", ()=>{
res.send("hello world !!!");


})

app.listen(5000, ()=>{
console.log("app is listening on port 5000")

})