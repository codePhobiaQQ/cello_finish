async function fetchQuery(path: string) {
  try {
    const url = `https://backend-final.ivanskanavi.com/${path}`;
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e)
  }
}

export default fetchQuery;
