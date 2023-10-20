import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from '@/store/modules/auth.js';

// Create a new store instance.
const store = createStore({
	modules: {
		auth,
	},
	plugins: [createPersistedState()],
});

export default store;