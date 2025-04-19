import { MetadataRoute } from "next";
import { ServiceData } from "@/constant/constants.index";
import { BlogContents } from "@/constant/blogContents.index";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsUrl = ServiceData.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.id}`,
  }));
  const blogUrl = BlogContents.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${product.id}`,
  }));
  console.log(productsUrl);

  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/products` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/about` },
    ...productsUrl,
    ...blogUrl,
  ];
}
