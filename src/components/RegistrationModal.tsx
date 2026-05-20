
import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { submitRegistration } from '../lib/firebase';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    category: 'Author'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitRegistration(formData);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="relative p-8 md:p-12">
            {/* Form (Blurred as requested) */}
            <div className={cn(
              "transition-all duration-500",
              status === 'idle' ? "filter blur-[4px] pointer-events-none select-none opacity-50 grayscale-[0.5]" : ""
            )}>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Registration Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full h-12 bg-slate-100 rounded-lg px-4 border-transparent focus:border-med-blue focus:bg-white transition-all outline-none"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full h-12 bg-slate-100 rounded-lg px-4 border-transparent focus:border-med-blue focus:bg-white transition-all outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Institution / Organization</label>
                  <input 
                    type="text" 
                    required
                    className="w-full h-12 bg-slate-100 rounded-lg px-4 border-transparent focus:border-med-blue focus:bg-white transition-all outline-none"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Contact Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full h-12 bg-slate-100 rounded-lg px-4 border-transparent focus:border-med-blue focus:bg-white transition-all outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Category</label>
                    <select 
                      className="w-full h-12 bg-slate-100 rounded-lg px-4 border-transparent focus:border-med-blue focus:bg-white transition-all outline-none appearance-none"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option>Author</option>
                      <option>Student</option>
                      <option>Listener</option>
                      <option>Industry</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full h-14 bg-med-blue text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' && <Loader2 className="animate-spin" size={20} />}
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>

            {/* Overlay (Coming Soon) */}
            {status === 'idle' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-[2px]">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center max-w-sm"
                >
                  <div className="w-20 h-20 bg-med-blue/10 rounded-full flex items-center justify-center mb-6">
                    <Lock size={40} className="text-med-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-black text-slate-900 mb-3 tracking-tight">
                    COMING <span className="text-med-blue">SOON</span>
                  </h3>
                  
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    Online registration for <span className="font-bold text-slate-900">IC-AIHISD 2026</span> will be available shortly. Please check back later for updates.
                  </p>

                  <button 
                    onClick={onClose}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                  >
                    Close Preview
                  </button>
                </motion.div>
              </div>
            )}

            {/* Success State */}
            {status === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white z-50">
                <CheckCircle2 size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
                <p className="text-slate-500 mb-8">Thank you for your interest. We will contact you soon.</p>
                <button onClick={onClose} className="px-8 py-3 bg-slate-900 text-white rounded-lg">Close</button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

