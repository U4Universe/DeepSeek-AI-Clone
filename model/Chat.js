import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  userId: String,
  messages: [{ role: String, content: String }],
  createdAt: { type: Date, default: Date.now },
});

    userId: { type: String, required: true },
    
  },
  { timestamps: true }
);

const Chat = mongoose.models.Chat || mongoose.model("User", ChatSchema);

export default Chat;
