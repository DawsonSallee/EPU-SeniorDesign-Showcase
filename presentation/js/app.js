(function () {
  "use strict";

  const CANVAS_W = 1920;
  const CANVAS_H = 1080;

  const slides = Array.from(document.querySelectorAll(".slide"));
  const totalSlides = slides.length;
  let current = 0;
  let autoPlay = false;
  let autoTimer = null;
  let elapsedSeconds = 0;
  let clockInterval = null;

  const slidesEl       = document.getElementById("slides");
  const progressFill   = document.getElementById("progress-fill");
  const sectionLabel   = document.getElementById("section-label");
  const slideCounter   = document.getElementById("slide-counter");
  const notesPanel     = document.getElementById("notes-panel");
  const notesContent   = document.getElementById("notes-content");
  const timerCurrent   = document.getElementById("timer-current");
  const btnPrev        = document.getElementById("btn-prev");
  const btnNext        = document.getElementById("btn-next");
  const btnPlay        = document.getElementById("btn-play");
  const btnNotes       = document.getElementById("btn-notes");
  const notesClose     = document.getElementById("notes-close");

  /* ───────────────────────────────────────────────────
     VIEWPORT SCALING
     Scale the fixed 1920×1080 canvas to fit any screen.
     ─────────────────────────────────────────────────── */
  function scaleToFit() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / CANVAS_W, vh / CANVAS_H);
    slidesEl.style.transform =
      "translate(-50%, -50%) scale(" + scale + ")";
  }

  window.addEventListener("resize", scaleToFit);
  scaleToFit();

  /* ───────────────────────────────────────────────────
     TIMING HELPERS
     ─────────────────────────────────────────────────── */
  function computeTotalDuration() {
    return slides.reduce((sum, s) => sum + (parseInt(s.dataset.duration, 10) || 20), 0);
  }

  function cumulativeDuration(index) {
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += parseInt(slides[i].dataset.duration, 10) || 20;
    }
    return sum;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  /* ───────────────────────────────────────────────────
     NAVIGATION
     ─────────────────────────────────────────────────── */
  function goTo(index) {
    if (index < 0 || index >= totalSlides || index === current) return;
    const prev = current;
    slides[prev].classList.remove("active");
    slides[prev].classList.add("exit-left");
    setTimeout(() => slides[prev].classList.remove("exit-left"), 800);

    current = index;
    slides[current].classList.add("active");

    updateUI();
    if (autoPlay) scheduleNext();
  }

  function next() { goTo(Math.min(current + 1, totalSlides - 1)); }
  function prev() { goTo(Math.max(current - 1, 0)); }

  function updateUI() {
    const totalDur = computeTotalDuration();
    const cumDur = cumulativeDuration(current);
    const pct = ((cumDur + (parseInt(slides[current].dataset.duration, 10) || 20)) / totalDur) * 100;
    progressFill.style.width = pct + "%";

    sectionLabel.textContent = slides[current].dataset.section || "";
    slideCounter.textContent = (current + 1) + " / " + totalSlides;

    const note = slides[current].querySelector(".slide-note");
    notesContent.textContent = note ? note.textContent : "";

    document.getElementById("timer-total").textContent = formatTime(totalDur);

    animateCounters();
  }

  /* ───────────────────────────────────────────────────
     AUTO-ADVANCE
     ─────────────────────────────────────────────────── */
  function scheduleNext() {
    clearTimeout(autoTimer);
    if (!autoPlay || current >= totalSlides - 1) {
      stopAuto();
      return;
    }
    const dur = (parseInt(slides[current].dataset.duration, 10) || 20) * 1000;
    autoTimer = setTimeout(next, dur);
  }

  function startAuto() {
    autoPlay = true;
    btnPlay.classList.add("active");
    btnPlay.innerHTML = "&#9724; Stop";
    scheduleNext();
    startClock();
  }

  function stopAuto() {
    autoPlay = false;
    clearTimeout(autoTimer);
    btnPlay.classList.remove("active");
    btnPlay.innerHTML = "&#9654; Auto";
    stopClock();
  }

  function toggleAuto() {
    autoPlay ? stopAuto() : startAuto();
  }

  /* ───────────────────────────────────────────────────
     CLOCK
     ─────────────────────────────────────────────────── */
  function startClock() {
    elapsedSeconds = cumulativeDuration(current);
    updateClock();
    clearInterval(clockInterval);
    clockInterval = setInterval(() => {
      elapsedSeconds++;
      updateClock();
    }, 1000);
  }

  function stopClock() { clearInterval(clockInterval); }
  function updateClock() { timerCurrent.textContent = formatTime(elapsedSeconds); }

  /* ───────────────────────────────────────────────────
     SPEAKER NOTES
     ─────────────────────────────────────────────────── */
  function toggleNotes() { notesPanel.classList.toggle("open"); }

  /* ───────────────────────────────────────────────────
     ANIMATED COUNTERS
     ─────────────────────────────────────────────────── */
  function animateCounters() {
    const counters = slides[current].querySelectorAll("[data-count]");
    counters.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      let start = 0;
      const duration = 1200;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ───────────────────────────────────────────────────
     KEYBOARD NAV
     ─────────────────────────────────────────────────── */
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault(); next(); break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault(); prev(); break;
      case " ":
        e.preventDefault(); toggleAuto(); break;
      case "n":
      case "N":
        toggleNotes(); break;
      case "f":
      case "F":
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
        break;
    }
  });

  /* ───────────────────────────────────────────────────
     BUTTON NAV
     ─────────────────────────────────────────────────── */
  btnNext.addEventListener("click", (e) => { e.stopPropagation(); next(); });
  btnPrev.addEventListener("click", (e) => { e.stopPropagation(); prev(); });
  btnPlay.addEventListener("click", (e) => { e.stopPropagation(); toggleAuto(); });
  btnNotes.addEventListener("click", (e) => { e.stopPropagation(); toggleNotes(); });
  notesClose.addEventListener("click", (e) => { e.stopPropagation(); toggleNotes(); });

  slidesEl.addEventListener("click", (e) => {
    if (e.target.closest("#controls") || e.target.closest("#notes-panel")) return;
    next();
  });

  /* ───────────────────────────────────────────────────
     TOUCH / SWIPE NAV (mobile support)
     ─────────────────────────────────────────────────── */
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 50 && Math.abs(dy) < 50) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
  }, { passive: true });

  /* ───────────────────────────────────────────────────
     INIT
     ─────────────────────────────────────────────────── */
  slides[0].classList.add("active");
  updateUI();
  document.body.classList.add("show-controls");
  setTimeout(() => document.body.classList.remove("show-controls"), 4000);
})();
