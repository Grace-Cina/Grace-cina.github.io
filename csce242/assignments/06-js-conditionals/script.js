// ---------- Helpers ----------
function setActive(linkToActivate) {
  document.querySelectorAll("#navItems a").forEach(a => a.classList.remove("active"));
  linkToActivate.classList.add("active");
}

function showSection(which) {
  const ex1 = document.getElementById("ex1");
  const ex2 = document.getElementById("ex2");

  if (which === 1) {
    ex1.classList.remove("hidden");
    ex2.classList.add("hidden");
    setActive(document.getElementById("linkEx1"));
  } else {
    ex2.classList.remove("hidden");
    ex1.classList.add("hidden");
    setActive(document.getElementById("linkEx2"));
  }
}

// ---------- Menu toggle (small screens) ----------
const menuToggle = document.getElementById("menuToggle");
const navItems = document.getElementById("navItems");
const arrow = document.getElementById("arrow");

function setMenuOpen(isOpen) {
  navItems.classList.toggle("open", isOpen);
  arrow.textContent = isOpen ? "▲" : "▼";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

// initially hidden items (small screens)
setMenuOpen(false);

// toggle open/close
menuToggle.addEventListener("click", () => {
  const isOpen = !navItems.classList.contains("open");
  setMenuOpen(isOpen);
});

// Close menu after selecting an item (small screens)
function closeMenuIfSmall() {
  if (window.matchMedia("(max-width: 719px)").matches) {
    setMenuOpen(false);
  }
}

// ---------- Nav clicks ----------
document.getElementById("linkEx1").addEventListener("click", (e) => {
  e.preventDefault();
  showSection(1);
  closeMenuIfSmall();
});

document.getElementById("linkEx2").addEventListener("click", (e) => {
  e.preventDefault();
  showSection(2);
  closeMenuIfSmall();
});

// ---------- Exercise 1: Slider messages ----------
const minutesRange = document.getElementById("minutesRange");
const rangeVal = document.getElementById("rangeVal");
const rangeMsg = document.getElementById("rangeMsg");

function sliderMessage(mins) {
  if (mins > 45) return "🥞💕 So much time—breakfast date with yourself!";
  if (mins >= 30) return "☕💗 Plenty of time—grab a sweet drink and relax.";
  if (mins >= 15) return "📝💘 You’re good—quick review, then go slay.";
  return "🏃‍♀️💓 It’s close—run like you’re in a rom-com!";
}

function updateSlider() {
  const mins = Number(minutesRange.value);
  rangeVal.textContent = mins;
  rangeMsg.textContent = sliderMessage(mins);
}

minutesRange.addEventListener("input", updateSlider);
updateSlider();

// ---------- Exercise 2: Countdown to 8:30am ----------
const countdownText = document.getElementById("countdownText");

function countdownMessage(diffMinutes) {
  // diffMinutes = classTime - now (in minutes)
  if (diffMinutes > 15) return `💌 You have ${diffMinutes} minutes left—no stress, bestie.`;
  if (diffMinutes >= 10) return `🎀 ${diffMinutes} minutes—pack up your cute stuff and go.`;
  if (diffMinutes >= 5)  return `💃 ${diffMinutes} minutes—start moving, main character!`;
  if (diffMinutes >= 0)  return `🏃‍♀️💞 ${diffMinutes} minutes—SPRINT (but safely).`;

  // class already started (negative)
  if (diffMinutes >= -5)  return "😅💗 Class just started… you can still slip in!";
  if (diffMinutes >= -15) return "🫣💘 You’re late… walk in like you own it.";
  return "💔 You missed class :(";
}

function updateCountdown() {
  const now = new Date();

  // class time today at 8:30am
  const classTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    8, 30, 0, 0
  );

  const diffMs = classTime.getTime() - now.getTime();
  const diffMinutes = Math.round(diffMs / 60000);

  countdownText.textContent = countdownMessage(diffMinutes);
}

updateCountdown();
setInterval(updateCountdown, 10000); // refresh every 10 seconds
