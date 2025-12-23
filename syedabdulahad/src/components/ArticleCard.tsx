import { Download, ExternalLink } from 'lucide-react';
import type { Article } from '@/data/content';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-card rounded-lg border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
      <h3 className="font-heading text-base font-semibold text-foreground-heading mb-2">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {article.description}
      </p>
      
      <div className="flex items-center gap-3">
        <a
          href={article.downloadUrl}
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
        >
          <Download size={14} />
          Download
        </a>
        <a
          href={article.readOnlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <ExternalLink size={14} />
          Read Online
        </a>
      </div>
    </article>
  );
}
