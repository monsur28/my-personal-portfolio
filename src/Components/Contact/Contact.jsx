import { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0814d6c",
        "template_7h4vzzf",
        e.target,
        "xC-_eCu9lvHO3EWV6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert(`Message failed to send.${error.text}`);
        }
      );
  };

  return (
    <div className="container mx-auto my-10 p-5  rounded-lg shadow-md">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Contact Me
      </h2>
      <div className="flex flex-wrap justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <a
          href="mailto:monsur286512@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center mr-4"
        >
          <FaEnvelope className="text-xl mr-2" />
          Email
        </a>
        <a
          href="https://www.facebook.com/mdmonsur28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center mr-4"
        >
          <FaFacebook className="text-xl mr-2" />
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/mdmonsur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center mr-4"
        >
          <FaLinkedin className="text-xl mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/monsur28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FaGithub className="text-xl mr-2" />
          Github
        </a>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
