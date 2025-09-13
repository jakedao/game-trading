import { renderMonster } from "@/utils";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { IItem, IMonster } from "../../models";

const getListingConfig = (): GridColDef<IItem>[] => {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "mons",
      headerName: "Monsters",
      flex: 1,
      align: "left",
      valueGetter: (params: IMonster[]) => {
        return params.map((m) => m.name).join(", ");
      },
      renderCell: (params) => {
        return (
          <Box display="flex" alignItems="center" height="100%">
            {renderMonster(params.row.mons)}
          </Box>
        );
      },
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      width: 150,
    },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "contact",
      headerName: "Contacts",
      width: 200,
    },
  ];
};

export default getListingConfig;
