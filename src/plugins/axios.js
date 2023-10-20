import axios from "axios";
import flash from "@/plugins/flash";
// import store from "src/store"
// import router from './router'

axios.defaults.withCredentials = true;

const headers = {
	"Content-Type": "application/x-www-form-urlencoded",
	"X-Requested-With": "XMLHttpRequest"
};

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: headers
});

const auth = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_AUTH,
	headers: headers
});

// api.interceptors.request.use((config) => {
// 	const token = localStorage.getItem("token")
// 	if (token) {
// 		config.headers["Authorization"] = "Bearer " + token
// 	}
//
// 	return config
// })

auth.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if (error.response.status === 401) {
			this.$store.dispatch("logout");
		} else {
			// return Promise.reject(error);
			flash.error(error.response.data.message);
		}
	}
);

axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if (error.response) {
			flash.error(error.response.data.message);
		}
	}
);

// axios.interceptors.response.use(undefined, function(error) {
// 	if (error) {
// 		const originalRequest = error.config;
// 		if (error.response.status === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true;
// 			store.dispatch("Logout");
// 			return router.push("/login");
// 		}
// 	}
// });

//
// axios.interceptors.response.use(
//
// 		function(error) {
// 			// handle error
// 			if (error.response) {
// 				flash.error(error.response.data.message);
// 			}
// 		});

// try {
// 	await guest.post("/login", user);
// 	await commit("setUser", user.get("email"));
//
// 	res.msg = "Login success";
// 	res.classAlert = "success";
//
// 	console.log("Login success: " + state.user);
//
// 	// Work with the response...
// } catch (err) {
// 	if (err.response) {
//
// 		// The client was given an error response (5xx, 4xx)
// 		// console.log(err.response.data);
// 		// console.log(err.response.status);
// 		// console.log(err.response.headers);
//
// 		res = {};
// 		res.msg = err.response.data.error;
// 		res.classAlert = "danger";
//
// 		console.log(res.msg);
//
// 	} else if (err.request) {
//
// 		// The client never received a response, and the request was never left
// 		console.log(err.request);
// 	} else {
//
// 		// Anything else
// 		console.log("Error", err.message);
// 	}
// }


export {api, auth};