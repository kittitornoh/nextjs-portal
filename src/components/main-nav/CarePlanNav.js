import {
  faCalendarDay,
  faFlagAlt,
  faHeartbeat,
  faPrescriptionBottle,
  faStethoscope,
  faWalking
} from "@fortawesome/pro-solid-svg-icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import MainNavItem from "./MainNavItem";

export default function CarePlanNav() {
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
          <MainNavItem icon={faCalendarDay} label='Appointments' nested />
          <MainNavItem icon={faStethoscope} label='Problems' nested />
          <MainNavItem icon={faFlagAlt} label='Goals' nested />
          <MainNavItem icon={faPrescriptionBottle} label='Medications' nested />
          <MainNavItem icon={faWalking} label='Activities' nested />
          <MainNavItem icon={faHeartbeat} label='Health Metrics' nested />
        </List>
      </Collapse>
    </React.Fragment>
  );
}
