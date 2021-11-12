const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

let votesArr = [0, 0, 0, 0];

function countVotes(vote) {
  switch (vote) {
    // All cases are for the votesArr
    case 'A':
      votesArr[0]++;
      break;
    case 'B':
      votesArr[1]++;
      break;
    case 'C':
      votesArr[2]++;
      break;
    case 'D':
      votesArr[3]++;
      break;
    case 'R':
      votesArr = [0, 0, 0, 0];
      break;
    default:
      break;
  }
}

const ctx = document.querySelector('#myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: '# of Votes',
        backgroundColor: 'rgb(255, 99, 132)',
        boderColor: 'rgb(255, 99, 132)',
        data: [12, 19, 3, 5],
      },
    ],
  },

  options,
});

function drawchart(arrData) {
  chart.data.datasets[0].data = arrData;
  chart.update();
}
