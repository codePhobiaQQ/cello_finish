async function fetchQuery(path: string, params = null) {
  const url = `https://backend.ivanskanavi.com/${path}`;
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}

export { fetchQuery };
