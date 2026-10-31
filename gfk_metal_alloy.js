elements.monel_400_nicklecopper_alloy = {
  color: "#7a7d80",
  behavior: behaviors.WALL,
  state: "solid",
  category: "GFK",
  density: 8000,
  tempHigh: 1350,
  stateHigh: "molten_monel_400",
  conduct: 0.3,
  hardness: 0.6,
  temp: 10
};

elements.molten_monel_400 = {
  color: "#ffae00",
  behavior: behaviors.LIQUID,
  state: "liquid",
  category: "GFK",
  density: 6000,
  tempLow: 1300,
  stateLow: "monel_400_nicklecopper_alloy",
  conduct: 0.6,
  temp: 1400
};

elements.zircaloy = {
  color: "#97ad9d",
  behavior: behaviors.WALL,
  state: "solid",
  category: "GFK",
  density: 6500,
  tempHigh: 1850,
  stateHigh: "molten_zircaloy",
  conduct: 0.6,
  hardness: 0.6
};

elements.molten_ziraloy = {
  color: "#de8a0b",
  behavior: behaviors.LIQUID,
  state: "liquid",
  category: "GFK",
  density: 4500,
  tempLow: 1600,
  stateLow: "zircaloy",
  conduct: 0.6,
  temp: 1950
};

elements.alloy_690 = {
  color: "#8794a8",
  behavior: behaviors.WALL,
  state: "solid",
  category: "GFK",
  density: 8785,
  tempHigh: 1850,
  stateHigh: "molten_alloy_690",
  conduct: 0.85,
  temp: 1950,
  desc: "Chromium/Nickel baised Super-Alloy used for internals inside a heat exchanger. Highly corososive wear ressistance, High tempreture resistance, High chemical tolarance."
};

elements.molten_alloy_690 = {
color: "#d16506",
  behavior: behaviors.LIQUID,
  state: "liquid",
  category: "GFK",
  density: 8500,
  tempLow: 1600,
  stateLow: "alloy_690",
  conduct: 0.8,
  temp: 1950
};
