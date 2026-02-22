import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("N5tA_7zAImDYo5sbX");

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      to_email: "kkabilan2024@gmail.com", 
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      await emailjs.send(
        "service_lp3dtnw",
        "template_w82hxfd", 
        formData
      );

      toast.success("Form Submitted Successfully");
      event.target.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again!");
      console.error("EmailJS Error:", error);
    }

    setLoading(false);
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
