const { Schema, model } = require('mongoose');

// DEFINE SCHEMA
const bookmarkSchema = new Schema ({
  title: {type: String, required: true},
  url: {type: String, required: true},
  tags: [{type: String}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {
  timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema)
