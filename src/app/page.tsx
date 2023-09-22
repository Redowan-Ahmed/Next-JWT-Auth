import Bcards from "@/components/Bcards";
import { Results, Product } from "@/type";
import { fetchProducts } from "@/actions/fetch-products";
import {LoadMore} from '@/components/LoadMore'
import Hero from '@/components/Hero'

export default async function Home() {
  const data: Product = (await fetchProducts(1)) ?? [];
  return (
    <main className="container mx-auto">
        <Hero></Hero>
        <div className="flex gap-5 flex-wrap">
        <Bcards data={data.results} />
        <LoadMore/>
        </div>
    </main>
  );
}
