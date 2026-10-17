import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/sections/Footer";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

export default async function Home() {

  const ITEMS_QUERY = defineQuery(`*[_type == "menuItems"] | order(name.en asc) {
  _id,
  name,
  description,
  price,
  "category": category->{ _id, name },
  "imageUrl": image.asset->url,
  "tag": tag[]->{ _id, name }
}`);

  const CATEGORIES_QUERY = defineQuery(`*[_type == "category"] | order(name.en asc) { _id, name }`);

  const { data: menuItems } = await sanityFetch({ query: ITEMS_QUERY });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu menuItems={menuItems} categories={categories} />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
