const db = require("./src/db");
async function checkOrganizations() {
  try {
    const organizations = await db(require("./src/db/DatabaseTableConstants").ORGANIZATION_TABLE).select("*");
    console.log("Organizations:", JSON.stringify(organizations, null, 2));
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
checkOrganizations();
