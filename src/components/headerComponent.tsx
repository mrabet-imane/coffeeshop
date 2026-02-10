import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageSelector from "./LanguageSelector";

const navKeys = ["home", "menu", "about", "contact"]; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = navKeys.map((key) => ({ key, label: t(`nav.${key}`) }));

  return (
    <>
   
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "#50321f", color: "#FFF9F3" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "center", gap: 3, fontSize: "0.875rem" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2">{t("header.address")}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">{t("header.phone")}</Typography>
          </Box>
        </Toolbar>
      </AppBar>


      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          top: 40,
          bgcolor: "#FAF7F2",
          color: "#4A2C1A",
          px: 6,
        }}
      >
        <Toolbar component="nav" aria-label="Main navigation" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src="/logo-1-removebg-preview.webp"
              alt="Coffee Shop logo"
              sx={{ height: 40, width: "auto" }}
              loading="eager"
              fetchPriority="high" 
            />
          </Box>

         
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.key}
                variant="button"
                sx={{ cursor: "pointer", fontWeight: 500 }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

        
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <LanguageSelector />
            </Box>

            
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, bgcolor: "#FAF7F2", height: "100%", color: "#4A2C1A" }} role="navigation">
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
            <LanguageSelector />
            <CloseIcon onClick={() => setOpen(false)} sx={{ cursor: "pointer" }} />
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton onClick={() => setOpen(false)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
