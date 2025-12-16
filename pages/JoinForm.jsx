import React, { useState } from "react";
import QR from "../src/assets/img/qrqr.jpg";
import api from '../utilities/api.js'

// Toaster
import toast from "react-hot-toast";

function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    yearLevel: "",
    studentId: "",
    interests: [],
    message: "",
  });

  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    "Web Development",
    "Mobile Development",
    "AI/ML",
    "Cybersecurity",
    "Game Development",
    "IoT/Arduino",
    "UI/UX Design",
    "Data Science",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await api.post("/api/join", formData);
      setFormData({
        name: "",
        email: "",
        course: "",
        yearLevel: "",
        studentId: "",
        interests: [],
        message: "",
      });

      if(!res.data.success){
        toast.error(res.data.message);
      } else {
        toast.success("Welcome to F1StackMind 🚀 We’ll be in touch soon!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="joinUs"
      className="relative overflow-hidden bg-neutral-950 px-4 py-16 sm:py-24 text-white"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tl from-pink-600/30 via-blue-600/20 to-transparent blur-3xl animate-pulse" 
           style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium tracking-wide">
            🚀 JOIN THE COMMUNITY
          </div>
          <h2 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Join F1StackMind?
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
            Be part of a community that pushes boundaries in technology. Whether you're into web dev, AI, cybersecurity, or game development—there's a place for you here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl bg-neutral-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 transition-colors duration-300"
          >
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Join Our Community
              </h3>
              <p className="text-sm text-neutral-400">
                Fill out the form below and become part of something amazing.
              </p>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-300">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                placeholder="Juan Dela Cruz"
                className={`w-full rounded-xl border ${
                  focusedField === "name"
                    ? "border-indigo-500 ring-2 ring-indigo-500/20"
                    : "border-neutral-700"
                } bg-neutral-800/50 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200`}
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-300">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                placeholder="juan.delacruz@example.com"
                className={`w-full rounded-xl border ${
                  focusedField === "email"
                    ? "border-indigo-500 ring-2 ring-indigo-500/20"
                    : "border-neutral-700"
                } bg-neutral-800/50 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200`}
                required
              />
            </div>

            {/* Course and Year Level */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-300">
                  Course <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("course")}
                  onBlur={() => setFocusedField("")}
                  placeholder="BSIT"
                  className={`w-full rounded-xl border ${
                    focusedField === "course"
                      ? "border-indigo-500 ring-2 ring-indigo-500/20"
                      : "border-neutral-700"
                  } bg-neutral-800/50 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200`}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-300">
                  Year Level <span className="text-red-400">*</span>
                </label>
                <select
                  name="yearLevel"
                  value={formData.yearLevel}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("yearLevel")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full rounded-xl border ${
                    focusedField === "yearLevel"
                      ? "border-indigo-500 ring-2 ring-indigo-500/20"
                      : "border-neutral-700"
                  } bg-neutral-800/50 px-4 py-3 text-white focus:outline-none transition-all duration-200`}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>

            {/* Student ID */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-300">
                Student ID <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                onFocus={() => setFocusedField("studentId")}
                onBlur={() => setFocusedField("")}
                placeholder="04-****-******"
                className={`w-full rounded-xl border ${
                  focusedField === "studentId"
                    ? "border-indigo-500 ring-2 ring-indigo-500/20"
                    : "border-neutral-700"
                } bg-neutral-800/50 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200`}
                required
              />
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-300">
                Areas of Interest <span className="text-neutral-500">(Select all that apply)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      formData.interests.includes(interest)
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                        : "bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-700"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-300">
                Why do you want to join? <span className="text-neutral-500">(Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
                placeholder="Tell us about yourself and what you hope to learn..."
                rows="4"
                className={`w-full rounded-xl border ${
                  focusedField === "message"
                    ? "border-indigo-500 ring-2 ring-indigo-500/20"
                    : "border-neutral-700"
                } bg-neutral-800/50 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200 resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>

            <p className="text-xs text-center text-neutral-500">
              By submitting, you agree to receive updates about F1StackMind events and activities.
            </p>
          </form>

          {/* Info Card */}
          <div className="space-y-6">
            {/* QR Code Card */}
            <div className="rounded-3xl bg-neutral-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl border border-neutral-800/50">
              <h4 className="text-xl font-bold text-white mb-4">
                Quick Join via QR
              </h4>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <img
                  src={QR}
                  alt="QR Code"
                  className="relative w-full max-w-xs mx-auto rounded-2xl border-4 border-neutral-800 shadow-xl"
                />
              </div>
              <p className="mt-4 text-sm text-neutral-400 text-center">
                Scan to access our registration form on mobile
              </p>
            </div>

            {/* Benefits Card */}
            <div className="rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-6 sm:p-8 border border-indigo-800/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                Member Benefits
              </h4>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Access to exclusive workshops and bootcamps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Networking with industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Hands-on project experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Certificate of membership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1">→</span>
                  <span>Priority access to tech events</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="rounded-3xl bg-neutral-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl border border-neutral-800/50">
              <h4 className="text-xl font-bold text-white mb-4">
                Need Help?
              </h4>
              <div className="space-y-3 text-sm text-neutral-300">
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">📧</span>
                  f1stackmind@example.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">📱</span>
                  +63 912 345 6789
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-indigo-400">📍</span>
                  College of Information Technology Education Department
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinForm;