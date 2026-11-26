'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function CertificationInquiryForm({ certTitle }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    targetExamDate: '',
    notes: '',
  });

  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: `${certTitle} Certification Preparation`,
          subject: `Certification Preparation Inquiry – ${certTitle}`,
          message: `Target Exam Date: ${formData.targetExamDate || 'Not specified'}. ${formData.notes}`,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setFormStatus({ loading: false, success: true, error: '' });
        setFormData({ fullName: '', email: '', phone: '', targetExamDate: '', notes: '' });
      } else {
        setFormStatus({ loading: false, success: false, error: json.error || 'Failed to submit inquiry.' });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <div id="enquiry-form" className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 my-10 max-w-3xl mx-auto shadow-md space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue bg-brand-lightBlue px-3 py-1 rounded-full inline-block">
          Get Started
        </span>
        <h3 className="text-2xl font-bold text-brand-navy">Enquire About {certTitle} Preparation</h3>
        <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
          Fill out the form below to speak with an educational specialist regarding study plans and schedules.
        </p>
      </div>

      {formStatus.success ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-lg font-bold text-emerald-950">Inquiry Received!</h3>
          <p className="text-xs sm:text-sm text-emerald-800">
            Thank you. An educational advisor will contact you within 1 business day regarding your {certTitle} preparation goals.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-brand-navy mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block font-bold text-brand-navy mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-brand-navy mb-1">Phone / WhatsApp (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block font-bold text-brand-navy mb-1">Target Exam Date (Optional)</label>
              <input
                type="text"
                name="targetExamDate"
                value={formData.targetExamDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="e.g. Next month, June 2025"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-brand-navy mb-1">Learning Goals & Background *</label>
            <textarea
              name="notes"
              required
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="Tell us about your current preparation status, preferred study times, or specific topics needing attention."
            />
          </div>

          {formStatus.error && (
            <p className="text-xs text-rose-600 font-bold">{formStatus.error}</p>
          )}

          <button
            type="submit"
            disabled={formStatus.loading}
            className="w-full py-3 px-6 bg-brand-blue hover:bg-brand-navy text-white rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            {formStatus.loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Preparation Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
