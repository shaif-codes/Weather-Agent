import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const responseService = {
    from4o: async (messages) => {
        try {
            const gptResponse = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: messages,
                max_tokens: 100,
            });
            return gptResponse.choices[0].message.content.trim();
        } catch (error) {
            console.error("Error in from4o:", error);
            throw error;
        }
    },
    from35: async (prompt) => {
        try {
            const gptResponse = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
            return gptResponse.choices[0].message.content;
        } catch (error) {
            console.error("Error in from35:", error);
            throw error;
        }
    },
    fromModel: async (model, prompt) => {
        try {
            const gptResponse = await openai.chat.completions.create({
                model: model,
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
            });
            return gptResponse.choices[0].message.content;
        } catch (error) {
            console.error("Error in fromModel:", error);
            throw error;
        }
    },
    log: console.log("responseService loaded"),
}

export default responseService;