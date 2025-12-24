// "use client"; 

// import { motion } from "framer-motion";
// import { myProjects } from "../app/data/portfolio";

// export default function ProjectGrid() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 max-w-7xl mx-auto">
//       {myProjects.map((project, index) => (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }} 
//           whileHover={{ scale: 1.05 }} 
//           className="relative overflow-hidden rounded-2xl bg-surface p-6 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer group"
//         >
//           {/* Glowing Background Effect */}
//           <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
          
//           <h3 className="text-2xl font-bold mb-2 z-10 relative text-white">{project.title}</h3>
//           <p className="text-textMuted mb-4 z-10 relative">{project.description}</p>
          
//           <div className="flex flex-wrap gap-2 z-10 relative">
//             {project.tech.map((t) => (
//               <span key={t} className="text-xs text-white bg-white/10 px-2 py-1 rounded border border-white/10">
//                 {t}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }


"use client"; 

import { motion } from "framer-motion";
import { myProjects } from "../app/data/portfolio";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 max-w-7xl mx-auto">
      {myProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} 
          whileHover={{ scale: 1.05 }} 
          className="relative overflow-hidden rounded-2xl bg-surface p-6 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer group"
        >
          {/* Glowing Background Effect */}
          <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
          
          <h3 className="text-2xl font-bold mb-2 z-10 relative text-white">{project.title}</h3>
          <p className="text-textMuted mb-4 z-10 relative">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 z-10 relative">
            {project.tech.map((t) => (
              <span key={t} className="text-xs text-white bg-white/10 px-2 py-1 rounded border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}