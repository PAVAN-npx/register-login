const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const  Usermodel= require('./models/users');
const  Brand= require('./models/Item');
const { stringify } = require('flatted');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://pavan:pavan@2004@cluster0.ssambzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const ur="mongodb://127.0.0.1:27017/test";

const getData = async () => {
    await mongoose.connect(process.env.uri);
    console.log("database connected");
   
}

getData();


app.get('/get1', async(req, res) => {

    try{
        const data= await Brand.find()
        res.send(data);
        console.log(data)
    }

    

    catch (err) {
        res.status(500).json({ error: err.message });
    }

   
  
  

});
app.post('/register', async(req, res) => {
   
   const {name,pass,mail}=req.body;

  try{
      let brand = await Brand.create({
     name:name,
     pass:pass,
     mail:mail
      })

    
    res.send(brand);


  }
   
  catch(error){
console.log(error)
  }
  

})

app.post('/login', async(req, res) => {
   
  const {name,pass}=req.body;
await Brand.findOne({name:name})
.then(user=>{
  console.log(user);
  if(user){
    if(user.pass==pass){
      res.json("success")
    
      console.log("success")
  }
  else{
    res.json("fail")
    console.log("fail")
  }
}})

})

// Listen on PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
