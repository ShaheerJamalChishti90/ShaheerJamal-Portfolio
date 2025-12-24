import ProjectGrid from "../components/ProjectGrid";
import { myProfile } from "./data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-20">
      {/* Hero Section */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {myProfile.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-textMuted max-w-2xl mx-auto border-b border-white/10 pb-6">
          {myProfile.role}
        </p>
        <p className="mt-4 text-gray-400">{myProfile.about}</p>
      </section>

      {/* The Projects Grid */}
      <div className="w-full bg-surface/30 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Featured Work</h2>
        <ProjectGrid />
      </div>
    </main>
  );
}