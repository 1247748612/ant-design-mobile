webpackJsonp([21,104],{281:function(n,a){n.exports={content:[],meta:{order:0,title:"\u57fa\u672c\u4f7f\u7528",filename:"components/swipe-action/demo/basic.md",id:"components-swipe-action-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SwipeAction<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> SwipeActionExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">autoClose</span>\n          <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'\u53d6\u6d88\'</span><span class="token punctuation">,</span>\n              onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u53d6\u6d88\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n            <span class="token attr-name">{</span>\n              <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'\u5220\u9664\',</span>\n              <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'\u5220\u9664\'),</span>\n              <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#F4333C\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n            <span class="token attr-name">},</span>\n          <span class="token attr-name">]}</span>\n          <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'\u56de\u590d\'</span><span class="token punctuation">,</span>\n              onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u56de\u590d\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n            <span class="token attr-name">{</span>\n              <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'\u53d6\u6d88\',</span>\n              <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'\u53d6\u6d88\'),</span>\n              <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#ddd\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n            <span class="token attr-name">},</span>\n          <span class="token attr-name">]}</span>\n          <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n            <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u66f4\u591a<span class="token punctuation">"</span></span>\n            <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n              \u5de6\u53f3\u90fd\u53ef\u64cd\u4f5c\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">autoClose</span>\n          <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'\u53d6\u6d88\'</span><span class="token punctuation">,</span>\n              onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u53d6\u6d88\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n            <span class="token attr-name">{</span>\n              <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'\u5220\u9664\',</span>\n              <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'\u5220\u9664\'),</span>\n              <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#F4333C\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n            <span class="token attr-name">},</span>\n          <span class="token attr-name">]}</span>\n          <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'\u56de\u590d\'</span><span class="token punctuation">,</span>\n              onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u56de\u590d\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n            <span class="token attr-name">{</span>\n              <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'\u53d6\u6d88\',</span>\n              <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'\u53d6\u6d88\'),</span>\n              <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#ddd\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n            <span class="token attr-name">},</span>\n          <span class="token attr-name">]}</span>\n          <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n            <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u66f4\u591a<span class="token punctuation">"</span></span>\n            <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n              \u5de6\u53f3\u90fd\u53ef\u64cd\u4f5c\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeActionExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},366:function(n,a,s){n.exports={basic:s(281)}}});