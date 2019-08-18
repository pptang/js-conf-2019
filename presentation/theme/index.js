import createTheme from '../../createTheme'

const colors = {
  primary: 'white',
  secondary: 'rgb(32, 12, 37)', // almost black w/ blueish tint
  tertiary: '#F19AAA', // bright red
  yellow: 'rgb(254, 174, 2)',
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
