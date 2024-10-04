import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm"
const engine = new MLCEngine()
const handler = new MLCEngineWorkerHandler(engine)

onmessage = msg => {
    handler.onmessage(msg)
}