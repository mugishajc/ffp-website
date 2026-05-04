import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Heart } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    bankName: 'Equity Bank Rwanda',
    accountName: 'MULUMEODERHWA KAGAMBA VIANNEY',
    accountNumber: '4006201285054',
    swiftCode: 'EQBLRWRW',
    bankAddress: 'Grand Pension Plaza Building, Avenue De La Paix, P.O. Box 494, Kigali, Rwanda'
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success(`${field} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
              <Heart className="mb-3" size={32} />
              <h2 className="text-2xl font-bold">Make a Difference Today</h2>
              <p className="text-white/80 text-sm mt-1">
                Use the bank details below to make your donation
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6">
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

              {/* PayPal Option */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-xs text-gray-500 font-medium text-center mb-3">Or donate via PayPal</p>
                <a
                  href="https://paypal.me/LilianeMuyumba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                  </svg>
                  Donate with PayPal
                </a>
                <p className="text-xs text-center text-gray-400 mt-2">@LilianeMuyumba</p>
              </div>

              <p className="text-xs text-center text-gray-500 mb-4">
                100% of your donation goes directly to programs
              </p>

              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-primary to-accent"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
