import MarketPlace from "../../components/MarketPlace";
import FAQ from "../../components/faq/faq";
import CustomerSatisfaction from "../../components/CustomerSatisfaction";
import Onboard from "../../components/Onboard";
import OurWork from "../../components/OurWork";

export default function Home() {
  return (
    <>
      <MarketPlace />
      <OurWork/>
      <CustomerSatisfaction />
      <Onboard />
      <FAQ />
    </>
  );
}
