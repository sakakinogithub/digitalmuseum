export function getLocale () {
  return getLocalStorage('locale')
}

export function saveLocale (locale) {
  return setLocalStorage('locale', locale)
}
