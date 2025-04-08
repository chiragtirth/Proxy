let vantaEffect;

// Vanta themes
const themes = {
  dark: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x4a4a4a
  },
  light: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0xffffff
  },
  sunset: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0xfd5e53
  },
  hacker: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x61CF5A
  },
  lava: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0xE42217
  },
  shock: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0xcde746
  },
  deepsea: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x0000FF
  },
  nautical: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x00FFFF
  },
  barney: {
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x7d37af
  }
};

// Initialize Vanta with theme
function vantaOn() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
  if (!vantaEffect) {
    vantaEffect = VANTA.FOG({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      ...themes[savedTheme]
    });
  }
  localStorage.setItem("vantaBackground", "on");
}

// Turn off Vanta background
function vantaOff() {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
  localStorage.setItem("vantaBackground", "off");
}

// Apply theme only if Vanta is active
function applyTheme(theme) {
  if (vantaEffect) {
    vantaEffect.setOptions(themes[theme]);
  }
  localStorage.setItem('theme', theme);
}

// Theme button functions
function themeDark() { applyTheme('dark'); }
function themeLight() { applyTheme('light'); }
function themeSunset() { applyTheme('sunset'); }
function themeHacker() { applyTheme('hacker'); }
function themeLava() { applyTheme('lava'); }
function themeShock() { applyTheme('shock'); }
function themeDeepsea() { applyTheme('deepsea'); }
function themeNautical() { applyTheme('nautical'); }
function themeBarney() { applyTheme('barney'); }

// Load Vanta settings on page load
window.addEventListener("DOMContentLoaded", () => {
  const isVantaOn = localStorage.getItem("vantaBackground") === "on";
  if (isVantaOn) {
    vantaOn();
  }
});

