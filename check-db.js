const db = require("./src/db");
async function checkDatabase() {
  try {
    const users = await db(require("./src/db/DatabaseTableConstants").USER_TABLE).select("*");
    console.log("Users:", JSON.stringify(users, null, 2));
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
checkDatabase();
