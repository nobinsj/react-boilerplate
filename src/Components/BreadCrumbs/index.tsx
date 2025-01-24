import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import styles from "./index.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const BreadCrumbs = () => {
  const location = useLocation();
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;
    return isLast ? (
      <Typography key={path} className={styles["breadCrumb-last"]}>
        {capitalizeFirstLetter(decodeURIComponent(segment))}
      </Typography>
    ) : (
      <Link key={path} to={path} className={styles["breadCrumb-link"]}>
        {capitalizeFirstLetter(decodeURIComponent(segment))}
      </Link>
    );
  });
  const homeBreadcrumb = (
    <Link key="/" to="/" style={{ display: "flex", alignItems: "center" }}>
      <HomeIcon className={styles["breadCrumbs-home"]} />
    </Link>
  );

  return (
    <div className={styles["BreadCrumbs"]}>
      <Breadcrumbs
        separator={
          <ArrowRightIcon sx={{ color: "#8f887a", fontSize: "20px", marginLeft: "0 !important", marginRight: "0 !important" }}  className={styles["breadCrumb-arrow"]}/>
        }
      >
        {[homeBreadcrumb, ...breadcrumbs]}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
