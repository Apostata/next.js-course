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

## Routing (file based routing)
Todas o roteamento é feito pela pasta `pages`
dentro da pasta pages pode haver outras pastas, o que vai sugnificar que tem sub-rotas:

pages/
  index.js    --> por padrão do next é a Home,                      url: {domain}/
  about.js    --> página about                                      url: {domain}/about
  products/   --> rota que contem subrotas       
    index.js  --> rota inicial de products                          url: {domain}/products
    [data].js --> rota dinâmica para pegar "data"                   url: {domain}/products/:data (exemplo: /products/1) 
  blog/
    [...data] --> rota dinâmica para pegar "tudo" após /blog        url: {domain}/blog/:data1/:data2/:data3 (exemplo: /blog/2021/19/16) gerá um array ["2021","19","16"]

### pegando parametros das rotas nas páginas
Para pegar os parâmetros das rotas passados para o componente, vamos importat o hook `useRouter` de `next/routes` e os dados estrão na propriedade `query` de router:
no caso do [...data] acima retornará um array

```jsx
import { useRouter } from "next/router";

export default function PortfolioProject() {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h1>Portfolio project of id: {projectId}</h1>
    </div>
  );
}
```

### usando links
para mudar de rotas e preservar o stado usa-se o `<Link />`
por padrão link ira dar um push nas rotas, adicionando no histórico, mas pode ser setado uma propriedade `replace` para que o histórico seja substituido ao invés de adicionado

```jsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page!</h1>
      <ul>
        <li>
          <Link replace href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link replace href="/clients">clients</Link>
        </li>
      </ul>
    </div>
  );
}

```

### Passando parametros nos links
```jsx
<Link href={`/clients/${id}`}>{name}</Link>

// ou

<Link
  href={{
    pathname: `/clients/[id]`,
    query: { id: id },
  }}
>{name}</Link>
```

### Navigating programmatically

```jsx
import { useRouter } from "next/router";
export default function ClientProjectsById() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div>
      <h1>List of projects by client, client id:{id}</h1>
      <button
        onClick={() => {
          router.push(`/clients/${id}/12`);
          // ou

           router.push({ 
             pathName:`/clients/[id]/[projectId]`
             query: { 
               id: id 
               projectId :12
              },
            });
        }}
      >
        Load Project 12
      </button>
    </div>
  );
}

```
### Custom 404 page
na pasta page, basta criar um arquivo de nome `404.js`

## Styling
nada de novo, usa css modules até então

## Adicionando layout ao app
o arquivo `_app.js` que fica na pasta `pages` é o arquivo que trata as rotas através de suas props, seria o equivalente ao `BrowserRouter` do `react-router`. só que as rotas no next são definidas pelos demais arquivos na pasta `pages`

para adicionar um layout envolvendo cada rota, basta envolve-lo com o layout:

```tsx
import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

## Pre-render
### static generation
Gera em tempo de compilação uma versão estática do site para que os mecanismos de busca fiquem felizes, podem ser armazenadas no cache.
O cliente ou o robo ao entrar no site ve uma versão estática, já com conteúdo antes mesmo de o react entrar em ação no browser. Só então o next itilizará a técnica de `Hydrade` que é após o carregamento inicial do conteúdo estático, ele irá re-renderizar o site com a versão SPA e a partir dai o React assume

### sercer side rendering