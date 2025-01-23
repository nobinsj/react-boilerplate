import styles from "./index.module.scss";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

type PropType = {
  toggleDrawer: () => void;
  handleOpenUserMenu: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  handleMenuClick: (data: { label: string; path: string }) => void;
  anchorElUser: any;
  settings: Array<{ label: string; path: string }>;
};

const Header = ({
  toggleDrawer,
  handleOpenUserMenu,
  anchorElUser,
  settings,
  handleCloseUserMenu,
  handleMenuClick,
}: PropType) => {
  return (
    <header className={styles["header"]}>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 1 }}
        onClick={toggleDrawer}
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
          {settings?.map((setting) => (
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
  );
};

export default Header;
