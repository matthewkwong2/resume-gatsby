import { SvgIcon } from "@material-ui/core";

const Globe = props => (
  <SvgIcon {...props}>
    <path d="M6.5 11h10c.277 0 .5.223.5.5s-.223.5-.5.5h-10c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm14.5.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-18 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zM11.5 0C5.155 0 0 5.155 0 11.5S5.155 23 11.5 23 23 17.845 23 11.5 17.845 0 11.5 0zm0 1c1.716 0 3.314 1.09 4.518 2.975-2.85 1.36-6.174 1.36-9.032-.004C8.19 2.09 9.786 1 11.5 1zm-4.03.803c-.557.542-.988 1.16-1.366 1.693-.258-.155-.51-.32-.758-.5C6 2.52 6.71 2.118 7.47 1.803zm8.06 0c.76.315 1.47.718 2.124 1.193-.247.18-.5.347-.758.502-.388-.646-.932-1.212-1.365-1.695zm2.927 1.842C20.627 5.567 22 8.368 22 11.5c0 3.132-1.372 5.933-3.543 7.855-.345-.262-.7-.505-1.066-.724C18.404 16.663 19 14.19 19 11.5c0-2.69-.596-5.164-1.61-7.133.367-.218.722-.46 1.067-.722zm-13.918 0c.345.265.704.5 1.07.72C4.598 6.335 4 8.81 4 11.5c0 2.69.596 5.164 1.61 7.133-.367.22-.725.455-1.07.72C2.37 17.43 1 14.63 1 11.5s1.37-5.932 3.54-7.854zm1.95 1.197c3.164 1.532 6.864 1.53 10.02.002C17.432 6.648 18 8.966 18 11.5c0 2.533-.567 4.85-1.488 6.654C14.977 17.41 13.314 17 11.645 17c-1.764 0-3.53.37-5.155 1.156C5.568 16.352 5 14.034 5 11.5c0-2.535.567-4.853 1.49-6.658zM11.63 18c1.504.02 3.002.362 4.388 1.023C14.814 20.908 13.216 22 11.5 22c-1.715 0-3.312-1.09-4.516-2.973 1.47-.7 3.06-1.047 4.647-1.027zm-5.526 1.502c.388.646.932 1.212 1.365 1.695-.76-.315-1.47-.718-2.126-1.193.247-.18.5-.347.76-.502zm10.794 0c.258.155.51.32.758.5-.656.475-1.366.88-2.125 1.195.558-.543.99-1.162 1.368-1.695z" />
  </SvgIcon>
);

Globe.muiName = SvgIcon.muiName;

export default Globe;
