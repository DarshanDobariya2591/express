const express = require ("express");
const sendmali = require("./controlers/sendmail");
const app = express();
let PORT = 5000;

const sendmail = require("./controlers/sendmail");

app.get("/", (req,res) => {
    res.send("i am darshann dobariya");
});

app.get("/mail", sendmail);

const start =  async () => {
    try{
        app.listen(PORT, () => {
            console.log(`i am live in port no ${PORT}`);
        });
    } catch(error) {}                                                   
};

start();    
    