import noImagePlaceholder from "../assets/no-image-placeholder.webp";

export const optimizeImage = (url: string): string => {
  if (!url) return noImagePlaceholder;

  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
