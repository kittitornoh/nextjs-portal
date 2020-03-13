import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AssessmentsIcon from "@material-ui/icons/AssignmentRounded";
import TasksIcon from "@material-ui/icons/CheckCircle";
import DocumentsIcon from "@material-ui/icons/FolderRounded";
import MessagesIcon from "@material-ui/icons/ForumRounded";
import CareTeamIcon from "@material-ui/icons/GroupRounded";
import HomeIcon from "@material-ui/icons/HomeRounded";
import React from "react";
import CarePlanNav from "./CarePlanNav";
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
      <ListItem button selected={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TasksIcon />
        </ListItemIcon>
        <ListItemText primary='My Tasks' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MessagesIcon />
        </ListItemIcon>
        <ListItemText primary='Messages' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CareTeamIcon />
        </ListItemIcon>
        <ListItemText primary='Care Team' />
      </ListItem>
      <Divider />
      <CarePlanNav />
      <Divider />
      <UnifiedRecordNav />
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <AssessmentsIcon />
        </ListItemIcon>
        <ListItemText primary='Assessments' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DocumentsIcon />
        </ListItemIcon>
        <ListItemText primary='Documents' />
      </ListItem>
    </List>
  );
}
