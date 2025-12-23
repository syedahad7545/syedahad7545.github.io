import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { profileInfo } from '@/data/content';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-heading mb-6 leading-tight">
              Hello, I'm a <span className="text-primary">CS Student</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              {profileInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <Code2 size={18} />
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/learning"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
              >
                <BookOpen size={18} />
                Learning Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background-alt py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground-heading mb-2">
                Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore my programming projects spanning web development, algorithms, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground-heading mb-2">
                Articles
              </h3>
              <p className="text-sm text-muted-foreground">
                In-depth articles on computer science and mathematics concepts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground-heading mb-2">
                Video Courses
              </h3>
              <p className="text-sm text-muted-foreground">
                Curated video playlists to help you master complex topics step by step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
