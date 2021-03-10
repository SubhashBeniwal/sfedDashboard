import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import InternSurvey from "./views/Dashboard/surveys/internSurvey/surveyList";
import ViewInternSurvey from "./views/Dashboard/surveys/internSurvey/viewSurvey";
import FarmbookSurvey from "./views/Dashboard/surveys/farmBookSurvey/surveyList";
import ViewFarmBookSurvey from "./views/Dashboard/surveys/farmBookSurvey/viewSurvey";
import KisanSurvey from "./views/Dashboard/surveys/kisanSurvey/surveyList";
import ViewKisanSurvey from "./views/Dashboard/surveys/kisanSurvey/viewSurvey";
import RetailSurvey from "./views/Dashboard/surveys/retailSurvey/surveyList";
import ViewRetailSurvey from "./views/Dashboard/surveys/retailSurvey/viewSurvey";
import Login from "./views/login";
// core components/views for RTL layout

const dashboardRoutes = [

  {
    path: "/login",
    name: "Dashboard",
    icon: Dashboard,
    component: Login,
    layout: "/auth",
    hidden: true
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    hidden: false
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  //   hidden: false
  // },

  {
    path: "/internSurvey",
    name: "Intern Survey",
    icon: "content_paste",
    component: InternSurvey,
    layout: "/admin",
    hidden: false
  },
  {
    path: "/internSurvey:id",
    name: "View Intern Survey",
    icon: "content_paste",
    component: ViewInternSurvey,
    layout: "/admin",
    hidden: true,
  },

  {
    path: "/farmbookSurvey",
    name: "Farmbook Survey",
    icon: "content_paste",
    component: FarmbookSurvey,
    layout: "/admin",
    hidden: false
  },
  {
    path: "/farmbookSurvey:id",
    name: "View Farmbook Survey",
    icon: "content_paste",
    component: ViewFarmBookSurvey,
    layout: "/admin",
    hidden: true,
  },
  {
    path: "/kisanSurvey",
    name: "Kissan Survey",
    icon: "content_paste",
    component: KisanSurvey,
    layout: "/admin",
    hidden: false
  },
  {
    path: "/kisanSurvey:id",
    name: "View Kissan Survey",
    icon: "content_paste",
    component: ViewKisanSurvey,
    layout: "/admin",
    hidden: true,
  },
  {
    path: "/retailSurvey:id",
    name: "View Retail Survey",
    icon: "content_paste",
    component: ViewRetailSurvey,
    layout: "/admin",
    hidden: true,
  },
    {
    path: "/retailSurvey",
    name: "Retail Survey",
    icon: "content_paste",
    component: RetailSurvey,
    layout: "/admin",
    hidden: false
  },


  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  //   hidden: false
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
