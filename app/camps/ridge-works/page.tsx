import { PlantPage } from "@/components/PlantPage";

/** Static route for /camps/ridge-works; takes precedence over the shared app/camps/[slug] stub, which is untouched. */
export default function Page() {
  return <PlantPage slug="ridge-works" />;
}
