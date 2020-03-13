import {
  faCheckCircle,
  faComments,
  faFileAlt,
  faFolder,
  faHomeAlt,
  faUsers
} from "@fortawesome/pro-solid-svg-icons";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CarePlanNav from "./CarePlanNav";
import MainNavItem from "./MainNavItem";
import UnifiedRecordNav from "./UnifiedRecordNav";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 256,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(8),
    position: "relative",
    overflow: "auto",
    maxHeight: "100vh",
    whiteSpace: "nowrap",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",

    "& .MuiButtonBase-root": {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5)
    },

    "& .MuiListItemIcon-root": {
      minWidth: "40px"
    },

    "& .MuiButtonBase-root:hover": {
      backgroundColor: theme.palette.primary.light
    },

    "& .MuiListItem-root.Mui-selected": {
      backgroundColor: theme.palette.primary.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.primary.main
      }
    }
  }
}));

export default function MainNav() {
  const classes = useStyles();

  return (
    <List component='nav' className={classes.root}>
      <MainNavItem selected={true} icon={faHomeAlt} label='Home' />
      <MainNavItem icon={faCheckCircle} label='My Tasks' />
      <MainNavItem icon={faComments} label='Messages' />
      <MainNavItem icon={faUsers} label='Care Team' />
      <MainNavItem icon={faFileAlt} label='Assessments' />
      <MainNavItem icon={faFolder} label='Documents' />
      <Divider />
      <CarePlanNav />
      <Divider />
      <UnifiedRecordNav />
      <Divider />
    </List>
  );
}
