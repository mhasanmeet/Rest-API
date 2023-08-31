## Rest API mistakes and guideline

* Naming Conventions

> ❌ bad naming

```js

    // Don't use verbs
    router.get("/getPosts", (req, res) =>{})

    // Split to use params
    router.get("/postsById", (req, res) =>{})

    // Use Version
    router.get("/postsByIdV1", (req, res) =>{})
    router.get("/posts-ByIdv1", (req, res) =>{})

```

