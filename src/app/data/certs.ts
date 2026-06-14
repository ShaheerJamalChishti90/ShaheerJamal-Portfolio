export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  type: 'snowflake' | 'aws' | 'other' | 'professional';
}

export interface Badge {
  id: number;
  title: string;
  image: string;
  link: string;
}

// 1. The Main Categories
export const certifications: Certificate[] = [
  {
    id: 1,
    title: "Snowflake Hands On Essentials",
    issuer: "Snowflake",
    type: 'snowflake'
  },
  {
    id: 2,
    title: "Professional Certifications",
    issuer: "Multiple Providers",
    type: 'professional'
  },
  {
    id: 3,
    title: "Other Achievements",
    issuer: "Various",
    type: 'other'
  },
];

// 2. The Detailed Badges
export const snowflakeBadges: Badge[] = [
  {
    id: 1,
    title: "Data Lake",
    image: "/images/Data Lake.png",
    link: "https://www.credential.net/profile/muhammadshaheerjamalchishti487127/wallet"
  },
  {
    id: 2,
    title: "Data Warehouse",
    image: "/images/Data Warehouse.png",
    link: "https://www.credential.net/profile/muhammadshaheerjamalchishti487127/wallet"
  },
  {
    id: 3,
    title: "Data Engineering",
    image: "/images/Data Engineering.png",
    link: "https://www.credential.net/profile/muhammadshaheerjamalchishti487127/wallet"
  },
  {
    id: 4,
    title: "Data Applications",
    image: "/images/Data Application.png",
    link: "https://www.credential.net/profile/muhammadshaheerjamalchishti487127/wallet"
  },
  {
    id: 5,
    title: "Collaboration and Marketplace",
    image: "/images/Collaboration and Marketplace.png",
    link: "https://www.credential.net/profile/muhammadshaheerjamalchishti487127/wallet"
  },
];

// RENAMED THIS TO MATCH YOUR COMPONENT
export const professionalCerts: Badge[] = [
  {
    id: 1,
    title: "Cloud Data Engineering",
    image: "/images/Certificates/cde.png",
    link: "#"
  },
  {
    id: 2,
    title: "Harvard: CYBERSECURITY",
    image: "/images/Certificates/harvard_cys.png",
    link: "https://cs50.harvard.edu/certificates/01c2026f-ee29-409f-8939-fe8bd2226397"
  },
  {
    id: 3,
    title: "Google: Introduction to Cybersecurity",
    image: "/images/Certificates/google_cys.png",
    link: "https://coursera.org/share/9afec1e144ced5525a94b3677163d250"
  },
  {
    id: 4, // Fixed ID
    title: "Introduction to SQL",
    image: "/images/Certificates/intro_to_sql.png",
    link: "#"
  },
  {
    id: 5, // Fixed ID
    title: "Intermediate SQL",
    image: "/images/Certificates/intermediate_sql.png",
    link: "#"
  },
  {
    id: 6, // Fixed ID
    title: "Fundamentals of Networking",
    image: "/images/Certificates/fund_networking.png",
    link: "#"
  },
  {
    id: 7, // Fixed ID
    title: "Prompt Engineering with Github Copilot",
    image: "/images/Certificates/prompt_engineering.png",
    link: "#"
  },
  {
    id: 8, // Fixed ID
    title: "Beginners guide to Ethical Hacking",
    image: "/images/Certificates/beginners_guide_to_ethicalhacking.png",
    link: "#"
  },
  {
    id: 9, // Fixed ID
    title: "Cloud & DevOps Mastery Bootcamp",
    image: "/images/Certificates/cloud&dev_ops.png",
    link: "#"
  }
];

export const otherBadges: Badge[] = [
  {
    id: 1,
    title: "AI Tools for Productivity",
    image: "/images/Certificates/ai_tools.png",
    link: "#"
  },
  {
    id: 2,
    title: "Cybersec. Awareness",
    image: "/images/Certificates/cys_awareness.png",
    link: "#"
  },
  {
    id: 3,
    title: "Career Planning for Tech Students",
    image: "/images/Certificates/career_planning.png",
    link: "#"
  }
];