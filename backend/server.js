const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();

const app = express()
app.use(express.json())
app.use(cors())
const productSchema = mongoose.Schema({
    title:String,
    image:String,
    desc:String,
    price:Number,
    count:Number,
    totalPrice:Number
})

const Products = mongoose.model("Products", productSchema)

app.get("/api/products", async (req,res)=>{
    const resp = await Products.find()
    res.send(resp)
});

app.get("/api/products/:id", async (req,res)=>{
    const {id} = req.params
    const resp = await Products.findById(id)
    res.send(resp)
})

app.post("/api/products",async (req,res)=>{
    const {title,image,desc,price,count,totalPrice} = req.body
    const newProduct = new Products({
      title: title,
      image: image,
      desc: desc,
      price: price,
      count: count,
      totalPrice: totalPrice,
    });
    await newProduct.save()
    res.send("Item created")
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Products.findByIdAndUpdate(id,{...req.body});
  res.send(resp);
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Products.findByIdAndDelete(id);
  res.send("Item deleted");
});

mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(resp=>{console.log("DB CONNECTED")})
    .catch(err=>{console.log("db NOt connected")})

app.listen(process.env.PORT,(resp)=>{
    console.log("Port connected")
});
