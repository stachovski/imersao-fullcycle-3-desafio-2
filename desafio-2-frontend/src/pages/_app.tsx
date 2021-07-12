import {
  Box,
  Container,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";
import type { AppProps } from "next/app";
import { Fragment, useEffect } from "react";
import Navbar from "../components/Navbar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Box paddingTop={20}>
          <Container>
            <Navbar />
            <Box paddingTop={2}>
              <Component {...pageProps} />
            </Box>
          </Container>
        </Box>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default MyApp;
