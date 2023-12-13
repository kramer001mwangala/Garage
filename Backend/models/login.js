const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    surName: {
        type: String,
        
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

})

const Customer = mongoose.models.Customer || mongoose.model.(`customer`, customerSchema);


module.exports = Customer;