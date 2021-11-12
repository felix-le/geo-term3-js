export const getWinnerAsync = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(1);
  if (data.winners) {
    alert(
      data.winners
        .map((winner) => `${winner.cards} - ${winner.result}`)
        .join(' | ')
    );
  } else {
    alert(data.message);
  }
};
