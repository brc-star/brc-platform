import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brcstar.in";

  const routes = [
    "",
    "/about",
    "/technology",
    "/technology/self-volt",
    "/technology/energy-recovery",
    "/technology/patent-ip",
    "/vehicles",
    "/vehicles/passenger",
    "/vehicles/commercial",
    "/vehicles/bus",
    "/vehicles/starcraft-gt",
    "/vehicles/starpulse-suv",
    "/vehicles/starfleet-commercial",
    "/vehicles/starfleet-logistic",
    "/vehicles/starhauler-truck",
    "/vehicles/startitan-semi-truck",
    "/vehicles/startransit-bus",
    "/innovation",
    "/innovation/rnd",
    "/innovation/sustainability",
    "/innovation/news",
    "/invest",
    "/invest/pitch-deck",
    "/invest/partners",
    "/pre-book",
    "/docs",
    "/contact",
    "/privacy",
    "/terms",
    "/signin",
    "/signup",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/technology") || route.startsWith("/vehicles") ? 0.9 : 0.8,
  }));
}
