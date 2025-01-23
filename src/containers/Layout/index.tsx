import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { settings, sidebarOptions, sideBarSubOptions } from "./constant";

const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (setting: { label: string; path: string }) => {
    if (setting?.path !== "logout") {
      navigate(setting.path);
    } else {
      console.log("logout");
    }
    handleCloseUserMenu();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{ display: "flex", justifyContent: "end" }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 1,
          }}
          onClick={toggleDrawer(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {sidebarOptions.map((option, index) => (
          <ListItem
            key={option.label}
            disablePadding
            onClick={() => navigate(option.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={option.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sideBarSubOptions.map((option, index) => (
          <ListItem
            key={option.label}
            disablePadding
            onClick={() => navigate(option.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={option.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={styles["layout"]}>
      <header className={styles["layout-header"]}>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 1 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={handleOpenUserMenu}
          >
            <PersonIcon />
          </IconButton>
          <Menu
            sx={{ mt: "46px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.label}
                onClick={() => handleMenuClick(setting)}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {setting.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </header>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <main className={styles["layout-main"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
