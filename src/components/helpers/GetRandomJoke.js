import axios from 'axios';

export function GetJokeFromChuckNorris () {
 return axios.get("https://api.chucknorris.io/jokes/random")
}
