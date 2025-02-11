import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

// Set up websocket connection
const connectionString = `${process.env.DATABASE_URL}`;

// create a new connection pool using the connection string, allowing multiple  concurrent connections
const pool = new Pool({ connectionString });

// Initialize the prisma adapter using the neon connection pool to handle the connection between Prisma and the Neon database
const adapter = new PrismaNeon(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
