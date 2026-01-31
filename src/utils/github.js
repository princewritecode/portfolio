import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

export const fetchGitHubProfile = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_BASE}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        return null;
    }
};

export const fetchGitHubRepos = async (username) => {
    try {
        // maximize per_page to get all (limit is 100 default, pagination needed for more)
        const response = await axios.get(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
};
