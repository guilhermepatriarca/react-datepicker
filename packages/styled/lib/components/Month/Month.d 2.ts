interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6
  isDateBlocked(date: Date): boolean
  isDateSelected(date: Date): boolean
  isStartOrEndDate(date: Date): boolean
  isDateHovered(date: Date): boolean
  onDaySelect(date: Date): void
  onDayHover(date: Date): void
}
declare const Month: ({
  year,
  month,
  firstDayOfWeek,
  isDateBlocked,
  isDateSelected,
  isStartOrEndDate,
  onDaySelect,
  onDayHover,
  isDateHovered,
}: MonthProps) => JSX.Element
export default Month
