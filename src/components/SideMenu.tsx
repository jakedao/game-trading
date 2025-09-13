import { Grid, MenuItem } from "@mui/material";
import { HEADER_HEIGHT } from "../constants";

type TOwnProps = {};
const SideMenu = (props: TOwnProps) => {
  const {} = props;
  return (
    <Grid
      container
      direction="column"
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      width="100%"
      bgcolor="red"
    >
      <MenuItem>A</MenuItem>
      <MenuItem>A</MenuItem>
      <MenuItem>A</MenuItem>
    </Grid>
  );
};
export default SideMenu;
