async function loadTours() {
  const containerId = "tours-cards"
  const wrapper = document.getElementById(containerId)
  if (!wrapper) return

  try {
    const data = await getToursData()
    const template = wrapper.firstElementChild
    if (!template) return

    // Clear container
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild)
    }

    data.forEach(item => {
      // 1. Clone the template
      const clone = template.cloneNode(true)

      // 2. Update Text Content
      const h3 = clone.getElementsByTagName("h3")[0]
      if (h3) h3.textContent = item.title

      const descKey = 'data-elementor-setting-key'
      const desc = clone.querySelector(`[${descKey}="infocard_description"]`)
      if (desc) desc.textContent = item.subtitle

      const price = clone.querySelector('.price')
      if (price) price.textContent = "€" + item.price

      // 3. Update Image Source
      const img = clone.querySelector('img')
      if (img && item.imageUrl) {
        img.src = item.imageUrl
        img.alt = item.title // Good for SEO/Accessibility
      }

      // 4. Convert Card to <a> Link
      const linkCard = document.createElement('a')
      linkCard.href = item.url || "#"
      linkCard.target = "_blank"
      linkCard.rel = "noopener noreferrer" // Security best practice for _blank

      // Copy over the original classes so styles don't break
      linkCard.className = clone.className

      // Move all children from the clone to the new link
      while (clone.firstChild) {
        linkCard.appendChild(clone.firstChild)
      }

      wrapper.appendChild(linkCard)
    })
  } catch (err) {
    console.warn("Issue:", err)
  }
}

window.addEventListener('load', loadTours)