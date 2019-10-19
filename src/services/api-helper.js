import axios from 'axios';

const baseUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate";
const apiKey = "trnsl.1.1.20191019T155831Z.98f238cc692b2e48.22480c4abb705f0d0912e67b035c6a1f317f5cb3";

// ? key=<API key>
// & text=<text to translate>
// & lang=<translation direction>
// & [format=<text format>]
// & [options=<translation options>]
// & [callback=<name of the callback function>]

export const translate = async (string)=> {
  const response = await axios.get(`${baseUrl}?text=${string}&lang=bg-el&key=${apiKey}`)
  debugger;
  console.log(response.data.text[0])
  console.log(typeof response.data.text[0])
  return response.data.text[0]
}

