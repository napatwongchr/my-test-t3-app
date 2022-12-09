import { trpc } from "../utils/trpc";

export default function ProductDetailPage() {
  const productDetail = trpc.product.getProductDetail.useQuery();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <hr />
      <div>
        <div>Product Name: {productDetail.data?.name}</div>
        <div>
          Product Description: {productDetail.data?.description}
          <div>Product Price: ${productDetail.data?.price}</div>
          <div>
            Product Image:{" "}
            <img
              src={productDetail.data?.previewImage}
              alt="some product image here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
