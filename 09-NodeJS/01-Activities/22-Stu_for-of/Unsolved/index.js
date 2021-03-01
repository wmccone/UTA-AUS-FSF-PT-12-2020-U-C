const songs = document.querySelectorAll("ul > li")

for (const song of songs){
    console.log(song)
    song.classList.add("green")
}