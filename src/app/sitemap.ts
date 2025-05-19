import { MetadataRoute } from "next";
import { ServiceData } from "@/constant/constants.index";
import { BlogContents } from "@/constant/blogContents.index";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = "https://wepackaging.co";
  const productsUrl = ServiceData.map((product) => ({
    url: `${domain}/products/${product.id}`,
  }));
  const blogUrl = BlogContents.map((blog) => ({
    url: `${domain}/blog/${blog.id}`,
  }));

  return [
    { url: `${domain}/products` },
    { url: `${domain}/blog` },
    { url: `${domain}/about` },
    { url: `${domain}/gallery` },
    { url: `${domain}/gallery/our-of-space-project` },
    { url: `${domain}/gallery/rooted-in-the-earth-project` },
    { url: `${domain}/gallery/inception-project` },
    { url: `${domain}/developer-service` },
    { url: `${domain}/brand-managing` },
    ...productsUrl,
    ...blogUrl,
  ];
}
