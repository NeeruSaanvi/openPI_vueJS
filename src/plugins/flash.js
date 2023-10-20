import flashMessage from "@smartweb/vue-flash-message";

const flash = {
	error: (message, title = 'Error') => {
		return flashMessage.error({
			title: title,
			message: message,
			position: 'bottomCenter'
		});
	},
	success: (message, title = 'Success') => {
		return flashMessage.success({
			title: title,
			message: message,
			position: 'bottomCenter'
		});
	}
};

export default flash;