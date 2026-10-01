import { ProductExtras } from "@/components/ProductExtras";
import "@/components/product-page-gaps.css";

/**
 * Adds the placeholder extras (specs, applications, note, FAQ) below each
 * product detail page. page.tsx is left exactly as it was; this layout renders
 * it unchanged and appends <ProductExtras /> after it, before the footer.
 */
export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      {children}
      <ProductExtras slug={slug} />
    </>
  );
}
