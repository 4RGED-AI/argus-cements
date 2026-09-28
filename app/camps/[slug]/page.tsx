import StubPage from "@/components/StubPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <StubPage
      title={slug.replace(/-/g, " ")}
      body="Plant detail page for this Argus Cements demo. Swap in full process copy when you need it."
    />
  );
}
