import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    bgcolor: "#7d90a4",
    py: 0
  },
  bgOverlay: {
    py: 10
  }
}), []);

export default useSx;