const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { docsTypes } = require('../config/docs');
const { convertirTituloASlug } = require('../utils/stringUtils');

const docSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
      private: true,
    },
    type: {
      type: String,
      enum: [docsTypes.PDF],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    collection_name: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
docSchema.plugin(toJSON);
// docSchema.plugin(paginate);

/**
 * Check si el documento existe
 * @param {string} collection_name - El nombre de la colección
 * @returns {Promise<boolean>}
 */
docSchema.statics.existCollection = async function (collection_name) {
  const doc = await this.findOne({ collection_name });
  return doc;
};

docSchema.pre('save', async function (next) {
  const doc = this;
  doc.collection_name = convertirTituloASlug(doc.title)
  
  next();
});

/**
 * @typedef Docs
 */
const Docs = mongoose.model('Doc', docSchema);

module.exports = Docs;
