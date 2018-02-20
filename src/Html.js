import React, {Component} from 'react';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class Html extends Component {
  render() {

    const {children} = this.props;
    //console.log(this.props.children.props.children, this.props.children.props.children.fetchData);
    React.Children.forEach(this.props.children.props.children, child => {
      console.log('name =', child.type.fetchData);
    })
    //noinspection JSUnresolvedFunction
    //const content = component ? ReactDOM.renderToString(component) : '';
    //const head = Helmet.rewind();
    return (
      <html lang="en-us">
      <head>
        <meta charSet='utf-8'/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="referrer" content="unsafe-url"/>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      </head>
      <body>
      <div id="app">
        {children}
      </div>
      {/*<div id="content" dangerouslySetInnerHTML={{__html: content}}/>*/}
      {/*{process.env.NODE_ENV === 'development' ? <div id="devtools"/> : ''}*/}
      {/*<script dangerouslySetInnerHTML={{__html: `window.init=${serialize(store.getState())};`}} charSet="UTF-8"/>*/}
      <script src={`/public/js/bundle.js`} charSet="UTF-8" async="async"/>
      </body>
      </html>
    );
  }
}

export default Html