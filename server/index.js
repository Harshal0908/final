const express = require('express');
const app = express()
const mysql = require("mysql")
const cors =  require("cors")
const port = process.env.PORT

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "abc12345",
    database : "loginsystem",
})

app.get('/', (req,res) => {
    res.send("SERVER IS WORKING");
 //   db.query("INSERT INTO login (username,password) VALUES ('HAR','1234')",(err,result) =>{
 //       console.log("1")
 //       if(err){
 //           console.log(err);
 //       }
 //       else
 //       {
 //           console.log("INSERTED SUCCESSFULLY");
 //       }
 //   })
} )

app.post("/login", (req,res)=>{
    res.send("login page");
    const user = req.body.username;
    const pass = req.body.password;
    console.log("1234")
    db.query("SELECT * FROM login WHERE username = ? AND password = ?",[user,pass],(err,result) =>{
        if(err){
            console.log(err);
        }
        else
        {
            if(result.length > 0){
                console.log("LOGIN SUCCESSFUL");
            }
            else{
                console.log("WRONG USERNAME OR PASSWORD");
            }
        }
        
    })

})

app.post("/appointment" ,(req,res)=>{
    const name = req.body.name;
    const number = parseInt(req.body.number, 10);
    console.log(typeof(number));
    const date = req.body.date;
    const time = req.body.time;

    db.query("INSERT INTO appointment (name, phone, date , time) VAlUES (?,?,?,?)",[name,number,date,time],(err,results) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("SUCCESFULLY SAVED APPOINTMENT AT THE BACKEND");
        }
    })
})

app.post("/inventory" ,(req,res)=>{
    const company = req.body.company;
   // const number = parseInt(req.body.number, 10);
    //console.log(typeof(number));
    const medicine = req.body.medicine;
    const stock = req.body.stock;
    const dealer_number = req.body.dealer_number;
    console.log("YAHA AA GYAA")
    console.log(company);
    console.log(medicine);
    console.log(stock);
    console.log(dealer_number);

    db.query("INSERT INTO inventory (company, medicine , stock, Dealer_phone) VAlUES (?,?,?,?)",[company,medicine,stock,dealer_number],(err,results) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("SUCCESFULLY SAVED INVENTORY ENTRY AT THE BACKEND");
        }
    })
})
app.post("/dailyroutine1",(req,res)=>{
    const sakali = req.body.sakali;
    const ratri = req.body.ratri;
    const snaan = req.body.snaan;
    const vyaayam = req.body.vyaayam;
    const aahar = req.body.aahar;
    const nashtaSakaal = req.body.nashtaSakaal;
    const nashtaSandhyakal = req.body.nashtaSandhyakal;
    const jewanSakal = req.body.jewanSakal;
    const jewanSandykal = req.body.jewanSandykal;
    const kaddhaanya = req.body.kaddhaanya;
    const besan = req.body.besan;
    const bakery = req.body.bakery;
    const dugdhjanya = req.body.dugdhjanya;
    const ambavlele = req.body.ambavlele;
    const masala = req.body.masala;
    const virudhar = req.body.virudhar;
    console.log(sakali);
    console.log(ratri);
    console.log(snaan);
    console.log(vyaayam);
    console.log(aahar);
    console.log(nashtaSakaal);
    console.log(nashtaSandhyakal);
    console.log(jewanSakal);
    console.log(jewanSandykal);
    console.log(kaddhaanya);
    console.log(besan);
    console.log(bakery);
    console.log(dugdhjanya);
    console.log(ambavlele);
    console.log(masala);
    console.log(virudhar);
})

app.post("/dailyroutine2",(req,res)=>{
    const mansahar = req.body.mansahar;
    const tel = req.body.tel;
    const sukameva = req.body.sukameva;
    const fade = req.body.fade;
    const thandapadatha = req.body.thandapadatha;
    const palebhajya = req.body.palebhajya;
    const fadbhajya = req.body.fadbhajya;
    const dhanya = req.body.dhanya;
    const iter = req.body.iter;
    console.log("DAILYROUTINE2")
    console.log(mansahar);
    console.log(tel);
    console.log(sukameva);
    console.log(fade);
    console.log(thandapadatha);
    console.log(palebhajya);
    console.log(fadbhajya);
    console.log(dhanya);
    console.log(iter);
})
app.post("/personal/insert" ,(req,res)=>{
    console.log("HURRAY");
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone = req.body.phone;
    const occupation = req.body.occupation;
    const age = req.body.age;
    const email = req.body.email;
    const address = req.body.address;
    const startDate = req.body.startDate;
    const birthDate = req.body.birthDate;
    const drop1 = req.body.drop1;
    const vaivahik = req.body.vaivahik;

    db.query("INSERT INTO patientdetails (name, email , gender, phone) VAlUES (?,?,?,?)",[first_name,email,"Male",phone],(err,results) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("SUCCESFULLY SAVED INVENTORY ENTRY AT THE BACKEND");
        }
    })

    console.log(first_name)
    console.log(last_name)
    console.log(phone)
    console.log(occupation)
    console.log(age)
    console.log(email)
    console.log(address)
    console.log(startDate)
    console.log(birthDate)
    console.log(drop1)
    console.log(vaivahik)
})

app.post("/medical/insert" ,(req,res)=>{
    console.log("HURRAY1");
    const purvavrut = req.body.purvavrut;
    const shastra = req.body.shastra;
    const kulvrutant = req.body.kulvrutant;
    const pratidin = req.body.pratidin;
    const pratisaptah = req.body.pratisaptah;
    const vyasan = req.body.vyasan;

    console.log(purvavrut)
    console.log(shastra)
    console.log(kulvrutant)
    console.log(pratidin)
    console.log(pratisaptah)
    console.log(vyasan)
})

app.get("/get/appointment" ,(req,res)=>{
    //console.log("HURRAY1");
    db.query("SELECT * FROM appointment",(err,results) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
   
})

app.get("/get/inventory" ,(req,res)=>{
    //console.log("HURRAY1");
    db.query("SELECT * FROM inventory",(err,results) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
   
})

app.get("/get/patientDetails" ,(req,res)=>{
    //console.log("HURRAY1");
    db.query("SELECT * FROM patientdetails",(err,results) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
   
})

app.listen(port||3001,() => {
    console.log("Running on port ${port}");
})


