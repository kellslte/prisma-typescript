import express, { Request } from "express";
import { IncomingMessage, Server, ServerResponse, createServer } from "http";
import compression from "compression";
import cors from "cors";
import { config } from "dotenv";
config();

const port = process.env.PORT || 4300;

// define base config
const app = express();
const server: Server<typeof IncomingMessage, typeof ServerResponse> =
  createServer(app);

// define middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

// define route configuration
app.get("/health", (req, res) => {
  return res.json({
    success: true,
    message: `Application is running at http://localhost:${port}`,
  });
});

// define error handler

// export server and app
export { server, app, port };
