const { model, Schema, mongoose } = require("mongoose");

const AffiliateStatSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = model("AffiliateStat", AffiliateStatSchema);

module.exports = AffiliateStat;
