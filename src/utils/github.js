import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

export const fetchGitHubProfile = async (username) => {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${username}`);
    return response.data;
};

export const fetchGitHubRepos = async (username) => {
    // maximize per_page to get all (limit is 100 default, pagination needed for more)
    const response = await axios.get(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`);
    return response.data;
};
