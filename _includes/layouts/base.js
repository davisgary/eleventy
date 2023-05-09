import React from 'react';

function App({ metadata, title, description, content, collections }) {
  return (
    <html lang={metadata.language}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || metadata.title}</title>
        <meta name="description" content={description || metadata.description} />

        {/* Atom and JSON feeds included by default */}
        <link rel="alternate" href="/feed/feed.xml" type="application/atom+xml" title={metadata.title} />
        <link rel="alternate" href="/feed/feed.json" type="application/json" title={metadata.title} />

        {/* Uncomment this if you’d like folks to know that you used Eleventy to build your site! */}
        {/* <meta name="generator" content={eleventy.generator} /> */}

        {/*
        CSS bundles are provided via the `eleventy-plugin-bundle` plugin:
        1. You can add to them using `{% css %}`
        2. You can get from them using `{% getBundle "css" %}` or `{% getBundleFileUrl "css" %}`
        3. You can do the same for JS: {% js %}{% endjs %} and <script>{% getBundle "js" %}</script>
        4. Learn more: https://github.com/11ty/eleventy-plugin-bundle
        */}

        {/* Add an arbitrary string to the bundle */}
        <style>{`* { box-sizing: border-box; }`}</style>
        {/* Add the contents of a file to the bundle */}
        <link rel="stylesheet" href="/public/css/index.css" />

        {/* Or add from node_modules */}
        {/* <link rel="stylesheet" href="/node_modules/prismjs/themes/prism-okaidia.css" /> */}

        {/* Render the CSS bundle using Inlined CSS (for the fastest site performance in production) */}
        {/* <style>{getBundle("css")}</style> */}
      </head>
      <body>
        <a href="#skip" className="visually-hidden">
          Skip to main content
        </a>

        <header>
          <a href="/" className="home-link">
            {metadata.title}
          </a>

          {/* Read more about `eleventy-navigation` at https://www.11ty.dev/docs/plugins/navigation/ */}
          <nav>
            <h2 className="visually-hidden">Top level navigation menu</h2>
            <ul className="nav">
              {collections.all.map((entry) => (
                <li className="nav-item" key={entry.url}>
                  <a href={entry.url} aria-current={entry.url === page.url ? "page" : undefined}>
                    {entry.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="skip">{content}</main>

        <footer></footer>

        {/* Current page: {page.url} */}
      </body>
    </html>
  );
}

export default App;
