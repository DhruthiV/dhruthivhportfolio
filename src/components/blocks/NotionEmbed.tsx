/* eslint-disable @typescript-eslint/no-explicit-any */

interface NotionEmbedProps {
  block: any;
}

function getEmbedDetails(rawUrl: string) {
  try {
    const url = new URL(rawUrl);

    if (!["https:", "http:"].includes(url.protocol)) {
      return null;
    }

    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    const path = url.pathname;

    // YouTube
    if (host === "youtu.be" || host.endsWith("youtube.com")) {
      let videoId: string | null = null;

      if (host === "youtu.be") {
        videoId = path.split("/").filter(Boolean)[0] ?? null;
      } else if (path === "/watch") {
        videoId = url.searchParams.get("v");
      } else if (/^\/(embed|shorts)\/[^/]+/.test(path)) {
        videoId = path.split("/")[2] ?? null;
      }

      if (videoId) {
        return {
          url: `https://www.youtube-nocookie.com/embed/${videoId}`,
          type: "video",
        };
      }

      if (path === "/playlist" && url.searchParams.get("list")) {
        return {
          url: `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(
            url.searchParams.get("list")!,
          )}`,
          type: "video",
        };
      }
    }

    // Spotify
    if (host === "open.spotify.com") {
      const parts = path.split("/").filter(Boolean);
      const types = ["track", "album", "playlist", "artist", "episode", "show"];
      const index = parts.findIndex((part) => types.includes(part));

      if (index !== -1 && parts[index + 1]) {
        return {
          url: `https://open.spotify.com/embed/${parts[index]}/${parts[index + 1]}`,
          type: "video",
        };
      }
    }

    // Behance project
    if (host === "behance.net") {
      const projectId = path.match(/\/gallery\/(\d+)/)?.[1];

      if (projectId) {
        return {
          url: `https://www.behance.net/embed/project/${projectId}`,
          type: "behance",
        };
      }
    }

    // Google Drive file preview
    if (host === "drive.google.com") {
      const fileId =
        path.match(/\/file\/d\/([^/]+)/)?.[1] ?? url.searchParams.get("id");

      if (fileId) {
        return {
          url: `https://drive.google.com/file/d/${fileId}/preview`,
          type: "document",
        };
      }
    }

    // Google Docs, Sheets and Slides
    if (host === "docs.google.com") {
      const match = path.match(
        /^\/(document|spreadsheets|presentation)\/d\/([^/]+)/,
      );

      if (match) {
        return {
          url: `https://docs.google.com/${match[1]}/d/${match[2]}/preview`,
          type: "document",
        };
      }
    }

    // Direct PDF URL
    if (/\.pdf$/i.test(path)) {
      return {
        url: rawUrl,
        type: "document",
      };
    }

    // Other links: attempt to embed the original URL.
    return {
      url: rawUrl,
      type: "other",
    };
  } catch {
    return null;
  }
}

export function NotionEmbed({ block }: NotionEmbedProps) {
  const rawUrl = block.embed?.url;

  if (!rawUrl) return null;

  const details = getEmbedDetails(rawUrl);

  if (!details) {
    return (
      <a
        href={rawUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="my-6 inline-block text-primary underline underline-offset-4"
      >
        Open the link
      </a>
    );
  }

  const isVideo = details.type === "video";
  const isBehance = details.type === "behance";
  const isDocument = details.type === "document";

  return (
    <div className="my-6 min-w-0 space-y-3 text-center">
      <div
        className={[
          "relative mx-auto min-w-0 overflow-hidden rounded-lg",
          isVideo ? "aspect-video" : "",
          isBehance ? "w-[404px] h-[316px]" : "",
          isDocument ? "h-[85vh] min-h-[600px]" : "",
          details.type === "other" ? "h-[85vh] min-h-[500px]" : "",
        ].join(" ")}
      >
        <iframe
          src={details.url}
          title="Embedded content"
          className="absolute inset-0 block h-full w-full border-0"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          scrolling="no"
        />
      </div>

      <a
        href={rawUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-primary underline underline-offset-4"
      >
        Didn't open? Click here
      </a>
    </div>
  );
}
