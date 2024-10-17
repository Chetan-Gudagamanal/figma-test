import { createColorScheme, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
          default: "#333",
        },
        // anger: createColorScheme('#F40B27'),
        primary: {
            main: "#183762",
            b1: "#183762",
            b2: "#2967CB",
            b3: "#3B82F6",
            b4: "rgba(59, 130, 246, 0.50)",
        },
        secondary: {
            main: "rgba(1, 5, 7, 0.80)",
            g1: "rgba(1, 5, 7, 0.80)",
            g2: "333",
            g3: "#424242",
            g4: "#696969",
            g5: "#F4F4F4",
        },
        incomplete: {
            main: "#EBB700",
            dark: "#EBB700",
            mid: "#F9BF39",
            light: "rgba(249, 191, 57, 0.60)",
        },
        failed: {
            main: "#E30605",
            dark: "#E30605",
            mid: "#F80302",
            light: "rgba(248, 3, 2, 0.31)",
        },
        success: {
            main: "#00A544",
            dark: "#00A544",
            mid: "rgba(1, 200, 83, 0.80)",
            light: "rgba(1, 200, 83, 0.31)",
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            // colorPrimary: {
            //   backgroundColor: "#424242"
            // }
          }
        },
        MuiTableCell: {
          styleOverrides: {
            head: {
              backgroundColor: "#424242",
              color: "#fff",
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              opacity: "0.5",
              backgroundColor: "#F4F4F4",
              // "&:hover": {
              //   backgroundColor: "#F4F4F4",
              //   "@media (hover: none)": {
              //     backgroundColor: "#F4F4F4"
              //   }
              // },
              // "&.Mui-focused": {
              //   backgroundColor: "#F4F4F4"
              // }
            }
          }
        },
        MuiSelect: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              maxHeight: 50,
            },
          },
        },
      },
      typography: {
        fontFamily: '"Roboto"',
        fontWeight: "400",
        h1: {
          fontSize: "48px",
          fontFamily: '"Roboto" ,sans-serif',
          fontWeight: "400",
          "@media (max-width:550px)": {
            fontSize: "24px",
          },
        },
        h2: {
          fontSize: "34px",
          fontFamily: ' "Roboto" ,sans-serif',
          fontWeight: "400",
          "@media (max-width:550px)": {
            fontSize: "17px",
          },
        },
        h3: {
          fontSize: "20px",
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "400",
          letterSpacing: "0px",
          "@media (max-width:550px)": {
            fontSize: "10px",
          },
        },
        h4: {
          fontSize: "16px",
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "400",
          "@media (max-width:550px)": {
            fontSize: "8px",
          },
        },
        h5: {
          fontSize: "10px",
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "400",
          "@media (max-width:550px)": {
            fontSize: "5px",
          },
        },
      },
  });

export default theme;