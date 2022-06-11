const mongoose = require("mongoose");
const { db } = require("./models/customer");
const customer = require("./models/customer");


//map global promise - get rid of wrining
mongoose.Promise=global.Promise;
//connect to DB
mongoose.connect('mongodb://localhost:27017/customercli');

//immport model 

const Customer=require('./models/customer');

//Add customer

const addCustomer =(customer)=>{
    Customer.create(customer).then(customer=>{
        console.info('New Customer Added');
       db.close()
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
    db.close()
})
}
//update Customer 
const  updateCustomer =(_id,customer)=>{
Customer.update({_id},customer)
.then(customer =>{
    console.info('customer is Updateed')
   db.close();
});
}
//remove Customer 
const  removeCustomer =(_id)=>{
Customer.remove({_id} )
.then(customer =>{
    console.info('customer is remove')
  db.close();
})
}

//LIst all customers
const listCustomers =()=>{
 customer.find()
 .then(customers=>{
    console.info(customers);
    console.info(`${customers.length}customers`);
    db.close(); 
 });
}

//Export ALL Methods
module.exports={
    addCustomer,
    findCutomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}