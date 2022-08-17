export function getTime (){
  const timeWithSeconds = new Date().toLocaleTimeString('en-US', {
    hour12: true,
  });

  if(timeWithSeconds.length === 11){
    const hoursAndMinutes = timeWithSeconds.slice(0, 5)
    const AMorPM = timeWithSeconds.slice(-2)
    return hoursAndMinutes.concat(' ', AMorPM)
  }

  if(timeWithSeconds.length === 10){
    const hoursAndMinutes = timeWithSeconds.slice(0, 4)
    const AMorPM = timeWithSeconds.slice(-2)
    return hoursAndMinutes.concat(' ', AMorPM)
  }

}
