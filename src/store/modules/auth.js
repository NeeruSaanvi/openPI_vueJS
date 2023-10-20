import axios from "axios";
import {api, auth} from "@/plugins/axios.js";

const state = {
	user: null,
	posts: null,
};

const getters = {
	isAuthenticated: (state) => !!state.user,
	StatePosts: (state) => state.posts,
	StateUser: (state) => state.user,
};

const actions = {

	async Register({dispatch}, form) {
		await api.post("signup", form);
		let UserForm = new FormData();
		UserForm.append("email", form.email);
		UserForm.append("password", form.password);
		await dispatch("Login", UserForm);
	},

	async Login({commit}, user) {
		await auth.post("login", user);
		await commit("setUser", user.get("email"));
	},

	async CreatePost({dispatch}, post) {
		await axios.post("post", post);
		return await dispatch("GetPosts");
	},

	async GetPosts({commit}) {
		let response = await axios.get("posts");
		commit("setPosts", response.data);
	},

	async Logout({commit}) {
		let user = null;
		commit("unsetUser", user);
	},
};

const mutations = {
	setUser(state, username) {
		state.user = username;
	},
	setPosts(state, posts) {
		state.posts = posts;
	},
	unsetUser(state, user) {
		state.user = user;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
