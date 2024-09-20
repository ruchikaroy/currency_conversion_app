import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 9090;

app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ response: "Hello World to All!" });
});

app.get("/api/1/conversions", (req: Request, res: Response) => {
  res.status(200).send({
    value: 5.9,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
