export default function SliceMessage (string){
  const dots = "...";

  if(string.length > 22){
    return string.slice(0,22) + dots;
  }

    return string
}
