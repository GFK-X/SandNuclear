elements.monel_400_nicklecopper_alloy = {
  color: "#7a7d80",
  behavior: behaviors.WALL,
  state: "solid",
  category: "GFK",
  density: 8000,
  tempHigh: 1350,
  stateHigh: "molten_monel_400",
  conduct: 0.4,
  hardness: 0.6
};

elements.molten_monel_400 = {
  color: "#ffae00",
  behavior: behaviors.LIQUID,
  state: "liquid",
  category: "GFK",
  density: 6000,
  tempLow: 1300,
  stateLow: "monel_400_nicklecopper_alloy",
  conduct: 0.1
}
