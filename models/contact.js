const {Schema, model} = require("mongoose");
const Joi = require("joi");
const {handleSchemaValidationErrors} = require("../helpers")

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
}, {versionKey: false, timestamps: true});


const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.bool(),
  });


const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool(). required(),
})

const schemas = {
    addSchema,
    updateFavoriteSchema,
}

const Contact = model("contact", contactSchema);



contactSchema.post("save", handleSchemaValidationErrors)

module.exports = {
    schemas,
    Contact,
  }

