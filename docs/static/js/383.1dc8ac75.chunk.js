(this["webpackJsonpaike-front-react-static"]=this["webpackJsonpaike-front-react-static"]||[]).push([[383],{617:function(t,e){!function(t){t.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},t.hooks.add("before-tokenize",(function(e){var n=!1;t.languages["markup-templating"].buildPlaceholders(e,"smarty",/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,(function(t){return"{/literal}"===t&&(n=!1),!n&&("{literal}"===t&&(n=!0),!0)}))})),t.hooks.add("after-tokenize",(function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"smarty")}))}(Prism)}}]);
//# sourceMappingURL=383.1dc8ac75.chunk.js.map