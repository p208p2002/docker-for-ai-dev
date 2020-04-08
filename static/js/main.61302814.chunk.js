(this["webpackJsonpdocker-for-ai-dev"]=this["webpackJsonpdocker-for-ai-dev"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(14),a(1)),s=a(2),i=a(3),u=a(4),m=(a(15),a(16),a(7)),d=a.n(m),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setDocker=function(e){console.log(e.target.id),n.setState({docker:e.target.id})},n.setImage=function(e){console.log(e.target.id),n.setState({image:e.target.id})},n.setOptions=function(e){console.log(e.target.id,e.target.checked);var t=e.target.id,a=e.target.checked,r=n.state.options;a?(r.push(t),n.setState({options:r})):(r=r.filter((function(e){return!(e===t)})),n.setState({options:r}))},n.addPort=function(){console.log(n.portingInput.current.value);var e=n.portingInput.current.value;if(""!==e&&"undefined"!==typeof e){var t=n.state.ports;t.push("-p ".concat(e)),n.setState({ports:t,portingInputValue:""})}},n.rmPort=function(e){console.log(e);var t=n.state.ports;t=t.filter((function(t){return!(t===e)})),n.setState({ports:t})},n.state={docker:"docker run --gpus all",image:"p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode",options:["-itd"],ports:[],codeServerPort:"-p 8080:8080",jupyterPort:"-p 8888:8888",sshPort:"-p 22:22",portingInputValue:"",name:"",password:""},n.portingInput=r.a.createRef(),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.docker,n=t.image,c=t.options,o=t.ports,l=t.sshPort,s=t.jupyterPort,i=t.codeServerPort,u=t.name,m=t.password,p="".concat(a," ").concat(c.join(" ")," ").concat(o.join(" ")," ").concat(l," ").concat(s," ").concat(i," ").concat(u," ").concat(m," ").concat(n);return r.a.createElement("div",{id:"TemplateGen",className:"container"},r.a.createElement("h3",{className:"text-center"},"Dokcer for ai dev"),r.a.createElement("h4",null,"Docker setting"),r.a.createElement("div",{className:"docker-setting"},r.a.createElement("div",{className:"form-group row",style:{marginLeft:0}},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-sm ".concat("docker run --gpus all"===a?"btn-outline-secondary":"btn-secondary "),id:"docker run --gpus all",onClick:this.setDocker},"with GPU and docker 19.03+")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-sm ".concat("nvidia-docker run"===a?"btn-outline-secondary":"btn-secondary "),id:"nvidia-docker run",onClick:this.setDocker},"with nvidia-docker")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-sm ".concat("docker run"===a?"btn-outline-secondary":"btn-secondary "),id:"docker run",onClick:this.setDocker},"only cpu")))),r.a.createElement("h4",null,"Select image"),r.a.createElement("div",{className:"select-image"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"btn btn-sm ".concat("p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode"===n?"btn-outline-secondary":"btn-secondary "),id:"p208p2002/docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode",onClick:this.setImage},"docker-for-ai-dev:cu10.0-py36-tf1.14.0-torch1.3-jupyter-vscode")),r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"btn btn-sm ".concat("p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode"===n?"btn-outline-secondary":"btn-secondary "),id:"p208p2002/docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode",onClick:this.setImage},"docker-for-ai-dev:cu10.1-py36-tf2.1.0-torch1.4-jupyter-vscode")))),r.a.createElement("h4",null,"Container options"),r.a.createElement("div",{className:"container-options"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"-itd",defaultChecked:!0,onChange:this.setOptions}),r.a.createElement("label",{className:"form-check-label"},"-itd")),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"--restart=always",onChange:this.setOptions}),r.a.createElement("label",{className:"form-check-label"},"--restart=always")))),r.a.createElement("h4",null,"User account"),r.a.createElement("small",null,"this setting is for login the service, and will not be record by anyone"),r.a.createElement("br",null),r.a.createElement("small",null,"you can check my source code on ",r.a.createElement("a",{href:"https://github.com/p208p2002/docker-for-ai-dev/tree/site-src"},"github")),r.a.createElement("div",{className:"user-account"},r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"User name",r.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){e.setState({name:'-e"NAME"='.concat(t.target.value)})}})),r.a.createElement("p",null,"Password",r.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){e.setState({password:'-e"PASSWORD"='.concat(t.target.value)})}})))),r.a.createElement("h4",null,"Service port"),r.a.createElement("div",{className:"func-port"},r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"code server(web vscode)",r.a.createElement("input",{defaultValue:8080,type:"text",className:"form-control",onChange:function(t){e.setState({codeServerPort:"-p ".concat(t.target.value,":8080")})}})),r.a.createElement("p",null,"jupyter",r.a.createElement("input",{defaultValue:8888,type:"text",className:"form-control",onChange:function(t){e.setState({jupyterPort:"-p ".concat(t.target.value,":8888")})}})),r.a.createElement("p",null,"ssh",r.a.createElement("input",{defaultValue:22,type:"text",className:"form-control",onChange:function(t){e.setState({sshPort:"-p ".concat(t.target.value,":22")})}})))),r.a.createElement("h4",null,"Porting"),r.a.createElement("div",{className:"porting"},r.a.createElement("div",{className:"form row"},r.a.createElement("div",{className:"form-group col-10 col-md-6"},r.a.createElement("input",{ref:this.portingInput,value:this.state.portingInputValue,onChange:function(t){e.setState({portingInputValue:t.target.value})},type:"text",placeholder:"EXTERNAL_PORT:INTERNAL_PORT",className:"form-control"}),r.a.createElement("ul",null,o.map((function(t,a){return r.a.createElement("li",{key:a},t," ",r.a.createElement("span",{onClick:function(){return e.rmPort(t)},className:"btn btn-sm btn-danger"},"x"))})))),r.a.createElement("div",{className:"form-group col-2"},r.a.createElement("div",{className:"btn btn btn-primary w-100 ",onClick:this.addPort},"add porting")))),r.a.createElement("h4",null,"Docker run"),r.a.createElement("div",{className:"form row"},r.a.createElement("div",{className:"form-group col-10 col-md-6"},r.a.createElement("input",{type:"text",className:"form-control",onChange:function(){},value:p})),r.a.createElement("div",{className:"form-group col-2"},r.a.createElement(d.a,{onClick:function(){""!==m&&""!==u||alert("require Username and Password")},className:"btn btn btn-success w-100","data-clipboard-text":p},"copy to clipboard"))))}}]),a}(n.Component),f=a(8),h=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{href:"https://github.com/p208p2002/docker-for-ai-dev",target:"_blank",position:"right"},"GitHub"),r.a.createElement(p,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.61302814.chunk.js.map