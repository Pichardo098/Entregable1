export const getRandom = (elemnts) =>{
  const randomIndex = Math.floor(Math.random()* elemnts.length)
  return elemnts[randomIndex]
}