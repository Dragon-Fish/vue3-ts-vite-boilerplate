export function shakeIt(element: string | HTMLElement | null, magnitude = 16) {
  if (typeof element === 'string') {
    element = document.querySelector(element) as HTMLElement
  }
  if (!element) return
  if (element.classList.contains('shake-it')) return

  let COUNTER = 1
  const NUMBER_OF_SHAKES = 15
  const startX = 0
  const magnitudeUnit = magnitude / NUMBER_OF_SHAKES

  // Utils
  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // Set state
  element.classList.add('shake-it')

  const loopShake = (element: HTMLElement) => {
    //Shake the element while the `counter` is less than
    //the `numberOfShakes`
    if (COUNTER < NUMBER_OF_SHAKES) {
      //Reset the element's position at the start of each shake
      element.style.transform = `translateX(${startX}px)`

      //Reduce the magnitude
      magnitude -= magnitudeUnit

      //Randomly change the element's position
      const randomX = randomInt(-magnitude, magnitude)

      element.style.transform = `translateX(${randomX}px)`

      //Add 1 to the counter
      COUNTER += 1

      requestAnimationFrame(() => loopShake(element))
    }

    if (COUNTER >= NUMBER_OF_SHAKES) {
      element.style.transform = `translateX(${startX}px)`
      element.classList.remove('shake-it')
    }
  }

  // Start
  loopShake(element)
}
