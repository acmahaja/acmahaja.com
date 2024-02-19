import type { FileCommit, GitHubEvent, LanguageStats, Repository } from '../types/githubTypes';
import axios from "axios";

export async function getLatestCommit(): Promise<GitHubEvent> {
    try {
        const { data } = await axios.get<GitHubEvent[]>(
            'https://api.github.com/users/acmahaja/events/public',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        const eventList: GitHubEvent[] = data;
        return eventList[0];
    } catch (error) {
        console.error('Error:', error);
    }
    throw new Error('Failed to get Repo');
}

export async function getRepoDetails(repoName: string): Promise<Repository> {
    try {
        const { data, status } = await axios.get<Repository>(
            `https://api.github.com/repos/${repoName}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status === 200) {
            return data;
        } else {
            console.log(`Failed to get Repo. Status: ${status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }

    throw new Error('Failed to get Repo languages');
}


export async function getLanguagesList(repoName: string): Promise<string[]> {
    try {
        const { data, status } = await axios.get<LanguageStats[]>(
            `https://api.github.com/repos/${repoName}/languages`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status === 200) {
            return Object.keys(data);
        } else {
            console.log(`Failed to get Repo languages. Status: ${status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }

    throw new Error('Failed to get Repo languages');
}

export async function getRepoREADME(ownerName: string, repoName: string): Promise<FileCommit> {
    try {
        const { data } = await axios.get<FileCommit>(
            `https://api.github.com/repos/${ownerName}/${repoName}/contents/README.md`,
            {
                headers: {
                    Accept: 'application/vnd.github.object+json',
                    "X-GitHub-Api-Version": "2022-11-28"
                },
            },
        );
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
    throw new Error('Failed to get Repo');
}



