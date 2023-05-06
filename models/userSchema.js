import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
      name: {
          type: String,
          required: true
      },
      age: {
          type: Number,
          required: true
      }
    },
  );

export default mongoose.model("User", schema)