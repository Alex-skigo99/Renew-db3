const db = require("./src/db");
async function checkGmbLocations() {
  try {
    const locations = await db(require("./src/db/DatabaseTableConstants").GMB_LOCATION_TABLE).select("*");
    console.log("GMB Locations:", JSON.stringify(locations, null, 2));
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
checkGmbLocations();
