import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/glabalErrorHandler";
import notFound from "./app/middleware/notFound";
import cors from 'cors'
import router from "./app/routes";
const app: Application = express();

app.use(express.json())
app.use(cors({origin:[]}))

app.use('/api/v1',router)
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio api ");
});

app.use(globalErrorHandler)
app.use(notFound)

export default app;
