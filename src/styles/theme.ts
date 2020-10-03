const baseColors = {
  lochmara: "#017CBA",
  mischka: "#E1E1E6",
  woodsmoke: "#121214",
  malachite: "#04D361",
  goldDrop: "#F57C00",
  white: "#FFFFFF"
}

const theme = {
  colors: {
    ...baseColors,
    background: baseColors.lochmara,
    text: baseColors.mischka,
    primary: baseColors.lochmara,
    buttonPrimary: baseColors.malachite,
  }
}

export default theme
const { colors } = theme
export { colors }
