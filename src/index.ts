import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = process.env.PORT ?? 3000;
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
