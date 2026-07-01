import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyAWru4hFx-6P5QrxWjfmMmPkWF5O1VNjrQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
  try {
    const result = await model.generateContent("Halo!");
    console.log(result.response.text());
  } catch(e) {
    console.error("API Error:", e.message);
  }
}
run();
