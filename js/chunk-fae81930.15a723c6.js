(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fae81930"],{"0b7a":function(e,t,n){"use strict";var s=n("44ae"),a=n.n(s);a.a},"2b5a":function(e,t,n){"use strict";var s=n("bf8b"),a=n.n(s);a.a},"44ae":function(e,t,n){},"4dc8":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"interact-with-contract-container"},[s("interface-container-title",{attrs:{title:e.$t("common.interactWcontract")}}),e.interact?s("div",{staticClass:"interact-div"},[s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("interface.readWriteC")))])])]),s("div",{staticClass:"address-container"},[s("div",{staticClass:"address"},[e._v("\n          "+e._s(e.$t("interface.contractAddr"))+": "+e._s(e.address)+"\n        ")]),s("div",{staticClass:"functions"},[s("currency-picker",{attrs:{currency:e.methods,token:!1,page:"interactWContract"},on:{selectedCurrency:e.selectFunction}})],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.selectedMethod.name,expression:"selectedMethod.name !== undefined"}],staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.selectedMethod.name))])])]),s("div",[!0===e.selectedMethod.constant&&0===e.selectedMethod.inputs.length?s("div",{staticClass:"the-form domain-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.result,expression:"result"}],attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:e.result},on:{input:function(t){t.target.composing||(e.result=t.target.value)}}})]):e._l(e.selectedMethod.inputs,function(t,n){return s("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.selectedMethod.inputs.length,expression:"selectedMethod.inputs.length !== 0"}],key:t.name+n,staticClass:"the-form domain-name"},["bool"===t.type?s("div",{staticClass:"bool-input"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("p",[e._v(e._s(e._f("capitalize")(t.name)))])])]),s("div",{staticClass:"bool-input-container"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.writeInputs[t.name],expression:"writeInputs[input.name]"}],attrs:{name:t.name,type:"radio"},domProps:{value:!0,checked:!0===e.writeInputs[t.name],checked:e._q(e.writeInputs[t.name],!0)},on:{change:function(n){e.$set(e.writeInputs,t.name,!0)}}}),s("label",{attrs:{for:t.name}},[e._v("true")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.writeInputs[t.name],expression:"writeInputs[input.name]"}],attrs:{name:t.name,type:"radio"},domProps:{value:!1,checked:!1===e.writeInputs[t.name],checked:e._q(e.writeInputs[t.name],!1)},on:{change:function(n){e.$set(e.writeInputs,t.name,!1)}}}),s("label",{attrs:{for:t.name}},[e._v("false")])])])]):"checkbox"===e.checkType(t.type)?s("input",{directives:[{name:"model",rawName:"v-model",value:e.writeInputs[t.name],expression:"writeInputs[input.name]"}],staticClass:"contract-inputs",attrs:{placeholder:t.name,name:"",type:"checkbox"},domProps:{checked:Array.isArray(e.writeInputs[t.name])?e._i(e.writeInputs[t.name],null)>-1:e.writeInputs[t.name]},on:{change:function(n){var s=e.writeInputs[t.name],a=n.target,i=!!a.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);a.checked?o<0&&e.$set(e.writeInputs,t.name,s.concat([r])):o>-1&&e.$set(e.writeInputs,t.name,s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.writeInputs,t.name,i)}}}):"radio"===e.checkType(t.type)?s("input",{directives:[{name:"model",rawName:"v-model",value:e.writeInputs[t.name],expression:"writeInputs[input.name]"}],staticClass:"contract-inputs",attrs:{placeholder:t.name,name:"",type:"radio"},domProps:{checked:e._q(e.writeInputs[t.name],null)},on:{change:function(n){e.$set(e.writeInputs,t.name,null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.writeInputs[t.name],expression:"writeInputs[input.name]"}],staticClass:"contract-inputs",attrs:{placeholder:t.name,name:"",type:e.checkType(t.type)},domProps:{value:e.writeInputs[t.name]},on:{input:function(n){n.target.composing||e.$set(e.writeInputs,t.name,n.target.value)}}})])}),s("div",{directives:[{name:"show",rawName:"v-show",value:!1===e.selectedMethod.constant,expression:"selectedMethod.constant === false"}],staticClass:"the-form domain-name result-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("common.value"))+":")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",name:"",placeholder:"ETH"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),""!==e.result&&e.selectedMethod.inputs.length>0?s("div",{staticClass:"the-form domain-name result-container"},[e._m(0),s("div",{staticClass:"result-inputs"},["string"===e.resType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.result,expression:"result"}],attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:e.result},on:{input:function(t){t.target.composing||(e.result=t.target.value)}}}):e._e(),"object"===e.resType?s("div",e._l(Object.keys(e.result),function(t,n){return s("div",{key:""!==e.selectedMethod.outputs[n].name?e.selectedMethod.outputs[n].name+n:e.selectedMethod.outputs[n].type+n},[s("label",{attrs:{name:""!==e.selectedMethod.outputs[n].name?e.selectedMethod.outputs[n].name:e.selectedMethod.outputs[n].type+n}},[e._v("\n                  "+e._s(""!==e.selectedMethod.outputs[n].name?e.selectedMethod.outputs[n].name:e.selectedMethod.outputs[n].type)+"\n                ")]),s("input",{attrs:{name:""!==e.selectedMethod.outputs[n].name?e.selectedMethod.outputs[n].name:e.selectedMethod.outputs[n].type+n,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:e.result[t]}})])}),0):e._e()])]):e._e()],2)]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons interact-buttons"},[s("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(t){e.switchView("backwards")}}},[e._v("\n          "+e._s(e.$t("common.back"))+"\n        ")]),!0===e.selectedMethod.constant&&e.selectedMethod.inputs.length>0?s("div",{class:[e.inputsFilled?"":"disabled",e.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.write}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(e._s(e.$t("interface.read")))]),s("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):e._e(),!1===e.selectedMethod.constant?s("div",{class:[e.inputsFilled?"":"disabled",e.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.write}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(e._s(e.$t("interface.write")))]),s("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):e._e()]),s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)]):s("div",{staticClass:"interact-div"},[s("div",{staticClass:"send-form contract-address-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",{staticClass:"contract-address-title"},[e._v("\n            "+e._s(e.$t("interface.contractAddr"))+"\n          ")]),s("div",{staticClass:"select-contract no-border"},[s("currency-picker",{attrs:{currency:e.network.type.contracts,token:!1,page:"interactWContract"},on:{selectedCurrency:e.selectedCurrency}})],1)])]),s("div",{staticClass:"the-form domain-name"},[s("input",{directives:[{name:"ens-resolver",rawName:"v-ens-resolver",value:e.address,expression:"address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",name:"nameAddr",placeholder:"Enter Domain Name or Address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),s("i",{staticClass:"address-validation-check",class:[e.isValidAddress&&""!==e.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("interface.abiJsonInt")))]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:function(t){e.deleteInput("abi")}}},[e._v(e._s(e.$t("common.clear")))]),s("span",{on:{click:function(t){e.copyToClipboard("abi")}}},[e._v("\n              "+e._s(e.$t("common.copy"))+"\n            ")])])])]),s("div",{staticClass:"the-form domain-name"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:e.abi},on:{input:function(t){t.target.composing||(e.abi=t.target.value)}}}),s("i",{class:[e.isValidAbi&&""!==e.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"submit-button-container"},[s("div",{class:[e.isValidAbi&&e.isValidAddress&&!e.errors.has("nameAddr")&&!e.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(t){e.switchView("forward")}}},[e._v("\n        "+e._s(e.$t("common.continue"))+"\n        "),s("img",{attrs:{src:n("2ab9")}})]),s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[e._v("Result:")])])])}],i=(n("c5f6"),n("75fc")),r=n("a4bb"),o=n.n(r),c=(n("96cf"),n("3b8d")),l=(n("6762"),n("2fdb"),n("f499")),d=n.n(l),u=n("7618"),p=(n("7f7f"),n("ac6a"),n("cebc")),m=n("2f62"),h=n("d7a2"),v=n("55c1"),f=n("539d"),w=n("ce96"),b=n("70c1"),g={components:{"interface-container-title":v["a"],"interface-bottom-text":f["a"],"currency-picker":h["a"]},data:function(){return{abi:"",address:"",interact:!1,isValidAbi:!1,isValidAddress:!1,methods:[],selectedMethod:{},result:"",writeInputs:{},inputsFilled:!1,loading:!1,resType:"string",gasLimit:21e3,value:0,data:"",raw:{},nonce:0,transactionFee:0,hexAddress:""}},computed:Object(p["a"])({},Object(m["b"])({network:"network",gasPrice:"gasPrice",wallet:"wallet",web3:"web3"})),watch:{abi:function(e){this.isValidAbi=w["d"].isJson(e)},address:function(e){this.isValidAddress=this.web3.utils.isAddress(this.web3.utils.toChecksumAddress(e))},selectedMethod:function(e){var t=this;for(var n in this.writeInputs={},e)e.hasOwnProperty(n)&&e.inputs.forEach(function(e){t.$set(t.writeInputs,e.name,"")})},writeInputs:{handler:function(){this.checkInputsFilled()},deep:!0},result:function(e){this.resType=Object(u["a"])(e)},network:function(){this.abi="",this.address="",this.interact=!1,this.isValidAbi=!1,this.isValidAddress=!1,this.methods=[],this.selectedMethod={},this.result="",this.writeInputs={},this.inputsFilled=!1}},methods:{selectedCurrency:function(e){""===e.abi?this.abi="":this.abi=d()(e.abi),this.address=e.address},checkType:function(e){return"address"===e||"string"===e||"byte"===e||e.includes("bytes")?"string":"number"},selectFunction:function(e){var t=this,n=new this.web3.eth.Contract([e],this.address);!0===e.constant&&0===e.inputs.length?n.methods[e.name]().call({from:this.wallet.getAddressString()}).then(function(e){t.result=e}).catch(function(e){console.error(e)}):this.result="",this.selectedMethod=e},copyToClipboard:function(e){this.$refs[e].select(),document.execCommand("copy")},deleteInput:function(e){this.$refs[e].value=""},switchView:function(e){switch(e){case"forward":this.methods=JSON.parse(this.abi).map(function(e){return e}).filter(function(e){return"constructor"!==e.type}).filter(function(e){return void 0!==e.constant}),this.interact=!0;break;default:this.interact=!1}},write:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n,s,a,r,c,l=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.web3,n=new t.eth.Contract([this.selectedMethod],this.address),s=o()(this.writeInputs).map(function(e){return t.utils.toHex(l.writeInputs[e])}),this.loading=!0,!0!==this.selectedMethod.constant){e.next=8;break}(a=n.methods)[this.selectedMethod.name].apply(a,Object(i["a"])(s)).call({from:this.wallet.getAddressString()}).then(function(e){l.result=e,l.loading=!1}).catch(function(e){console.error(e),l.loading=!1}),e.next=18;break;case 8:return e.next=10,t.eth.getTransactionCount(this.wallet.getAddressString());case 10:return this.nonce=e.sent,e.next=13,(r=n.methods)[this.selectedMethod.name].apply(r,Object(i["a"])(s)).estimateGas({from:this.wallet.getAddressString()}).then(function(e){return l.transactionFee=b["fromWei"](b["toWei"](l.gasPrice,"gwei")*e,"ether"),e}).catch(function(e){console.error(e)});case 13:return this.gasLimit=e.sent,this.data=(c=n.methods)[this.selectedMethod.name].apply(c,Object(i["a"])(s)).encodeABI(),this.raw={from:this.wallet.getAddressString(),gas:this.gasLimit,nonce:this.nonce,gasPrice:Number(b["toWei"](this.gasPrice,"gwei")),value:this.value,to:this.hexAddress,data:this.data},e.next=18,t.eth.sendTransaction(this.raw);case 18:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),checkInputsFilled:function(){for(var e=o()(this.writeInputs),t=0;t<e.length;t++){if(""===this.writeInputs[e[t]])return void(this.inputsFilled=!1);this.inputsFilled=!0}}}},y=g,k=(n("2b5a"),n("2877")),C=Object(k["a"])(y,s,a,!1,null,"2254dafb",null);C.options.__file="InteractWithContractContainer.vue";var _=C.exports;n.d(t,"default",function(){return _})},"539d":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-text"},[n("p",[e._v("\n    "+e._s(e.question)+"\n    "),n("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.linkText))])])])},a=[],i={props:{link:{type:String,default:""},linkText:{type:String,default:""},question:{type:String,default:""}},data:function(){return{}}},r=i,o=(n("cf2f"),n("2877")),c=Object(o["a"])(r,s,a,!1,null,"dd4083a8",null);c.options.__file="InterfaceBottomText.vue";var l=c.exports;n.d(t,"a",function(){return l})},"55c1":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-title"},[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"side-menu-button"},[n("round-button",{attrs:{title:"Change"},nativeOn:{click:function(t){return e.toggleSideMenu(t)}}})],1)])},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"round-button"},[n("button",[e._v(e._s(e.title))])])},r=[],o={props:{title:{type:String,default:function(){return{}}}},data:function(){return{}}},c=o,l=(n("5dc5"),n("2877")),d=Object(l["a"])(c,i,r,!1,null,"575ca241",null);d.options.__file="RoundButton.vue";var u=d.exports,p={components:{"round-button":u},props:{title:{type:String,default:""}},data:function(){return{}},methods:{toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")}}},m=p,h=(n("5b58"),Object(l["a"])(m,s,a,!1,null,"13003480",null));h.options.__file="InterfaceContainerTitle.vue";var v=h.exports;n.d(t,"a",function(){return v})},"5b58":function(e,t,n){"use strict";var s=n("8ef7"),a=n.n(s);a.a},"5dc5":function(e,t,n){"use strict";var s=n("d3c8"),a=n.n(s);a.a},"8ef7":function(e,t,n){},bf8b:function(e,t,n){},cf2f:function(e,t,n){"use strict";var s=n("e32f"),a=n.n(s);a.a},d3c8:function(e,t,n){},d7a2:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[e.open?"open":"","dropdown-container",e.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:e.openDropdown}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n        "+e._s(e.selectedCurrency.symbol)+"\n        "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(e.selectedCurrency.name))]),n("i",{class:["fa",e.open?"fa-angle-up":"fa-angle-down"]})]),n("div",{class:[e.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},e._l(e.localCurrency,function(t,s){return n("div",{key:e.token?t.name+s+t.symbol+e.page:t.name+e.page+s,class:[e.token?e.selectedCurrency.symbol===t.symbol?"selected":"":e.selectedCurrency.name===t.name?"selected":"","item"],on:{click:function(n){e.selectCurrency(t)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n            "+e._s(t.symbol)),n("span",{staticClass:"subname"},[e._v(" - "+e._s(t.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(t.name))])])}),0)])])])},a=[],i=(n("6762"),n("2fdb"),n("ac6a"),n("7f7f"),n("cebc")),r=n("2f62"),o={props:{currency:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0}},data:function(){return{localCurrency:[],selectedCurrency:[],open:!1,search:"",abi:"",address:""}},computed:Object(i["a"])({},Object(r["b"])({network:"network"}),{networkToken:function(){return{name:this.network.type.name_long,symbol:this.network.type.name}}}),watch:{networkToken:function(){this.token&&(this.selectedCurrency=this.networkToken)},selectedCurrency:function(e){this.$emit("selectedCurrency",e)},currency:function(e){var t=this;this.token?this.localCurrency=[this.networkToken]:this.localCurrency=[{name:"Select an item"}],e.forEach(function(e){return t.localCurrency.push(e)})},search:function(e){var t=this;""!==e?this.localCurrency=this.localCurrency.filter(function(t){if(t.name.toLowerCase().includes(e.toLowerCase()))return t}):(this.token?this.localCurrency=[this.networkToken]:this.localCurrency=[{name:"Select an item",abi:"",address:""}],this.currency.forEach(function(e){return t.localCurrency.push(e)}))}},mounted:function(){var e=this;this.localCurrency=!0===this.token?[this.networkToken]:[{name:"Select an item",abi:"",address:""}],this.selectedCurrency=!0===this.token?this.networkToken:{name:"Select an item",abi:"",address:""},this.currency&&this.currency.forEach(function(t){return e.localCurrency.push(t)})},methods:{openDropdown:function(){this.open=!this.open},selectCurrency:function(e){this.openDropdown(),this.selectedCurrency=e}}},c=o,l=(n("0b7a"),n("2877")),d=Object(l["a"])(c,s,a,!1,null,"61401cd8",null);d.options.__file="CurrencyPicker.vue";var u=d.exports;n.d(t,"a",function(){return u})},e32f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-fae81930.15a723c6.js.map