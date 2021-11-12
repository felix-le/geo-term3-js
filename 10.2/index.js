const list = document.querySelector("#list");
const sentence = document.querySelector("#sentence");
const todos = [];

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// setup speech recognition
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = "en-US";

// does browser hear someone speaking? record it.
recognition.addEventListener("result", (event) => {
  const transcript = event.results[0][0].transcript;

  // does browser detect a sentence has now stopped?
  if (event.results[0].isFinal) {
    sentence.textContent = `I heard - ${transcript}`;
    // check if input starts with 'new'
    if (transcript.indexOf("new") === 0) {
      const todo = transcript.substring(3);
      todos.push(todo);
      list.innerHTML = todos.map((todo) => `<li>${todo}</li>`).join("");
    }
  }
});

recognition.addEventListener("end", recognition.start);
recognition.start();
