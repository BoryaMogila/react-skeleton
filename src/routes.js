import React, {Component} from 'react'
import { renderRoutes } from 'react-router-config';
import {
  Route,
  Link
} from 'react-router-dom'

class BasicExample extends Component {
  static fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data fetched')
      resolve();
    }, 3000)
  });
  state = {mount: false}
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/app/">Home</Link></li>
          <li><Link to="/app/about">About</Link></li>
          <li><Link to="/app/topics">Topics</Link></li>
        </ul>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match, route }) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      {renderRoutes(route.routes)}
    </div>
  )
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
const NoTopic = () => (<h3>Please select a topic.</h3>)



export default [{
  component: BasicExample,
  path: '/app/',
  routes: [
    { path: '/app/',
      exact: true,
      component: Home
    },
    { path: '/app/about',
      component: About
    },
    { path: '/app/topics',
      component: Topics,
      routes: [
        { path: '/app/topics',
          exact: true,
          component: NoTopic
        },
        { path: '/app/topics/:topicId',
          component: Topic
        },
      ]
    }
  ]
}]