import { Box, Button } from "@material-ui/core";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavButtonSx";

const NavButton = ({ label, id, active }) => {
  const sx = useSx();
  const section = typeof document === "undefined" ? null : document.getElementById(id);

  const handleScrollToSection = () => section.scrollIntoView({ behavior: "smooth" });

  return (
    <Button sx={sx.root} onClick={handleScrollToSection}>
      {label}
      {
        active
          ? <Box component="span" sx={sx.active} />
          : null
      }
    </Button>
  );
};

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

NavButton.whyDidYouRender = true;

export default memo(NavButton);