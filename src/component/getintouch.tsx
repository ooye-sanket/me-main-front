import { useState } from "react";
import "./getintouch.css";
import Email from "../media/mail.svg";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      const result = await response.json();
      console.log("Response data:", result);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="get-in-touch-container">
      <div className="email-icon">
        <img src={Email} alt="Email" />
      </div>

      <h1 className="title">Get in touch</h1>

      <p className="subtitle">
        Send me a message to reach out to me. I will get back to you within 48
        hours &<br />
        schedule an introductory call!
      </p>

      {submitStatus.message && (
        <div className={`status-message ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input name-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input email-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          className="form-textarea"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="send-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
