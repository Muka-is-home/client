export const FooterData = {
  brand_description: "A community connecting minority homebuyers, sellers, and realtors",
  col1: {
    title: "About",
    children: [
      { title: "About us", link: "/about" },
      { title: "Blog", link: "/resources" },
    ],
  },
  col2: {
    title: "Connect",
    children: [
      { title: "Instagram", link: "https://www.instagram.com/mukaishome" },
      { title: "TikTok", link: "https://www.tiktok.com/@mukaishome" },
      { title: "Facebook", link: "https://www.youtube.com/mukaishome" },
    ],
  },
  col3: {
    title: "Useful Links",
    children: [
      { title: "Become a Muka Realtor", link: `${process.env.NEXT_PUBLIC_URL}/adminapp/signup` },
      { title: "Become a Muka Expert", link: `${process.env.NEXT_PUBLIC_URL}/adminapp/signup` },
      { title: "Contact", link: "/contact" },
    ],
  },
  sub_footer: [ // find icons at font-awesome icons
    { link: "https://www.youtube.com/mukaishome", class: "fab fa-youtube" },
    { link: "https://www.instagram.com/mukaishome", class: "fab fa-instagram" },
    { link: "https://www.tiktok.com/@mukaishome", class: "fab fa-tiktok" },
  ],
  copyright: "All Rights Reserved, Muka, LLC.",
  logo: "/assets/images/logo/muka-logo-teal.svg",
  logoWhite: "https://github-production-user-asset-6210df.s3.amazonaws.com/29741570/251847573-3ff39745-5d53-429c-a412-1f77336d1b65.png"
};
