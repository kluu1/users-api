const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String
});  

const geoSchema = new Schema({
  lat: String,
  lng: String,
});

const addressSchema = new Schema({
  _id: String,
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: geoSchema
});

const userSchema = new Schema({
  _id: String,
  id: Number,
  name: String,
  email: String,
  address: addressSchema,
  phone: String,
  website: String,
  company: companySchema,
}, { collection: 'users' });

module.exports = userSchema;