const fs=require("fs")
fs.writeFile("welcome.txt","Hello Node",(err)=>{err? console.log("error",err) :console.log("success") })
fs.readFile("./hello.txt","utf-8",(err,data)=>{
    console.log(data)
})