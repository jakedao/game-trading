import { GridToolbarProps } from "@mui/x-data-grid";

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides extends GridToolbarProps {
    setFilterButtonEle: React.Dispatch<
      React.SetStateAction<HTMLButtonElement | null>
    >;
  }
}
