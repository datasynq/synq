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
