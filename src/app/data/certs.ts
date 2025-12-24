export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  type: 'snowflake' | 'aws' | 'other';
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
  // Add AWS or other categories here later
];

// 2. The Detailed Badges
export const snowflakeBadges: Badge[] = [
  { 
    id: 1, 
    title: "Data Lake", 
    image: "/images/Data Lake.png", 
    // Updated Link
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