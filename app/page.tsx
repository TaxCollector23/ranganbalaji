import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Activities from "@/components/Activities";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Builder · Developer · Student",
  description: site.intro,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <SocialLinks />
      <About />
      <FeaturedProject />
      <Activities />
      <Interests />
      <Footer />
    </main>
  );
}
