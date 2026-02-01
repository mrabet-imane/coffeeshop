import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import i18n from "i18next";

const languages = [
  { code: "en", label: "🇬🇧 English" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "ar", label: "🇲🇦 العربية" },
];

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
    handleClose();
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          textTransform: "none",
          fontSize: 16,
          borderColor: "#8B5E3C",
          color: "#4A2C1A",
          "&:hover": { borderColor: "#8B5E3C", backgroundColor: "#F5EFE8" },
        }}
        variant="outlined"
      >
        {currentLang.label}
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            selected={lang.code === i18n.language}
            sx={{
           
              "&.Mui-selected": {
                backgroundColor: "#F5EFE8", 
                color: "#4A2C1A",          
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#EDE2D5", 
              },
            }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
