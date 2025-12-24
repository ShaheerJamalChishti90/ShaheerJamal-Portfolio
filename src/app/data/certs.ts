export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}

export const certifications: Certificate[] = [
  {
    id: 1,
    title: "Snowflake Hands On Essentials",
    issuer: "Snowflake",
    image: "/images/snowflake-badge.png" // Placeholder image path
  },
  // Add more certifications here later
];