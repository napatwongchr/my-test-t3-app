import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { router, publicProcedure } from "../trpc";
import cuid from "cuid";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);

export const adminRouter = router({
  createAdminAccount: publicProcedure.mutation(async ({ input, ctx }) => {
    await ctx.prisma.admin.create({
      data: {
        name: "admin02",
        email: "admin02@gmail.com",
        role: "ADMIN",
      },
    });
    return {
      message: "Create admin account successfully",
    };
  }),

  createAdminAccountWithSupabaseJS: publicProcedure.mutation(
    async ({ input, ctx }) => {
      const { error } = await supabase.from("Admin").insert({
        id: cuid(),
        name: "admin04",
        email: "admin04@gmail.com",
        role: "ADMIN",
      });

      return {
        message: "Create admin account successfully",
      };
    }
  ),
});
