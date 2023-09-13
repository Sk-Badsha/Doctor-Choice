const schema_mongoose = require('mongoose');

const patientSchema = schema_mongoose.Schema(
    {
         
    id: {type: String},
    Firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    mobileno: {type: String},
    address1: {type: String},
    address2: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
    password: {type: String},
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('patient_details_collection', patientSchema);