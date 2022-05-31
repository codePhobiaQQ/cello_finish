async function fetchQuery(path: string) {
  const url = `https://backend-final.ivanskanavi.com/${path}`;
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}

export default fetchQuery;
