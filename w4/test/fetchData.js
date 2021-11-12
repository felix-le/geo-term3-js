export const fetchData = async (url, cb) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('🚀 error', error);
  }
};
