const mongoose = require("mongoose");


//map global promise - get rid of wrining
mongoose.Promise=global.Promise;
//connect to DB
const db = mongoose.connect('mongodb://localhost:27017/customercli');

//immport model 

const Customer=require('./models/customer');

//Add customer

const addCustomer =(customer)=>{
    Customer.create(customer).then(customer=>{
        console.info('New Customer Added');
        // db.close()
    });
}
//find customer
const findCutomer =(name)=>{
    //Make case insenstive
const search =new RegExp(name,'i') ;
Customer.find({$or:[{firstname: search},{ lastname: search}]})
.then(customer=>{
    console.info(customer);
    console.info(`${customer.length}matches`);
    // db.close()

})

}
//Export ALL Methods
module.exports={
    addCustomer,
    findCutomer
}