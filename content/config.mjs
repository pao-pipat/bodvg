
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
  title: "BoDV Glycoprotein",
  description: "This is a blog containing information on Bornavirus Disease Virus Glycoprotein project including background, plans, and protocols.",
  author: "Nichakorn Pipatpadungsin (Pao)",
  domain: "https://bodvg.vercel.app",
  // links to the pages you want to link to in the navbar and in the footer
  navLinks: [{ href: "/background/intro", name: "Background" },
             { href: "/molecbiol/intro", name: "Molecular Biology" }],
  search: {
    provider: "kbar",
  }
};

export default config;
