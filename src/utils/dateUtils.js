export function isSameDate(date1, date2) {
  return date1?.getFullYear() === date2?.getFullYear() && date1?.getMonth() === date2?.getMonth() && date1?.getDate() === date2?.getDate();
}
export function isSameHourAndMinute(date1, date2) {
  return date1?.getHours() === date2?.getHours() && date1?.getMinutes() === date2?.getMinutes();
}