export const onInputNumber = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')
}
