const { Schema, default: mongoose } = require("mongoose");
const { dbConn } = require("../../system/db/mongo");

const companySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    industry: { type: String, required: true },
    registration_number: { type: String, required: false },
    phone_number: { type: String, required: false },
    email: { type: String, required: false },
    website: { type: String, required: false },
  },

  {
    timestamps: true,
  }
);

const CompanySchema = dbConn.model("Company", companySchema, "Companies");

module.exports = {
  CompanySchema,
};
