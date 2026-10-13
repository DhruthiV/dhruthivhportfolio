/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProfileContent {
  blocks: any[];
}

let pendingRequest: Promise<ProfileContent> | null = null;

export const fallbackProfileContent: ProfileContent = {
  blocks: [
    {
      id: "fallback-bio",
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            plain_text: "Hi, I am Dhruthi, a Product Designer.",
            href: null,
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
          },
        ],
      },
    },
  ],
};

export function fetchProfileContent(): Promise<ProfileContent> {
  if (!pendingRequest) {
    pendingRequest = fetch("/api/notion-profile")
      .then((res) => {
        if (!res.ok) throw new Error(`Profile request failed: ${res.status}`);
        return res.json() as Promise<ProfileContent>;
      })
      .finally(() => {
        pendingRequest = null;
      });
  }
  return pendingRequest;
}
