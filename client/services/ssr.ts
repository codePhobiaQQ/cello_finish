import {backUrl} from "../vars";
import {Lang} from "../types/types";

async function fetchQuery(path: string, lang: Lang = 'en') {
  try {
    const url = `${backUrl}${path}?lang=${lang}`;
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e)
  }
}

export default fetchQuery;
