import { useState, useEffect } from 'react';
import { fetchGitHubProfile, fetchGitHubRepos } from '../utils/github';

export const useGitHub = (username) => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const [profileData, reposData] = await Promise.all([
                    fetchGitHubProfile(username),
                    fetchGitHubRepos(username)
                ]);

                setProfile(profileData);
                setRepos(reposData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    return { profile, repos, loading, error };
};
