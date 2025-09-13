import { renderMonster } from "@/utils";
import { Dialog, DialogContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useState } from "react";
import { TableConfigs } from "../../configs";
import { DATE_TIME } from "../../constants";
import { EAttribute, EStatus, IItem } from "../../models";
import CustomerFilterToolbar from "./CustomFilterToolbar";

type TOwnProps = {};

const MOCK_DATA: IItem[] = [
  {
    id: nanoid(6),
    mons: [
      {
        name: "Oracle",
        attribute: EAttribute.DARK,
      },
      {
        name: "Oracle",
        attribute: EAttribute.LIGHT,
      },
    ],
    createdDate: dayjs(new Date()).format(DATE_TIME),
    status: EStatus.AVAIL,
    contact: "no",
  },
  {
    id: nanoid(6),
    mons: [
      {
        name: "Oracle",
        attribute: EAttribute.LIGHT,
      },
    ],
    createdDate: dayjs(new Date()).format(DATE_TIME),
    status: EStatus.AVAIL,
    contact: "no",
  },
  {
    id: nanoid(6),
    mons: [
      {
        name: "Tanjiro",
        attribute: EAttribute.LIGHT,
      },
    ],
    createdDate: dayjs(new Date()).format(DATE_TIME),
    status: EStatus.AVAIL,
    contact: "no",
  },
];

const Listing = (props: TOwnProps) => {
  const {} = props;

  const [modalInfo, setModalInfo] = useState<IItem | undefined>(undefined);

  const [filterButtonEle, setFilterButtonEle] =
    useState<HTMLButtonElement | null>(null);

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "500px" }}
      >
        <DataGrid<IItem>
          rows={MOCK_DATA}
          showToolbar
          disableColumnMenu
          slots={{ toolbar: CustomerFilterToolbar }}
          slotProps={{
            panel: { target: filterButtonEle },
            toolbar: { setFilterButtonEle },
          }}
          isCellEditable={() => false}
          sx={(theme) => ({
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          })}
          columns={TableConfigs.getListingConfig()}
          onRowClick={(e) => {
            setModalInfo(e.row);
          }}
          filterDebounceMs={5}
        />
      </div>
      <Dialog
        open={Boolean(modalInfo)}
        onClose={() => {
          setModalInfo(undefined);
        }}
      >
        <DialogContent>
          {modalInfo && <>{renderMonster(modalInfo?.mons)}</>}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Listing;
