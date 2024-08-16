// api/User/controller.js

const userService = require("./service");
const companyController = require("../Company/controller");

module.exports.registerUserWithCompany = async (req, res) => {
  const session = await userService.startSession();
  session.startTransaction();

  try {
    const companyData = req.body.company;

    const company = await companyController.createCompany(companyData, session);

    const userData = {
      ...req.body.user,
      company_id: company._id,
    };

    const user = await userService.createUser(userData, session);

    await session.commitTransaction();

    res.status(201).json({
      message: "User and company created successfully!",
      data: { user, company },
    });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({
      message: "Transaction failed, rolled back",
      error: error.message,
    });
  } finally {
    session.endSession();
  }
};
