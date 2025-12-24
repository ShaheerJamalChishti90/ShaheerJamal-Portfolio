// src/data.ts

// 1. Define what a "Project" looks like
export interface Project {
  id: number;
  title: string;
  desc: string;
  links: {
    youtube?: string;   // Optional: Link to video
    github?: string;    // Optional: Link to code
    linkedin?: string;  // Optional: Link to post
  };
}

// 2. Your Cloud Data Engineering Projects (Block 1)
export const cdeProjects: Project[] = [
  { 
    id: 14, 
    title: "AWS ETL Pipeline with SQS", 
    desc: "Event-driven architecture utilizing AWS SQS, Lambda, and S3 for decoupled data processing.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 13, 
    title: "Stock Market Real-Time Data", 
    desc: "Real-time streaming pipeline for financial data analysis using Kafka and AWS.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 12, 
    title: "AWS LakeToWarehouse", 
    desc: "Automated pipeline moving data from an S3 Data Lake into a Snowflake Data Warehouse.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 11, 
    title: "AWS Lambda Pipeline", 
    desc: "Serverless data processing workflow orchestrated with AWS Lambda functions.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 10, 
    title: "Kafka Snowflake Integration", 
    desc: "Direct streaming ingestion from Apache Kafka topics into Snowflake tables.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 9, 
    title: "Airflow OpenWeather", 
    desc: "Orchestrated DAGs in Apache Airflow to fetch, transform, and store weather API data.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 8, 
    title: "Airflow Stocks Pipeline", 
    desc: "Scheduled extraction and processing of stock market data using Airflow.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 7, 
    title: "Snowflake Assignment Warehouse", 
    desc: "Implementation of advanced warehousing concepts and resource monitors in Snowflake.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 6, 
    title: "SCD Data Warehousing", 
    desc: "Handling Slowly Changing Dimensions (Type 1 & 2) in a data warehouse environment.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 5, 
    title: "Snowflake Weather Warehouse", 
    desc: "Data modeling and analytical querying of large-scale weather datasets.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  },
  { 
    id: 4, 
    title: "Snowflake Integration Project", 
    desc: "End-to-end integration testing and data validation within Snowflake.", 
    links: { github: "https://github.com/ShaheerJamalChishti90" } 
  }
];

// 3. Your Freelancing Projects (Block 4)
export const freelanceProjects: Project[] = [
  { 
    id: 1, 
    title: "Attendance Management System", 
    desc: "A facial-recognition based application delivered to a client for automated employee attendance tracking.", 
    links: { github: "#" } // Private repo
  },
  { 
    id: 2, 
    title: "Student Management System", 
    desc: "Complete educational management portal developed for Al Quran Academy using React JS.", 
    links: { github: "#" } // Private repo
  }
];

// 4. Your Learning / Software Hub (Block 3)
// You can add your smaller scripts or learning repos here later
export const softwareProjects: Project[] = [
  {
    id: 1,
    title: "Employee Payroll System",
    desc: "Java OOP project demonstrating inheritance, encapsulation, and polymorphism.",
    links: { github: "https://github.com/ShaheerJamalChishti90" }
  },
  // Add more C++, JS, or Python scripts here
];