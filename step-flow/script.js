document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('stepper-prev-button')
  const nextButton = document.getElementById('stepper-next-button')

  prevButton.addEventListener('click', goPrevPage)
  nextButton.addEventListener('click', goNextPage)
})

const goNextPage = () => {
  const activeSteps = document.getElementsByClassName('step active').length
  const maxSteps = document.getElementsByClassName('step').length
  const newActiveStepNo = activeSteps + 1

  if (activeSteps + 1 === maxSteps)
    document.getElementById('stepper-next-button').disabled = true
  else if (activeSteps === 1)
    document.getElementById('stepper-prev-button').disabled = false

  const newActiveStep = document.querySelectorAll(
    `[step="${newActiveStepNo}"]`
  )[0]

  newActiveStep.classList.add('active')
}

const goPrevPage = () => {
  const activeSteps = document.getElementsByClassName('step active').length
  const maxSteps = document.getElementsByClassName('step').length
  const deactivateStepNo = activeSteps

  if (activeSteps === 2)
    document.getElementById('stepper-prev-button').disabled = true
  if (activeSteps === maxSteps)
    document.getElementById('stepper-next-button').disabled = false

  const newActiveStep = document.querySelectorAll(
    `[step="${deactivateStepNo}"]`
  )[0]

  newActiveStep.classList.remove('active')
}
