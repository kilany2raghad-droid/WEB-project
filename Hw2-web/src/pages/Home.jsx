import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../assets/YOUR_LOGO.png";

export default function Index() {
 const [lightMode, setLightMode] = useState(
    localStorage.getItem("theme") === "light"
  );
useEffect(() => {
  if (lightMode) {
    document.documentElement.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
}, [lightMode]);



  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all"
        style={{ background: "var(--bg)", borderColor: "var(--primary-soft)" }}
      >
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <a className="flex items-center" href="#home">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 border border-white shadow">
              <img
                src={logo}
                className="w-7 h-7 rounded-full"
                alt="FitRise Logo"
              />
            </div>
            <span className="ml-3 font-bold text-xl logo-gradient">
              FitRise
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-10 mx-auto font-medium">
            <a className="hover:underline underline-offset-4" href="#home">Home</a>
            <a className="hover:underline underline-offset-4" href="#features">Features</a>
            <a className="hover:underline underline-offset-4" href="#about">About</a>
            <a className="hover:underline underline-offset-4" href="#reviews">Reviews</a>
            <a className="hover:underline underline-offset-4" href="#coach">AI Coach</a>
          </div>

          <div className="flex items-center gap-4">
            <label className="theme-switch">
            <input
              type="checkbox"
              id="themeToggle"
              checked={lightMode}
              onChange={() => setLightMode(!lightMode)}
            />
              <span className="slider"></span>
            </label>

            <Link to="/login" className="login-link">Login</Link>
            <a href="/#register" className="register-btn">Register</a>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight">
              <span style={{ color: "var(--primary)" }}>Get Fitter.</span><br />
              <span className="typing" style={{ color: "var(--secondary)" }}>
                Train Smarter.
              </span>
            </h2>

            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "var(--text-sub)", maxWidth: "550px" }}
            >
              Join the smart fitness platform that gives you daily challenges,
              personalized plans, real progress tracking and motivation from our AI fitness bot.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                className="px-6 py-3 rounded-lg font-bold transition-all btn-start"
                style={{
                  background: "var(--primary)",
                  color: "black",
                  boxShadow: "0 0 20px var(--primary-soft)"
                }}
              >
                Start Now
              </button>

              <button
                className="px-6 py-3 rounded-lg border transition-all"
                style={{ borderColor: "var(--secondary)", color: "var(--secondary)" }}
              >
                Try Demo
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="p-6 rounded-xl tilt transition-all"
              style={{ background: "var(--card-bg)", border: "1px solid var(--primary-soft)" }}
            >
              <img
                src={logo}
                className="w-80"
                style={{ filter: "drop-shadow(0 0 20px var(--primary))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
<section id="features" className="max-w-7xl mx-auto px-6 py-16 fade-in">
  <h3 className="text-3xl font-bold text-center mb-12 section-title">
    Why Choose FitRise?
  </h3>

  <div className="grid md:grid-cols-3 gap-10">
    <div className="p-6 rounded-xl transition-all feature-card">
      <h4 className="text-xl font-semibold mb-2 feature-title">
        Personalized Challenges
      </h4>
      <p className="feature-text">
        AI-generated workouts tailored to your fitness level.
      </p>
    </div>

    <div className="p-6 rounded-xl transition-all feature-card">
      <h4 className="text-xl font-semibold mb-2 feature-title">
        AI Fitness Coach
      </h4>
      <p className="feature-text">
        Smart motivation & adaptive difficulty.
      </p>
    </div>

    <div className="p-6 rounded-xl transition-all feature-card">
      <h4 className="text-xl font-semibold mb-2 feature-title">
        Track Progress
      </h4>
      <p className="feature-text">
        Stats, streaks and habit tracking dashboard.
      </p>
    </div>
  </div>
</section>
{/* ==================== REVIEWS SECTION ==================== */}
<section
  id="reviews"
  className="py-20 fade-in"
  style={{
    background: "var(--card-bg)",
    borderTop: "1px solid var(--primary-soft)",
    borderBottom: "1px solid var(--primary-soft)"
  }}
>
  <h2
    className="text-3xl font-bold text-center mb-4"
    style={{ color: "var(--primary)" }}
  >
    What Our Users Say
  </h2>

  <p
    className="text-center mb-12"
    style={{ color: "var(--text-sub)" }}
  >
    Hear from people who improved their fitness journey with FitRise.
  </p>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    {/* REVIEW 1 */}
    <div
      className="p-8 rounded-xl shadow-lg transition-all feature-card hover:scale-105 hover:shadow-2xl"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--primary-soft)"
      }}
    >
      <div className="text-yellow-400 mb-3 text-xl">★★★★★</div>
      <p className="mb-4" style={{ color: "var(--text-main)" }}>
        "I always struggled to stay consistent. FitRise’s AI challenges finally helped me keep a daily routine!"
      </p>

      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="w-10 h-10 rounded-full border"
          style={{ borderColor: "var(--primary-soft)" }}
        />
        <div>
          <h4 className="font-bold" style={{ color: "var(--primary)" }}>
            Adam Brooks
          </h4>
          <p className="text-sm" style={{ color: "var(--text-sub)" }}>
            Beginner User
          </p>
        </div>
      </div>
    </div>

    {/* REVIEW 2 */}
    <div
      className="p-8 rounded-xl shadow-lg transition-all feature-card hover:scale-105 hover:shadow-2xl"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--secondary)"
      }}
    >
      <div className="text-yellow-400 mb-3 text-xl">★★★★★</div>
      <p className="mb-4" style={{ color: "var(--text-main)" }}>
        "The AI coach keeps me motivated every day. The personalized challenges are exactly what I needed!"
      </p>

      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          className="w-10 h-10 rounded-full border"
          style={{ borderColor: "var(--secondary)" }}
        />
        <div>
          <h4 className="font-bold" style={{ color: "var(--secondary)" }}>
            Emily Carter
          </h4>
          <p className="text-sm" style={{ color: "var(--text-sub)" }}>
            Intermediate User
          </p>
        </div>
      </div>
    </div>

    {/* REVIEW 3 */}
    <div
      className="p-8 rounded-xl shadow-lg transition-all feature-card hover:scale-105 hover:shadow-2xl"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--tertiary)"
      }}
    >
      <div className="text-yellow-400 mb-3 text-xl">★★★★☆</div>
      <p className="mb-4" style={{ color: "var(--text-main)" }}>
        "I love how the dashboard shows my progress. Seeing my streaks motivates me to keep going!"
      </p>

      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          className="w-10 h-10 rounded-full border"
          style={{ borderColor: "var(--tertiary)" }}
        />
        <div>
          <h4 className="font-bold" style={{ color: "var(--tertiary)" }}>
            Jason Lee
          </h4>
          <p className="text-sm" style={{ color: "var(--text-sub)" }}>
            Advanced User
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==================== ABOUT ==================== */}
<section
  id="about"
  className="py-20 fade-in"
  style={{
    background: "var(--card-bg)",
    borderTop: "1px solid var(--primary-soft)",
    borderBottom: "1px solid var(--primary-soft)"
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div className="flex justify-center">
      <div
        className="p-4 rounded-xl transition-all tilt"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--primary-soft)",
          boxShadow: "0 0 20px var(--primary-soft)"
        }}
      >
        <img
          src={logo}
          className="w-80"
          style={{ filter: "drop-shadow(0 0 20px var(--primary))" }}
        />
      </div>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>
        About FitRise
      </h2>

      <p className="text-lg mb-4 leading-relaxed" style={{ color: "var(--text-sub)" }}>
        FitRise helps users stay consistent with personalized AI-generated fitness challenges
        and motivational guidance tailored to their fitness level.
      </p>

      <p className="text-lg leading-relaxed" style={{ color: "var(--text-sub)" }}>
        Our platform combines smart workouts, progress tracking, and daily motivation —
        making fitness accessible, efficient, and fun for everyone.
      </p>

      <button
        className="mt-6 px-6 py-3 rounded-lg font-bold transition-all"
        style={{
          background: "var(--primary)",
          color: "black",
          boxShadow: "0 0 15px var(--primary-soft)"
        }}
      >
        Learn More
      </button>
    </div>
  </div>
