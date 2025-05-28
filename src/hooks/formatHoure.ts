const formatFirstHour = (timeRange: string): string => {
  const [startTime] = timeRange.split(' - ')
  return startTime
}

const formatLastHour = (timeRange: string): string => {
  const [, endTime] = timeRange.split(' - ')
  return endTime
}

export { formatLastHour, formatFirstHour }
