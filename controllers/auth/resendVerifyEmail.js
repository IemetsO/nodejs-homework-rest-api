const { User } = require("../../models/user");
const { RequestError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "Not found");
  }
  if (user.verify) {
    throw RequestError(400, "User already verified");
  }
  const mail = {
    to: email,
    subject: "Confirm registration",
    html: `<a href = "http://localhost:3000/api/auth/verify/${user.verificationToken}" target = "_blank">Follow link for verification<a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Email verify resend",
  });
};

module.exports = resendVerifyEmail;
