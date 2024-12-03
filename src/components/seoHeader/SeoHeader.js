import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
} from "../../portfolio.js";

function SeoHeader() {
  const sameAs = socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .map((media) => media.link);

  const mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    ?.link?.substring("mailto:".length) || "info@example.com"; // Fallback email

  const job = experience.sections
    ?.find((section) => section.title === "Internships") // Ensure correct section is targeted
    ?.experiences?.[0]; // Access the first experience

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url || "https://example.com", // Fallback URL
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle || "+1234567890", // Fallback phone
    sameAs: sameAs,
    jobTitle: job?.title || "Software Engineer", // Fallback job title
    worksFor: {
      "@type": "Organization",
      name: job?.company || "Example Inc.", // Fallback company
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality || "City",
      addressRegion: contactPageData.addressSection?.region || "Region",
      addressCountry: contactPageData.addressSection?.country || "Country",
      postalCode: contactPageData.addressSection?.postalCode || "00000",
      streetAddress:
        contactPageData.addressSection?.streetAddress || "123 Street Name",
    },
  };

  return (
    <Helmet>
      <title>{seo.title || "Portfolio"}</title>
      <meta name="description" content={seo.description || "Portfolio website"} />
      <meta property="og:title" content={seo?.og?.title || seo.title} />
      <meta property="og:type" content={seo?.og?.type || "website"} />
      <meta property="og:url" content={seo?.og?.url || "https://example.com"} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
