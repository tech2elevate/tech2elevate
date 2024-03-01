# SNT Mentoring Docs

## 🔧 Technologies

- [turborepo](https://turbo.build/repo)
  - high-performance build system for JavaScript and TypeScript code bases
- [typescript](https://www.typescriptlang.org)
  - javascript but with types

## 🚀 Apps

## 📦️ Libs

## 📋 Getting Started

First, you need to make sure that you're running the correct node version, by running the following command:

```
nvm use
```

or if you `fnm` use:

```
fnm use
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

| Command        | Action                                |
| :------------- | :------------------------------------ |
| `pnpm install` | Installs dependencies                 |
| `pnpm dev`     | Runs all the apps `dev` scripts       |
| `pnpm build`   | Runs all the apps `build` scripts     |
| `pnpm format`  | Validates formatting with `prettier`  |
| `pnpm lint`    | Runs all the apps/libs `lint` scripts |

_See [turborepo documentation](https://turbo.build/repo/docs/reference/command-line-reference) for any other available commands_

## 🐳 Docker
