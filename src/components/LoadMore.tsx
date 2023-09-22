"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchProducts } from "@/actions/fetch-products";
import Bcards from "@/components/Bcards";
import { Product } from "@/type";

export function LoadMore() {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState <number>(2);
  const [productStatus, setProductStatus] = useState <boolean>(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreproducts = async () => {
    // Once the page 8 is reached repeat the process all over again.
    if (productStatus) {
      await delay(300);
      const nextPage = Number(page);
      const newProducts: Product = (await fetchProducts(nextPage)) ?? [];
      const newpro: any = newProducts.results;
      if (newpro) {
        setData((prev: Product[]) => [...prev, ...newpro]);
      } else {
        setProductStatus(false);
      }
      try {
        const db: any[] = String(newProducts.next).split("=");
        if (db) {
          setPage(db[1]);
        } else {
          console.log("Noting Here");
        }
      } catch (error) {
        console.log("Erro" + error);
      }
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreproducts();
    }
  }, [inView]);
  const dummydata: number[] = [1, 2, 3, 4, 5];
  return (
    <>
      <Bcards data={data} />
      {productStatus ? (
        dummydata.map((value) => (
          <div
            key={value}
            className="lg:w-96 w-full h-96 rounded-md  shadow-md  animate-pulse"
            ref={ref}
            role="status"
          >
            <div className="blur-[1px] bg-gray-300 flex items-end h-full w-full justify-stretch rounded-md transition-all">
              <div className="flex items-end justify-evenly p-5 w-full">
                <div className="w-3/4 text-white"></div>
                <div className="flex items-center gap-3 text-white"></div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-center w-full text-xl py-10 font-bold">
          No More Product
        </h1>
      )}
    </>
  );
}
