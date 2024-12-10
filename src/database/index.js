import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      " mongodb+srv://besufekadfikre456:97Xbt07c7AiJaSzX@cluster0.z2i8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
