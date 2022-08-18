export const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'short',
  timezone: 'UTC',
};

export function formatDate(date) {

  let dd = new Date(date).getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = new Date(date).getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = new Date(date).getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '/' + mm + '/' + yy;
}
