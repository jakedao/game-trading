import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { TableConfigs } from "../configs";
import { DATE_TIME } from "../constants";
import { EAttribute, EStatus, IItem } from "../models";

type TOwnProps = {};

const MOCK_DATA: IItem[] = [
  {
    id: nanoid(6),
    main: [
      {
        name: "Oracle",
        attribute: EAttribute.DARK,
      },
    ],
    createdDate: dayjs(new Date()).format(DATE_TIME),
    status: EStatus.AVAIL,
    contact: "no",
  },
  {
    id: nanoid(6),
    main: [
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
    main: [
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
  return (
    <DataGrid<IItem>
      rows={MOCK_DATA}
      columns={TableConfigs.getListingConfig()}
    />
  );
};

export default Listing;
