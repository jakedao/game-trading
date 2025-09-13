import { Grid } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

type TOwnProps = {
  children?: ReactNode;
};

const Layout = (props: TOwnProps) => {
  const { children } = props;

  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row" columnSpacing={2}>
        <Grid size={3}>
          <SideMenu />
        </Grid>
        <Grid size={9}>{children}</Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
