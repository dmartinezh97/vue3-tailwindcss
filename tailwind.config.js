module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F3F4F6',
        secondary: '#F3F4F6',
        // negro: '#15161b',
        // primary: '#1C1C24',
        // secondary: '#232429',
        gris: '#383A46',
        rosa: '#BA2057',
        rosaclaro: '#E26091',
        uno: '#BA2057',
        dos: '#C72861',
        tres: '#F5E1E8',
        fondo: '#F5F5F5',
        success: '#46BFA3',
        fuente: '#27425D'
      },
      height: {
        'screen-nav': 'calc(100vh - 64px)',
        'screen-nav2': 'calc(100vh - 160px)',
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "-1": "-1",
      },
    },
  },
  plugins: [],
}