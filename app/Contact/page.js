import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-md">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600">
            Reach out to us anytime — we’d love to hear from you!
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
            <p className="text-gray-700">+91-6200379161</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
            <p className="text-gray-700">
              3rd Floor, 4/11, Vidyut Abhiyanta Colony,<br />
              Sector 4, Malviya Nagar,<br />
              Jaipur, Rajasthan 302017
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-700">digitalwhopperhelp@gmail.com</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Subject (full width) */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message (full width) */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="6"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          {/* Submit Button (full width) */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>


    <div className="w-full overflow-hidden mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6785062792983!2d75.81639349999999!3d26.850176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70d6ddc5739%3A0x26f55464d633e961!2sDigital%20Whopper!5e0!3m2!1sen!2sin!4v1751349773242!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default ContactPage;
