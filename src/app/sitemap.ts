import { MetadataRoute } from "next";
import { ServiceData } from "@/constant/constants.index";
import { BlogContents } from "@/constant/blogContents.index";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = "https://wepackaging.co";
  const productsUrl = ServiceData.map((product) => ({
    url: `${domain}/products/${product.id}`,
  }));
  const blogUrl = BlogContents.map((product) => ({
    url: `${domain}/blog/${product.id}`,
  }));
  console.log(productsUrl);

  return [
    { url: `${domain}/products` },
    { url: `${domain}/blog` },
    { url: `${domain}/about` },
    ...productsUrl,
    ...blogUrl,
  ];
}
