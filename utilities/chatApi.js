import axios from 'axios'

const chatApi = axios.create({
    baseURL: import.meta.env.VITE_AI_URL,
    headers: { "Content-Type": "application/json" }
});

export default chatApi;