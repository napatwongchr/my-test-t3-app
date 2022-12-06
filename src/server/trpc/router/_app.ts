import { router } from "../trpc";
import { authRouter } from "./auth";
import { adminRouter } from "./admin";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
