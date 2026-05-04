import { motion } from 'framer-motion';
import { FileText, Download, Eye, TrendingUp, Users, DollarSign, Target, Mail } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { toast } from 'sonner';

export function AnnualReports() {
  const { t } = useLanguage();

  const handleDownload = (year: string) => {
    // Show message that reports will be available soon
    toast.info(`Annual Report ${year}`, {
      description: 'PDF download will be available soon. Please contact us for a copy.',
      duration: 4000,
    });
  };

  const handleViewOnline = (year: string) => {
    // Show message that reports will be available soon
    toast.info(`Annual Report ${year}`, {
      description: 'Online viewer will be available soon. Please contact us for a copy.',
      duration: 4000,
    });
  };

  const reports = [
    {
      year: '2024',
      title: 'Annual Report 2024',
      description: 'Our most impactful year yet with 12,000+ lives transformed and 85 communities reached.',
      status: t.pages.annualReports.latest,
      pages: 48,
      highlights: [
        { icon: Users, label: '12,000+ Lives Impacted', color: 'text-blue-500' },
        { icon: DollarSign, label: '$2.4M Distributed', color: 'text-green-500' },
        { icon: Target, label: '85 Villages Reached', color: 'text-purple-500' },
        { icon: TrendingUp, label: '65% Yield Increase', color: 'text-orange-500' }
      ]
    },
    {
      year: '2023',
      title: 'Annual Report 2023',
      description: 'Expanding our reach with new partnerships and innovative agricultural programs.',
      pages: 42,
      highlights: [
        { icon: Users, label: '8,500+ Lives Impacted', color: 'text-blue-500' },
        { icon: DollarSign, label: '$1.8M Distributed', color: 'text-green-500' },
        { icon: Target, label: '62 Villages Reached', color: 'text-purple-500' },
        { icon: TrendingUp, label: '58% Yield Increase', color: 'text-orange-500' }
      ]
    },
    {
      year: '2022',
      title: 'Annual Report 2022',
      description: 'Building foundations for sustainable food security across North Kivu.',
      pages: 36,
      highlights: [
        { icon: Users, label: '5,200+ Lives Impacted', color: 'text-blue-500' },
        { icon: DollarSign, label: '$1.2M Distributed', color: 'text-green-500' },
        { icon: Target, label: '38 Villages Reached', color: 'text-purple-500' },
        { icon: TrendingUp, label: '45% Yield Increase', color: 'text-orange-500' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              {t.pages.annualReports.badge}
            </div>
          </div>
          <h1 className="text-primary mb-6 text-4xl sm:text-5xl">
            {t.pages.annualReports.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t.pages.annualReports.description}
          </p>
        </motion.div>

        {/* Reports Grid */}
        <div className="space-y-8 mb-16">
          {reports.map((report, index) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden group">
                {/* Status Badge */}
                {report.status && (
                  <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm shadow-lg">
                    {report.status}
                  </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Report Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                        <FileText className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-primary text-2xl mb-1">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t.pages.annualReports.published} {report.year} • {report.pages} {t.pages.annualReports.pages}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {report.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {report.highlights.map((highlight, i) => {
                        const Icon = highlight.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 + i * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <Icon className={`${highlight.color} flex-shrink-0`} size={20} />
                            <span className="text-sm text-foreground">{highlight.label}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => handleDownload(report.year)}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group/btn"
                        size="lg"
                      >
                        <Download className="mr-2 group-hover/btn:animate-bounce" size={20} />
                        {t.pages.annualReports.download}
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => handleViewOnline(report.year)}
                        variant="outline"
                        className="w-full border-2 border-primary/20 hover:bg-primary/5 hover:border-primary"
                        size="lg"
                      >
                        <Eye className="mr-2" size={20} />
                        {t.pages.annualReports.viewOnline}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Request Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 md:p-16 border border-primary/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <Mail className="text-primary mx-auto mb-6" size={48} />
            <h3 className="text-primary mb-4 text-2xl">
              {t.pages.annualReports.requestTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.pages.annualReports.requestDesc}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              >
                {t.pages.annualReports.contactTeam}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}