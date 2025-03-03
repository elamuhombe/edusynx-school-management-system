//src/server.ts
import { config } from "dotenv";
import express, { Request, Response } from "express";
import SwaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

config();

const port = process.env.PORT ? process.env.PORT : 3000;
const app = express();

// Define Swagger options
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Doctor Booking API",
        version: "1.0.0",
        description: "API documentation for Doctor Booking App",
      },
      basePath: "/", // Base URL for the API
    },
    apis: ["./src/routes/*.ts"], // Path to your API route files for documentation
  };

// Generate Swagger documentation
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Set up Swagger UI
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));

// Define a basic route

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running...");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
