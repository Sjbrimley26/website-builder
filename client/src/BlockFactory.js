const BaseBlock = require("./BaseBlock");

const BlockFactory = () => {
  return {
    newBlock() {
      const block = {
        style: document.createElement("style"),
        bottomRight: [],
        topLeft: []
      };

      const handler = {
        set: function(obj, prop, value) {

          switch (prop) {
            case "bottomRight":
              if (obj.topLeft.length) {
                obj[prop] = value;
                const [x, y] = obj.topLeft;
                const [newX, newY] = value;
                const [minX, maxX] = [x, newX].sort((a, b) => a - b);
                const [minY, maxY] = [y, newY].sort((a, b) => a - b);
                obj.left = minX;
                obj.top = minY;
                obj.height = maxY - minY;
                obj.width = maxX - minX;
              } else {
                obj[prop] = value;
              }
              break;
            
            case "topLeft":
              if (obj.bottomRight.length) {
                obj[prop] = value;
                const [x, y] = obj.bottomRight;
                const [newX, newY] = value;
                const [minX, maxX] = [x, newX].sort((a, b) => a - b);
                const [minY, maxY] = [y, newY].sort((a, b) => a - b);
                obj.left = minX;
                obj.top = minY;
                obj.height = maxY - minY;
                obj.width = maxX - minX;
              } else {
                obj[prop] = value;
              }
              break;

            case "id":
              obj["ref"] = BaseBlock(value);
              obj["style"].innerHTML = `
                #${value} {
                  position: absolute;
                  width: ${obj.width}px;
                  left: ${obj.left}px;
                  background: lightblue;
                  height: ${obj.height}px;
                  top: ${obj.top}px;
                  border: 5px solid;
                }
              `;
              break;
          }
        },

        get: function (obj, prop) {
          return obj[prop];
        }
      };

      return new Proxy(block, handler);
    }
  };
};

module.exports = BlockFactory();
