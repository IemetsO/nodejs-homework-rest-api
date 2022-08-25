const {isValidObjectId} = require("mongoose");
const {RequestError} = require("../helpers");

const isValidId = (req, _, next) => {
    const {contactId} = req.params;
    console.log(req.params)
    const isCorrectId = isValidObjectId(contactId);

    if (!isCorrectId) {
        const error = RequestError(400, `${contactId} is not correct`);
        next (error);
    }
    next();
}

module.exports = isValidId;