import express, { Response, Request } from "express";

const app = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World! Just wanted to test AWS EC2");
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
