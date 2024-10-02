import { env } from "./env"
import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideoRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompletionRoute } from "./routes/generate-ai-completion"
import { fastifyCors } from "@fastify/cors"

const app = fastify()

app.register(fastifyCors, {
  origin: "*",
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port: env.PORT
}).then(() => {
  console.log("HTTP Server Running!")
})