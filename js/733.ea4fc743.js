"use strict";(globalThis["webpackChunkfrontend"]=globalThis["webpackChunkfrontend"]||[]).push([[733],{6733:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var u=t(6252);const a=(0,u.Uk)("获取"),r=(0,u.Uk)("提交");function n(e,l,t,n,o,s){const i=(0,u.up)("n-input"),d=(0,u.up)("n-form-item-row"),p=(0,u.up)("n-button"),m=(0,u.up)("n-input-group"),h=(0,u.up)("n-form");return(0,u.wg)(),(0,u.j4)(h,{model:o.u,rules:o.rules},{default:(0,u.w5)((()=>[(0,u.Wm)(d,{label:"邮箱账号",path:"email"},{default:(0,u.w5)((()=>[(0,u.Wm)(i,{clearable:"",value:o.u.email,"onUpdate:value":l[0]||(l[0]=e=>o.u.email=e),maxlength:"20"},null,8,["value"])])),_:1}),(0,u.Wm)(d,{label:"新密码",path:"password"},{default:(0,u.w5)((()=>[(0,u.Wm)(i,{clearable:"",type:"password","show-password-on":"click",value:o.u.password,"onUpdate:value":l[1]||(l[1]=e=>o.u.password=e),maxlength:"24","input-props":{autocomplete:!1}},null,8,["value"])])),_:1}),(0,u.Wm)(d,{label:"验证码",path:"token",maxlength:"8"},{default:(0,u.w5)((()=>[(0,u.Wm)(m,null,{default:(0,u.w5)((()=>[(0,u.Wm)(i,{clearable:"",value:o.u.token,"onUpdate:value":l[2]||(l[2]=e=>o.u.token=e)},null,8,["value"]),(0,u.Wm)(p,{onClick:s.recovery,disabled:!o.u.email},{default:(0,u.w5)((()=>[a])),_:1},8,["onClick","disabled"])])),_:1})])),_:1}),(0,u.Wm)(p,{block:"",onClick:s.submit,type:"primary"},{default:(0,u.w5)((()=>[r])),_:1},8,["onClick"])])),_:1},8,["model","rules"])}var o=t(9669),s=t.n(o);const i={data(){return{code:null,current:0,u:{email:null,token:null,password:null},rules:{email:{required:!0,message:"邮箱格式不匹配",trigger:["input","blur"],validator(e,l){return/^\w{2,32}\@\w+\.\w+$/.test(l)}},password:{required:!0,message:"6-24位任意字符",trigger:["input","blur"],validator(e,l){return l.length>5}},token:{required:!0,message:"8位长度",trigger:["input","blur"],validator(e,l){return 8==l.length}}}}},methods:{recovery(){/^\w{2,32}\@\w+\.\w+$/.test(this.u.email)&&s().post("/login/r/"+this.u.email).then((e=>{this.code=e.data.code}))},submit(){8==this.u.token.length&&/^\w{2,32}\@\w+\.\w+$/.test(this.u.email)&&this.u.password.length>5&&s().post("/login/t/"+this.u.token,this.u,{headers:{code:this.code}}).then((()=>{this.$router.push({name:"login"})}))}}};var d=t(3744);const p=(0,d.Z)(i,[["render",n]]),m=p}}]);
//# sourceMappingURL=733.ea4fc743.js.map