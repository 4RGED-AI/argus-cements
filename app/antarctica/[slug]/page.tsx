import StubPage from "@/components/StubPage";
import { OperationsPage } from "@/components/OperationsPage";
import { operations } from "@/data/operations";

/** V67: the Operations menu pages render OperationsPage; any other slug keeps the stub. */
export function generateStaticParams() {
  return operations.map((o) => ({ slug: o.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (operations.some((o) => o.slug === slug)) return <OperationsPage slug={slug} />;
  return <StubPage title={slug.replace(/-/g, " ")} body="" />;
}
