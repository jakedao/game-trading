import { Grid2 } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

type TOwnProps = {
  children?: ReactNode;
};

const Layout = (props: TOwnProps) => {
  const { children } = props;

  console.log("checking process", process.env);
  return (
    <Grid2 container direction="column">
      <Header />
      <Grid2 container direction="row" columnSpacing={2}>
        <Grid2 size={3}>
          <SideMenu />
        </Grid2>
        <Grid2 size={9}>{children}</Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Layout;
