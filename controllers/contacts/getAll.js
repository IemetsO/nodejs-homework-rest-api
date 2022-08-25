const {Contact} = require("../../models/contact");

const getAll = async (_, res) => {
      const result = await Contact.find({}, "-createdAt -updateAt");
      res.json(result);
  }

  module.exports = getAll;