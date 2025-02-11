import ProductPrice from "@/components/shared/products/product-price";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSingleProduct } from "@/lib/actions/product.actions";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import ProductImages from "@/components/shared/product-images";

const ProductDetailsPage = async ({ params }: { params: { slug: string } }) => {
  console.log(params); // Should output: { slug: 'polo-sporting-stretch-shirt' }

  const { slug } = params;
  console.log(slug);  // Should output: 'polo-sporting-stretch-shirt'

  const product = await getSingleProduct(slug);
  console.log(product);  // Should show product details or null

  if (!product) {
    return notFound();
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Images column */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* Product details */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>{product.brand} {product.category}</p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>{product.rating} Stars ({product.numReviews} Reviews)</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
        </div>

        {/* Action column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge className={badgeVariants({ variant: "outline" })}>
                    In Stock
                  </Badge>
                ) : (
                  <Badge className={badgeVariants({ variant: "destructive" })}>
                    Out of Stock
                  </Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full">Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
