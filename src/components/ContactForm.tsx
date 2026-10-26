"use client";

import { content } from "@/lib/content";

export function ContactForm() {
  return (
    <form className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-teller-ink mb-2"
        >
          {content.contact.form.name.label.arabic}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={content.contact.form.name.placeholder.arabic}
          className="w-full px-4 py-3 rounded-xl border border-teller-cream-dark bg-white text-teller-ink placeholder:text-teller-ink/40 focus:outline-none focus:ring-2 focus:ring-teller-teal focus:border-transparent transition-all"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-teller-ink mb-2"
        >
          {content.contact.form.email.label.arabic}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={content.contact.form.email.placeholder.arabic}
          className="w-full px-4 py-3 rounded-xl border border-teller-cream-dark bg-white text-teller-ink placeholder:text-teller-ink/40 focus:outline-none focus:ring-2 focus:ring-teller-teal focus:border-transparent transition-all"
          required
          dir="ltr"
        />
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-teller-ink mb-2"
        >
          {content.contact.form.company.label.arabic}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder={content.contact.form.company.placeholder.arabic}
          className="w-full px-4 py-3 rounded-xl border border-teller-cream-dark bg-white text-teller-ink placeholder:text-teller-ink/40 focus:outline-none focus:ring-2 focus:ring-teller-teal focus:border-transparent transition-all"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-teller-ink mb-2"
        >
          {content.contact.form.message.label.arabic}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={content.contact.form.message.placeholder.arabic}
          className="w-full px-4 py-3 rounded-xl border border-teller-cream-dark bg-white text-teller-ink placeholder:text-teller-ink/40 focus:outline-none focus:ring-2 focus:ring-teller-teal focus:border-transparent transition-all resize-none"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        className="btn btn-primary w-full text-lg py-4"
        onClick={() =>
          alert("نظام إرسال الرسائل غير مفعل حالياً في النسخة التجريبية.")
        }
      >
        {content.contact.form.submit.arabic}
      </button>

      {/* Notice */}
      <p className="text-sm text-teller-ink/50 text-center">
        {content.contact.noBackendNote.arabic}
      </p>
    </form>
  );
}
