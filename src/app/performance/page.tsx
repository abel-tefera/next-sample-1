import performanceImg from "@/public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero imgData={performanceImg} imgAlt="Performance" title="We serve high performance applications" />
  );
}
