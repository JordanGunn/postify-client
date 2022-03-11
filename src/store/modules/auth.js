import axios from 'axios';
const state = {
    user: null,
    posts: null,
};
const getters = {
    isAuthenticated: state => !!state.user,
    StatePosts: state => state.posts,
    StateUser: state => state.user,
};

const actions = {

    /**
     * Get registration data and send to /register endpoint.
     *
     * @param dispatch          Send to another 'action'
     * @param form              Registration form.
     * @returns {Promise<void>} Promise to login.
     */
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },

    /**
     * Send post request to /login.
     *
     * @param commit            Change state.
     * @param User              The user to login.
     * @returns {Promise<void>} Promise to change user state.
     */
    async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit('setUser', User.get('username'))
    },

    /**
     * Execute post request.
     *
     * @param dispatch          Send to another 'action'.
     * @param post              Post data.
     * @returns {Promise<void>} Promise to dispatch to new action.
     */
    async CreatePost({dispatch}, post) {
        await axios.post('post', post)
        await dispatch('GetPosts')
    },

    /**
     * Send GET requests to /posts to fetch posts.
     *
     * @param commit            Change axios state.
     * @returns {Promise<void>} Promise to change axios state.
     */
    async GetPosts({ commit }) {
        let response = await axios.get('posts')
        commit('setPosts', response.data)
    },

    /**
     * Perform logout of user.
     *
     * @param commit            Change axios state.
     * @returns {Promise<void>} Promise to change axios state.
     */
    async LogOut({commit}) {
        let user = null
        commit('logout', user)
    }
};
const mutations = {

    /**
     * Change the user state.
     *
     * @param state     The state to change.
     * @param username  The username.
     */
    setUser(state, username) {
        state.user = username
    },

    /**
     * Change the user state.
     *
     * @param state     The state to change.
     * @param posts     The user session posts.
     */
    setPosts(state, posts){
        state.posts = posts
    },


    /**
     * Change clear the username and data.
     *
     * @param state     The state to change.
     */
    LogOut(state){
        state.user = null
        state.posts = null
    },
};
export default {
    state,
    getters,
    actions,
    mutations
};