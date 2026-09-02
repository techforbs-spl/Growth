export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "The Growth Inc.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "thegrowthincc@gmail.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/thegrowthincc/30min",
};
