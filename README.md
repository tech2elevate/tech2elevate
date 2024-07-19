# tech2elevate Mentoring Docs

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
| `pnpm build`   | Build your production site to `./.next/`                                            |
| `pnpm preview` | Preview your build locally, before deploying. Requires `pnpm build` to be ran first |
| `pnpm format`  | Validates formatting with prettier                                                  |

## 🐳 Docker

_Before running `docker`, it must be installed, you can use [tgt-docker_helper_scripts](https://git.target.com/toolshed/docker-helper-scripts#docker-helper-scripts) to install [colima](https://github.com/abiosoft/colima)_

To preview the deployable docker container, you can start by building the `Dockerfile`, by running the following:

```
docker build . -t tech2elevate/mentoringdocs
```

Then to run the previously built docker container, you can run the following

```
docker run -p 3000:3000 tech2elevate/mentoringdocs
```

And you can view the container running at http://0.0.0.0:3000 🚀

## 🤨 FAQ

1. After running `pnpm dev`, the search is not working as expected, is something wrong?
   - The search is mostly dependent on Next.JS's static output which is not available when running `pnpm dev`. To test the search feature locally, you can run `pnpm build` and then `pnpm preview` which will allow you to see that the search is working as expected.
2. After running `pnpm dev`, the website is missing styles?
   - The most likely culprit is that the cache is wrong so you can run `pnpm clean` and try `pnpm dev` again.
3. I want to change the port for `pnpm dev`?
   - You can pass `-p [port]`, for example `pnpm dev -p 5000`
