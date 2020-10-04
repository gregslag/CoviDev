const baseColors = {
  lochmara: '#017CBA',
  mischka: '#E1E1E6',
  woodsmoke: '#121214',
  malachite: '#04D361',
  lightGray: '#FAFAFC',
  gray: 'rgba(0, 0, 0, 0.4)'
}

const theme = {
  colors: {
    ...baseColors,
    background: baseColors.lochmara,
    text: baseColors.mischka,
    primary: baseColors.lochmara,
    buttonPrimary: baseColors.malachite
  },
  borderRadius: '0.4rem'
}

export default theme
