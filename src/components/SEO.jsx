import { Helmet } from 'react-helmet-async';

const SEOConfig = {
  home: {
    title: "Punjabi Tadka Malta | Authentic Indian Restaurant in Malta",
    description: "Experience the authentic flavors of Punjab at Punjabi Tadka Malta. Savor traditional dishes crafted with fresh ingredients and passion. Order online or visit us today!",
    keywords: "indian restaurant malta, best Indian food malta, order Indian food bolt, Indian food wolt, online indian food buy, spicy indian food order online, punjabi tadka malta",
  },
  menu: {
    title: "Menu | Punjabi Tadka Malta",
    description: "Explore Punjabi Tadka's menu featuring a wide variety of authentic Punjabi dishes made with fresh ingredients. From appetizers to biryanis, we have something for every taste.",
    keywords: "indian restaurant menu malta, punjabi dishes malta, indian appetizers malta, biryani malta, tandoori dishes malta, indian vegetarian dishes malta, indian non-veg dishes malta, indian breads malta, indian desserts malta, punjabi tadka menu",
  },
  contact: {
    title: "Contact Us | Punjabi Tadka Malta",
    description: "Contact Punjabi Tadka, the best Indian restaurant in Malta, to make a reservation or inquire about our services. Find our location, hours, and phone number.",
    keywords: "contact punjabi tadka malta, indian restaurant reservations malta, punjabi tadka location, punjabi tadka hours, punjabi tadka phone number, indian catering services malta, indian restaurant feedback malta, indian restaurant malta contact, best indian restaurant malta contact, punjabi tadka contact details",
  },
  social: {
    instagram: "https://www.instagram.com/punjabitadka_malta/",
    tiktok: "https://www.tiktok.com/@punjabi.tadka.mal",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g1854775-d25321795-Reviews-Punjabi_Tadka-Msida_Island_of_Malta.html"
  }
};

const SEO = ({ page = 'home' }) => {
  const config = SEOConfig[page];
  const baseUrl = 'https://punjabitadkamalta.com'; // Replace with your actual domain

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content="Punjabi Tadka Malta" />
      <meta property="og:image" content={`${baseUrl}/assets/images/logo/Logo.png`} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={`${baseUrl}/assets/images/logo/Logo.png`} />

      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${page === 'home' ? '' : `/${page}`}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#006341" />
      
      {/* Language and Region */}
      <meta property="og:locale" content="en_MT" />
      
      {/* Social Media Verification (Add your actual verification codes) */}
      {/* <meta name="facebook-domain-verification" content="your-code-here" /> */}
      {/* <meta name="google-site-verification" content="your-code-here" /> */}

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Restaurant",
            "name": "Punjabi Tadka Malta",
            "image": "${baseUrl}/assets/images/logo/Logo.png",
            "description": "${config.description}",
            "url": "${baseUrl}",
            "telephone": "+35621343841",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "43 Triq J. Borg",
              "addressLocality": "Msida",
              "postalCode": "L MSD 1214",
              "addressCountry": "MT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.8934938",
              "longitude": "14.4859565"
            },
            "sameAs": [
              "${SEOConfig.social.instagram}",
              "${SEOConfig.social.tiktok}",
              "${SEOConfig.social.tripadvisor}"
            ],
            "servesCuisine": ["Indian", "Punjabi"],
            "priceRange": "€€",
            "openingHours": [
              "Mo-Sa 12:00-23:00",
              "Su 10:00-23:00"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;