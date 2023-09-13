## Architecture

- Approach#1

  <img width="1577" alt="Ekran Resmi 2023-09-13 03 00 48" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/2117db4f-e57b-4570-8e08-850028914ea9">

- Approach#2

  <img width="1479" alt="Ekran Resmi 2023-09-13 03 02 50" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/0de3385d-3c7a-483d-a056-cb8b3469b0a6">

  In theory this should speed up the process of running our users code because now we don't need to make that entire additional request

  Another big upside to this approach is that now it would be a user's machine, it would up to a user to reach out to NPM and download an individual file as opposed to having tons and tons of requests coming from our server.

  <img width="1576" alt="Ekran Resmi 2023-09-13 03 18 21" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/f3dfbe20-be29-421b-a65e-1518d394b3a5">

## Pros & Cons

- Remote

  - We can cache downloaded NPM modules to bundle code faster
  - Will work better for users with slow devices or limited internet connections

- Local

  - Removes an extra request to the API server - faster code execution
  - We don't have to maintain an API server
  - Less complexity - no moving code back and forth

## Caching Layer

- IndexedDB

  - A browser API for storing data inside the browser
  - Can store large amounts of data
  - Data persists even when you close the browser
  - Data is organized by keys and values
      
  <img width="1456" alt="Ekran Resmi 2023-09-13 08 32 24" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/8d3cb797-b5e3-401c-b79e-c49e1e9bc936">

## Dependencies

[esbuild.github.io](https://esbuild.github.io/)

- react
- esbuild
- localforage (helper library for indexedDB)
