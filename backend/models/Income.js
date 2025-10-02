const mongoose = require("mongoose");

const IncomeSchema=new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    icon:{type:String},
    source:{type:String,required:true}, //Example : Salary, Freelance, etc
    amount:{type:Number, required:true},
    date: {type:Date,default:Date.now},

},{timestamps:true});
// In models/Income.js
// const IncomeSchema = new mongoose.Schema({
//     userId: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
//     icon:{type:String},
//     source:{type:String,required:true},
//     amount:{type:Number, required:true},
//     date: {type:Date,default:Date.now},
//     type: {type: String, default: "income"} // ← Add this field
// },{timestamps:true});

module.exports=mongoose.model("Income",IncomeSchema);