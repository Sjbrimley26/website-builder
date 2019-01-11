const BlockFactory = require("./BlockFactory");

const { getId } = require("./utils");

const builder = document.getElementById("builder");

let block = BlockFactory.newBlock();

builder.addEventListener("mousedown", e => {
  const { clientX, clientY } = e;
  block.topLeft = [clientX, clientY];
});

builder.addEventListener("mouseup", e => {
  if (block.topLeft.length === 0) {
    return;
  }
  const { clientX, clientY } = e;
  block.bottomRight = [clientX, clientY];

  const id = getId();
  block.id = id;

  builder.appendChild(block.ref);
  builder.appendChild(block.style);

  console.log(block);

  block = BlockFactory.newBlock();
});
