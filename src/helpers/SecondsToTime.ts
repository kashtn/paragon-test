export function SecondsToTime(seconds: number) {
  let date: Date = new Date(seconds * 1000);
  let moscowTime = date.toTimeString().split(" ")[0];
  let currentLength: any = moscowTime.split(":");
  currentLength[0] -= 3;
  return currentLength.slice(0, 2).join(":");
}
