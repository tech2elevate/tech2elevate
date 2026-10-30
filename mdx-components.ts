import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

import { ContactForm } from "./app/_components/ContactForm";

const themeComponents = getThemeComponents();

export function useMDXComponents(components: Record<string, unknown> = {}) {
  return {
    ...themeComponents,
    ContactForm,
    ...components,
  };
}
