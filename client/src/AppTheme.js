import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  spacing: 8,

  typography: {
    fontFamily: ["Proxima Nova", "sans-serif"].join(","),
    body1: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      fontSize: 16,
    },
  },

  palette: {
    primary: {
      main: "#86523C",
    },
    secondary: {
      main: "#CCCCCC",
    },
    info: {
      main: "#0092AD",
    },
    success: {
      main: "#435700",
    },
    error: {
      main: "#952A05",
    },
    warning: {
      main: "#574141",
    },
    common: {
      white: "#ffffff",
    },
    grey: {
      900: "#333333",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 991,
      lg: 1280,
      xl: 1440,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          color: "#333333",
        },
        img: {
          maxWidth: "100%",
        },
        "#root": {
          minHeight: "100%",
          position: "relative",
        },
      },
    },
  },
});
