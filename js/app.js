
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");
function loadArtists() 
{
    const menu = document.getElementById("menu");
    artists.forEach((artist) => {
      const button = document.createElement("button");
      button.textContent = artist.name;
      button.addEventListener("click", () => showSongs(artist.artistId));
      menu.appendChild(button);
    });
  }
  
  function showSongs(artistId) 
  {
    const selectedArtist = document.getElementById("selected-artist");
    const songList = document.getElementById("songs");
    const selected = artists.find((artist) => artist.artistId === artistId);
    const artistUrls = selected.urls
      .map((url) => `<a href="${url.url}" target="_blank">${url.name}</a>`)
      .join(" | ");
    selectedArtist.innerHTML = `${selected.name} \n [ ${artistUrls} ]`;
    const filteredSongs = songs.filter((song) => song.artistId === artistId && !song.explicit);

    songList.innerHTML = "";
    filteredSongs.forEach((song) => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      const songLink = document.createElement("a");
      songLink.href = song.url;
      songLink.textContent = song.title;
      songLink.target = "_blank";
      nameCell.appendChild(songLink);
  
      const yearCell = document.createElement("td");
      yearCell.textContent = song.year;
  
      const durationCell = document.createElement("td");
      const minutes = Math.floor(song.duration / 60);
      const seconds = song.duration % 60;
      durationCell.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  
      row.appendChild(nameCell);
      row.appendChild(yearCell);
      row.appendChild(durationCell);
      songList.appendChild(row);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () 
  {
    loadArtists();
    showSongs("AID-1");
  });
  