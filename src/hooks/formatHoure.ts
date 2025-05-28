const formatFirstHourAndSubtract = (timeRange: string): string => {
  const [startTime] = timeRange.split(' - ')
  const [hours, minutes] = startTime.split(':').map(Number)
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)

  // Restamos 2 horas y 30 minutos
  date.setHours(date.getHours() - 2)
  date.setMinutes(date.getMinutes() - 30)

  const newHours = String(date.getHours()).padStart(2, '0')
  const newMinutes = String(date.getMinutes()).padStart(2, '0')

  return `${newHours}:${newMinutes}`
}

const formatFirstHour = (timeRange: string): string => {
  const [startTime] = timeRange.split(' - ')
  return startTime
}

const formatLastHour = (timeRange: string): string => {
  const [, endTime] = timeRange.split(' - ')
  return endTime
}

export { formatFirstHourAndSubtract, formatLastHour, formatFirstHour }
