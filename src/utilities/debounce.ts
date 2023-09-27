import { default as _debounce } from 'lodash/debounce'

function debounce(cb: () => void) {
  return _debounce(cb, 1000, { leading: true })
}

export default debounce