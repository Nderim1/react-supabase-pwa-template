import { atom } from 'jotai'
const themeLsKey = 'vite-ui-theme'

const themeAtom = atom(localStorage.getItem(themeLsKey) || 'system', (get, set, newValue) => {
  localStorage.setItem(themeLsKey, newValue)
  set(themeAtom, newValue)
})

export {
  themeAtom
}
