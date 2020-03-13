import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import AppointmentsIcon from "@material-ui/icons/EventRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import GoalsIcon from "@material-ui/icons/FlagRounded";
import StarBorder from "@material-ui/icons/StarBorder";
import React from "react";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(3)
  }
}));

export default function MainNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickUnifiedRecord = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClickUnifiedRecord}>
        <ListItemText primary='Care Plan' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AppointmentsIcon />
            </ListItemIcon>
            <ListItemText primary='Appointments' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Problems' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <GoalsIcon />
            </ListItemIcon>
            <ListItemText primary='Goals' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Medications' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Activities' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Health Metrics' />
          </ListItem>
        </List>
      </Collapse>
    </React.Fragment>
  );
}
