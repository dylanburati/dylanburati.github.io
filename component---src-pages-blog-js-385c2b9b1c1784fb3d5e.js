(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{211:function(e,t,a){"use strict";a.r(t);a(56),a(4),a(39);var l=a(215),r=a(0),n=a.n(r),s=(a(207),a(206)),m=a(208),c=a(209);function i(e){var t=e.date.split(" "),a=t[0],l=t[1];return n.a.createElement("div",{className:"flex items-center mb-4"},n.a.createElement("div",{className:"flex flex-col h-full mr-3 mt-px border text-center"},n.a.createElement("div",{className:"w-12 text-sm"},a),n.a.createElement("div",{className:"w-12 flex-grow table",style:{background:e.calendarColor,minHeight:"2rem"}},n.a.createElement("span",{className:"table-cell align-middle inline-block text-white"},l))),n.a.createElement("div",{className:"flex flex-col flex-1"},n.a.createElement("a",{className:"hover:underline text-xl font-semibold",href:e.href},e.title),n.a.createElement("p",{className:"mb-0 text-gray-700"},e.subtitle)))}t.default=function(){var e=l.data.allMarkdownRemark.edges.map((function(e){var t=e.node,a=t.frontmatter.date.split(","),l=a[0],r=a[1];return{href:t.fields.slug,title:t.frontmatter.title,date:l,year:parseInt(r,10),subtitle:t.frontmatter.subtitle}})),t=[];return e.reduce((function(a,l,r){var s;return l.year<a&&t.push(n.a.createElement("h3",{key:l.year.toString(),className:"mb-3 mt-6"},l.year)),t.push(n.a.createElement(i,{key:l.href,href:l.href,title:l.title,month:l.month,date:l.date,calendarColor:(s=e.length-r,["#e53e3e","#dd6b20","#d69e2e","#38a169","#319795","#3182ce","#5a67d8","#805ad5"][(5*s+3)%8]),subtitle:l.subtitle})),l.year}),(new Date).getFullYear()),n.a.createElement(s.a,null,n.a.createElement(m.a,{title:"Blog"}),n.a.createElement(c.a,{className:"px-5 mt-6"},n.a.createElement("h2",{className:"text-3xl mb-3"},"Recent Updates"),t))}},215:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/posts/puredata-compiler/"},"frontmatter":{"title":"PureData Compiler","subtitle":"Some notes on developing a Python interface to the PureData graphical audio language.\\n","date":"Sep 30,2019"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-blog-js-385c2b9b1c1784fb3d5e.js.map