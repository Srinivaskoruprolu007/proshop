// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="New Arrivals" data={latestProducts} />
    </div>
  );
};

export default Homepage;
