import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      docker: '',
      image: '',
      options: [],
      ports: [],
      codeServerPort: '-p 8080:8080',
      jupyterPort: '-p 8080:8080',
      sshPort: '-p 22:22',
      portingInputValue: ''
    }

    this.portingInput = React.createRef()
  }

  setDocker = (e) => {
    console.log(e.target.id)
    this.setState({
      docker: e.target.id
    })
  }

  setImage = (e) => {
    console.log(e.target.id)
    this.setState({
      image: e.target.id
    })
  }

  setOptions = (e) => {
    console.log(e.target.id, e.target.checked)
    let eleId = e.target.id
    let checked = e.target.checked
    let { options } = this.state
    if (checked) {
      options.push(eleId)
      this.setState({
        options
      })
    }
    else {
      options = options.filter((option) => {
        return !(option === eleId)
      })
      this.setState({
        options
      })
    }
  }

  addPort = () => {
    console.log(this.portingInput.current.value)
    let addPort = this.portingInput.current.value
    if (addPort === '' || typeof addPort === 'undefined') {
      return
    }
    let { ports } = this.state
    ports.push(`-p ${addPort}`)
    this.setState({
      ports,
      portingInputValue: ''
    })
  }

  rmPort = (port) => {
    console.log(port)
    let { ports } = this.state
    ports = ports.filter((p) => {
      return !(p === port)
    })
    this.setState({
      ports
    })
  }

  render() {
    let { docker, image, options, ports, sshPort, jupyterPort, codeServerPort } = this.state
    return (
      <div className="container">
        <h3>Dokcer for ai dev</h3>
        <h4>docker setting</h4>
        <div className="select-image">
          <div className="form-group row">
            <div className="col col-12">
              <button
                className="btn btn-sm btn-secondary"
                id="docker --gpus all"
                onClick={this.setDocker}
              >
                with GPU and docker 19.03+
            </button>
            </div>
            <div className="col col-12">
              <button
                className="btn btn-sm btn-secondary"
                id="nvidia-docker"
                onClick={this.setDocker}
              >
                with nvidia-docker
            </button>
            </div>
            <div className="col col-12">
              <button
                className="btn btn-sm btn-secondary"
                id="docker"
                onClick={this.setDocker}
              >
                only cpu
            </button>
            </div>
          </div>
        </div>


        <h4>select image</h4>
        <div className="select-image">
          <div className="form-group row">
            <div className="col col-12">
              <button
                className="btn btn-sm btn-secondary"
                id="p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode"
                onClick={this.setImage}
              >
                docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
            </button>
            </div>
            <div className="col col-12">
              <button
                className="btn btn-sm btn-secondary"
                id="p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode"
                onClick={this.setImage}
              >
                docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode
            </button>
            </div>
          </div>
        </div>

        <h4>container options</h4>
        <div className="container-options">
          <div className="form-group">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="-itd"
                onChange={this.setOptions}
              />
              <label className="form-check-label">-itd</label>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="--restart=always"
                onChange={this.setOptions}
              />
              <label className="form-check-label">--restart=always</label>
            </div>
          </div>
        </div>

        <h4>service port</h4>
        <div className="func-port">
          <div className="form-group">
            <p>code server(web vscode)
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    codeServerPort: `-p ${e.target.value}:8080`
                  })
                }}
              /></p>
            <p>jupyter
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    jupyterPort: `-p ${e.target.value}:8888`
                  })
                }}
              /></p>
            <p>ssh
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    sshPort: `-p ${e.target.value}:22`
                  })
                }}
              /></p>
          </div>
        </div>

        <h4>porting</h4>
        <div className="porting">
          <div className="form-group">
            <input
              ref={this.portingInput}
              value={this.state.portingInputValue}
              onChange={(e) => {
                this.setState({
                  portingInputValue: e.target.value
                })
              }}
              type="text"
              placeholder="EXTERNAL_PORT:INTERNAL_PORT"
              className="form-control" />
            <ul>
              {ports.map((port, i) => {
                return <li key={i}>{port} <span onClick={() => this.rmPort(port)} className="btn btn-sm btn-danger">x</span></li>
              })}
            </ul>
            <div
              className="btn btn-primary"
              onClick={this.addPort}
            >ADD</div>
          </div>
        </div>

        <h4>cmd</h4>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            onChange={()=>{}}
            value={
            `${docker} ${options.join(' ')} ${ports.join(' ')} ${sshPort} ${jupyterPort} ${codeServerPort} ${image}`
          } />
        </div>
      </div>
    )
  }
}

export default App

