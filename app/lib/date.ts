const EXPERIENCE_START = new Date(2021, 8, 1) // septembre 2021

export const getYearsOfExperience = (now: Date = new Date()): number => {
  let years = now.getFullYear() - EXPERIENCE_START.getFullYear()
  const anniversaryPassed =
    now.getMonth() > EXPERIENCE_START.getMonth() ||
    (now.getMonth() === EXPERIENCE_START.getMonth() &&
      now.getDate() >= EXPERIENCE_START.getDate())
  if (!anniversaryPassed) years -= 1
  return years
}

type Availability = {
  isAvailable: boolean
  daysAgo: number
}

export const getAvailability = (now: Date = new Date()): Availability => {
  const dayOfWeek = now.getDay() // 0 = dimanche, 1 = lundi, ...
  const isMonday = dayOfWeek === 1
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1

  const lastMonday = new Date(now)
  lastMonday.setDate(now.getDate() - (isMonday ? 7 : daysSinceMonday))

  return {
    isAvailable: lastMonday.getDate() % 3 === 0,
    daysAgo: isMonday ? 8 : daysSinceMonday,
  }
}
