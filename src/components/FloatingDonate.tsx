import { useState, useEffect } from 'react';
import { Heart, X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function FloatingDonate() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Bank details
  const bankDetails = {
    bankName: 'Equity Bank Rwanda',
    accountName: 'MULUMEODERHWA KAGAMBA VIANNEY',
    accountNumber: '4006201285054',
    swiftCode: 'EQBLRWRW',
    bankAddress: 'Grand Pension Plaza Building, Avenue De La Paix, P.O. Box 494, Kigali, Rwanda'
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDonate = () => {
    const element = document.getElementById('get-involved');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success(`${field} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
        >
          {/* Expanded Info Card */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-96 max-w-md bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-primary/10"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
                  Make a Difference Today
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Use the bank details below to make your donation
                </p>

                {/* Bank Details */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Bank Name</p>
                        <p className="text-sm font-semibold text-gray-900">{bankDetails.bankName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-2">
                        <p className="text-xs text-gray-500 font-medium">Account Name</p>
                        <p className="text-sm font-semibold text-gray-900">{bankDetails.accountName}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountName, 'Account Name')}
                        className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                        title="Copy"
                      >
                        {copiedField === 'Account Name' ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-500" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-primary font-medium">Account Number</p>
                        <p className="text-lg font-bold text-primary">{bankDetails.accountNumber}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'Account Number')}
                        className="p-1.5 hover:bg-primary/10 rounded transition-colors"
                        title="Copy"
                      >
                        {copiedField === 'Account Number' ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-primary" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-gray-500 font-medium">SWIFT Code</p>
                        <p className="text-sm font-semibold text-gray-900">{bankDetails.swiftCode}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.swiftCode, 'SWIFT Code')}
                        className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                        title="Copy"
                      >
                        {copiedField === 'SWIFT Code' ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-500" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-medium">Bank Address</p>
                    <p className="text-xs text-gray-700">{bankDetails.bankAddress}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={scrollToDonate}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    View All Options
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  100% of your donation goes to programs
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
          >
            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            {/* Icon */}
            <Heart className="text-white relative z-10" size={24} fill="white" />

            {/* Hover glow */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
