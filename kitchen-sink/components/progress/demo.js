webpackJsonp([36,94],{416:function(n,s,a){n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Progress<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyProgress <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      percent<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>percent <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> percent<span class="token punctuation">:</span> p <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> percent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">36</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token attr-name">unfilled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hide<span class="token punctuation">"</span></span> <span class="token attr-name">appearTransition</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>progress<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span><span class="token operator">%</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">inline</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token punctuation">)</span><span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyProgress</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var s=a(1),t=(a(3),a(23),a(22)),p=n(t),o=(a(205),a(204)),e=n(o),c=s.createClass({displayName:"MyProgress",getInitialState:function(){return{percent:50}},add:function(){var n=this.state.percent+10;this.state.percent>=100&&(n=0),this.setState({percent:n})},render:function(){var n=this.state.percent;return s.createElement("div",{className:"progress-container"},s.createElement(e["default"],{percent:30,position:"fixed"}),s.createElement("div",{style:{height:36}}),s.createElement(e["default"],{percent:40,position:"normal",unfilled:"hide",appearTransition:!0}),s.createElement("div",{className:"show-info"},s.createElement("div",{className:"progress"},s.createElement(e["default"],{percent:n,position:"normal"})),s.createElement("div",null,n,"%")),s.createElement(p["default"],{inline:!0,style:{marginTop:20},onClick:this.add},"(+-)10"))}});return s.createElement(c,null)},style:".show-info {\n  margin-top: 0.36rem;\n  display: flex;\n  align-items: center;\n}\n.show-info .progress {\n  margin-right: 0.1rem;\n  width: 100%;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.show-info</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">0.36</span>rem<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.show-info</span> <span class="token class">.progress</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0.1</span>rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},506:function(n,s,a){n.exports={basic:a(416)}}});