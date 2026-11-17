'use client';

import React, { useState } from 'react';
import { FileCheck } from 'lucide-react';

export default function StudyResourceInquiryForm({ resourceTitle }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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
          service: `Study Resource Request – ${resourceTitle}`,
          subject: `Resource Request – ${resourceTitle}`,
          message: formData.notes || `Requesting study guides for ${resourceTitle}.`,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setFormStatus({ loading: false, success: true, error: '' });
        setFormData({ fullName: '', email: '', notes: '' });
      } else {
        setFormStatus({ loading: false, success: false, error: json.error || 'Failed to submit request.' });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <div className="bg-white border border-brand-border rounded-2xl p-8 space-y-4 shadow-sm">
      <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
        <FileCheck className="w-5 h-5 text-brand-blue" />
        Request Study Materials
      </h3>

      {formStatus.success ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-900 font-bold">
          Resource request submitted! Check your email inbox shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-brand-navy mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
              className="w-full px-3 py-2 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div>
            <label className="block font-bold text-brand-navy mb-1">Notes / Target Exam</label>
            <textarea
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-brand-border bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <button
            type="submit"
            disabled={formStatus.loading}
            className="w-full py-2.5 bg-brand-blue hover:bg-brand-navy text-white font-bold rounded-xl shadow-sm transition-all"
          >
            {formStatus.loading ? 'Requesting...' : 'Request Material Access'}
          </button>
        </form>
      )}
    </div>
  );
}
