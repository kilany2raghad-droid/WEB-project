import { useEffect, useState } from "react";
import "../login.css";
import logo from "../assets/YOUR_LOGO.png";

export default function Login() {

  useEffect(() => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      }
    });

    // ⭐⭐⭐ wrapper fix
    const wrapper = document.querySelector(".max-w-md.relative");

    function updateHeight(id) {
      const activeForm = document.getElementById(id);
      if (activeForm && wrapper) {
        wrapper.style.height = activeForm.offsetHeight + "px";
      }
    }

    // Motivation messages rotation
    const motivationMessages = [
      "Transform your body. Upgrade your mind.",
      "Fitness made smarter — just for you.",
      "Stop guessing. Start progressing.",
      "Your goals deserve better — try FitRise.",
      "Motivation isn't luck — it's a system."
    ];

    const motivationEl = document.getElementById("motivationText");
    let motivationIndex = 0;

    function rotateMotivation() {
      if (!motivationEl) return;

      // إخفاء النص بسلاسة
      motivationEl.classList.add("opacity-0");

      setTimeout(() => {
        // غيّر النص
        motivationIndex = (motivationIndex + 1) % motivationMessages.length;
        motivationEl.textContent = motivationMessages[motivationIndex];

        // إظهاره مرة ثانية
        motivationEl.classList.remove("opacity-0");
      }, 500); // نفس مدة الـ transition بالـ class
    }

    // كل 10 ثواني
    const motivationInterval = setInterval(rotateMotivation, 10000);

    // لما الصفحة تجهز، نتحقق من الهاش (hash) في الرابط
    const hash = window.location.hash;

    // إذا العنوان يحتوي على #register → اعرض فورم التسجيل
    if (hash === "#register") {
      showRegister();
    } else {
      // افتراضيًا خليها على login
      showLogin();
    }

    return () => {
      clearInterval(motivationInterval);
    };
  }, []);

  function showRegister() {
    document.getElementById("loginForm")?.classList.add("hidden-form");
    document.getElementById("registerForm")?.classList.remove("hidden-form");
  }

  function showLogin() {
    document.getElementById("registerForm")?.classList.add("hidden-form");
    document.getElementById("loginForm")?.classList.remove("hidden-form");
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVBAR (نفس موقعك الأصلي) */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all"
           style={{ background: "var(--bg)", borderColor: "var(--primary-soft)" }}>

        <div className="w-full px-6 py-4 flex items-center justify-between">

          {/* LEFT — LOGO */}
          <a className="flex items-center" href="/">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 border border-white shadow">
              <img
                src={logo}
                className="w-7 h-7 rounded-full"
                alt="FitRise Logo"
              />
            </div>
            <span className="ml-3 font-bold text-xl logo-gradient">FitRise</span>
          </a>


          {/* CENTER — MENU */}
          <div className="hidden md:flex items-center space-x-10 mx-auto font-medium">
             <a className="hover:underline underline-offset-4" href="/#home">Home</a>
            <a className="hover:underline underline-offset-4" href="/#features">Features</a>
            <a className="hover:underline underline-offset-4" href="/#about">About</a>
            <a className="hover:underline underline-offset-4" href="/#reviews">Reviews</a>
            <a className="hover:underline underline-offset-4" href="/#coach">AI Coach</a>
          </div>

          {/* RIGHT — SWITCH + LOGIN + REGISTER */}
          <div className="flex items-center gap-4">

            {/* THEME SWITCH */}
            <label className="theme-switch">
              <input type="checkbox" id="themeToggle" />
              <span className="slider"></span>
            </label>

            <a className="login-link cursor-pointer" onClick={showLogin}>Login</a>

            <a className="register-btn cursor-pointer" onClick={showRegister}>Register</a>

          </div>

        </div>
      </nav>

     <div
      className="flex justify-center items-center px-6 pt-32 flex-1"
      style={{ minHeight: "calc(100vh - 140px)" }}
    >

        {/* ثابت عشان الفورمين يكونوا فوق بعض */}
        <div className="w-full max-w-md flex flex-col flex-1 relative" style={{ minHeight: 0 }}>

          {/* LOGIN FORM */}
          <div id="loginForm" className="form-wrapper visible-form w-full">

            <h1 className="text-4xl font-bold text-center mb-2">Welcome Back</h1>
            <p className="text-center text-gray-400 mb-6 text-lg">
              Continue your journey with <span style={{ color: "var(--secondary)", fontWeight: 600 }}>FitAI</span>
            </p>

            <input type="text" className="auth-input mb-4" placeholder="Email or Username" />
            <input type="password" className="auth-input mb-4" placeholder="Password" />

            <button className="auth-btn mb-3">Login</button>

            <p className="switch-text text-center">
              Not registered?
              <a onClick={showRegister}>Create an account</a>
            </p>
          </div>

          {/* REGISTER FORM */}
          <div id="registerForm" className="form-wrapper hidden-form w-full">

            <h2 className="text-3xl font-bold text-center mb-2">Create Your Account</h2>
            <p className="text-center text-gray-400 mb-6 text-lg">
              Join <span style={{ color: "var(--secondary)", fontWeight: 600 }}>FitAI</span> and start your fitness journey today
            </p>

            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input type="text" placeholder="your name" className="auth-input" />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com" className="auth-input" />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="auth-input" />
              <p className="text-sm text-gray-400 mt-1">Password must be at least 8 characters long</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block font-medium mb-1">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="auth-input" />
            </div>

            {/* CAPTCHA Selection */}
            <div className="mb-6">
              <label htmlFor="captcha-type" className="block text-sm font-medium text-gray-700">Choose CAPTCHA Type:</label>
              <select
                id="captcha-type"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                <option value="arithmetic" selected>Arithmetic</option>
                <option value="image">Image Selection</option>
              </select>
            </div>

            {/* Arithmetic CAPTCHA */}
            <div id="arithmetic-captcha-container" className="mb-6">
              <label htmlFor="arithmetic-answer" className="block text-sm font-medium text-gray-700 mb-1">Solve the CAPTCHA:</label>
              <div className="flex items-center space-x-4 mb-2">
                <span id="arithmetic-challenge" className="text-lg font-semibold text-gray-800"></span>
                <button type="button" id="refresh-arithmetic-captcha" className="text-green-600 hover:text-green-800">🔄</button>
              </div>
              <input
                type="text"
                id="arithmetic-answer"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="Enter the answer"
              />
              <p id="arithmetic-error" className="text-sm text-red-500 mt-1 hidden">Incorrect CAPTCHA answer.</p>
            </div>

            {/* Image CAPTCHA */}
            <div id="image-captcha-container" className="mb-6 hidden">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select all images containing: <span id="image-challenge-text" className="font-semibold"></span>
              </label>
              <button type="button" id="refresh-image-captcha" className="text-green-600 hover:text-green-800 mb-2">🔄 Refresh</button>
              <div id="image-options" className="flex flex-wrap gap-2"></div>
              <p id="image-error" className="text-sm text-red-500 mt-1 hidden">Please select the correct images.</p>
            </div>

            <p id="captcha-attempts-error" className="text-sm text-red-600 hidden">Too many incorrect CAPTCHA attempts. Please try again later.</p>

            {/* Create Account Button */}
            <button className="w-full p-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[var(--secondary)] to-purple-500 shadow-lg mt-6" onClick={() => window.location.href = 'after-register.html'}>
              Create Account
            </button>

            {/* Switch to Login */}
            <p className="text-center text-gray-300 mt-4">
              Already have an account?
              <span className="text-[var(--secondary)] cursor-pointer" onClick={showLogin}>Sign in</span>
            </p>

          </div>

          <p id="motivationText" className="mt-4 text-center text-sm opacity-100 transition-opacity duration-500">
            Transform your body. Upgrade your mind.
          </p>

        </div>

      </div>

      {/* SOCIAL ICONS SECTION */}
      <section className="w-full py-10 text-center" style={{ color: "var(--text-sub)" }}>

        <div className="flex justify-center gap-8 mb-4">

          {/* Instagram */}
          <a href="#" className="hover:opacity-80 transition" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              fill="var(--secondary)" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:opacity-80 transition" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              fill="var(--secondary)" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:opacity-80 transition" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              fill="var(--secondary)" viewBox="0 0 24 24">
              <path d="M20.447 20.452H17.21V14.83c0-1.34-.027-3.065-1.868-3.065-1.87 0-2.157 1.46-2.157 2.968v5.72H9.01V9h3.112v1.561h.043c.434-.82 1.494-1.683 3.073-1.683 3.287 0 3.894 2.164 3.894 4.977v6.597zM5.337 7.433a1.802 1.802 0 110-3.604 1.802 1.802 0 010 3.604zM6.98 20.452H3.69V9h3.29v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>

        </div>

        <p className="opacity-80 text-sm">Follow us for updates & fitness tips</p>

      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full text-center py-6 mt-auto border-t border-[var(--primary-soft)] text-sm tracking-wide flex-shrink-0"
              style={{ color: "var(--text-sub)" }}>

        <span className="opacity-80">© 2025 FitAI — All Rights Reserved</span>

      </footer>

      {/* ==================== CHAT BUBBLE ==================== */}
      <div className="chat-bubble">💬 Chat with AI</div>

    </div>
  );
}
