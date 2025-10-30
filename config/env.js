import { config } from "dotenv";

config({path: `.env.${process.env.NODEENV || 'development'}.local`})

export const {PORT} = process.env