import { Layout } from '@/components/Layout';
import { profileInfo, resumeData } from '@/data/content';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Resume() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                Resume
              </h1>
              <p className="text-muted-foreground">
                My academic and professional background
              </p>
            </div>
            <Button asChild className="w-fit">
              <a 
                href={profileInfo.resumeUrl} 
                download 
                className="inline-flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Profile Summary */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold mb-2">
                  {profileInfo.name}
                </h2>
                <p className="text-primary font-medium mb-2">
                  {profileInfo.tagline}
                </p>
                <p className="text-muted-foreground">
                  {profileInfo.bio}
                </p>
              </div>
            </div>
          </section>

          {/* Resume Sections */}
          {resumeData.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-xl font-semibold mb-4 pb-2 border-b border-border">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h3 className="font-medium text-foreground-heading">
                        {item.title}
                      </h3>
                      {item.date && (
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <p className="text-primary text-sm mb-2">
                        {item.subtitle}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
