import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.daxsarl.net/fr",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/en",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/fr/services",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/en/services",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/fr/a-propos",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/en/a-propos",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/fr/produits",
      lastModified: new Date(),
    },
    {
      url: "https:///www.daxsarl.net/en/produits",
      lastModified: new Date(),
    },
  ];
}