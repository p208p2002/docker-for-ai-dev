import React, { Component } from 'react'
import './TemplateGen.css'
import Clipboard from 'react-clipboard.js';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      docker: 'docker run --gpus all',
      image: 'p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode',
      options: ['-itd'],
      ports: [],
      codeServerPort: '-p 8080:8080',
      jupyterPort: '-p 8888:8888',
      sshPort: '-p 22:22',
      portingInputValue: '',
      name: '',
      password: ''
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
    let { docker, image, options, ports, sshPort, jupyterPort, codeServerPort, name, password } = this.state
    let cmd = `${docker} ${options.join(' ')} ${ports.join(' ')} ${sshPort} ${jupyterPort} ${codeServerPort} ${name} ${password} ${image}`
    return (
      <div id="TemplateGen" className="container">
        <h3 className="text-center">Dokcer for ai dev</h3>
        <h4>Docker setting</h4>
        <div className="docker-setting">
          <div className="form-group row" style={{ marginLeft: 0 }}>
            <div>
              <button
                className={`btn btn-sm ${docker === 'docker run --gpus all' ? 'btn-outline-secondary' : 'btn-secondary '}`}
                id="docker run --gpus all"
                onClick={this.setDocker}
              >
                with GPU and docker 19.03+
            </button>
            </div>
            <div>
              <button
                className={`btn btn-sm ${docker === 'nvidia-docker run' ? 'btn-outline-secondary' : 'btn-secondary '}`}
                id="nvidia-docker run"
                onClick={this.setDocker}
              >
                with nvidia-docker
            </button>
            </div>
            <div>
              <button
                className={`btn btn-sm ${docker === 'docker run' ? 'btn-outline-secondary' : 'btn-secondary '}`}
                id="docker run"
                onClick={this.setDocker}
              >
                only cpu
            </button>
            </div>
          </div>
        </div>


        <h4>Select image</h4>
        <div className="select-image">
          <div className="form-group row">
            <div className="col-12">
              <button
                className={`btn btn-sm ${image === 'p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode' ? 'btn-outline-secondary' : 'btn-secondary '}`}
                id="p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode"
                onClick={this.setImage}
              >
                docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode
            </button>
            </div>
            <div className="col-12">
              <button
                className={`btn btn-sm ${image === 'p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode' ? 'btn-outline-secondary' : 'btn-secondary '}`}
                id="p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode"
                onClick={this.setImage}
              >
                docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode
            </button>
            </div>
          </div>
        </div>

        <h4>Container options</h4>
        <div className="container-options">
          <div className="form-group">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="-itd"
                defaultChecked={true}
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

        <h4>User account</h4>
        <small>this setting is for login the service, and will not be record by anyone</small>
        <br />
        <small>you can check my source code on <a href="https://github.com/p208p2002/docker-for-ai-dev/tree/site-src">github</a></small>
        <div className="user-account">
          <div className="form-group">
            <p>User name
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    name: `--name=${e.target.value} -e"NAME"=${e.target.value}`
                  })
                }}
              /></p>
            <p>Password
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    password: `-e"PASSWORD"=${e.target.value}`
                  })
                }}
              /></p>
          </div>
        </div>

        <h4>Service port</h4>
        <div className="func-port">
          <div className="form-group">
            <p>code server(web vscode)
              <input
                defaultValue={8080}
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
                defaultValue={8888}
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
                defaultValue={22}
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

        <h4>Porting</h4>
        <div className="porting">
          <div className="form row">
            <div className="form-group col-10 col-md-6">
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
            </div>
            <div className="form-group col-2">
              <div
                className="btn btn btn-primary w-100 "
                onClick={this.addPort}
              >add porting</div>
            </div>
          </div>
        </div>

        <h4>Docker run</h4>
        <div className="form row">
          <div className="form-group col-10 col-md-6">
            <input
              type="text"
              className="form-control"
              onChange={() => { }}
              value={cmd} />
          </div>
          <div className="form-group col-2">
            <Clipboard 
              onClick={()=>{
                if(password ==='' || name ===''){
                  alert('require Username and Password')
                }                
              }}
              className="btn btn btn-success w-100" 
              data-clipboard-text={cmd}
            >
              copy to clipboard
            </Clipboard>
          </div>
        </div>
      </div>
    )
  }
}

export default App

