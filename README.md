## Architecture

- Approach#1
  <img width="1577" alt="Ekran Resmi 2023-09-13 03 00 48" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/7f650e0b-df7f-4ef4-b5ff-cdb55af7de25">

- Approach#2
  <img width="1479" alt="Ekran Resmi 2023-09-13 03 02 50" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/6ab3c775-8180-4b2b-99b2-9c215e9c5a10">

  In theory this should speed up the process of running our users code because now we don't need to make that entire additional request

  Another big upside to this approach is that now it would be a user's machine, it would up to a user to reach out to NPM and download an individual file as opposed to having tons and tons of requests coming from our server.

  <img width="1576" alt="Ekran Resmi 2023-09-13 03 18 21" src="https://github.com/kushadige/dynamic-programming-environment/assets/101992799/de035bff-245a-443c-804a-4e35aeaacc20">

## Pros & Cons

- Remote

  - We can cache downloaded NPM modules to bundle code faster
  - Will work better for users with slow devices or limited internet connections

- Local

  - Removes an extra request to the API server - faster code execution
  - We don't have to maintain an API server
  - Less complexity - no moving code back and forth


## Dependencies

[esbuild.github.io](esbuild.github.io)

react  
esbuild
