import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  getProductDetail: publicProcedure.query(() => {
    return {
      name: "Mac Mini 💻",
      description: "Super cool computer in the world 🌎",
      price: 45000,
      previewImage: "https://picsum.photos/200/300",
    };
  }),
});
