const service = require("./service");

module.exports.createCompany = async (companyData, session) => {
  try {
    const company = await service.createCompany(companyData, session);
    return company;
  } catch (error) {
    throw new Error(`Failed to create company: ${error.message}`);
  }
};
