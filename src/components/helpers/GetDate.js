export function getDate() {

  let dd = new Date().getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = new Date().getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = new Date().getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '/' + mm + '/' + yy;
}
