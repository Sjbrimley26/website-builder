const { doNothingHandler } = require("./utils");

const BaseBlock = id => {
  const block = document.createElement("div");
  block.id = id;
  block.classList.add("block");

  block.addEventListener("mousedown", doNothingHandler);
  block.addEventListener("mouseup", doNothingHandler);
  
  return block;
};

module.exports = BaseBlock;
