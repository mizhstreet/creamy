import { Box, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { SectionTitle } from "../components/typography/section-title";

const ReceiptPage: React.FC = () => {
  return (
    <Grid container>
      <Grid style={{ height: 1000 }} item md={7}>
        <Box width={1} pl={5} pr={5}>
          {/* <SectionTitle component={"h2"}>レシート</SectionTitle> */}
        </Box>
      </Grid>
      <Grid style={{ backgroundColor: grey[50], height: 1000 }} item md={5}>
        <Box width={1} pl={5} pr={5}></Box>
      </Grid>
    </Grid>
  );
};

export { ReceiptPage };
