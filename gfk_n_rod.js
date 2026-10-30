elements.u_235 = {
  color: "#02360b",
  behavior: behaviors.WALL,
  category: "GFK",
  state: "solid",
  density: 19000,
  temp: 20,
  conduct: 0.8, 
  tick: function(pixel) {
    if (Math.random() < 0.005) {
      let directions = [[1,0], [-1,0], [0,1], [0,-1]];
      let dir = directions[Math.floor(Math.random() * directions.length)];
      let tx = pixel.x + dir[0];
      let ty = pixel.y + dir[1];
      if (isEmpty(tx, ty)) {
        createPixel("neutron", tx, ty);
      }
    }
  
    if (pixel.temp > 1500) {
      changePixel(pixel, "corium");
    }
  },
  reactions: {
    "neutron": {
      func: function(pixel1, pixel2) {
        pixel1.temp += 200;
        deletePixel(pixel2.x, pixel2.y);
        let fragments = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < fragments; i++) {
          let rx = pixel1.x + (Math.floor(Math.random() * 3) - 1);
          let ry = pixel1.y + (Math.floor(Math.random() * 3) - 1);
          if (isEmpty(rx, ry)) {
            createPixel("neutron", rx, ry);
          }
        }
      }
    }
  }
};
