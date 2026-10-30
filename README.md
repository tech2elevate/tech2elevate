# tech2elevate Mentoring Docs

The source for [tech2elevate.com](https://tech2elevate.com). tech2elevate brings STEM education to high school students in underserved communities through one-on-one mentoring by volunteer tech professionals: an 8-week, 1-hour-per-week course in HTML, CSS, and JavaScript, started by a founding team at Target.

## 🗂️ Where things live

| Path                       | Content                                                                                        |
| :------------------------- | :--------------------------------------------------------------------------------------------- |
| `content/`                 | Site pages in MDX: home, curriculum, project, resources                                        |
| `public/images/`           | Images used by the pages                                                                       |
| `public/web-fundamentals/` | The Web Fundamentals Guide, a standalone interactive page served as-is at `/web-fundamentals/` |
| `starter/`                 | The student starter project; `pnpm build` zips it to `/downloads/tech2elevate-starter.zip`     |

## 🚀 Deployment

Every push to `main` builds the site and publishes it to GitHub Pages (see `.github/workflows/deploy.yml`).

## 🔧 Technologies

- [typescript](https://www.typescriptlang.org) for JavaScript but with types
- [nextra](https://nextra.site) for making websites with [Next.js](https://nextjs.org/) & [MDX](https://mdxjs.com/)

## 📋 Getting Started

First, you need to make sure that you're running the correct node version, by running the following command:

```
nvm use
```

Then make sure you have `pnpm` installed, by running the following command:

```
corepack enable && corepack prepare
```

Before running any command you need to install dependencies. Do this by running the following command:

```
pnpm install
```

Finally, you can now run everything, by running the following command:

```
pnpm dev
```

## 🧞 Commands

| Command        | Action                                                                              |
| :------------- | :---------------------------------------------------------------------------------- |
| `pnpm install` | Installs dependencies                                                               |
| `pnpm dev`     | Starts local dev server at next available port starting at `localhost:3000`         |
| `pnpm build`   | Build your production site to `./out/`                                              |
| `pnpm preview` | Preview your build locally, before deploying. Requires `pnpm build` to be ran first |
| `pnpm format`  | Validates formatting with prettier                                                  |

And you can view the container running at http://0.0.0.0:3000 🚀

## 🤨 FAQ

1. After running `pnpm dev`, the search is not working as expected, is something wrong?
   - The search is mostly dependent on Next.JS's static output which is not available when running `pnpm dev`. To test the search feature locally, you can run `pnpm build` and then `pnpm preview` which will allow you to see that the search is working as expected.
2. I want to change the port for `pnpm dev`?
   - You can pass `-p [port]`, for example `pnpm dev -p 5000`
