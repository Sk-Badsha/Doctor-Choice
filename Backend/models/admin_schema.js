const schema_mongoose = require('mongoose');

const adminSchema = schema_mongoose.Schema(
    {       
    id: {type: String},
    email: {type: String},
    password: {type: String},
    }, 
    {
       timestamps: true
    }
    );
    module.exports = schema_mongoose.model('admin_details_collection', adminSchema);