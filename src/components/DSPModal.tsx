import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, Sparkles, User, Mail, School, Send } from 'lucide-react';

interface DSPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DSPModal: React.FC<DSPModalProps> = ({ isOpen, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    usn: '',
    department: 'CSE',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setRegistered(true);
  };

  const resetAndClose = () => {
    setRegistered(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      onClick={resetAndClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FBF8F1] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]/50 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {registered ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#8B2635] mb-2">
              Registration Successful!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#2D1B1B]">{formData.name}</strong>. Your seat for the <strong>Building Advanced AI Applications and Agents</strong> workshop has been reserved. Check your email for further instructions!
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 rounded-xl font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] shadow-md hover:from-[#E6C547] hover:to-[#D4AF37]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#8B2635] bg-[#F4E4BC]/50 border border-[#D4AF37]/40 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                ACM Distinguished Speaker Program
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8B2635] leading-tight mb-2">
                Building Advanced AI Applications & Agents
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 mt-2">
                <span className="flex items-center gap-1 text-[#8B2635]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  November 6th, 2025
                </span>
                <span className="flex items-center gap-1 text-[#8B2635]">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Confluence 2025, GM University Campus
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/80 border border-[#D4AF37]/25 rounded-2xl p-5 mb-6 shadow-xs">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Alongside the buzz of Confluence at GM University, the ACM Student Chapter is organizing this premier hands-on workshop exclusively for students, faculty, and tech enthusiasts.
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B2635] mb-2">
                What You Will Learn:
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  Foundation of Large Language Models (LLMs) and Vision Models (VLMs)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  Architecting Autonomous Multi-Agent Workflows & Function Calling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  Retrieval-Augmented Generation (RAG) and Vector Stores
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  Official ACM Certificate of Participation for all attendees
                </li>
              </ul>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-sm font-bold text-[#8B2635] uppercase tracking-wider">
                Reserve Your Free Seat:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@gmu.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    USN / College ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4GM22CS001"
                    value={formData.usn}
                    onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                    >
                      <option value="CSE">Computer Science & Engineering</option>
                      <option value="ISE">Information Science & Engineering</option>
                      <option value="AIML">AI & Machine Learning</option>
                      <option value="MCA">School of Computer Applications</option>
                      <option value="ECE">Electronics & Communication</option>
                      <option value="Other">Other Branch / Faculty</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] hover:from-[#E6C547] hover:to-[#D4AF37] shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#8B2635]" />
                  Confirm Registration
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
