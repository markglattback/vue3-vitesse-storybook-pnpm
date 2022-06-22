# Storybook Webpack5 Issue Reproduction
Running `start-storybook` intermittently causes the following error:

```
node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[Error: UNKNOWN: unknown error, open 'C:\Projects\euronet\web\mono\vue\packages\portal\node_modules\.cache\storybook\dev-server\325c8f456729b912b0d2134054eb7448-41ac79ddc5290d504ad69ef1fe8200a7'] {
  errno: -4094,
  code: 'UNKNOWN',
  syscall: 'open',
  path: 'C:\\Projects\\euronet\\web\\mono\\vue\\packages\\portal\\node_modules\\.cache\\storybook\\dev-server\\325c8f456729b912b0d2134054eb7448-41ac79ddc5290d504ad69ef1fe8200a7'
}
```

The error can occur on first build or subsequent reloads after making file changes. It is usually resolvable by deleting the `.cache` folder and restarting the script, however this can happen multiple times within minutes and the time it takes to restart is unsustainable.

To reproduce, clone this repo and run the build using the steps below.

## Installation
```
cd packages/ui
npm i
```

## Run
```
npm run storybook
```
