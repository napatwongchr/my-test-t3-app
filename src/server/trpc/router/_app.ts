import { router } from "../trpc";
import { authRouter } from "./auth";
import { adminRouter } from "./admin";
import { exampleRouter } from "./example";
import { productRouter } from "./products";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  admin: adminRouter,
  product: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
