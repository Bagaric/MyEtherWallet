(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eac8c13"],{"0b7a":function(e,t,n){"use strict";var a=n("44ae"),s=n.n(a);s.a},"44ae":function(e,t,n){},"44c8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"send-currency-container"},[n("interface-container-title",{attrs:{title:e.$t("common.sendTx")}}),n("div",{staticClass:"send-form"},[n("div",{staticClass:"form-block amount-to-address"},[n("div",{staticClass:"amount"},[n("div",{staticClass:"single-input-block"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxType")))])]),n("currency-picker",{attrs:{currency:e.tokensWithBalance,page:"sendEgasAmountthAndTokens",token:!0},on:{selectedCurrency:e.setSelectedCurrency}})],1),n("div",{staticClass:"single-input-block"},[n("div",{staticClass:"title"},[n("h4",[e._v(e._s(e.$t("interface.sendTxAmount")))]),n("p",{staticClass:"title-button prevent-user-select",on:{click:e.setBalanceToAmt}},[e._v("\n              Entire Balance\n            ")])]),n("div",{staticClass:"the-form amount-number"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"min_value:10",expression:"'min_value:10'"}],attrs:{type:"number",placeholder:"Amount",min:"0",name:"amount"},domProps:{value:e.amount},on:{input:e.debouncedAmount}}),n("i",{class:[e.selectedCurrency.symbol===e.network.type.name?e.parsedBalance.lt(e.amount)?"not-good":"":e.errors.has("amount")?"not-good":"","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),(e.selectedCurrency.symbol===e.network.type.name?e.parsedBalance.lt(e.amount):e.selectedCurrency.balance<e.amount)?n("div",{staticClass:"error-message-container"},[n("p",[e._v(e._s(e.$t("common.dontHaveEnough")))])]):e._e()]),n("div",{staticClass:"to-address"},[n("div",{staticClass:"title"},[n("h4",[e._v("\n            "+e._s(e.$t("interface.sendTxToAddr"))+"\n            "),n("blockie",{directives:[{name:"show",rawName:"v-show",value:e.isValidAddress&&0!==e.address.length,expression:"isValidAddress && address.length !== 0"}],staticClass:"blockie-image",attrs:{address:e.hexAddress,size:8,scale:16,width:"32px",height:"32px"}})],1),n("p",{staticClass:"copy-button prevent-user-select",on:{click:function(t){e.copyToClipboard("address")}}},[e._v("\n            "+e._s(e.$t("common.copy"))+"\n          ")])]),n("div",{staticClass:"the-form address-block"},[n("input",{directives:[{name:"ens-resolver",rawName:"v-ens-resolver",value:"address",expression:"'address'"}],ref:"address",attrs:{type:"text",name:"name",autocomplete:"off"},on:{input:e.debounceInput}}),n("i",{class:[e.isValidAddress&&0!==e.address.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),n("div",{staticClass:"send-form advanced"},[n("div",{staticClass:"advanced-content"},[n("div",{staticClass:"toggle-button-container"},[n("h4",[e._v(e._s(e.$t("common.advanced")))]),n("div",{staticClass:"toggle-button"},[n("span",[e._v(e._s(e.$t("interface.dataGas")))]),n("div",{staticClass:"sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:function(t){e.advancedExpend=!e.advancedExpend}}}),n("span",{staticClass:"slider round"})])])])]),n("div",{staticClass:"input-container",class:e.advancedExpend&&"input-container-open"},[n("div",{staticClass:"margin-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedCurrency.symbol===e.network.type.name,expression:"selectedCurrency.symbol === network.type.name"}],staticClass:"the-form user-input"},[n("p",[e._v("Add Data")]),n("input",{attrs:{type:"text",placeholder:"Add Data (e.g. 0x7834f874g298hf298h234f)",autocomplete:"off"},domProps:{value:e.data},on:{input:e.debounceData}}),n("i",{class:[0!==e.data.length?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})]),n("div",{staticClass:"the-form user-input"},[n("p",[e._v(e._s(e._f("capitalize")(e.$t("common.gasLimit"))))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gasLimit,expression:"gasLimit"}],attrs:{placeholder:e.$t("common.gasLimit"),type:"number",name:""},domProps:{value:e.gasLimit},on:{input:function(t){t.target.composing||(e.gasLimit=t.target.value)}}})])])])])]),n("div",{staticClass:"submit-button-container"},[n("div",{class:[e.isValidAddress&&0!==e.address.length&&e.isValidAmount&&0!==e.data.length?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.confirmationModalOpen}},[e._v("\n      "+e._s(e.$t("interface.sendTx"))+"\n    ")]),n("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)],1)},s=[],i=(n("6b54"),n("96cf"),n("3b8d")),r=(n("7f7f"),n("cebc")),c=(n("c5f6"),n("2f62")),o=n("55c1"),u=n("d7a2"),d=n("539d"),l=n("c8e5"),h=(n("7856"),n("ce96")),m=n("b7d3"),p=n("901e"),f=n.n(p),v=n("70c1"),y=n("1131"),b=n.n(y),w={components:{"interface-container-title":o["a"],"interface-bottom-text":d["a"],blockie:l["a"],"currency-picker":u["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:Number,default:0}},data:function(){return{advancedExpend:!1,amount:0,isValidAmount:!0,nonce:0,gasLimit:21e3,data:"0x",transactionFee:0,selectedCurrency:{},raw:{},signedTx:"",address:"",hexAddress:"",isValidAddress:!1}},computed:Object(r["a"])({},Object(c["b"])({account:"account",gasPrice:"gasPrice",web3:"web3",network:"network",ens:"ens"}),{parsedBalance:function(){return new f.a(v["fromWei"](this.account.balance,"ether"))}}),watch:{gasPrice:function(e){this.verifyAddr()&&this.estimateGas()},selectedCurrency:function(e){this.verifyAddr()&&this.estimateGas()}},methods:{validateHexString:h["d"].validateHexString,debouncedAmount:b.a._.debounce(function(e){var t=this.selectedCurrency.symbol===this.network.type.name?18:this.selectedCurrency.decimals;this.amount=new f.a(e.target.value).decimalPlaces()>t?new f.a(e.target.value).decimalPlaces(t).toFixed():new f.a(e.target.value).isGreaterThanOrEqualTo(0)?e.target.value:0,this.amount<0?this.isValidAmount=!1:this.isValidAmount=!0,e.target.value=this.amount,this.verifyAddr()&&this.estimateGas()},300),debounceInput:b.a._.debounce(function(e){this.address=e.target.value,this.verifyAddr()&&this.estimateGas()},500),debounceData:b.a._.debounce(function(e){this.validateHexString(e.target.value)?(this.data=e.target.value,this.verifyAddr()&&this.estimateGas()):this.data="0x"},500),copyToClipboard:function(e){this.$refs[e].select(),document.execCommand("copy")},createTx:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.selectedCurrency.symbol===this.network.type.name,e.next=3,this.web3.eth.getCoinbase();case 3:return n=e.sent,e.next=6,this.web3.eth.getTransactionCount(n);case 6:this.nonce=e.sent,this.raw={from:n,gas:this.gasLimit,nonce:this.nonce,gasPrice:v["toWei"](this.gasPrice,"gwei"),value:t?""===this.amount?0:v["toWei"](this.amount,"ether"):0,to:t?this.hexAddress:this.selectedCurrency.addr,data:h["d"].sanitizeHex(this.data),chainId:this.network.type.chainID||1},""===this.hexAddress&&delete this.raw["to"],this.web3.eth.sendTransaction(this.raw);case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),confirmationModalOpen:function(){this.createTx(),window.scrollTo(0,0)},setBalanceToAmt:function(){if(this.selectedCurrency.symbol===this.network.type.name){var e=new f.a(this.gasLimit).times(v["toWei"](this.gasPrice,"gwei")).toString();this.amount=this.amount>0?this.parsedBalance.minus(v["fromWei"](e,"ether")).toString():0}else this.amount=this.selectedCurrency.balance},createDataHex:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("Ether"===this.selectedCurrency.name){e.next=9;break}return t=0!==this.amount&&""!==this.amount?this.amount:0,n=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],a=new this.web3.eth.Contract(n,this.selectedCurrency.addr),e.next=6,a.methods.transfer(this.hexAddress,new f.a(t).times(new f.a(10).pow(this.selectedCurrency.decimals)).toFixed()).encodeABI();case 6:this.data=e.sent,e.next=10;break;case 9:this.data="0x"!==this.data?this.data:"0x";case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),setSelectedCurrency:function(e){this.selectedCurrency=e},estimateGas:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,a,s,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""===this.hexAddress){e.next=11;break}return t=this.selectedCurrency.symbol===this.network.type.name,n=new f.a(this.amount),e.next=5,this.web3.eth.getCoinbase();case 5:if(a=e.sent,t){e.next=9;break}return e.next=9,this.createDataHex();case 9:s={from:a,value:t?""===this.amount?0:v["toWei"](n,"ether"):0,to:t?this.hexAddress:this.selectedCurrency.addr,data:h["d"].sanitizeHex(this.data)},this.web3.eth.estimateGas(s).then(function(e){var t=new f.a(e),n=t.times(v["toWei"](i.gasPrice,"gwei"));i.transactionFee=n.toString(),i.gasLimit=e||i.gasLimit}).catch(function(e){console.error(e)});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),verifyAddr:function(){return Object(m["a"])(this.hexAddress)}}},g=w,C=(n("d3ca"),n("2877")),k=Object(C["a"])(g,a,s,!1,null,"88c42750",null);k.options.__file="SendCurrencyContainer.vue";var x=k.exports;n.d(t,"default",function(){return x})},"539d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-text"},[n("p",[e._v("\n    "+e._s(e.question)+"\n    "),n("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.linkText))])])])},s=[],i={props:{link:{type:String,default:""},linkText:{type:String,default:""},question:{type:String,default:""}},data:function(){return{}}},r=i,c=(n("cf2f"),n("2877")),o=Object(c["a"])(r,a,s,!1,null,"dd4083a8",null);o.options.__file="InterfaceBottomText.vue";var u=o.exports;n.d(t,"a",function(){return u})},"55c1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-title"},[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"side-menu-button"},[n("round-button",{attrs:{title:"Change"},nativeOn:{click:function(t){return e.toggleSideMenu(t)}}})],1)])},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"round-button"},[n("button",[e._v(e._s(e.title))])])},r=[],c={props:{title:{type:String,default:function(){return{}}}},data:function(){return{}}},o=c,u=(n("5dc5"),n("2877")),d=Object(u["a"])(o,i,r,!1,null,"575ca241",null);d.options.__file="RoundButton.vue";var l=d.exports,h={components:{"round-button":l},props:{title:{type:String,default:""}},data:function(){return{}},methods:{toggleSideMenu:function(){this.$store.commit("TOGGLE_SIDEMENU")}}},m=h,p=(n("5b58"),Object(u["a"])(m,a,s,!1,null,"13003480",null));p.options.__file="InterfaceContainerTitle.vue";var f=p.exports;n.d(t,"a",function(){return f})},"5b58":function(e,t,n){"use strict";var a=n("8ef7"),s=n.n(a);s.a},"5dc5":function(e,t,n){"use strict";var a=n("d3c8"),s=n.n(a);s.a},"8ef7":function(e,t,n){},"9d2a":function(e,t,n){},cf2f:function(e,t,n){"use strict";var a=n("e32f"),s=n.n(a);s.a},d3c8:function(e,t,n){},d3ca:function(e,t,n){"use strict";var a=n("9d2a"),s=n.n(a);s.a},d7a2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[e.open?"open":"","dropdown-container",e.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:e.openDropdown}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n        "+e._s(e.selectedCurrency.symbol)+"\n        "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(e.selectedCurrency.name))]),n("i",{class:["fa",e.open?"fa-angle-up":"fa-angle-down"]})]),n("div",{class:[e.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},e._l(e.localCurrency,function(t,a){return n("div",{key:e.token?t.name+a+t.symbol+e.page:t.name+e.page+a,class:[e.token?e.selectedCurrency.symbol===t.symbol?"selected":"":e.selectedCurrency.name===t.name?"selected":"","item"],on:{click:function(n){e.selectCurrency(t)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n            "+e._s(t.symbol)),n("span",{staticClass:"subname"},[e._v(" - "+e._s(t.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(t.name))])])}),0)])])])},s=[],i=(n("6762"),n("2fdb"),n("ac6a"),n("7f7f"),n("cebc")),r=n("2f62"),c={props:{currency:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0}},data:function(){return{localCurrency:[],selectedCurrency:[],open:!1,search:"",abi:"",address:""}},computed:Object(i["a"])({},Object(r["b"])({network:"network"}),{networkToken:function(){return{name:this.network.type.name_long,symbol:this.network.type.name}}}),watch:{networkToken:function(){this.token&&(this.selectedCurrency=this.networkToken)},selectedCurrency:function(e){this.$emit("selectedCurrency",e)},currency:function(e){var t=this;this.token?this.localCurrency=[this.networkToken]:this.localCurrency=[{name:"Select an item"}],e.forEach(function(e){return t.localCurrency.push(e)})},search:function(e){var t=this;""!==e?this.localCurrency=this.localCurrency.filter(function(t){if(t.name.toLowerCase().includes(e.toLowerCase()))return t}):(this.token?this.localCurrency=[this.networkToken]:this.localCurrency=[{name:"Select an item",abi:"",address:""}],this.currency.forEach(function(e){return t.localCurrency.push(e)}))}},mounted:function(){var e=this;this.localCurrency=!0===this.token?[this.networkToken]:[{name:"Select an item",abi:"",address:""}],this.selectedCurrency=!0===this.token?this.networkToken:{name:"Select an item",abi:"",address:""},this.currency&&this.currency.forEach(function(t){return e.localCurrency.push(t)})},methods:{openDropdown:function(){this.open=!this.open},selectCurrency:function(e){this.openDropdown(),this.selectedCurrency=e}}},o=c,u=(n("0b7a"),n("2877")),d=Object(u["a"])(o,a,s,!1,null,"61401cd8",null);d.options.__file="CurrencyPicker.vue";var l=d.exports;n.d(t,"a",function(){return l})},e32f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-6eac8c13.28012903.js.map