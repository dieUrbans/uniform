import{r as t,h as a,H as r}from"./p-86e9747e.js";let o=class{constructor(a){t(this,a),this.position="top-right",this.type="default",this.notifications=[],this.intervalls=[],this.newNotification=null}notificationsChanged(t){this.position.includes("top")&&(this.notifications=[...this.notifications,t],setTimeout((()=>{this.notifications=this.notifications.slice(1,this.notifications.length),clearInterval(this.intervalls[0]),this.intervalls=this.intervalls.slice(1,this.intervalls.length),console.log(this.intervalls)}),t.delay)),this.position.includes("bottom")&&(this.notifications=[t,...this.notifications],setTimeout((()=>{this.notifications=this.notifications.slice(0,this.notifications.length-1),clearInterval(this.intervalls[0])}),t.delay)),console.log(this.intervalls)}showToast(t){this.show(t.detail.type,Object.assign({},t.detail))}clearToast(){this.notifications=[]}async show(t,a){this.type=t||"default",this.newNotification={title:a.title,message:a.message,delay:a.delay||3e3,action:a.buttons||[]}}async success(t,a,r){await this.show("success",{title:t,message:a,delay:r})}async error(t,a,r){await this.show("error",{title:t,message:a,delay:r})}async warning(t,a,r){await this.show("warning",{title:t,message:a,delay:r})}handleClose(t){this.notifications=this.notifications.filter((a=>a!==t))}render(){return a(r,null,a("div",{class:{[this.position]:!0,list:!0}},this.notifications.map((t=>a("div",{class:{notification:!0,[this.type]:!0}},a("div",{class:"close",onClick:()=>this.handleClose(t)},"×"),a("h1",null,t.title),t.message&&a("p",null,t.message))))))}static get watchers(){return{newNotification:["notificationsChanged"]}}};o.style=":host{display:block}.top-right{top:1.5rem;right:1.5rem}.top-left{top:1.5rem;left:1.5rem}.bottom-right{bottom:1.5rem;right:1.5rem}.bottom-left{bottom:1.5rem;left:1.5rem}.top-center{top:1.5rem;left:50%;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-x:-50%}.bottom-center{bottom:1.5rem;left:50%;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-x:-50%}.list{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;position:absolute;z-index:1999;grid-gap:0.5rem;gap:0.5rem}.notification{border-radius:1rem;border-style:solid;border-width:2px;max-width:20rem;overflow:hidden;position:relative;z-index:2000}.default{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.default:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}h1{font-weight:700;font-size:1rem;line-height:1.5rem;margin:0px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem}p{font-size:1rem;line-height:1.5rem;margin:0px;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.25rem}.duration{--tw-bg-opacity:1;background-color:rgba(248, 113, 113, var(--tw-bg-opacity));height:0.25rem}.close{cursor:pointer;font-size:1.125rem;line-height:1.75rem;position:absolute;top:0px;right:0.25rem;--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity))}";export{o as u_notification}