</section>

{/* ==================== AI COACH ==================== */}
<section id="coach" className="max-w-7xl mx-auto px-6 py-20 fade-in">
  <h3 className="text-3xl font-bold text-center mb-12"
      style={{ color: "var(--secondary)" }}>
    Meet Your AI Fitness Coach
  </h3>

  <div className="grid lg:grid-cols-2 gap-16 items-center">
    <div className="space-y-6" style={{ color: "var(--text-sub)" }}>
      <h4 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>
        Smarter • Adaptive • Motivating
      </h4>

      <p>
        Your AI coach analyzes your progress, adapts the intensity level,
        sends reminders, and helps you stay consistent.
      </p>

      <ul className="space-y-2">
        <li className="flex items-center gap-3">
          <span style={{ color: "var(--primary)" }} className="text-xl">✔</span>
          Adaptive workouts
        </li>
        <li className="flex items-center gap-3">
          <span style={{ color: "var(--secondary)" }} className="text-xl">✔</span>
          Motivation engine
        </li>
        <li className="flex items-center gap-3">
          <span style={{ color: "var(--tertiary)" }} className="text-xl">✔</span>
          Track habits & streaks
        </li>
      </ul>

      <button
        className="px-6 py-3 rounded-xl font-bold transition-all"
        style={{
          background: "var(--secondary)",
          color: "black",
          boxShadow: "0 0 15px var(--secondary)"
        }}
      >
        Try AI Coach
      </button>
    </div>

    <div className="flex justify-center">
      <div
        className="p-6 rounded-xl tilt transition-all"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--secondary)"
        }}
      >
        <img
          src={logo}
          className="w-64"
          style={{ filter: "drop-shadow(0 0 20px var(--secondary))" }}
        />
      </div>
    </div>
  </div>
</section>

      {/* ==================== FOOTER ==================== */}
      <footer
        className="text-center py-6 text-sm border-t"
        style={{ color: "var(--text-sub)", borderColor: "var(--primary-soft)" }}
      >
        © 2025 FitRise – All Rights Reserved
      </footer>

      <div className="chat-bubble">💬 Chat with AI</div>
    </>
  );
}
