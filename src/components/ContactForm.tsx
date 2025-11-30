import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setStatus('sending');

    // NOTE: These are placeholder IDs. You need to replace them with your actual EmailJS service, template, and public key.
    // Go to https://www.emailjs.com/ to create an account and get these keys.
    // const SERVICE_ID = 'YOUR_SERVICE_ID';
    // const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    // const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    // Simulating success for now since we don't have real keys
    setTimeout(() => {
        setStatus('success');
        if (form.current) form.current.reset();
    }, 1500);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="user_name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="user_email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
          status === 'success'
            ? 'bg-green-600 hover:bg-green-700'
            : status === 'error'
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25'
        }`}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : status === 'success' ? (
          <>
            <CheckCircle className="w-5 h-5" /> Message Sent!
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle className="w-5 h-5" /> Failed to Send
          </>
        ) : (
          <>
            <Send className="w-5 h-5" /> Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
