import axios from 'axios';

const baseUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate";
const apiKey = "trnsl.1.1.20191019T155831Z.98f238cc692b2e48.22480c4abb705f0d0912e67b035c6a1f317f5cb3";

// ? key=<API key>
// & text=<text to translate>
// & lang=<translation direction>
// & [format=<text format>]
// & [options=<translation options>]
// & [callback=<name of the callback function>]
const meriamApiKey = "41c063dc-fc0c-45a1-9272-347e8371513e"

export const getLangs = async () => {
  const response = await axios.get(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=${apiKey}`)
  return response.data
}
export const translate = async (string,source,target)=> {
  const response = await axios.get(`${baseUrl}?text=${string}&lang=${source}-${target}&key=${apiKey}`)
  return response.data.text[0];
}

export const test = async (word) => {
  const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${word}?
  key=${meriamApiKey}`)
 
  return response.data
}

export const lingueeTranslation = async (string,source,target) => {
  const response = await axios.get(`https://linguee-api.herokuapp.com/api?q=${string}&src=${source}&dst=${target}`)
  const examples = response.data.real_examples.splice(0,5);
  
  return examples
}



