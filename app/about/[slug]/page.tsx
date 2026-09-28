import StubPage from "@/components/StubPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <StubPage title={slug.replace(/-/g, " ")} body="About page placeholder. Swap this copy later." />;
}
