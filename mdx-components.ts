import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

import { ContactForm } from "./app/_components/ContactForm";
import { FeedbackForm } from "./app/_components/FeedbackForm";
import { FeedbackResults } from "./app/_components/FeedbackResults";

const themeComponents = getThemeComponents();

export function useMDXComponents(components: Record<string, unknown> = {}) {
  return {
    ...themeComponents,
    ContactForm,
    FeedbackForm,
    FeedbackResults,
    ...components,
  };
}
