elements.water_p = {
  color: "#0300ab",
  behavior: behaviors.LIQUID,
  category: "GFK",
  state: "liquid",
  density: 1000,
  temp: 20,
  tempHigh: 500,
  stateHigh: "steam_p"
};

elements.steam_p = {
  color: "#a6b9e8",
  behavior: behaviors.GAS,
  category: "GFK",
  state: "gas",
  density: 1,
  temp: 500,
  conduct: 0.4,
  tempLow: 400,
  stateLow: "water_p",
  tick: function(pixel) {
    let pushX = 0;
    let pushY = 0;

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) { // Fixed: Changed dx++ to dy++
        if (dx === 0 && dy === 0) continue;

        let targetX = pixel.x + dx; // Fixed: Changed = to +
        let targetY = pixel.y + dy; // Fixed: Fixed targetY name and changed dx to dy

        if (!outOfBounds(targetX, targetY) && !isEmpty(targetX, targetY)) {
          let neighbor = pixelMap[targetX][targetY];
          if (neighbor && neighbor.element === "steam_p") {
            pushX -= dx;
            pushY -= dy;
          }
        }
      }
    }
    
    if (pushX !== 0 || pushY !== 0) {
      let moveX = pushX > 0 ? 1 : (pushX < 0 ? -1 : 0);
      let moveY = pushY > 0 ? 1 : (pushY < 0 ? -1 : 0);
      let newX = pixel.x + moveX; // Fixed: Lowercase x
      let newY = pixel.y + moveY; // Fixed: Lowercase y

      if (isEmpty(newX, newY)) { // Fixed: Lowercase if
        movePixel(pixel, newX, newY); // Fixed: Lowercase pixel
      }
    }
  } // Fixed: Removed trailing semicolon after closing brace
};
