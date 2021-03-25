import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  personalInfoContainer: {
    p: 4
  },
  personalInfoItemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    width: 35,
    height: 35
  },
  personalInfoItemTitle: {
    mt: 2,
    width: 80
  },
  personalInfoItemValue: {
    width: 120
  }
}), []);

export default useSx;