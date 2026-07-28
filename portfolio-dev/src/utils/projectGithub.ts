export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
}

/**
 * Fetches a user's repos and returns only the featured ones, in the given order.
 * Returns an empty array on any failure so the page never breaks because of GitHub's API.
 */
export const fetchFeaturedRepos = async (
  username: string,
  featuredRepoNames: string[]
): Promise<GithubRepo[]> => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers: { Accept: "application/vnd.github+json" } }
    );

    if (!res.ok) {
      return [];
    }

    const data: GithubRepo[] = await res.json();

    return featuredRepoNames
      .map((name) => data.find((repo) => repo.name.toLowerCase() === name.toLowerCase()))
      .filter((repo): repo is GithubRepo => Boolean(repo));
  } catch {
    return [];
  }
};
