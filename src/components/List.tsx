import {
  List as MuiList,
  ListProps as MuiListProps,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export interface ListProps extends MuiListProps {
  title: string;
}

export const List: React.FC<ListProps> = ({ title, ...props }) => {
  return (
    <>
      <Box pl={2}>
        <Typography variant="h5" children={title} />
      </Box>

      <MuiList {...props} />
    </>
  );
};
