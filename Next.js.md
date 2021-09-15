# Next.js 
* Já tem SSR (Server side rendering)
* ótimo para SEO (search engine optimization)
* Serverside rendering  in first load, depois mescla de browser render e SSR
* file base routing
  * folder page

## Criando um app
`npx create-next-app`

caso o vscode esteja dando erro : `Cannot find module 'next/babel'`

criar um arquivo `.babelrc` na raiz do projeto com o seguinte código:
```json
{
  "presets": ["next/babel"],
  "plugins": []
}

```
e adicionar ao .eslintrc.json o "next-babel" a propriedade extends:
```json
{
  "extends": [..., "next/babel"]
}
```

## Routing