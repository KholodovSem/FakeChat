import axios from 'axios';

export default function GetJokeFromChuckNorris () {
 return axios.get("https://api.chucknorris.io/jokes/random")
}
