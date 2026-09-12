const DATA = {
  getVenue: {
    name: "The Grand Sapphire",
    address: "Tech Boulevard, Plot 42, Greater Noida, Uttar Pradesh 201318",
    maps: "https://www.google.com/maps/search/?api=1&query=Greater+Noida+Uttar+Pradesh"
  },
  getCouple: {
    groom: "Aarav Sharma",
    bride: "Ananya Mehta",
    families: "Sharma & Mehta Family"
  },
  getEvents: [
    { name: "Engagement Ceremony", date: "2026-11-15", time: "18:00" },
    { name: "Dinner & Celebration", date: "2026-11-15", time: "19:30" }
  ],
  getRSVP: {
    phone: "+91 98765 43210",
    whatsapp: "https://wa.me/919876543210"
  },
  getInvitation: {
    title: "Aarav & Ananya | Engagement",
    date: "15 November 2026",
    venue: "The Grand Sapphire, Greater Noida",
    note: "Your presence and blessings will make this special occasion even more memorable."
  }
};

window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loading").classList.add("hide"), 450);
});

const apiToggle = document.getElementById("apiToggle");
const apiPanel = document.getElementById("apiPanel");
apiToggle.addEventListener("click", () => apiPanel.classList.toggle("open"));

document.querySelectorAll("[data-endpoint]").forEach(button => {
  button.addEventListener("click", () => {
    const endpoint = button.dataset.endpoint;
    document.getElementById("apiOutput").textContent =
      JSON.stringify({ status: 200, endpoint: `GET /${endpoint}`, data: DATA[endpoint] }, null, 2);
  });
});

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
let playing = false;
musicBtn.addEventListener("click", async () => {
  try {
    if (playing) {
      music.pause();
      musicBtn.textContent = "♪";
    } else {
      await music.play();
      musicBtn.textContent = "Ⅱ";
    }
    playing = !playing;
  } catch {
    musicBtn.textContent = "♪";
    alert("Your browser blocked autoplay. Tap the button again to start the music.");
  }
});
