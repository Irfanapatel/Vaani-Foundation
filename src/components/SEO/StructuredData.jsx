import { Helmet } from 'react-helmet';

export const OrganizationSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Vaani Foundation",
    "url": "https://vaanifoundation.org/",
    "logo": "/favicon.png",
    "description": "Vaani Foundation is a non-profit organization dedicated to social welfare, education, healthcare, and community development initiatives.",
    "foundingDate": "2020",
    "founders": [{
      "@type": "Person",
      "name": "[Founder's Name]"
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Your Street Address]",
      "addressLocality": "[City]",
      "addressRegion": "[State]",
      "postalCode": "[Postal Code]",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 88666 85088",
      "contactType": "customer service",
      "email": "info@vaanifoundation.org",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/vaanifoundation",
      "https://twitter.com/vaanifoundation",
      "https://www.instagram.com/vaanifoundation/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const WebsiteSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vaani Foundation",
    "url": "https://vaanifoundation.org/",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://vaanifoundation.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
