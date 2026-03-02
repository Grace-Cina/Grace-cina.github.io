class Song {
  constructor(title, artist, album, year, genre, cover, youtubeId) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.cover = cover;
    this.youtubeId = youtubeId;
  }

  getCard(index) {
    return `
      <article class="song-card" data-index="${index}">
        <div class="card-top">
          <h3>${this.title}</h3>
          <p>By ${this.artist}</p>
        </div>
        <img class="cover" src="${this.cover}" alt="${this.title}">
      </article>
    `;
  }
}

const songs = [
  new Song(
    "The Great Divide",
    "Noah Kahan",
    "Stick Season",
    "2023",
    "Folk Pop",
    "images/the-great-divide.webp",
    "Y4AgCABdZ3Y"
  ),
  new Song(
    "iloveitiloveitiloveit",
    "Bella Kay",
    "Single",
    "2024",
    "Pop",
    "images/iloveit-iloveit-iloveit.webp",
    "SKs80r2Lp34"
  ),
  new Song(
    "Franklin House",
    "Brenn!",
    "Franklin House",
    "2024",
    "Alt Pop",
    "images/franklin-house.jpg",
    "I29Rxdard3E"
  ),
  new Song(
    "Someone New",
    "Arden Jones",
    "Single",
    "2021",
    "Indie Pop",
    "images/someone-new.webp",
    "M5ksK0VAD5o"
  )
];

const gallery = document.getElementById("song-gallery");
const modal = document.getElementById("songModal");

const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalAlbum = document.getElementById("modalAlbum");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const modalYoutube = document.getElementById("modalYoutube");

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
  modalYoutube.src = "";
};

const renderGallery = () => {
  gallery.innerHTML = songs.map((song, i) => song.getCard(i)).join("");

  document.querySelectorAll(".song-card").forEach(card => {
    card.addEventListener("click", () => {
      const song = songs[card.dataset.index];
      openModal(song);
    });
  });
};

const openModal = (song) => {
  modalTitle.textContent = song.title;
  modalArtist.textContent = "by " + song.artist;
  modalAlbum.textContent = "Album: " + song.album;
  modalYear.textContent = "Year: " + song.year;
  modalGenre.textContent = "Genre: " + song.genre;

  modalYoutube.src = `https://www.youtube.com/embed/${song.youtubeId}`;

  modal.style.display = "block";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalYoutube.src = "";
  }
};

renderGallery();