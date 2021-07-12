import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ExploreIcon from '@material-ui/icons/Explore';

const Navbar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ExploreIcon />
        <Typography variant="h6">Routes & Routes</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
