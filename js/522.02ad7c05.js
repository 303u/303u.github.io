"use strict";(globalThis["webpackChunkfrontend"]=globalThis["webpackChunkfrontend"]||[]).push([[522],{2522:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var a=t(6252),u=t(9963);const l=(0,a.Uk)("选中可保持七天登录身份，多屏共享一个账号"),s=(0,a.Uk)("登录");function i(e,r,t,i,n,o){const m=(0,a.up)("n-input"),v=(0,a.up)("n-form-item-row"),p=(0,a.up)("n-switch"),f=(0,a.up)("n-text"),h=(0,a.up)("n-popover"),d=(0,a.up)("n-button"),w=(0,a.up)("n-slider"),y=(0,a.up)("n-form");return(0,a.wg)(),(0,a.j4)(y,{model:n.form,rules:n.rules,onKeyup:(0,u.D2)(o.submit,["enter"])},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{label:"邮箱账号",path:"username"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{clearable:"",value:n.form.username,"onUpdate:value":r[0]||(r[0]=e=>n.form.username=e),type:"email",maxlength:"64"},null,8,["value"])])),_:1}),(0,a.Wm)(v,{label:"账号密码",path:"password"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{clearable:"",value:n.form.password,"onUpdate:value":r[1]||(r[1]=e=>n.form.password=e),type:"password","show-password-on":"click",maxlength:"24","input-props":{autocomplete:!1}},null,8,["value"])])),_:1}),(0,a.Wm)(v,{label:"保持登录"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{trigger:"hover"},{trigger:(0,a.w5)((()=>[(0,a.Wm)(p,{value:n.keep,"onUpdate:value":r[2]||(r[2]=e=>n.keep=e)},null,8,["value"])])),default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[l])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d,{type:"primary",onClick:o.submit,block:""},{default:(0,a.w5)((()=>[s])),_:1},8,["onClick"]),n.verify.count>1?((0,a.wg)(),(0,a.j4)(v,{key:0,label:"人机验证",path:"verify"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{value:n.verify.value,"onUpdate:value":r[3]||(r[3]=e=>n.verify.value=e),marks:n.verify.key,range:""},null,8,["value","marks"])])),_:1})):(0,a.kq)("",!0)])),_:1},8,["model","rules","onKeyup"])}t(9669);const n={data(){let e={value:[0,0],key:{},count:0};return{verify:e,keep:!1,form:{username:"user@root.com",password:"123456"},rules:{verify:{required:!0,message:"范围不正确",trigger:["input","blur"],validator(){return e.value[0]in e.key&&e.value[1]in e.key&&e.value[0]!=e.value[1]}},username:{required:!0,message:"邮箱格式不匹配",trigger:["input","blur"],validator(e,r){return/^\w{2,32}\@\w+\.\w+$/.test(r)}},password:{required:!0,message:"6-24位任意字符",trigger:["input","blur"],validator(e,r){return r.length>5}}}}},methods:{submit(){if(/^\w{2,32}\@\w+\.\w+$/.test(this.form.username)&&this.form.password.length>5&&!(this.verify.count>1));else if(!(/^\w{2,32}\@\w+\.\w+$/.test(this.form.username)&&this.form.password.length>5&&this.verify.value[0]in this.verify.key&&this.verify.value[1]in this.verify.key&&this.verify.value[0]!=this.verify.value[1])){this.verify.count++,this.verify.key={};let e=Math.ceil(100*Math.random());this.verify.key[e]=e,e=Math.ceil(100*Math.random());while(e in this.verify.key)e=Math.ceil(100*Math.random());return void(this.verify.key[e]=e)}(this.keep?localStorage:sessionStorage).token=!0,this.form.username=this.form.password="",this.$router.push("/")}}};var o=t(3744);const m=(0,o.Z)(n,[["render",i]]),v=m}}]);
//# sourceMappingURL=522.02ad7c05.js.map