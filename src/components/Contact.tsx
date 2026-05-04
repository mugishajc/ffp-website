import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Create mailto link with form data
    const mailtoLink = `mailto:info@ffp-program.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Try to open email client
    const newWindow = window.open(mailtoLink, '_blank');

    // Show helpful message with email address
    toast.success(
      '✉️ Email Ready to Send!',
      {
        duration: 10000,
        description: 'Your email app should open with your message. Click SEND in your email app to complete. If it did not open, please email us directly at info@ffp-program.org'
      }
    );

    // Also try the direct approach
    if (!newWindow) {
      window.location.href = mailtoLink;
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.visitUs,
      content: ['Q. Katindo Av. Bunagana No 30', 'Commune de Goma, Ville de Goma', 'Nord-Kivu, RD Congo'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: t.contact.emailUs,
      content: ['info@ffp-program.org'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      title: t.contact.callUs,
      content: ['+1 (512) 738-7771', 'Mon-Fri, 8am-5pm'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/ffpprogram' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/ffp_program' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/foodfirstprogramme' }
  ];

  return (
    <section ref={ref} id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-4 backdrop-blur-sm border border-primary/20"
            >
              {t.contact.badge}
            </motion.div>
          </div>
          <h2 className="text-black mb-6 text-4xl sm:text-5xl font-black">
            {t.contact.title}
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed font-bold">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white hover:border-primary/30">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-gray-900 font-bold mb-3 text-lg">{info.title}</h3>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed font-medium">
                        {line}
                      </p>
                    ))}
                  </Card>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-6 border-2 border-gray-100 shadow-xl bg-white">
                <h3 className="text-gray-900 font-bold mb-4 text-lg">{t.contact.followUs}</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary hover:to-accent text-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg border border-primary/20"
                        aria-label={social.label}
                      >
                        <Icon size={22} />
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 sm:p-10 border-2 border-gray-100 shadow-2xl bg-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      {t.contact.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition-all h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      {t.contact.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition-all h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    {t.contact.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition-all h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition-all resize-none"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group"
                    size="lg"
                  >
                    {t.contact.send}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}