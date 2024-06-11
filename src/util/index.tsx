import { compareDesc, parseISO } from "date-fns";

export const concateBooleanClass = (...classNames: string[]): string => classNames.filter(Boolean).join(" ");

export const sortBlogsByPublishedDate = (blogs: any[]): any[] => {
  return blogs
    .slice()
    .sort((a, b) => {
      const dateA = typeof a.publishedAt === 'string' ? parseISO(a.publishedAt) : null;
      const dateB = typeof b.publishedAt === 'string' ? parseISO(b.publishedAt) : null;

      // Handle cases where dateA or dateB is null
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      return compareDesc(dateA, dateB);
    });
};
