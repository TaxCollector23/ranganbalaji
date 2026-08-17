import type { NextConfig } from "next";

/**
 * Projects served natively under rangan.xyz/<slug> via a reverse proxy.
 * The URL stays on rangan.xyz and the real site is served through it (no
 * iframe). Each proxied site is served under /<slug> on its origin:
 *  - static GitHub Pages sites already live at /<slug> and carry a
 *    <base href="/<slug>/"> so their relative assets resolve under the slug;
 *  - Next.js apps are deployed with basePath: '/<slug>' so their /_next
 *    assets resolve under the slug.
 * Any slug NOT listed here falls through to the app/[slug] page.
 */
const proxies: { slug: string; origin: string }[] = [
  { slug: "claudekeeper", origin: "https://taxcollector23.github.io" },
  { slug: "unslopify", origin: "https://taxcollector23.github.io" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const rules = proxies.flatMap(({ slug, origin }) => [
      { source: `/${slug}`, destination: `${origin}/${slug}/` },
      { source: `/${slug}/:path*`, destination: `${origin}/${slug}/:path*` },
    ]);
    return { beforeFiles: rules };
  },
};

export default nextConfig;
