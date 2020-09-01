(this["webpackJsonpdocker-for-ai-dev"]=this["webpackJsonpdocker-for-ai-dev"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=(a(14),a(1)),s=a(2),i=a(3),m=a(4),u=(a(15),a(16),a(7)),d=a.n(u),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setDocker=function(e){console.log(e.target.id),n.setState({docker:e.target.id})},n.setImage=function(e){console.log(e.target.id),n.setState({image:e.target.id})},n.setOptions=function(e){console.log(e.target.id,e.target.checked);var t=e.target.id,a=e.target.checked,c=n.state.options;a?(c.push(t),n.setState({options:c})):(c=c.filter((function(e){return!(e===t)})),n.setState({options:c}))},n.addPort=function(){console.log(n.portingInput.current.value);var e=n.portingInput.current.value;if(""!==e&&"undefined"!==typeof e){var t=n.state.ports;t.push("-p ".concat(e)),n.setState({ports:t,portingInputValue:""})}},n.rmPort=function(e){console.log(e);var t=n.state.ports;t=t.filter((function(t){return!(t===e)})),n.setState({ports:t})},n.state={docker:"docker run --gpus all",image:"p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode",options:["-itd"],ports:[],codeServerPort:"-p 8080:8080",jupyterPort:"-p 8888:8888",sshPort:"-p 22:22",portingInputValue:"",name:"",password:""},n.portingInput=c.a.createRef(),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.docker,n=t.image,r=t.options,o=t.ports,l=t.sshPort,s=t.jupyterPort,i=t.codeServerPort,m=t.name,u=t.password,p="".concat(a," ").concat(r.join(" ")," ").concat(o.join(" ")," ").concat(l," ").concat(s," ").concat(i," ").concat(m," ").concat(u," ").concat(n);return c.a.createElement("div",{id:"TemplateGen",className:"container"},c.a.createElement("h3",{className:"text-center"},"Dokcer for ai dev"),c.a.createElement("h4",null,"Docker setting"),c.a.createElement("div",{className:"docker-setting"},c.a.createElement("div",{className:"form-group row",style:{marginLeft:0}},c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-sm ".concat("docker run --gpus all"===a?"btn-outline-secondary":"btn-secondary "),id:"docker run --gpus all",onClick:this.setDocker},"with GPU and docker 19.03+")),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-sm ".concat("nvidia-docker run"===a?"btn-outline-secondary":"btn-secondary "),id:"nvidia-docker run",onClick:this.setDocker},"with nvidia-docker")),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-sm ".concat("docker run"===a?"btn-outline-secondary":"btn-secondary "),id:"docker run",onClick:this.setDocker},"only cpu")))),c.a.createElement("h4",null,"Select image"),c.a.createElement("div",{className:"select-image"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{className:"btn btn-sm ".concat("p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode"===n?"btn-outline-secondary":"btn-secondary "),id:"p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode",onClick:this.setImage},"docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode")),c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{className:"btn btn-sm ".concat("p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode"===n?"btn-outline-secondary":"btn-secondary "),id:"p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode",onClick:this.setImage},"docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode")))),c.a.createElement("h4",null,"Container options"),c.a.createElement("div",{className:"container-options"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"-itd",defaultChecked:!0,onChange:this.setOptions}),c.a.createElement("label",{className:"form-check-label"},"-itd")),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"--restart=always",onChange:this.setOptions}),c.a.createElement("label",{className:"form-check-label"},"--restart=always")))),c.a.createElement("h4",null,"User account"),c.a.createElement("small",null,"this setting is for login the service, and will not be record by anyone"),c.a.createElement("br",null),c.a.createElement("small",null,"you can check my source code on ",c.a.createElement("a",{href:"https://github.com/p208p2002/docker-for-ai-dev/tree/site-src"},"github")),c.a.createElement("div",{className:"user-account"},c.a.createElement("div",{className:"form-group"},c.a.createElement("p",null,"User name",c.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){e.setState({name:'-e"NAME"='.concat(t.target.value)})}})),c.a.createElement("p",null,"Password",c.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){e.setState({password:'-e"PASSWORD"='.concat(t.target.value)})}})))),c.a.createElement("h4",null,"Service port"),c.a.createElement("div",{className:"func-port"},c.a.createElement("div",{className:"form-group"},c.a.createElement("p",null,"code server(web vscode)",c.a.createElement("input",{defaultValue:8080,type:"text",className:"form-control",onChange:function(t){e.setState({codeServerPort:"-p ".concat(t.target.value,":8080")})}})),c.a.createElement("p",null,"jupyter",c.a.createElement("input",{defaultValue:8888,type:"text",className:"form-control",onChange:function(t){e.setState({jupyterPort:"-p ".concat(t.target.value,":8888")})}})),c.a.createElement("p",null,"ssh",c.a.createElement("input",{defaultValue:22,type:"text",className:"form-control",onChange:function(t){e.setState({sshPort:"-p ".concat(t.target.value,":22")})}})))),c.a.createElement("h4",null,"Porting"),c.a.createElement("div",{className:"porting"},c.a.createElement("div",{className:"form row"},c.a.createElement("div",{className:"form-group col-10 col-md-6"},c.a.createElement("input",{ref:this.portingInput,value:this.state.portingInputValue,onChange:function(t){e.setState({portingInputValue:t.target.value})},type:"text",placeholder:"EXTERNAL_PORT:INTERNAL_PORT",className:"form-control"}),c.a.createElement("ul",null,o.map((function(t,a){return c.a.createElement("li",{key:a},t," ",c.a.createElement("span",{onClick:function(){return e.rmPort(t)},className:"btn btn-sm btn-danger"},"x"))})))),c.a.createElement("div",{className:"form-group col-2"},c.a.createElement("div",{className:"btn btn btn-primary w-100 ",onClick:this.addPort},"add porting")))),c.a.createElement("h4",null,"Docker run"),c.a.createElement("div",{className:"form row"},c.a.createElement("div",{className:"form-group col-10 col-md-6"},c.a.createElement("input",{type:"text",className:"form-control",onChange:function(){},value:p})),c.a.createElement("div",{className:"form-group col-2"},c.a.createElement(d.a,{className:"btn btn btn-success w-100","data-clipboard-text":p},"copy to clipboard"))))}}]),a}(n.Component),f=a(8),h=a.n(f),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(h.a,{href:"https://github.com/p208p2002/docker-for-ai-dev",target:"_blank",position:"right"},"GitHub"),c.a.createElement(p,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.09ba0c59.chunk.js.map