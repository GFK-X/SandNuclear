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
};
