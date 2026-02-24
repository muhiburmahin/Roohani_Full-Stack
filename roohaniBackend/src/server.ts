import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000;

async function main() {
    try {
        await prisma.$connect();
        console.log("Prisma connected successfully");

        // লোকাল ডেভেলপমেন্টের জন্য listen থাকবে
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

// Vercel-এর জন্য এটি খুব জরুরি
export default app;