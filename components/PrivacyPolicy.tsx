import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <div className="ml-auto font-semibold text-blue-900">IBTISAMA</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 text-blue-600">
             <ShieldCheck size={32} />
             <span className="font-bold tracking-wider uppercase text-sm">Legal</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600 mb-8 pb-8 border-b border-gray-100">
            For Ibtisama Care Specialist Dental Center WhatsApp Bot
          </p>

          <div className="space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy outlines how Ibtisama Care Specialist Dental Center W.L.L ("we", "us", or "our") collects, uses, and protects your personal information when you interact with our WhatsApp automated chatbot service.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Data Collection</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect the following minimal personal data necessary to provide you with our dental services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong className="text-slate-800">Name:</strong> To identify you within our patient management system.</li>
                <li><strong className="text-slate-800">Phone Number:</strong> To send appointment reminders, booking confirmations, and provide dental support via WhatsApp.</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Usage</h2>
              <p className="text-slate-600 leading-relaxed">
                Your data is used exclusively for the purpose of communicating regarding your dental care. This includes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-slate-600">
                <li>Scheduling and confirming appointments.</li>
                <li>Sending reminders for upcoming visits.</li>
                <li>Responding to your direct inquiries about our services.</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Sharing</h2>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-900 font-medium">
                  We do not sell, rent, or share your personal data with third parties for marketing purposes.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">
                Your information is strictly confidential and is only accessible by authorized Ibtisama Clinic staff for administrative and medical purposes.
              </p>
            </section>

             {/* Contact Information */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you have any questions regarding your data or this privacy policy, please contact us directly:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a href="tel:+97317777088" className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
                    <Phone className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Landline</div>
                    <div className="text-slate-900 font-medium">+973 1777 7088</div>
                  </div>
                </a>

                <a href="https://wa.me/97339332244" className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group">
                  <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="text-green-700" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">WhatsApp</div>
                    <div className="text-slate-900 font-medium">+973 3933 2244</div>
                  </div>
                </a>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Ibtisama Care Specialist Dental Center W.L.L. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
}