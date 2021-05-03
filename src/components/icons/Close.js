import { SvgIcon } from "@material-ui/core";
import { memo } from "react";

const Close = props => (
  <SvgIcon {...props}>
    <path d="M23.848.143c-.198-.192-.515-.187-.707.01l-9.995 9.996c-.448.435.257 1.156.707.706L23.848.86c.203-.196.203-.52 0-.717zM10.854 13.136c-.198-.192-.515-.187-.707.01L.15 23.143c-.458.446.256 1.172.708.707l9.996-9.996c.203-.197.203-.522 0-.718zM.858.154C.42-.286-.3.406.15.86l22.992 22.99c.46.468 1.172-.245.707-.708z" />
  </SvgIcon>
);

Close.muiName = SvgIcon.muiName;
Close.whyDidYouRender = true;

export default memo(Close);
