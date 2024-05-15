import axios from "axios";

export const openAIApi = axios.create({
    baseURL: "https://api.openai.com/"
})

export const CHAT_COMPLETION_ENDPOINT = "v1/chat/completions"