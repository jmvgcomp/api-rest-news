import { json } from "express";
import StartUp from "./startUp";

let port = process.env.PORT || "3050";
StartUp.app.use(json())
StartUp.app.listen(port, function () {
  console.log(`servidor executando na porta ${port}`);
});
