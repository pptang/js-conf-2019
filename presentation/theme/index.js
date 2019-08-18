import createTheme from '../../createTheme'

const colors = {
  primary: 'white',
  secondary: '#200C25', // almost black w/ blueish tint
  tertiary: '#F19AAA', // bright red
  yellow: '#FEAE02',
}

const theme = createTheme(
  colors,
  {
    primary: 'Fira Sans',
    secondary: 'Bree Serif',
  },
  {
    components: {
      heading: {
        h1: {
          fontSize: '5rem',
          textTransform: 'uppercase',
          color: colors.tertiary,
        },
        h2: {
          fontSize: '4rem',
          textTransform: 'uppercase',
          color: colors.yellow,
        },
        h3: {
          fontSize: '3.5rem',
          textTransform: 'uppercase',
          color: colors.tertiary,
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase',
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase',
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase',
        },
      },
      codePane: {
        fontSize: '2rem',
      },
    },
  }
)

export default theme
