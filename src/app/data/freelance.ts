import { Project } from './cde'; // We reuse the structure from cde.ts

export const freelanceProjects: Project[] = [
  { 
    id: 1, 
    title: "Attendance Management System (work in progress)", 
    desc: "A facial-recognition based application delivered to a client for automated employee attendance tracking.", 
    links: { github: "#" } 
  },
  { 
    id: 2, 
    title: "Student Management System", 
    desc: "Complete educational management portal developed for Al Quran Academy using php.", 
    links: { github: "https://github.com/ShaheerJamalChishti90/StudentManagementSystem"} 
  },
  { 
    id: 3, 
    title: "Attendance Management System", 
    desc: "Complete educational management portal developed for Emausclic Space using php.", 
    links: { github: "https://github.com/ShaheerJamalChishti90/Emasulic-Space-Project-Mega-Folder"} 
  }
];