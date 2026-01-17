import Brand from "@/Component/Brand";
import Hero from "@/Component/Hero";
import HowWork from "@/Component/HowWork";
import Review from "@/Component/Review/Review";
import Services from "@/Component/Services";
import Statistics from "@/Component/Statistics";
import Features from "@/Component/Features";
import ItemShow from "@/Component/ItemShow";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <ItemShow></ItemShow>
      <Brand></Brand>
      <Services></Services>
      <Statistics></Statistics>
      <HowWork></HowWork>
      <Features></Features>
      <Review></Review>
    </div>
  );
}
