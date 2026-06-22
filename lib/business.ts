// Single source of truth for business facts used across the site.
export const business = {
  name: "Carlos Reyes Lawn Service LLC",
  shortName: "Carlos Reyes Lawn Service",
  tagline: "A lawn worth coming home to.",
  phoneDisplay: "(941) 234-7478",
  phoneHref: "tel:+19412347478",
  email: "carlos.reyes2793@yahoo.com",
  rating: "5.0",
  yearsInBusiness: "10+",
  firstMonthOffer: "20% off",
  monthlyMinimum: "$200",
  serviceArea: ["Bradenton", "Sarasota", "Venice", "Casey Key", "Siesta Key"],
  url: "https://carlosreyeslawnservice.com",
} as const;

export const serviceAreaLine = business.serviceArea.join(" · ");
