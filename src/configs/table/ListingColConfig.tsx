import { Box, Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Dark from "../../../public/assets/images/dark.png";
import Fire from "../../../public/assets/images/fire.png";
import Light from "../../../public/assets/images/light.png";
import Water from "../../../public/assets/images/water.png";
import Wind from "../../../public/assets/images/wind.png";
import { EAttribute, IItem } from "../../models";

const getListingConfig = (): GridColDef<IItem>[] => {
  const attributeMapper: Record<EAttribute, string> = {
    [EAttribute.DARK]: Dark,
    [EAttribute.LIGHT]: Light,
    [EAttribute.FIRE]: Fire,
    [EAttribute.WIND]: Wind,
    [EAttribute.WATER]: Water,
  };

  return [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "main",
      headerName: "Description",
      flex: 1,
      align: "left",
      renderCell: (params) => {
        return (
          <Box display="flex" alignItems="center" height="100%">
            {params.row.main.map((m) => (
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  "& img": {
                    marginRight: "5px",
                  },
                }}
              >
                <img
                  src={attributeMapper[m.attribute]}
                  alt={m.name}
                  width={20}
                  height={20}
                />
                {m.name}
              </Stack>
            ))}
          </Box>
        );
      },
    },
    { field: "createdDate", headerName: "Created Date", width: 150 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "contact", headerName: "Contacts", width: 200 },
  ];
};

export default getListingConfig;
