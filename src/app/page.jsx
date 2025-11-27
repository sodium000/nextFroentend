import Brand from "@/Component/Brand";
import Hero from "@/Component/Hero";
import HowWork from "@/Component/HowWork";
import Review from "@/Component/Review/Review";
import Services from "@/Component/Services";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <Brand></Brand>
      <Services></Services>
      <HowWork></HowWork>
      <Review></Review>
    </div>
  );
}
