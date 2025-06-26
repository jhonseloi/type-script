/* RECOMENDADO */

// Condicional
const body1 = document.querySelector('body')
if (body1) body1.style.background = 'red'

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement
body2.style.background = 'red'

// HTML Element
const input = document.querySelector('.input') as HTMLInputElement
input.value = 'Qualquer coisa'
input.focus()

/* NÃO RECOMENDADO */

// Non-null assertion (!)
const body3 = document.querySelector('body')!
body3.style.background = 'blue'

// Type assertion
const body4 = document.querySelector('body') as unknown as number
