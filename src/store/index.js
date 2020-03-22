import Vuex from 'vuex'
import Vue from 'vue'
import { getUserProfile, getUserRepos } from "../api"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        search: "",
        repos: [],
        totalRepos: 0,
        page: 1,
        profileName: "",
        profileImage: "",
        loading: false,
        error: false,
        errorMessage: "",
        errorStatus: 0
    },
    mutations: {
        setSearch: (state, value) => state.search = value,
        cleanSearch: state => state.search = "",
        setRepos: (state, value) => state.repos = value,
        setProfileName: (state, value) => state.profileName = value,
        setProfileImage: (state, value) => state.profileImage = value,
        setTotalRepos: (state, value) => state.totalRepos = value,
        setLoading: (state, value) => state.loading = value,
        setPage: (state, value) => state.page = value,
        setError: (state, value) => state.error = value,
        setErrorMessage: (state, value) => state.errorMessage = value,
        setErrorStatus: (state, value) => state.errorStatus = value
    },
    actions: {
        onSearchRepo({ state }) {
            getUserProfile(state.search)
                .then(res => {
                    this.commit("setError", false)
                    this.commit("setProfileName", res.data.name || state.search)
                    this.commit("setProfileImage", res.data.avatar_url)
                    this.commit("setTotalRepos", res.data.public_repos)
                    this.commit("setLoading", true)
                    getUserRepos(state.search, 1)
                        .then(res => {
                            this.commit("setRepos", res.data)
                            this.commit("setLoading", false)
                        })
                        .catch(err => {
                            this.commit("setError", true)
                            this.commit("setErrorStatus", err.response.status)
                            if (err.response.status == 404)
                                this.commit("setErrorMessage", "Usuário não encontrado.")

                            if (err.response.status == 500)
                                this.commit("setErrorMessage", "Ocorreu algum problema no servidor.")
                        })
                })
                .catch(err => {
                    this.commit("setError", true)
                    this.commit("setErrorStatus", err.response.status)
                    if (err.response.status == 404)
                        this.commit("setErrorMessage", "Usuário não encontrado.")

                    if (err.response.status == 500)
                        this.commit("setErrorMessage", "Ocorreu algum problema no servidor.")
                })
        },
        onChangePage({ state }) {
            this.commit("setLoading", true)
            getUserRepos(state.search, state.page)
                .then(res => {
                    this.commit("setRepos", res.data)
                    this.commit("setLoading", false)
                })
                .catch(() => {
                    this.commit("setError", true)
                    this.commit("setLoading", false)
                })
        }
    },

})

export default store