let vantaEffect;

// Turn Vanta background ON
function vantaOn() {
  if (!vantaEffect) {
    vantaEffect = VANTA.FOG({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x0,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0x4a4a4a
    });
  }
  localStorage.setItem("vantaBackground", "on");
}

// Turn Vanta background OFF
function vantaOff() {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
  localStorage.setItem("vantaBackground", "off");
}

// On page load, check if background is OFF and destroy it if needed
window.addEventListener("DOMContentLoaded", () => {
  const bgSetting = localStorage.getItem("vantaBackground");

  // Initialize Vanta background
  vantaEffect = VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x0,
    midtoneColor: 0x0,
    lowlightColor: 0x0,
    baseColor: 0x4a4a4a
  });

  // If setting is OFF, destroy it
  if (bgSetting === "off") {
    vantaEffect.destroy();
    vantaEffect = null;
  }
});
