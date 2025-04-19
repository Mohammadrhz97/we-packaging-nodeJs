import { BlogContents } from "../../../constant/blogContents.index";
import BlogIdClient from "./BlogIdClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const product = BlogContents.find((item) => item.id === blogId);

  return {
    title: product?.title || "Product Not Found",
    description: product?.excerpt,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return <BlogIdClient blogId={blogId} />;
}
