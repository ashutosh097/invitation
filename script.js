const DATA = {
  getVenue: {
    name: "The Patliputra Chital",
    address: "Suchitra Radha Complex, Rajeev Nagar Main Rd, near Atal Path, Rajeev Nagar, Digha Ghat, Patna, Bihar 800024",
    maps: "https://maps.app.goo.gl/J2uQBFDAd1atqxRF8"
  },
  getCouple: {
    groom: "Ashutosh",
    bride: "Tanya",
    families: "Ashutosh & Family"
  },
  getEvents: [
    { name: "Wedding", date: "2026-11-20", time: "19:00" },
    { name: "Dinner & Celebration", date: "2026-11-20", time: "20:00" }
  ],
  getRSVP: {
    phone: "+91 8743888923",
    whatsapp: "https://wa.me/8743888923"
  },
  getInvitation: {
    title: "Ashutosh & Tanya | Wedding",
    date: "20 November 2026",
    venue: "The Patliputra Chital",
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
