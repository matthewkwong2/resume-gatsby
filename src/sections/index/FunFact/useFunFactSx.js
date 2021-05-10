import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    py: 0
  },
  bgOverlay: {
    py: 10
  }
}), []);

export default useSx;