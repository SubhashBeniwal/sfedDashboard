import Login from "./Login.jsx";
// import * as permissions from '../../../config/Casl/permissions';

const authRoute = {
    path: "/login",
    name: "Login",
    icon: "ni ni-shop text-primary",
    component: Login,
    layout: "/auth",
    invisible: true,
    // permission: permissions.AUTH.login,
    // subject: permissions.AUTH.subject
};
export default authRoute;