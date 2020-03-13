import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function MainNavItem(props) {
  const classes = useStyles();

  return (
    <ListItem
      button
      selected={props.selected ? props.selected : false}
      className={props.nested ? classes.nested : null}
    >
      <ListItemIcon>
        <FontAwesomeIcon icon={props.icon} size='lg' />
      </ListItemIcon>
      <ListItemText primary={props.label} />
    </ListItem>
  );
}
