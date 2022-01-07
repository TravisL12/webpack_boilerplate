#!/usr/bin/env node
var fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function main() {
  if (!fs.existsSync("nodes_stuff")) {
    fs.mkdirSync("nodes_stuff");
  }

  exec(
    `
      cd nodes_stuff;
      git clone git@github.com:TravisL12/webpack_boilerplate.git
    `
  );
}

if (require.main === module) {
  main();
}
