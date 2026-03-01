class Song {
  constructor(title, artist, album, year, genre, cover, youtubeId) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.cover = cover;       // "images/filename.ext"
    this.youtubeId = youtubeId; // only the ID part
  }

  getCard(index) {
    return `
      <article class="song-card" data-index="${index}">
        <div class="card-top">
          <h3>${this.title}</h3>
          <p>By ${this.artist}</p>
        </div>
        <img class="cover" src="${this.cover}" alt="${this.title} cover art">
      </article>
    `;
  }
}

// ✅ YOUR 4 SONGS (replace album/year/genre if you want)
// IMPORTANT: Put the real YouTube IDs below (see note at bottom)
const songs = [
  new Song(
    "The Great Divide",
    "Noah Kahan",
    "Stick Season (We’ll All Be Here Forever)", // change if needed
    "2023",                                     // change if needed
    "Folk Pop",                                 // change if needed
    "images/the-great-divide.webp",
    "" // TODO: paste YouTube ID
  ),
  new Song(
    "iloveitiloveitiloveit",
    "Bella Kay",
    "Single",
    "2024",             // change if needed
    "Pop",
    "images/iloveit-iloveit-iloveit.webp",
    "" // TODO: paste YouTube ID
  ),
  new Song(
    "Brand New Car",
    "Brenn!",
    "Franklin House",
    "2024",             // change if needed
    "Alt Pop",
    "images/franklin-house.jpg",
    "" // TODO: paste YouTube ID
  ),
  new Song(
    "Someone New",
    "Arden Jones",
    "Single",
    "2021",             // change if needed
    "Indie Pop",
    "images/someone-new.webp",
    "" // TODO: paste YouTube ID
  )
];

const gallery = document.getElementById("song-gallery");

// Modal elements
const modal = document.getElementById("songModal");
const closeModalBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalAlbum = document.getElementById("modalAlbum");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");

const modalYoutube = document.getElementById("modalYoutube");
const noVideoMsg = document.getElementById("noVideoMsg");

// Build gallery
const renderGallery = () => {
  gallery.innerHTML = songs.map((s, i) => s.getCard(i)).join("");

  document.querySelectorAll(".song-card").forEach(card => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      openModal(songs[index]);
    });
  });
};

const openModal = (song) => {
  modalTitle.textContent = song.title;
  modalArtist.textContent = `by ${song.artist}`;
  modalAlbum.textContent = `Album: ${song.album}`;
  modalYear.textContent = `Year: ${song.year}`;
  modalGenre.textContent = `Genre: ${song.genre}`;

  // YouTube embed (only if youtubeId is set)
  if (song.youtubeId && song.youtubeId.trim() !== "") {
    noVideoMsg.style.display = "none";
    modalYoutube.style.display = "block";
    modalYoutube.src = `https://www.youtube.com/embed/${song.youtubeId}`;
  } else {
    modalYoutube.src = "";
    modalYoutube.style.display = "none";
    noVideoMsg.style.display = "block";
  }

  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  modalYoutube.src = ""; // stop video
};

closeModalBtn.addEventListener("click", closeModal);

// Click outside modal content closes it
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ESC key closes it
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderGallery();