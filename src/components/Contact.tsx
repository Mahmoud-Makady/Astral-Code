import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { COMPANY_INFO } from '../utils/constants';

const Contact: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Clear form after successful submission
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary-400" />,
      title: 'Email Us',
      content: COMPANY_INFO.email,
      link: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: <Phone size={24} className="text-primary-400" />,
      title: 'Call Us',
      content: COMPANY_INFO.phone,
      link: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <MapPin size={24} className="text-primary-400" />,
      title: 'Visit Us',
      content: COMPANY_INFO.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`,
    },
  ];

  return (
    <Section
      id="contact"
      title={compact ? undefined : "Get In Touch"}
      subtitle={compact ? undefined : "Have a project in mind? Let's discuss how we can help bring your vision to life."}
      dark={compact}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          {!compact && (
            <>
              <h3 className="text-2xl font-bold mb-6">
                <span className="gradient-text">Contact Information</span>
              </h3>
              
              <p className="text-gray-300 mb-8">
                Reach out to us through any of the following channels. We're always excited to hear about new projects and challenges.
              </p>
            </>
          )}
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.title === 'Visit Us' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-dark-900 rounded-lg border border-dark-800 hover:border-primary-500 transition-colors"
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </a>
            ))}
          </div>
          
          {compact && (
            <div className="text-center mt-6">
              <Button variant="primary" to="/contact">
                Contact Us
              </Button>
            </div>
          )}
        </div>
        
        {!compact && (
          <div>
            <form onSubmit={handleSubmit} className="bg-dark-900 p-6 rounded-lg border border-dark-800">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Request">Project Request</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Job Application">Job Application</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="w-full mt-6"
                disabled={formStatus === 'submitting'}
                icon={formStatus === 'submitting' ? undefined : <Send size={16} />}
              >
                {formStatus === 'submitting' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
              
              {formStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Contact;