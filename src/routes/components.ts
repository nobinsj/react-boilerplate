import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"))
const Login = lazy(() => import("../pages/Login"))
const NoPage = lazy(() => import("../pages/NoPage"))
const Dashboard = lazy(() => import("../pages/Dashboard"))

export default {
  Home,
  Login,
  NoPage, Dashboard
}