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
    id: 1 ,
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
    title: "Introduction to SQL",
    image: "/images/Certificates/intro_to_sql.png",
    link: "#"
  },
  {
    id: 3,
    title: "Intermediate SQL",
    image: "/images/Certificates/intermediate_sql.png",
    link: "#"
  },
  {
    id: 4,
    title: "Prompt Engineering with Github Copilot",
    image: "/images/Certificates/prompt_engineering.png",
    link: "#"
  },
  {
    id: 5,
    title: "Beginners guide to Ethical Hacking",
    image: "/images/Certificates/beginners_guide_to_ethicalhacking.png",
    link: "#"
  },
  {
    id: 6,
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