import { createTheme } from "@nextui-org/react";

const kastleTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      gradient: 'linear-gradient(112deg, #172C10 -63.59%, #161616 -20.3%, #172C10 70.46%)',
      success: '#257A26',
    }, 
  }
})

export { kastleTheme };