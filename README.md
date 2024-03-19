# tech2elevate Mentoring Docs

## 🔧 Technologies

- [typescript](https://www.typescriptlang.org)
  - javascript but with types

## 📋 Getting Started

First, you need to make sure that you're running the correct node version, by running the following command:

```
nvm use
```

Then make sure you have `pnpm` installed, by running the following command:

```
corepack enable && corepack prepare
```

Before running any command you need to install dependencies, by running the following command:

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
| `pnpm start`   | Preview your build locally, before deploying. Requires `pnpm build` to be ran first |
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
