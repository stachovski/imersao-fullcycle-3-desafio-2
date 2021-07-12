import { Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import http from "../http";
import { Route } from "../model";

interface RoutesListPageProps {
  routes: Route[];
}

const RoutesListPage: NextPage<RoutesListPageProps> = ({ routes }) => {
  return (
    <div>
      <Head>
        <title>Route List</title>
      </Head>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
          Routes
        </Typography>
        <Grid container spacing={3}>
          {routes.map((route, key) => (
            <Grid key={key} item xs={12} sm={6} md={6}>
              <Card>
                <CardContent style={{backgroundColor: "#00CED1"}}>
                  <Typography component="h2" variant="h5" gutterBottom>
                    {route.title}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Start Position: {route.startPosition}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    End Position: {route.endPosition}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RoutesListPage;

export const getServerSideProps: GetServerSideProps<RoutesListPageProps> = async (
  context
) => {
  const { data: routes } = await http.get("routes");
  return {
    props: {
      routes,
    },
  };
};
