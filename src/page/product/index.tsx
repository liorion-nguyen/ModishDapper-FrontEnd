import Card from "../../component/product/card";
import { ProductGrid } from "./style";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../Api/product";
import Information from "../../component/product/information";

export default function Product() {
  const [product, SetProduct] = useState<any>();

  const params = useParams();
  const productId: any = params.id;
  useEffect(() => {
    async function fetchMyAPI() {
      const res = await getProduct(productId);
      SetProduct(res);
    }
    try {
      fetchMyAPI();
    } catch (e) {
      console.error(e);
    }
  }, [productId]);
  return (
    <>
      <Header />
      <ProductGrid container>
        <Card product={product} />
        <Information product={product} />
      </ProductGrid>
      <Footer />
    </>
  );
}
