import { fetchFeaturedRepos } from "./projectGithub";
import { getProjectGallery, type GalleryImage } from "./projectGallery";

const GITHUB_USERNAME = "uimp3";
const FEATURED_REPOS = [
  // "portfolio",
  "Retro-Car-Racing",
  "TaskManagerIA",
  "CanchasSinteticas",
  // "reto_unidad1_edwin_munoz",
];

export interface ProjectCardData {
  name: string;
  description: string;
  tags: string[];
  htmlUrl: string;
  gallery: GalleryImage[];
}

interface ProjectsLocale {
  descriptions: Record<string, string>;
}

/**
 * Single entry point for the Projects section's data: fetches the featured repos
 * and enriches each one with its description and screenshot gallery, ready to render.
 */
export const getProjectCards = async (locale: ProjectsLocale): Promise<ProjectCardData[]> => {
  const repos = await fetchFeaturedRepos(GITHUB_USERNAME, FEATURED_REPOS);

  return repos.map((repo) => {
    const tags = repo.topics.length ? repo.topics : repo.language ? [repo.language] : [];
    const description = locale.descriptions[repo.name] || repo.description || "";
    const gallery = getProjectGallery(repo.name, repo.name);

    return {
      name: repo.name,
      description,
      tags,
      htmlUrl: repo.html_url,
      gallery,
    };
  });
};
