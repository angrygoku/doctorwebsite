import { useEffect } from "react";
import { CLINIC, SITE_META } from "@/lib/clinic";
import type { Lang } from "@/lib/i18n";

type SeoHeadProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  lang?: Lang;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

const SeoHead = ({ title, description, keywords, image, lang = "hi" }: SeoHeadProps) => {
  useEffect(() => {
    const origin = window.location.origin;
    const currentUrl = window.location.href;
    const imageUrl = new URL(image ?? SITE_META.ogImagePath, origin).toString();
    const locale = lang === "en" ? "en_IN" : "hi_IN";

    document.title = title;
    document.documentElement.lang = lang;

    upsertMeta("meta[name='description']", { name: "description", content: description });
    upsertMeta("meta[name='author']", { name: "author", content: CLINIC.doctorName });
    upsertMeta("meta[name='theme-color']", { name: "theme-color", content: SITE_META.themeColor });

    if (keywords) {
      upsertMeta("meta[name='keywords']", { name: "keywords", content: keywords });
    }

    upsertMeta("meta[property='og:title']", { property: "og:title", content: title });
    upsertMeta("meta[property='og:description']", { property: "og:description", content: description });
    upsertMeta("meta[property='og:type']", { property: "og:type", content: "website" });
    upsertMeta("meta[property='og:image']", { property: "og:image", content: imageUrl });
    upsertMeta("meta[property='og:image:alt']", { property: "og:image:alt", content: SITE_META.ogImageAlt });
    upsertMeta("meta[property='og:url']", { property: "og:url", content: currentUrl });
    upsertMeta("meta[property='og:site_name']", { property: "og:site_name", content: SITE_META.siteName });
    upsertMeta("meta[property='og:locale']", { property: "og:locale", content: locale });

    upsertMeta("meta[name='twitter:card']", { name: "twitter:card", content: "summary_large_image" });
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title", content: title });
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description", content: description });
    upsertMeta("meta[name='twitter:image']", { name: "twitter:image", content: imageUrl });
    upsertMeta("meta[name='twitter:image:alt']", { name: "twitter:image:alt", content: SITE_META.ogImageAlt });
    upsertMeta("meta[name='twitter:url']", { name: "twitter:url", content: currentUrl });

    upsertLink("canonical", currentUrl);
    upsertLink("icon", SITE_META.iconPath);
  }, [title, description, keywords, image, lang]);

  return null;
};

export default SeoHead;
