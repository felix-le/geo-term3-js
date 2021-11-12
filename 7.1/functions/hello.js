let positionArr = [0, 0];
// https://optimistic-kare-843d65.netlify.app/.netlify/functions/hello?latitude=1&longitude=2

function curPosition(latitude, longitude) {
  switch (latitude) {
    // All cases are for the votesArr
    case 'latitude':
      votesArr[0] = latitude;
      break;
    case 'longitude':
      votesArr[1] = longitude;
      break;
    default:
      break;
  }
}

exports.handler = async (event) => {
  const latitude = event.queryStringParameters.latitude;
  const longitude = event.queryStringParameters.longitude;
  curPosition(latitude, longitude);

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(positionArr),
  };
};
