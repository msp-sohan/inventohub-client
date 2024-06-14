import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const ToogleTheme = () => {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
         setTheme(savedTheme);
      }
   }, []);

   useEffect(() => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
   }, [theme]);

   const handleThemeSwitch = () => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
   };
   return (
      <>
                  <IconButton onClick={handleThemeSwitch} sx={{ backgroundColor: 'white', height: '40px' }}>
                     {theme === "dark" ? <DarkMode /> : <LightMode />}
                  </IconButton>
                  
      </>
   );
};

export default ToogleTheme;