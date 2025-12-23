import { Link } from 'react-router-dom';
import { FileText, Play, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';

const Learning = () => {
  return (
    <Layout>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-heading mb-4">
              Learning Hub
            </h1>
            <p className="text-muted-foreground">
              Free resources to help you master computer science and mathematics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Articles Card */}
            <Link
              to="/learning/articles"
              className="group relative bg-card rounded-xl border border-border p-8 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="text-primary" size={28} />
                </div>
                
                <h2 className="font-heading text-2xl font-semibold text-foreground-heading mb-3">
                  Articles
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive written guides on data structures, algorithms, OOP, databases, and mathematical foundations.
                </p>
                
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Browse Articles
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Videos Card */}
            <Link
              to="/learning/videos"
              className="group relative bg-card rounded-xl border border-border p-8 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Play className="text-primary ml-1" size={28} />
                </div>
                
                <h2 className="font-heading text-2xl font-semibold text-foreground-heading mb-3">
                  Video Courses
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Curated YouTube playlists covering Programming Fundamentals, OOP, DSA, Calculus, and Linear Algebra.
                </p>
                
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Browse Courses
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Learning;
