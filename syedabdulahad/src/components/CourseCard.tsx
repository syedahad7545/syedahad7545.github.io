import { Play } from 'lucide-react';
import type { VideoCourse } from '@/data/content';

interface CourseCardProps {
  course: VideoCourse;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <a
      href={course.playlistUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
        {/* Thumbnail */}
        <div className={`h-32 bg-gradient-to-br ${course.thumbnailColor} flex items-center justify-center`}>
          <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={24} className="text-primary-foreground ml-1" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-heading text-base font-semibold text-foreground-heading mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {course.description}
          </p>
        </div>
      </article>
    </a>
  );
}
