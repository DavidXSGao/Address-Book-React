var axios = require('axios');

module.exports = {
	fetchContacts: function () {
		return axios.get('http://www.mocky.io/v2/5a7e1d7a3100005f00cd0b21')
			.then(function (response){
				return response.data.data;
			});
	}
}