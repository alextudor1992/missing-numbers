import './style.css'
import { findMissingValue } from './sort';

const nthMissing = 3
const value = findMissingValue([1, 2, 5], nthMissing)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div>Missing value #${nthMissing}: ${value}</div>`
console.debug(value)