export function dateFormatter(
  date: Date,
  days?: number,
  symbol?: string
): string {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let newDay;
  let newMonth;
  let newYear = year;

  if (days && symbol === "-") {
    if (day > days) {
      newDay = day <= 9 ? "0" + (day - days) : day - days;
      newMonth = month <= 9 ? "0" + month : month;
    } else {
      if (month > 1) {
        let prevMonthDays = new Date(year, month - 1, 0).getDate();
        newDay = prevMonthDays + day - days;
        newMonth = month <= 9 ? "0" + (month - 1) : month - 1;
      } else {
        let prevMonthDays = new Date(year, 12, 0).getDate();
        newDay = prevMonthDays + day - days;
        newMonth = 12;
        newYear = year - 1;
      }
    }
    let currentDate = newMonth + "/" + newDay + "/" + newYear;
    return currentDate;
  }
  if (days && symbol === "+") {
    let currentMonthDays = new Date(year, month, 0).getDate();
    if (day + days <= 31) {
      newDay = day <= 2 ? "0" + (day + days) : day + days;
      newMonth = month <= 9 ? "0" + month : month;
    } else {
      newDay = day + days - currentMonthDays;
      if (month < 12) {
        newMonth = month <= 8 ? "0" + (month + 1) : month + 1;
      } else {
        newMonth = "01";
        newYear = year + 1;
      }
    }
    let currentDate = newMonth + "/" + newDay + "/" + newYear;
    return currentDate;
  } else {
    let newDay = day <= 9 ? "0" + day : day;
    let newMonth = month <= 9 ? "0" + month : month;
    let currentDate = newDay + "/" + newMonth + "/" + year;
    return currentDate;
  }
}
