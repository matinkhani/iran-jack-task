import IconAdd from "../../icons/icon-add";
import IconAlert from "../../icons/icon-alert";
import IconCalendar from "../../icons/icon-calendar";
import IconCall from "../../icons/icon-call";
import IconDocument from "../../icons/icon-document";
import IconMessage from "../../icons/icon-message";
import IconTeam from "../../icons/icon-team";
import IconVanArsdel from "../../icons/icon-van-arsdel";
import { TMenuBarItems } from "./menu-bar.type";

export const MenuBarData: TMenuBarItems[] = [
  { name: "Activity", icon: <IconAlert /> },
  { name: "Chat", icon: <IconMessage /> },
  { name: "Teams", icon: <IconTeam /> },
  { name: "Calendar", icon: <IconCalendar /> },
  { name: "Calls", icon: <IconCall /> },
  { name: "Files", icon: <IconDocument /> },
  { name: "Van Arsdel", icon: <IconVanArsdel /> },
  { name: "Apps", icon: <IconAdd /> },
];
