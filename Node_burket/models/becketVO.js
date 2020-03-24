const mongoose = require("mongoose");
const bucketVO = mongoose.Schema({
  b_target: String,
  b_startDate: String,
  b_goalDate: {
    type: String,
    default: ""
  },
  b_important: String,
  b_wise: String
});

module.exports = mongoose.model("tbl_bucket", bucketVO);
