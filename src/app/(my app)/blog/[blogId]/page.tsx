import { BlogContents } from "../../../../constant/blogContents.index";
import BlogIdClient from "./BlogIdClient";

// This function dynamically generates metadata for the blog post page
// based on the blog ID from the route parameters
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params; // Destructure blogId from route parameters

  // Find the blog post that matches the blogId
  const product = BlogContents.find((item) => item.id === blogId);

  // Return metadata for the head of the page
  return {
    title: product?.title || "Product Not Found", // Fallback title
    description: product?.excerpt, // Optional meta description
    openGraph: {
      title: `${product?.title}`,
      description:
        "به وی پکیجینگ خوش آمدید! ما ارائه‌دهنده بهترین محصولات و خدمات در زمینه توسعه برند و پکیجینگ هستیم. با خرید از ما، کیفیت و رضایت را تجربه کنید. از مجموعه متنوع محصولات و پیشنهادات ویژه‌مان بازدید کنید.",
      url: "/blog",
      siteName: "وی پکیجینگ",
      images: [
        {
          url: `${product?.image}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
  };
}

// This is the main page component for a specific blog post
export default async function ProductPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params; // Destructure blogId from route parameters

  // Render the client component and pass the blogId as a prop
  return <BlogIdClient blogId={blogId} />;
}
