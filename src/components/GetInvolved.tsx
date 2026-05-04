import { DollarSign, Heart, Users, TrendingUp, ArrowRight, CheckCircle, Gift, Building2, Copy, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';

export function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [showBankDetails, setShowBankDetails] = useState(false);

  const bankDetails = {
    bankName: 'Equity Bank Rwanda',
    accountName: 'MULUMEODERHWA KAGAMBA VIANNEY',
    accountNumber: '4006201285054',
    swiftCode: 'EQBLRWRW',
    bankAddress: 'Grand Pension Plaza Building, Avenue De La Paix, P.O. Box 494, Kigali, Rwanda'
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  const handleDonateClick = () => {
    setShowBankDetails(true);
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ways = [
    {
      icon: DollarSign,
      title: t.getInvolved.donate,
      description: t.getInvolved.donateDesc,
      action: t.getInvolved.donateButton,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      onClick: handleDonateClick
    },
    {
      icon: Heart,
      title: t.getInvolved.volunteer,
      description: t.getInvolved.volunteerDesc,
      action: t.getInvolved.volunteerButton,
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      onClick: handleContactClick
    },
    {
      icon: Users,
      title: t.getInvolved.partner,
      description: t.getInvolved.partnerDesc,
      action: t.getInvolved.partnerButton,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      onClick: handleContactClick
    },
    {
      icon: TrendingUp,
      title: t.getInvolved.fundraise,
      description: t.getInvolved.fundraiseDesc,
      action: t.getInvolved.fundraiseButton,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      onClick: handleDonateClick
    }
  ];

  const donationImpacts = [
    { amount: '$50', impact: 'Feed a family for a month' },
    { amount: '$200', impact: 'Train a farmer in sustainable agriculture' },
    { amount: '$500', impact: 'Establish a community garden' }
  ];

  return (
    <section ref={ref} id="get-involved" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
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
              {t.getInvolved.badge}
            </motion.div>
          </div>
          <h2 className="text-black mb-6 text-4xl sm:text-5xl font-black">
            {t.getInvolved.title}
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed font-bold">
            {t.getInvolved.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-8 text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-20 h-20 bg-gradient-to-br ${way.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}
                  >
                    <Icon className="text-white" size={36} />
                  </motion.div>
                  
                  <h3 className="text-primary mb-4 text-xl relative z-10">{way.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow relative z-10">
                    {way.description}
                  </p>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                    <Button
                      onClick={way.onClick}
                      className={`w-full bg-gradient-to-r ${way.gradient} hover:shadow-lg transition-all duration-300 group/btn`}
                    >
                      {way.action}
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Donation Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-[#0066CC] via-[#0077DD] to-[#0EA5E9] rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden mb-12"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-white mb-4 text-3xl font-bold">Your Impact</h3>
              <p className="text-white/95 text-lg">Every contribution makes a tangible difference in families' lives</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {donationImpacts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{item.amount}</div>
                  <div className="text-white text-base leading-relaxed font-medium">{item.impact}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <CheckCircle size={20} className="text-green-300" />
                <span>{t.getInvolved.taxDeductible}</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <CheckCircle size={20} className="text-green-300" />
                <span>{t.getInvolved.recurring}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sponsor a Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Gift size={18} />
                <span className="text-sm">Long-term Impact</span>
              </div>
              <h3 className="text-primary mb-4 text-3xl">{t.getInvolved.sponsorTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.getInvolved.sponsorDesc}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={handleDonateClick}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group"
                >
                  {t.getInvolved.sponsorButton}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Community-Led Approach', 'Measurable Results', 'Regular Updates', 'Visit Programs'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 text-center border border-primary/10"
                >
                  <CheckCircle className="text-primary mx-auto mb-3" size={28} />
                  <div className="text-sm text-foreground">{feature}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bank Details Dialog */}
      <AnimatePresence>
        {showBankDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowBankDetails(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white relative">
                <button
                  onClick={() => setShowBankDetails(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bank Transfer Details</h3>
                    <p className="text-white/90 text-sm">Support FoodFirst Program</p>
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Bank Name</div>
                  <div className="font-semibold text-gray-900 flex items-center justify-between">
                    {bankDetails.bankName}
                    <button
                      onClick={() => copyToClipboard(bankDetails.bankName, 'Bank name')}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Copy size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Account Name</div>
                  <div className="font-semibold text-gray-900 flex items-center justify-between">
                    <span className="text-sm">{bankDetails.accountName}</span>
                    <button
                      onClick={() => copyToClipboard(bankDetails.accountName, 'Account name')}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Copy size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Account Number</div>
                  <div className="font-semibold text-gray-900 flex items-center justify-between">
                    <span className="font-mono text-lg">{bankDetails.accountNumber}</span>
                    <button
                      onClick={() => copyToClipboard(bankDetails.accountNumber, 'Account number')}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Copy size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">SWIFT Code</div>
                  <div className="font-semibold text-gray-900 flex items-center justify-between">
                    <span className="font-mono">{bankDetails.swiftCode}</span>
                    <button
                      onClick={() => copyToClipboard(bankDetails.swiftCode, 'SWIFT code')}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Copy size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Bank Address</div>
                  <div className="font-medium text-gray-900 text-sm flex items-start justify-between gap-2">
                    <span>{bankDetails.bankAddress}</span>
                    <button
                      onClick={() => copyToClipboard(bankDetails.bankAddress, 'Bank address')}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
                    >
                      <Copy size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* PayPal Option */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-500 font-medium text-center mb-3">Or donate via PayPal</p>
                  <a
                    href="https://paypal.me/LilianeMuyumba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold rounded-xl transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                    </svg>
                    Donate with PayPal
                  </a>
                  <p className="text-xs text-center text-gray-400 mt-2">@LilianeMuyumba</p>
                </div>

                <p className="text-center text-sm text-gray-500 pt-4">
                  Thank you for your support!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}