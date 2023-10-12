> ## Twimbit frontend orientation dated: 09-10-23

1. clone the repo
2. navigate to twimbit-dummy 

```
npm install
```

3. make sure to create a .env.local under frontend-orientation dir

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

4. start the dev server

```
nx serve frontend-orientation
```


> An important caveat

- getServerSideProps (SSR) & getStaticSideProps/generation (SSG) does not have access to the apollo instance defined on client

- hence whenever any page is using SSR or SSG they must have a seprate apollo client instance other than the global one that encapsulates the entire App reff: https://stackoverflow.com/questions/67163527/does-usequery-run-on-server-side-rendering

