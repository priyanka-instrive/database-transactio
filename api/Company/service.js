const { CompanySchema } = require("./index");

module.exports.createCompany = async (companyData, session) => {
  const company = new CompanySchema(companyData);
  return await company.save({ session });
};
