const { UserRegistrationSchema } = require("./index");

module.exports.startSession = async () => {
  return await UserRegistrationSchema.startSession();
};

module.exports.createUser = async (userData, session) => {
  const user = new UserRegistrationSchema(userData);
  return await user.save({ session });
};
