import { createTheme as createMuiTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";

export const createTheme = () =>
  createMuiTheme({
    palette: { background: { default: "#fafafa" } },
  });

export { default as cx } from "classnames";
type MuiTheme = Theme;

declare module "@mui/styles" {
  interface DefaultTheme extends MuiTheme {}
}
