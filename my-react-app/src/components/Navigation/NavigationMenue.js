import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';  // Correct import for Explore icon
import NotificationsIcon from '@mui/icons-material/Notifications';  // Correct import for Notifications icon
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';


export const navigationMenu = [
    {
        title: "Home",
        Icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Explore",
        Icon: <ExploreIcon />,
        path: "/explore"
    },
    {
        title: "Notifications",
        Icon: <NotificationsIcon />,  // Use NotificationsIcon
        path: "/notifications"
    },
    {
        title: "Messages",
        Icon: <MessageIcon />,
        path: "/messages"
    },
    {
        title: "Lists",
        Icon: <ListAltIcon />,
        path: "/lists"
    },
    {
        title: "Community",
        Icon: <GroupIcon />,
        path: "/community"
    },
    {
        title: "Verified",
        Icon: <VerifiedIcon />,
        path: "/verified"
    },
    {
        title: "Profile",
        Icon: <AccountCircleIcon />,
        path: "/profile"
    },
    {
        title: "More",
        Icon: <PendingIcon />,
        path: "/more"
    },
];

