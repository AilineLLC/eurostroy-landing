import Header from './layout/Header'
import { HomeHeroCarousel } from "@/app/components/sections/HomeHeroCarousel";
import { AboutCompanySection } from "@/app/components/sections/AboutCompanySection";
import { ActivityDirectionsSection } from "@/app/components/sections/ActivityDirectionsSection";
import { HomeAdvantagesSection } from "@/app/components/sections/HomeAdvantagesSection";
import { GeographyPartnersSection } from "@/app/components/sections/GeographyPartnersSection";
import { PartnersCarouselSection } from "@/app/components/sections/PartnersCarouselSection";
import { BrandsMarqueeSection } from "@/app/components/sections/BrandsMarqueeSection";
import InfoSection from "@/app/components/sections/InfoSection";
import { OnlineStoreSection } from "@/app/components/sections/OnlineStoreSection";
import { BestChooseUsSection } from "@/app/components/sections/BestChooseUsSection";
import { ReviewsSection } from "@/app/components/sections/ReviewsSection";
import { HomeFooter } from "@/app/layout/HomeFooter";
import Services from "@/app/components/sections/Services";
import { AchievementsSection } from "@/app/components/sections/AchievementsSection";
import { ProjectSection } from "@/app/components/sections/ProjectSection";

export default function Home() {
  return (
    <div className="">
          <Header/>
        <section className='container'>
          <HomeHeroCarousel />
        </section>
        <AboutCompanySection/>
        <ActivityDirectionsSection/>
        <HomeAdvantagesSection/>
        <GeographyPartnersSection/>
        <BrandsMarqueeSection/>
        <PartnersCarouselSection/>
        {/* <InfoSection/> */}
        <OnlineStoreSection/>
        <BestChooseUsSection/>
        <ReviewsSection/>
        <Services/>
        <AchievementsSection/>
        <ProjectSection/>
        <HomeFooter/>
    </div>
  );
}
