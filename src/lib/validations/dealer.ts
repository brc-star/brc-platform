import { z } from "zod";

export const INVESTMENT_TIERS = [
  {
    id: "TIER_1_2_5_CR" as const,
    title: "Tier 1: ₹2.5 Cr",
    amountLabel: "₹2.5 Cr",
    capitalInr: 25000000,
    franchiseTier: "FLAGSHIP_EXPERIENCE_CENTER" as const,
    format: "Flagship 3S Experience Center",
    minSqFt: 4500,
    badge: "Metro Primary Hub",
    highlights: "Sales, Service & Spares (3S) • Heavy CV Bays • Swap Station",
  },
  {
    id: "TIER_2_1_25_CR" as const,
    title: "Tier 2: ₹1.25 Cr",
    amountLabel: "₹1.25 Cr",
    capitalInr: 12500000,
    franchiseTier: "REGIONAL_SALES_AND_SERVICE" as const,
    format: "Regional 2S Dealership",
    minSqFt: 2500,
    badge: "High-Growth Corridor",
    highlights: "Sales & Rapid Service (2S) • Test-Drive Fleet Hub",
  },
  {
    id: "TIER_3_50_LAKH" as const,
    title: "Tier 3: ₹50 Lakh",
    amountLabel: "₹50 Lakh",
    capitalInr: 5000000,
    franchiseTier: "AUTHORIZED_SERVICE_NODE" as const,
    format: "Fleet Service & Swap Node",
    minSqFt: 1500,
    badge: "B2B Logistics & Depot",
    highlights: "Fleet Maintenance • Fast Swap Node • Spares Distribution",
  },
] as const;

export type InvestmentTierId = (typeof INVESTMENT_TIERS)[number]["id"];

export const TARGET_DEALER_HUBS = [
  { city: "Jaipur", state: "Rajasthan", zone: "North West Corridor" },
  { city: "Jodhpur / Ganganagar", state: "Rajasthan", zone: "North Rajasthan Belt" },
  { city: "Delhi NCR (Gurugram / Noida)", state: "Delhi NCR", zone: "NCR Metro Hub" },
  { city: "Bengaluru", state: "Karnataka", zone: "South Tech Corridor" },
  { city: "Mumbai / MMR", state: "Maharashtra", zone: "West Commercial Belt" },
  { city: "Pune", state: "Maharashtra", zone: "Chakan Auto Hub" },
  { city: "Ahmedabad", state: "Gujarat", zone: "Sanand Industrial Corridor" },
  { city: "Surat", state: "Gujarat", zone: "South Gujarat Logistics" },
  { city: "Hyderabad", state: "Telangana", zone: "Deccan Mobility Hub" },
  { city: "Chennai", state: "Tamil Nadu", zone: "Oragadam EV Belt" },
  { city: "Lucknow / Kanpur", state: "Uttar Pradesh", zone: "UP Express Corridor" },
  { city: "Chandigarh / Ludhiana", state: "Punjab", zone: "Tricity Hub" },
  { city: "Indore", state: "Madhya Pradesh", zone: "Central Logistics Hub" },
] as const;

export const TARGET_STATES = [
  "Rajasthan",
  "Delhi NCR",
  "Maharashtra",
  "Karnataka",
  "Gujarat",
  "Telangana",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Haryana",
  "Punjab",
  "Madhya Pradesh",
  "West Bengal",
  "Kerala",
  "Other State / UT",
] as const;

export const BUSINESS_SECTORS = [
  "Automotive Dealership (2W / 4W / CV)",
  "Logistics & Commercial Fleet Operations",
  "Real Estate & Commercial Infrastructure",
  "EV Charging & Clean Energy Infrastructure",
  "Industrial Manufacturing & Distribution",
  "Diversified Enterprise / Family Office",
] as const;

export const DealerApplicationSchema = z.object({
  applicantName: z
    .string()
    .trim()
    .min(2, "Applicant name must be at least 2 characters")
    .max(100, "Applicant name cannot exceed 100 characters"),
  companyName: z
    .string()
    .trim()
    .min(2, "Registered business or entity name is required")
    .max(120, "Entity name cannot exceed 120 characters"),
  operatingCity: z
    .string()
    .trim()
    .min(2, "Operating city or hub selection is required")
    .max(80, "Operating city cannot exceed 80 characters"),
  operatingState: z
    .string()
    .trim()
    .min(2, "Operating state selection is required")
    .max(80, "Operating state cannot exceed 80 characters"),
  businessSector: z
    .string()
    .trim()
    .min(2, "Please select your existing business sector"),
  commercialLandSqFt: z.coerce
    .number({ invalid_type_error: "Enter commercial land area in Sq Ft" })
    .int("Commercial land area must be a whole number")
    .min(500, "Minimum commercial availability is 500 Sq Ft")
    .max(1000000, "Please enter a valid area up to 1,000,000 Sq Ft"),
  investmentTier: z.enum(["TIER_1_2_5_CR", "TIER_2_1_25_CR", "TIER_3_50_LAKH"], {
    errorMap: () => ({ message: "Please select an eligible investment tier" }),
  }),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,16}$/, "Enter a valid 10-digit mobile or work phone number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid corporate or work email address"),
});

export type DealerApplicationInput = z.infer<typeof DealerApplicationSchema>;
