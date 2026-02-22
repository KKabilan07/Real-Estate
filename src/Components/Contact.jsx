import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;

    // Create or get hidden iframe
    let iframe = document.getElementById("web3-form-iframe");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "web3-form-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    // Set form target to iframe and submit
    form.target = "web3-form-iframe";
    form.action = "https://api.web3forms.com/submit";
    form.method = "POST";
    form.submit();

    // Show success message and reset form
    setTimeout(() => {
      toast.success("Form Submitted Successfully ✅");
      form.reset();
      form.target = "";
      setLoading(false);
    }, 500);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <input
          type="hidden"
          name="access_key"
          value="bd677875-2da7-4c5c-99ca-b3cb73cbdd41"
        />
        <input
          type="hidden"
          name="from_name"
          value="Real Estate Contact Form"
        />
        {/* Hidden subject field */}
        <input
          type="hidden"
          name="subject"
          value="New Contact Form Submission"
        />

        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 text-left">
            <label>Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-2 text-left">
            <label>Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="text-left my-6">
          <label>Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-12 mb-10 rounded cursor-pointer hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
