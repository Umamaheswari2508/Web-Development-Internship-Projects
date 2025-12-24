function showMusic() {
  const mood = document.getElementById("mood").value;
  const playlist = document.getElementById("playlist");

  if (mood === "happy") {
    playlist.innerHTML = "🎶 Happy Playlist: Good Vibes, Sunny Day";
  } 
  else if (mood === "sad") {
    playlist.innerHTML = "🎶 Sad Playlist: Alone, Memories";
  } 
  else if (mood === "energetic") {
    playlist.innerHTML = "🎶 Energetic Playlist: Power, Workout Beats";
  } 
  else if (mood === "relaxed") {
    playlist.innerHTML = "🎶 Relaxed Playlist: Calm, Peaceful Sounds";
  } 
  else {
    playlist.innerHTML = "";
  }
}
