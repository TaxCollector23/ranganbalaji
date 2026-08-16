import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Student · Builder · Developer",
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
      <Story />
      <Projects />
      <Footer />
    </main>
  );
}
