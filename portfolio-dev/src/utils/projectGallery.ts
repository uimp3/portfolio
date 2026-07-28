export interface GalleryImage {
  src: string;
  alt: string;
}

/**
 * Maps a GitHub repo name to the folder name used under src/assets/projects/.
 * Add an entry here whenever a repo's screenshot folder doesn't match its repo name.
 */
export const PROJECT_FOLDER_MAP: Record<string, string> = {
  portfolio: "Portfolio",
  "Retro-Car-Racing": "RetroCarRacing",
  TaskManagerIA: "TaskManagerIA",
  CanchasSinteticas: "CanchasSinteticas",
  reto_unidad1_edwin_munoz: "RetoUnidad1",
};

export const humanize = (name: string) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

// Eagerly loaded once per build; every gallery lookup filters this in-memory map
// instead of hitting the filesystem again.
const projectAssetModules = import.meta.glob(
  "../assets/projects/*/*.{png,jpg,jpeg,webp,avif}",
  { eager: true }
) as Record<string, unknown>;

const toAssetSrc = (asset: unknown): string => {
  if (typeof asset === "string") {
    return asset;
  }

  if (asset && typeof asset === "object") {
    const candidate = asset as {
      src?: unknown;
      default?: unknown;
    };

    if (typeof candidate.src === "string") {
      return candidate.src;
    }

    if (typeof candidate.default === "string") {
      return candidate.default;
    }

    if (candidate.default && typeof candidate.default === "object") {
      const defaultCandidate = candidate.default as { src?: unknown };
      if (typeof defaultCandidate.src === "string") {
        return defaultCandidate.src;
      }
    }
  }

  return "";
};

/**
 * Resolves the ordered screenshot gallery for a given repo, using PROJECT_FOLDER_MAP
 * to find its assets folder when the repo name and folder name differ.
 */
export const getProjectGallery = (repoName: string, projectName: string): GalleryImage[] => {
  const folderName = PROJECT_FOLDER_MAP[repoName] || repoName;
  const folderMarker = `/projects/${folderName}/`;

  return Object.entries(projectAssetModules)
    .filter(([path]) => path.includes(folderMarker))
    .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
    .map(([, asset], index) => ({
      src: toAssetSrc(asset),
      alt: `${humanize(projectName)} screenshot ${index + 1}`,
    }))
    .filter((image) => Boolean(image.src));
};
