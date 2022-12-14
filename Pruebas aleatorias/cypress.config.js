

const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
	"specPattern": "**/*.feature",
	"env": {
		"url_admin": "http://localhost:2368/ghost/",
		"admin_email": "a.sanchez2001@uniandes.edu.co",
		"admin_password": "Arsenal93.",
		"ghost_url": "http://localhost:2368/",
		"url_admin_new": "http://localhost:2369/ghost",
        "url_admin_romy": "http://localhost:2370/ghost/",
		"admin_email_romy": "r.caicedom@uniandes.edu.co",
		"admin_password_romy": "testpruebas",
		"ghost_url_romy": "http://localhost:2370/",
		"url_admin_new_romy": "http://localhost:2370/ghost"
	},
	"viewportHeight": 1080,
	"viewportWidth": 1920
	
  },
};
