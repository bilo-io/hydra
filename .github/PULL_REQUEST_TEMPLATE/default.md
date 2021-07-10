# Pull Request Template

## Overview

- **Tasks**:
  - `INSERT`: [Link to Task / Issue]()
  - `INSERT`: [Multiple if required]()
- **Type**:
  - [ ] project
  - [ ] scaffolding
  - [ ] feature
  - [ ] polish
  - [ ] bugfix
  - [ ] prototype

### Summary

> `INSERT`: Brief summary of what the PR accomplishes
>
> - steps to reproduce scenario
> - things to look out for

<img
  alt="Gif-Sample"
  src="https://i.gifer.com/7HH3.gif"
  style="height: 10rem;"
/>

## Preview 👁

> - Attach screenshots of the relevant flows, and `.gif`s where animation communicates the changes better.
> - To create a `.gif` use suitable screen recording software (e.g. **Quicktime** on `MacOS`) and use the service [https://ezgif.com/video-to-gif](https://ezgif.com/video-to-gif)

Example:

<img
  alt="Gif-Sample"
  src="https://i.gifer.com/S9OV.gif"
  style="width: 12rem;"
/>

## Changes

- [ ] Breaking changes to components / utils / pages, etc.
- [ ] New features in components / utils / pages, etc.
- [ ] Wrote test updates
- [ ] Visual changes
- [ ] Logical changes

<img
  alt="Changes-gif"
  src="https://i.gifer.com/Ny8a.gif"
  style="width: 12rem;"
/>

## Checklist ✅

> This is to make sure everything aligns, regarding quality, maintenance and testing

- [ ] Unit Tests (Jest)
- [ ] E2E Tests (Cypress)
- [ ] Visual Tests (Storybook)
- [ ] Documentation

<img
  alt="Gif-Sample"
  src="https://64.media.tumblr.com/bdf5101b8b35999e9a2054566d5c7a18/411f0535b47775b5-7d/s540x810/bc0dc2aa1c91c6b4a1ba2259782f9dfaa7708abe.gif"
  style="height: 12rem;"
/>

## Steps to reproduce / test PR

```sh
git checkout ${branch-name}
git pull
yarn
yarn start
yarn storybook
```
