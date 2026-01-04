const defaultColors = ['#2ca9e1', '#2859e0ff', '#1a86cdff', '#13d6f8ff', '#2dff9dff', '#9a59b6ff'];

window.addEventListener('DOMContentLoaded', () => {
  const direction = initRgbDirection();

  const randomColor = defaultColors[Math.floor(Math.random() * defaultColors.length)];
  let currentRgb = hexToRGB(randomColor);

  document.documentElement.style.setProperty('--bg-color', randomColor);

  setInterval(() => {
    calcRGB(currentRgb, direction);
    setBackgroundColor(currentRgb);
  }, 1000);
});

function initRgbDirection() {
  return {
    r: Math.random() < 0.5 ? 1 : -1,
    g: Math.random() < 0.5 ? 1 : -1,
    b: Math.random() < 0.5 ? 1 : -1
  };
}

function calcRGB(currentRgb, direction) {
  currentRgb.r += direction.r * (Math.floor(Math.random() * 5) + 1);
  currentRgb.g += direction.g * (Math.floor(Math.random() * 5) + 1);
  currentRgb.b += direction.b * (Math.floor(Math.random() * 5) + 1);

  const elementMax = 204;
  if (currentRgb.r <= 0 || currentRgb.r >= elementMax) {
    direction.r *= -1;
    currentRgb.r = Math.max(0, Math.min(elementMax, currentRgb.r));
  }
  if (currentRgb.g <= 0 || currentRgb.g >= elementMax) {
    direction.g *= -1;
    currentRgb.g = Math.max(0, Math.min(elementMax, currentRgb.g));
  }
  if (currentRgb.b <= 0 || currentRgb.b >= elementMax) {
    direction.b *= -1;
    currentRgb.b = Math.max(0, Math.min(elementMax, currentRgb.b));
  }
}

function setBackgroundColor(currentRgb) {
  const hex = rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b);
  document.documentElement.style.setProperty('--bg-color', hex);
}

function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, '0');
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
