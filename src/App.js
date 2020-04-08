import React, { Component } from 'react'
import './App.css';
import TemplateGen from './TemplateGen'
import GitHubForkRibbon from 'react-github-fork-ribbon';
export class App extends Component {
  render() {
    return (
      <div>
        <GitHubForkRibbon
          href="https://github.com/p208p2002/docker-for-ai-dev"
          target="_blank"
          position="right">
          GitHub
        </GitHubForkRibbon>
        <TemplateGen />
      </div>
    )
  }
}

export default App
