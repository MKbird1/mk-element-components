export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
