import { Grid2, MenuItem } from "@mui/material";
import { HEADER_HEIGHT } from "../constants";

type TOwnProps = {};
const SideMenu = (props: TOwnProps) => {
  const {} = props;
  return (
    <Grid2
      container
      direction="column"
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      width="100%"
      bgcolor="red"
    >
      <MenuItem>A</MenuItem>
      <MenuItem>A</MenuItem>
      <MenuItem>A</MenuItem>
    </Grid2>
  );
};
export default SideMenu;
