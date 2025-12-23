import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/content';

const Articles = () => {
  const csArticles = articles.filter((a) => a.category === 'cs');
  const mathArticles = articles.filter((a) => a.category === 'math');

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
              Articles
            </h1>
            <p className="text-muted-foreground">
              Download or read comprehensive guides on computer science and mathematics topics.
            </p>
          </div>

          {/* Computer Science Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-heading text-xl font-semibold text-foreground-heading mb-6 pb-2 border-b border-border">
              Computer Science
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {csArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Mathematics Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-xl font-semibold text-foreground-heading mb-6 pb-2 border-b border-border">
              Mathematics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mathArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
