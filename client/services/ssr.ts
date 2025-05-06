import {backUrl} from "../vars";
import {Lang, languageIds} from "../types/types";

async function fetchQuery(path: string, lang: Lang = 'en') {
  try {
    const url = `${backUrl}/wp-json/wp/v2/${path}`;
    const response = await fetch(url);
    const data = await response.json();
    const langId = languageIds[lang];
    const filtered = data.filter((item: any) => item.language?.includes(langId));
    return filtered;
  } catch (e) {
    console.error('fetchQuery error:', e);
    return [];
  }
}

export default fetchQuery;
