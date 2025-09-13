import { FilterListOutlined } from "@mui/icons-material";
import { Badge, Tooltip } from "@mui/material";
import {
  FilterPanelTrigger,
  GridSlotProps,
  Toolbar,
  ToolbarButton,
} from "@mui/x-data-grid";

const CustomerFilterToolbar = (gridProps: GridSlotProps["toolbar"]) => {
  const { setFilterButtonEle } = gridProps;

  return (
    <Toolbar>
      <Tooltip title="Filters">
        <FilterPanelTrigger
          render={(props, state) => (
            <ToolbarButton {...props} color="default" ref={setFilterButtonEle}>
              <Badge
                badgeContent={state.filterCount}
                color="primary"
                variant="dot"
              >
                <FilterListOutlined />
              </Badge>
            </ToolbarButton>
          )}
        />
      </Tooltip>
    </Toolbar>
  );
};
export default CustomerFilterToolbar;
