import Grid from "@mui/material/Grid2";

type TOwnProps = {};

const Header = (props: TOwnProps) => {
  const {} = props;
  return (
    <Grid
      container
      display="flex"
      direction="row"
      height={40}
      bgcolor="green"
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid>Item 1</Grid>
      <Grid>Item 2</Grid>
    </Grid>
  );
};

export default Header;
