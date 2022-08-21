import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xC4745FD5C007Ed8cd81BB9FE612DD5B563fCaFA7");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Japanese Cigarette",
        description: "This NFT will give you access to OnizukaDAO!",
        image: readFileSync("scripts/assets/pixel-cigarette.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();