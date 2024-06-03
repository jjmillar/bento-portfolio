/*
const responsiveWidth = () => {
  function replaceClass (id, remove, add) {
    const element = document.getElementById(id)
    element.classList.remove(remove)
    element.classList.add(add)
    console.log('Funciono!!!')
  }

  const width = window.innerWidth
  if (width >= 768 && width <= 1024) {
    replaceClass('bento__photo', 'slideInLeft', 'slideInTop')
  }
}
*/
const animateClass = (primaryClass, secondaryClass) => {
  const width = window.innerWidth
  if (width > 1024) { return primaryClass }
  if (width <= 1024 && width >= 768) { return secondaryClass }
}

export {
  // responsiveWidth,
  animateClass
}
