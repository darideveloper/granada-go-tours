async function getToursData() {
  const url = "https://granada-go-tours-booking.apps.darideveloper.com/api/tours"
  const res = await fetch(url)
  const data = await res.json()
  return data
}

async function getTourData(tourId) {
  const data = await getToursData()
  const tourData = data.find(item => item.id === tourId)
  return tourData
}

async function getRandomTours(tours, count = 3) {
  const data = await getToursData()
  return [...data]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

function renderSpinner() {
  // Create the Elements
  const loaderContainer = document.createElement('div')
  loaderContainer.className = 'loader-container'

  const spinner = document.createElement('div')
  spinner.className = 'spinner'

  loaderContainer.appendChild(spinner)
  document.body.appendChild(loaderContainer)

  // Logic to remove it after 2 seconds
  setTimeout(() => {
    loaderContainer.classList.add('loader-hidden')
    // Completely remove from DOM after fade out
    setTimeout(() => loaderContainer.remove(), 500)
  }, 2000)
}
