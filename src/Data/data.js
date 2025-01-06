import { cache } from "react";

const revalidate = 60;
const MINUTES_5 = 60 * 5;
const HOURS_1 = 60 * 60;
const HOURS_12 = 60 * 60 * 12;

export async function getRepos(username) {
  const res = await fetch(
    "https://api.github.com/users/" + username + "/repos",
    {
      headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
      next: { revalidate: MINUTES_5 },
    }
  );
  if (!res.ok) {
    console.error("GitHub API returned an error.", res.status, res.statusText);
    return [];
  }
  return res.json();
}

export const getPinnedRepos = cache(async (username) => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
    body: JSON.stringify({
      query: `{user(login: "${username}") {pinnedItems(first: 6, types: REPOSITORY) {nodes {... on Repository {name}}}}}`,
    }),
  });
  if (!res.ok) {
    console.error(
      "GitHub graphql returned an error.",
      res.status,
      res.statusText
    );
    return [];
  }
  const pinned = await res.json();
  const names = pinned.data.user.pinnedItems.nodes.map((node) => node.name);
  return names;
});
