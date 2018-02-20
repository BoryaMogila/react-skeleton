import React from 'react';
import { matchRoutes, renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server';
import routes from '../../src/routes'
import StaticRouter from 'react-router-dom/StaticRouter';

export default async (ctx) => {
    const location = ctx.originalUrl;
    const components = matchRoutes(routes, location);
    await components[0].route.component.fetchData();
    let context = {};
  const content = renderToString(
    <StaticRouter location={location} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  console.log(content)
    ctx.body = '<html><head></head><body><div id="app"></div> <script src="/public/js/bundle.js"' +
      ' charSet="UTF-8" async="async"></script> </body></html>'

}