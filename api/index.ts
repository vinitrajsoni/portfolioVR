import { startInstance } from "../src/start";
import { createRequestHandler } from "@tanstack/react-start/server";

const handler = createRequestHandler({
  createStart: () => startInstance,
});

export default async function (req: Request) {
  return handler(req);
}

export const config = {
  runtime: "edge",
};
