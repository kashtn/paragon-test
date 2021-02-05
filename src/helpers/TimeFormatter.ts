export function timeFormatter(date: Date): string {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let finalMinutes = minutes <= 9 ? "0" + minutes : `${minutes}`;
  let finalHours = hours <= 9 ? "0" + hours : `${hours}`;
  let currentTime = finalHours + ":" + finalMinutes;
  return currentTime;
}
