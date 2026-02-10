import { useState } from "react";
import CoffeeCard from "./Card";
import espresso from "../assets/images/espresso.webp";
import cafeLight from "../assets/images/cafe-light.webp";
import icedMoca from "../assets/images/iced-moca.webp";
import milkCoffee from "../assets/images/milk-coffee.webp";
import marciaMullett from "../assets/images/marcia-mullett.webp";
import { useTranslation } from "react-i18next";
import { IconButton, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function OurCoffee() {
  const { t } = useTranslation();
  const theme = useTheme();

  
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); 
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); 
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); 

  
  let visibleCount = 3;
  if (isXs) visibleCount = 1;
  else if (isSm) visibleCount = 2;
  else if (isMdUp) visibleCount = 3;

  const coffees = [
    { key: "espresso", image: espresso },
    { key: "cafeLight", image: cafeLight },
    { key: "icedMoca", image: icedMoca },
    { key: "milkCoffee", image: milkCoffee },
    { key: "marciaMullett", image: marciaMullett },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => setStartIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setStartIndex(prev => Math.min(prev + 1, coffees.length - visibleCount));

  const visibleCoffees = coffees.slice(startIndex, startIndex + visibleCount);

  return (
    <Box className="my-12">
      
      <Box display="flex" alignItems="center" justifyContent="center" gap={2} mb={6}>
        <Box flex={1} height={1} bgcolor="#C0A381" />
        <LocalCafeIcon sx={{ color: "#C0A381", fontSize: 28 }} />
        <Typography
          component="h2"
          variant="h5"
          sx={{ color: "#50321f" }}
          aria-label={t("coffeesSectionTitle")}
        >
          {t("coffeesSectionTitle")}
        </Typography>
        <Box flex={1} height={1} bgcolor="#C0A381" />
      </Box>

     
      <Box className="relative flex items-center gap-2 mx-auto w-[90%]">
       
        <IconButton
          onClick={handlePrev}
          disabled={startIndex === 0}
          aria-label={t("buttons.prev", "Previous coffees")}
          sx={{
            bgcolor: "#50321f",
            color: "#fff",
            "&:hover": { bgcolor: "#4a2c1a" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

       
        <Box
          className="flex-1"
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
            gap: 2,
          }}
        >
          {visibleCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee.key}
              image={coffee.image}
              title={t(`coffees.${coffee.key}.title`)}
              description={t(`coffees.${coffee.key}.description`)}
              link="/menu"
            />
          ))}
        </Box>

       
        <IconButton
          onClick={handleNext}
          disabled={startIndex >= coffees.length - visibleCount}
          aria-label={t("buttons.next", "Next coffees")}
          sx={{
            bgcolor: "#50321f",
            color: "#fff",
            "&:hover": { bgcolor: "#4a2c1a" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
