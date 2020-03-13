import {
  faAllergies,
  faClipboard,
  faHeartRate,
  faHospital,
  faSyringe,
  faUserFriends
} from "@fortawesome/pro-solid-svg-icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import MainNavItem from "./MainNavItem";

export default function UnifiedCoreNav() {
  const [open, setOpen] = React.useState(false);

  const handleClickUnifiedRecord = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClickUnifiedRecord}>
        <ListItemText primary='Unified Core' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <MainNavItem icon={faClipboard} label='Diagnoses' nested />
          <MainNavItem icon={faAllergies} label='Allergies' nested />
          <MainNavItem icon={faSyringe} label='Immunizations' nested />
          <MainNavItem icon={faHospital} label='Labs' nested />
          <MainNavItem icon={faHeartRate} label='Vitals' nested />
          <MainNavItem icon={faUserFriends} label='Family' nested />
        </List>
      </Collapse>
    </React.Fragment>
  );
}
