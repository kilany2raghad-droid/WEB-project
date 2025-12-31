import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import logo from "../assets/YOUR_LOGO.png";

export default function Index() {

  useEffect(() => {
    function animateValue(id, start, end, duration, suffix = "") {
      const el = document.getElementById(id);
      if (!el) return;

      let startTime = null;
      function anim(t) {
        if (!startTime) startTime = t;
        const progress = Math.min((t - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        el.textContent = value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(anim);
      }
      requestAnimationFrame(anim);
    }

    animateValue("users", 0, 12800, 2000, "+");
    animateValue("challenges", 0, 520000, 2000, "+");
    animateValue("success", 0, 93, 2000, "%");

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("light-mode");
      });
    }
  }, []);

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
              <input type="checkbox" id="themeToggle" />
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

      {/* ==================== STATS ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 fade-in">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 id="users" className="text-4xl font-extrabold" style={{ color: "var(--primary)" }}>0</h4>
            <p style={{ color: "var(--text-sub)" }}>Active Users</p>
          </div>
          <div>
            <h4 id="challenges" className="text-4xl font-extrabold" style={{ color: "var(--secondary)" }}>0</h4>
            <p style={{ color: "var(--text-sub)" }}>Challenges Completed</p>
          </div>
          <div>
            <h4 id="success" className="text-4xl font-extrabold" style={{ color: "var(--tertiary)" }}>0%</h4>
            <p style={{ color: "var(--text-sub)" }}>Success Rate</p>
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
