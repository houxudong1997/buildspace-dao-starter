import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x22633C91633e3075C08fAC81aeE11490312f333F", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Astronaut",
        description: "This NFT will give you access to HuHuDAO!",
        image: readFileSync("scripts/assets/nft1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();