import { Box, Container, Grid } from "@material-ui/core";

import ContactFormFallback from "./ContactFormFallback";
import { HexagonSlice6 } from "mdi-material-ui";
import PersonalInfoFallback from "./PersonalInfoFallback";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import loadable from "@loadable/component";
import nav from "contents/nav";
import { useInView } from "react-intersection-observer";
import useSx from "./useContactSx";

const ContactForm = loadable(() => import(/* webpackPrefetch: true */ "./ContactForm"), {
  fallback: <ContactFormFallback />
});
const PersonalInfo = loadable(() => import(/* webpackPrefetch: true */ "./PersonalInfo"), {
  fallback: <PersonalInfoFallback />
});

const Contact = () => {
  const sx = useSx();

  const { ref, inView } = useInView({
    rootMargin: "50%",
    triggerOnce: true
  });

  return (
    <Container component="section" id={nav.contact.id}>
      <SectionHeader
        heading={constants.getInTouch}
        Icon={HexagonSlice6}
      />
      <Box ref={ref} sx={sx.gridContainer}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            {inView ? <PersonalInfo /> : <PersonalInfoFallback />}
          </Grid>
          <Grid item md xs={12}>
            {inView ? <ContactForm /> : <ContactFormFallback />}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;