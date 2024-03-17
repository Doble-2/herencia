import * as dotenv from "dotenv";
import {  Configuration, OpenAIApi } from "openai";

// Get your environment variables
dotenv.config();
const DEFAULT_OPENAI_MODEL = {
  name: "Default (GPT-3.5)",
  id: "gpt-3.5-turbo",
  available: true,
};

// OpenAI configuration creation
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// OpenAI instance creation
const openai = new OpenAIApi(configuration);

export default async function handler(
  req,
  res
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body;
  const messages = (body?.messages || []);
  const model = (body?.model || DEFAULT_OPENAI_MODEL);

  try {
    const promptMessage = {
      role: "system",
      content: "You are ChatGPT. Respond to the user like you normally would.",
    };
    const initialMessages= messages.splice(
      0,
      3
    );
    const latestMessages = messages
      .slice(-5)
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));

    const completion = await openai.createChatCompletion({
      model: model.id,
      temperature: 0.5,
      messages: [promptMessage, ...initialMessages, ...latestMessages],
    });

    const responseMessage = completion.data.choices[0].message?.content.trim();

    if (!responseMessage) {
      res
        .status(400)
        .json({ error: "Unable get response from OpenAI. Please try again." });
    }

    res.status(200).json({ message: responseMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred during ping to OpenAI. Please try again.",
    });
  }
}
