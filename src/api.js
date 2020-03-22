import axios from 'axios'

const getUserProfile = username => {
    return axios.get(`https://api.github.com/users/${username}`)
}

const getUserRepos = (username, page) => {
    return axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=9`)
}

export { getUserProfile, getUserRepos }