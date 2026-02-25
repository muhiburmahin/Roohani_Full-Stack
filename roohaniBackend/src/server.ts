import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000;

async function main() {
    try {
        await prisma.$connect();
        console.log("Prisma connected successfully");

        if (process.env.NODE_ENV !== "production") {
            app.listen(port, () => {
                console.log(`Server is running at http://localhost:${port}`);
            });
        }
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

main();

