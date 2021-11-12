// https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple
const money = [
  { level: '15', amount: '1,000,000' },
  { level: '14', amount: '500,000' },
  { level: '13', amount: '250,000' },
  { level: '12', amount: '100,000' },
  { level: '11', amount: '50,000' },
  { level: '10', amount: '25,000' },
  { level: '9', amount: '16,000' },
  { level: '8', amount: '8,000' },
  { level: '7', amount: '4,000' },
  { level: '6', amount: '2,000' },
  { level: '5', amount: '1,000' },
  { level: '4', amount: '500' },
  { level: '3', amount: '300' },
  { level: '2', amount: '200' },
  { level: '1', amount: '100' },
];
new Vue({
  el: '#app',
  async created() {
    const URL =
      'https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple';
    const response = await fetch(URL);
    const data = await response.json();

    this.questions = data.results;
    this.displayQ();
    this.displayChoices();
    this.speakOut();
  },
  data: {
    money,
    questions: [],
    currentQ: '',
    index: 0,
    answers: [],
    rounds: money,
  },
  methods: {
    speakOut() {
      const synth = window.speechSynthesis;

      const speakFn = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
      };
      speakFn(this.currentQ);
      this.answers.map((answer) => speakFn(answer));
    },
    removeTwoIncorrectAnswers() {
      const incorrectAnswers = [
        ...this.questions[this.index].incorrect_answers,
      ];
      const correctAnsuwer = this.questions[this.index].correct_answer;
      const removeRandom = (array) => {
        while (array.length > 1) {
          const random = Math.floor(Math.random() * array.length);
          array.splice(random, 1)[0];
        }
        return array;
      };
      this.answers = [...removeRandom(incorrectAnswers), correctAnsuwer];
      this.speakOut();
    },
    isActive(round) {
      if (round === this.index + 1) {
        return true;
      } else {
        return false;
      }
    },

    displayQ() {
      // we're going to set the first question to be the current question
      this.currentQ = this.questions[this.index].question;
    },

    displayChoices() {
      // we're going to set the first question to be the current question
      this.answers = [
        this.questions[this.index].correct_answer,
        ...this.questions[this.index].incorrect_answers,
      ];
      this.answers.sort(() => Math.random() - 0.5);
    },
  },
});
