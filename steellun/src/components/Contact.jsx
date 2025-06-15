import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [toast, setToast] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields.", 'error');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    showToast("Message sent! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="backdrop-blur-xl backdrop-filter mx-6 mb-10 bg-white/20 bg-opacity-30 text-white">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          toast.type === 'error' 
            ? 'bg-red-500 text-white' 
            : 'bg-green-500 text-white'
        }`}>
          {toast.message}
        </div>
      )}

      {/* Navigation */}
      <h1 className="text-white text-3xl sm:text-5xl mt-12 pt-12 mb-6 font-bold text-center">Contact Us</h1>
      <div className="container mx-auto px-8 pb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions Steellun? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <p className="text-gray-400 mb-1">contact@steellun.org</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <p className="text-gray-400 mb-1">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <p className="text-gray-400 mb-1">Student Activity Center</p>
                <p className="text-gray-400 mb-1">NIT Rourkela, Odisha 769008</p>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your inquiry or how you'd like to get involved..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
