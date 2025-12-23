import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/content';

const Projects = () => {
  return (
    <Layout>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-heading mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground">
              A collection of my programming projects, from web applications to tools and utilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
