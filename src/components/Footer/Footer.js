import { Container, Divider, Grid } from "@material-ui/core";

import CopyrightStatement from "./CopyrightStatement";
import SocialMedia from "components/SocialMedia";
import useSx from "./useFooterSx";

const Footer = () => {
  const sx = useSx();

  return (
    <footer>
      <Divider variant="middle" />
      <Container sx={sx.container}>
        <Grid sx={sx.gridContainer} container>
          <Grid item sm="auto" xs={12}>
            <CopyrightStatement />
          </Grid>
          <Grid item sm="auto" xs={12}>
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;