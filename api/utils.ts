/* eslint-disable @typescript-eslint/no-explicit-any */
export function getPlainText(richTextArray: any[]): string {
  return (richTextArray ?? []).map((t) => t.plain_text).join("");
}

/* -------------------- Projects -------------------- */

export function mapDBToProject(page: any) {
  const props = page.properties;

  return {
    name: getPlainText(props["Project Name"]?.title) || "Untitled",

    pic:
      props["pic"]?.files?.[0]?.file?.url ??
      props["pic"]?.files?.[0]?.external?.url ??
      undefined,

    caseStudyId: getPlainText(props["Case Study Id"]?.rich_text) || undefined,

    whatIDid: getPlainText(props["What I did"]?.rich_text),

    type: props["Project Type"]?.select?.name ?? "",

    behance: props["Behance Link"]?.url ?? undefined,
    linkedinPost: props["Linkedin Post Link"]?.url ?? undefined,

    youtube: props["Youtube Link"]?.url ?? undefined,

    liveUrl: props["Deployed Link"]?.url ?? undefined,

    order: props["Order"]?.number ?? undefined,

    visibility: props["Visibility"]?.checkbox ?? false,
    mainpage: props["Main Page Case Study"]?.checkbox ?? false,
  };
}

/* ---------------- BIO ---------------- */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function mapBlocksToProfile(blocks: any[]) {
  const result: { blocks: any[] } = { blocks: [] };
  for (const block of blocks) {
    result.blocks.push(block);
  }
  return result;
}
