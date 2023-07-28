var pictures = document.querySelectorAll(".picture");

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    removeActiveClass();
    picture.classList.add("active");
  });
});

function removeActiveClass() {
  pictures.forEach((picture) => {
    picture.classList.remove("active");
  });
}

// =================================================

var sounds = ["sound-1", "sound-2", "sound-3", "sound-4", "sound-5"];

sounds.forEach((sound) => {
  var btn = document.createElement("buttonSound");
  btn.classList.add("btn");

  btn.innerHTML = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttonSound").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    var song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
// ======================== galary ========================

var array = [
  {
      quote: 'Oh yes, the past can hurt. But the way I see it,you can either run from it or learn from it.',
      author: '—Rafiki, The Lion King'},

  { 
      quote: 'Even miracles take a little time.',
      author: '—Fairy Godmother, Cinderella'
  },
  { 
      quote: 'The flower that blooms in adversity is the most rare and beautiful of all.',
      author: '—The Emperor, Mulan'
  },
  {
      quote: 'Venture outside your comfort zone. The rewards are worth it.',
      author: '—Rapunzel'
  },
  {
      quote: 'The things that make me different are the things that make me.',
      author: '—Piglet, Winnie the Pooh '

  }

  

];



function randomQuote() {
  var random = 0;
  var quote = "";
  var author = "";

  do {
    random = Math.floor(Math.random() * array.length);
    quote = array[random].quote;
    author = array[random].author;
  } while (document.getElementById("demo").innerHTML.includes(quote));

  
  document.getElementById("demo").innerHTML = quote;
  document.getElementById("caption").innerHTML = author;
}


