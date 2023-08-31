import express, {Router} from "express"
import cors from "cors"

const app = express()
const router = Router()

// ✅ Good (Always version your APIs)
app.use("api/v1", router)