/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="node" />

import { getPageBlocks } from "./client.js";
import { mapBlocksToProfile } from "./utils.js";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const pageId = process.env.NOTION_PAGE_ID!;

    // handler
    const data = await getPageBlocks(pageId);
    const profile = mapBlocksToProfile(data.results);

    if (!profile.blocks.length) {
      return res.status(404).json({ error: "No bio_summary content found." });
    }

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    return res.status(200).json(profile);
  } catch (err: any) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
