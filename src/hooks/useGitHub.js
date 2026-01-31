import { useState, useEffect } from 'react';
import { fetchGitHubProfile, fetchGitHubRepos } from '../utils/github';
import { fallbackProfile } from '../data/fallbackProfile';

console.log('[useGitHub] Fallback profile loaded:', fallbackProfile);

export const useGitHub = (username) => {
    const [profile, setProfile] = useState(fallbackProfile);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('[useGitHub] Current profile state:', profile);

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

                console.log('[useGitHub] API Success - Profile data:', profileData);
                setProfile(profileData);
                setRepos(reposData);
            } catch (err) {
                console.log('[useGitHub] API Error, using fallback profile');
                setError(err);
                // Keep fallback profile data on error
                setProfile(fallbackProfile);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    return { profile, repos, loading, error };
};
