module.exports = {
  default: [
    "--require", "Utility/CustomWorld.js",        // ✅ This must come first
    "--require", "Utility/hooks/hooks.js",
    "--require", "features/stepdefinition/*.js",
    "features/*.feature",
   
  ]
};
