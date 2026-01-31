import { useState, useEffect } from 'react';
import { fetchGitHubProfile, fetchGitHubRepos } from '../utils/github';
import { fallbackProfile } from '../data/fallbackProfile';

export const useGitHub = (username) => {
    const [profile, setProfile] = useState(fallbackProfile);
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

                if (profileData) {
                    setProfile(profileData);
                } else {
                    setProfile(fallbackProfile);
                }

                if (reposData) {
                    setRepos(reposData);
                }
            } catch (err) {
                setError(err);
                setProfile(fallbackProfile);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    return { profile, repos, loading, error };
};
