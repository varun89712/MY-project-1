import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, User, Mail, School, Hash, Send } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    usn: '',
    semester: '5th Sem',
    department: 'Computer Science & Engineering',
    acmNumber: '',
    interests: [] as string[],
  });

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const interestOptions = [
    'Competitive Programming',
    'AI & Machine Learning',
    'Web & Full Stack Dev',
    'Cybersecurity & CTFs',
    'Open Source & Git',
    'Event Operations & Design',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      onClick={handleResetAndClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FBF8F1] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37]/50 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#8B2635] mb-2">
              Welcome to GMU ACM Chapter!
            </h3>
            <p className="text-slate-600 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#2D1B1B]">{formData.name}</strong>. Your application to join the GM University ACM Student Chapter has been submitted. Our executive team will reach out to your email shortly!
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] shadow-md hover:from-[#E6C547] hover:to-[#D4AF37]"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#8B2635] bg-[#F4E4BC]/50 border border-[#D4AF37]/40 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Join The Tech Vanguard
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8B2635] leading-tight mb-2">
                Become an ACM Student Chapter Member
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Unlock access to ACM Digital Library discounts, hackathon teams, peer mentorship, Kattis contests, and exclusive industrial workshops at GM University.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="e.g. Ananya Rao"
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
                      placeholder="e.g. ananya@gmu.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    USN / Student ID *
                  </label>
                  <div className="relative">
                    <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="4GM23CS012"
                      value={formData.usn}
                      onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Semester
                  </label>
                  <select
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                  >
                    <option value="1st / 2nd Sem">1st / 2nd Semester</option>
                    <option value="3rd Sem">3rd Semester</option>
                    <option value="4th Sem">4th Semester</option>
                    <option value="5th Sem">5th Semester</option>
                    <option value="6th Sem">6th Semester</option>
                    <option value="7th / 8th Sem">7th / 8th Semester</option>
                    <option value="PG / MCA">Post Graduate / MCA</option>
                  </select>
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
                      <option value="Computer Science & Engineering">CSE</option>
                      <option value="Information Science & Engineering">ISE</option>
                      <option value="Artificial Intelligence & Machine Learning">AIML</option>
                      <option value="School of Computer Applications (MCA/BCA)">MCA / BCA</option>
                      <option value="Electronics & Communication">ECE</option>
                      <option value="Other Engineering">Other Branch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    ACM Global Member # (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="If you have an ACM ID"
                    value={formData.acmNumber}
                    onChange={(e) => setFormData({ ...formData, acmNumber: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2635]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Areas of Interest:
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((opt) => {
                    const isSelected = formData.interests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleInterest(opt)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#8B2635] text-white border-[#8B2635]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-[#D4AF37]'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-[#2D1B1B] bg-gradient-to-r from-[#D4AF37] to-[#E6C547] hover:from-[#E6C547] hover:to-[#D4AF37] shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#8B2635]" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
