import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { configSite } from "../config/configSite";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: configSite.site_title,
    description: configSite.site_description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
