import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 9090;

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ response: "Hello World to All!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
