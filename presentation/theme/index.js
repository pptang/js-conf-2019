import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#19181F", // almost black w/ blueish tint
  tertiary: "#ff00f6", // bright red
  quaternary: "#CECECE", // pale gray
  yellow: '#ffd000',
};

const theme = createTheme(colors, {
    primary: "Oswald",
    secondary: "Merriweather"
  }, {
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
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;