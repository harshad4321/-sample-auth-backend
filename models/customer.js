const mongoose =require ('mongoose');

//customer Schema 
const customerSchena = mongoose.Schema({
    firstname:{type:String },
    lastname:{type:String},
    phone:{type:String},
    email:{type:String},

});


//Define and export 

module.exports=mongoose.model('customer',customerSchena);