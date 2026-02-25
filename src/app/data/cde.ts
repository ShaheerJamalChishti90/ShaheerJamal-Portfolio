import { link } from "fs";

export interface Project {
  id: number;
  title: string;
  desc: string;
  links: {
    youtube?: string;
    github?: string;
    linkedin?: string;
  };
}

export const cdeProjects: Project[] = [
  {
    id: 14,
    title: "AWS ETL Pipeline with SQS",
    desc: "Event-driven architecture utilizing AWS SQS, Lambda, and S3 for decoupled data processing.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/AWS-Serverless-Data-Ingestion-Pipeline",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 13,
    title: "Stock Market Real-Time Data",
    desc: "Real-time streaming pipeline for financial data analysis using Kafka and AWS.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/Stock-Market-Kafka-Data-Engineering-Project",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 12,
    title: "AWS LakeToWarehouse",
    desc: "Automated pipeline moving data from an S3 Data Lake into a Snowflake Data Warehouse.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/LakeToWarehouse-AWS-S3-Glue-Redshift-Project",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 11,
    title: "AWS Lambda Pipeline",
    desc: "Serverless data processing workflow orchestrated with AWS Lambda functions.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90",
      youtube: "/coming-soon/youtube"
    }
  },
  {
    id: 10,
    title: "Kafka Snowflake Integration",
    desc: "Direct streaming ingestion from Apache Kafka topics into Snowflake tables.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90",
      youtube: "/coming-soon/youtube"
    }
  },
  {
    id: 9,
    title: "Airflow OpenWeather",
    desc: "Orchestrated DAGs in Apache Airflow to fetch, transform, and store weather API data.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/Airflow-OpenWeather-Pipeline",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 8,
    title: "Airflow Stocks Pipeline",
    desc: "Scheduled extraction and processing of stock market data using Airflow.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/SP500-Stocks-Data-Orchestration-using-Airflow",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 7,
    title: "Snowflake Data Integration",
    desc: "This project demonstrates different ways to load data into Snowflake using SQL commands, SnowSQL (CLI), cloud storage, and Snowpipe. It also covers external stages, storage integrations, and Snowflake features like Time Travel.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/snowflake-data-ingestion",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 6,
    title: "SCD Data Warehousing",
    desc: "Handling Slowly Changing Dimensions (Type 1 & 2) in a data warehouse environment.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/Slowly-Changing-Dimensions-with-Snowflake-",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 5,
    title: "Snowflake Weather Warehouse",
    desc: "Data modeling and analytical querying of large-scale weather datasets.",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/snowflake-weather-warehouse",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  },
  {
    id: 4,
    title: "Data Warehousing with Snowflake",
    desc: "This project focuses on building a scalable data warehouse using Snowflake. The goal is to design an optimized star schema, perform ETL operations, and enable efficient analytical queries on user activity and song metadata",
    links: {
      github: "https://github.com/ShaheerJamalChishti90/Sparkify-data-warehousing",
      youtube: "/coming-soon/youtube",
      linkedin: "/coming-soon/linkedin"
    }
  }
];