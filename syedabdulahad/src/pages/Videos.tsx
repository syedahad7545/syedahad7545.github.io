import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { CourseCard } from '@/components/CourseCard';
import { videoCourses } from '@/data/content';

const Videos = () => {
  const csCourses = videoCourses.filter((c) => c.category === 'cs');
  const mathCourses = videoCourses.filter((c) => c.category === 'math');

  return (
    <Layout>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <Link
              to="/learning"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4 transition-colors"
            >
              <ChevronLeft size={16} />
              Back to Learning Hub
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-heading mb-4">
              Video Courses
            </h1>
            <p className="text-muted-foreground">
              Curated YouTube playlists to help you learn at your own pace.
            </p>
          </div>

          {/* Computer Science Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-heading text-xl font-semibold text-foreground-heading mb-6 pb-2 border-b border-border">
              Computer Science
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {csCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Mathematics Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-xl font-semibold text-foreground-heading mb-6 pb-2 border-b border-border">
              Mathematics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mathCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
