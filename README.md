BIG NOTICE: this is a work in progress library, not ready for any serious use, and is only in proof of concept stages. A short white paper (or something to that effect) will be forth coming.

<img src="https://user-images.githubusercontent.com/111424/87494540-84508c80-c60c-11ea-9bec-324113af109a.png" alt="A word and warning." style="max-width:150px;"/>

# synq

CLI Tool for standardizing and sharing distributed data.

## TODO:

- [ ] Figure out API resolution / index / plugin pattern
- [ ] Model this TypeScript module: https://github.com/lukeed/typescript-module
- [ ] 
- [ ] 
- [ ] 
- [ ] 

## WIP Examples

<!-- TODO: throw some tests around all these!!! -->

```
synq init
synq remote add hn https://hn.algolia.com/api/v1/
synq remote add api https://api.v2.validic.com/
synq remote -l
synq remote rename hn hn-algolia
synq remote remove hn
synq db create hn
synq db create star-wars
synq db -l
synq db destroy hn
synq db destroy hn --skip-query
```

<!-- hn https://hn.algolia.com/api/v1/
https://hn.algolia.com/api/v1/search_by_date?tags=author_whoishiring
 -->
