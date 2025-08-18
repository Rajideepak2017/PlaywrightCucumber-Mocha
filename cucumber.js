module.exports = {
  default: [
    "--require", "Utility/CustomWorld.js",        
    "--require", "Utility/hooks/hooks.js",
    "--require", "features/stepdefinition/*.js",
    "features/**/*.feature",
       
  ]
};
