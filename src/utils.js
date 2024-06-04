const animateClass = (desktopClass, tabletClass, mobileClass) => {
  const width = window.innerWidth
  if (width > 1024) { return desktopClass }
  if (width <= 1024 && width >= 768) { return tabletClass }
  if (width < 768) { return mobileClass }
}

export {
  animateClass
}
