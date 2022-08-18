export default function getTime (time){
  const timeWithSeconds = new Date().toLocaleTimeString();

  if(timeWithSeconds.length === 8){
    return time.slice(0, 5)
  }

  if(timeWithSeconds.length === 7){
    return time.slice(0, 4)
  }
}

