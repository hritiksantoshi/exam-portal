const { userHandler } = require('../handlers');

const user = {
    saveUserDetails: async (req, res) => {
		try {
			let userData = req.body;
			let response = await userHandler.user.saveUserDetails(userData);
			res.status(response.status).send(response.data);
		} catch (err) {
			throw err;
		}
	}
}
module.exports = user;