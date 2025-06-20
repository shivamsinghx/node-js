const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

program
  .name("word-counter")
  .description("CLI to count words in a file")
  .argument("<filePath>", "Path to the file")
  .action((filePath) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("❌ Error reading file:", err.message);
        return;
      }

      const words = data.trim().split(/\s+/);
      console.log(`✅ You have ${words.length} words in this file`);
    });
  });

program.parse();
