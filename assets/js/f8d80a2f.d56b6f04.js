"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[4540],{7526:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var n=a(4848),i=a(8453);a(8597),a(5158);const t={sidebar_position:7,sidebar_label:"Spread of a Distribution",title:"Spread of a Distribution",tags:["standard deviation","chebyshev\u2019s inequality"]},l=void 0,r={id:"statistical-inference/spread_of_a_distribution",title:"Spread of a Distribution",description:"Concept",source:"@site/docs/statistical-inference/spread_of_a_distribution.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/spread_of_a_distribution",permalink:"/bpd-reference/docs/statistical-inference/spread_of_a_distribution",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/spread_of_a_distribution.md",tags:[{label:"standard deviation",permalink:"/bpd-reference/docs/tags/standard-deviation"},{label:"chebyshev\u2019s inequality",permalink:"/bpd-reference/docs/tags/chebyshevs-inequality"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Spread of a Distribution",title:"Spread of a Distribution",tags:["standard deviation","chebyshev\u2019s inequality"]},sidebar:"statsSidebar",previous:{title:"Hypothesis Test",permalink:"/bpd-reference/docs/statistical-inference/hypothesis_test"},next:{title:"Boostrapping and Confidence Intervals",permalink:"/bpd-reference/docs/statistical-inference/bootstrapping"}},c={},h=[{value:"Concept",id:"concept",level:2},{value:"Formulas",id:"formulas",level:2},{value:"Standard Deviation",id:"standard-deviation",level:3},{value:"Chebyshev\u2019s Inequality",id:"chebyshevs-inequality",level:3},{value:"Chebyshev\u2019s Inequality visualized on a normal distribution",id:"chebyshevs-inequality-visualized-on-a-normal-distribution",level:4},{value:"Chebyshev\u2019s Inequality visualized on a non-normal distribution",id:"chebyshevs-inequality-visualized-on-a-non-normal-distribution",level:4}];function m(s){const e={admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",msub:"msub",msup:"msup",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",strong:"strong",svg:"svg",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"concept",children:"Concept"}),"\n",(0,n.jsx)(e.admonition,{title:"Key Idea",type:"tip",children:(0,n.jsx)(e.p,{children:"The Chebyshev's Inequality implies that no matter what the distribution looks like, a significant portion of the data will lie within a certain number of standard deviations from the mean. These percentages provide a way to understand the spread and variability of data even when the exact distribution is unknown."})}),"\n",(0,n.jsxs)(e.admonition,{title:"Terminology",type:"info",children:[(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Standard Deviation(std)"}),": a measure of the amount of deviation in a set of values."]}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Variance is the average squared deviation from the mean."}),"\n",(0,n.jsx)(e.li,{children:"Standard Deviation is the square root of the variance."}),"\n"]}),(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Chebyshev\u2019s Inequality"}),": Chebyshev\u2019s Inequality states that in any dataset, at least ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsx)(e.mn,{children:"2"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 - \\frac{1}{z^2}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7463em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.786em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})," of the\r\ndata falls within ",(0,n.jsx)(e.strong,{children:"z"})," SDs of the mean."]})]}),"\n",(0,n.jsx)(e.h2,{id:"formulas",children:"Formulas"}),"\n",(0,n.jsx)(e.h3,{id:"standard-deviation",children:"Standard Deviation"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.msqrt,{children:(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mo,{children:"\u22ef"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.mi,{children:"n"})]})})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"SD = \\sqrt{\\frac{(x_1 - mean)^2  +  \\cdots  +  (x_n - mean)^2}{n}}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.84em",verticalAlign:"-0.5225em"}}),(0,n.jsx)(e.span,{className:"mord sqrt",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3175em"},children:[(0,n.jsxs)(e.span,{className:"svg-align",style:{top:"-3.8em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.8em"}}),(0,n.jsx)(e.span,{className:"mord",style:{paddingLeft:"1em"},children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.01em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.485em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"an"}),(0,n.jsxs)(e.span,{className:"mclose mtight",children:[(0,n.jsx)(e.span,{className:"mclose mtight",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7463em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.786em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"minner mtight",children:"\u22ef"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,n.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1645em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"an"}),(0,n.jsxs)(e.span,{className:"mclose mtight",children:[(0,n.jsx)(e.span,{className:"mclose mtight",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7463em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.786em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.2775em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.8em"}}),(0,n.jsx)(e.span,{className:"hide-tail",style:{minWidth:"1.02em",height:"1.88em"},children:(0,n.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.88em",viewBox:"0 0 400000 1944",preserveAspectRatio:"xMinYMin slice",children:(0,n.jsx)(e.path,{d:"M983 90\nl0 -0\nc4,-6.7,10,-10,18,-10 H400000v40\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM1001 80h400000v40h-400000z"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.5225em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})}),"\n",(0,n.jsx)(e.admonition,{title:"variables",type:"note",children:(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_{i}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})})," = value (in original units) from column x."]}),"\n"]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:"# use np to calcualte standard deviation: \r\nweights = full_pets.get('Weight')\r\nstandard_deviation = np.std(weights, ddof=0)\r\n\r\n# how to implement the standard deviation formula\r\nmean = weights.mean()\r\nnumerator = 0\r\nfor value in weights.values:\r\n    numerator += (value - mean) ** 2\r\nvariance = numerator / (full_pets.shape[0])\r\nstandard_deviation2 = variance ** 0.5 \r\nstandard_deviation2\n"})}),"\n",(0,n.jsx)(e.h3,{id:"chebyshevs-inequality",children:"Chebyshev\u2019s Inequality"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Range"}),(0,n.jsx)(e.th,{children:"All Distributions"}),(0,n.jsx)(e.th,{children:"Normal Distribution"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"mean \xb1 1 SD"}),(0,n.jsx)(e.td,{children:"at least 0%"}),(0,n.jsx)(e.td,{children:"about 68%"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"mean \xb1 2 SD"}),(0,n.jsx)(e.td,{children:"at least 75%"}),(0,n.jsx)(e.td,{children:"about 95%"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"mean \xb1 3 SD"}),(0,n.jsx)(e.td,{children:"at least 88%"}),(0,n.jsx)(e.td,{children:"about 99.73%"})]})]})]}),"\n",(0,n.jsx)(e.admonition,{title:"variables",type:"note",children:(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"The Chebshev's Inequality: Applies to all distributions, providing a lower bound on the proportion of data within\r\nk standard deviations from the mean."}),"\n",(0,n.jsxs)(e.li,{children:["The true proportion of values within \ud835\udc67 SDs of the mean may be larger than  ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsx)(e.mn,{children:"2"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 - \\frac{1}{z^2}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7463em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.786em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]}),", depending on the distribution."]}),"\n",(0,n.jsx)(e.li,{children:"Normal Distribution: Provides specific and tighter estimates because it assumes a particular symmetrical and bell-shaped distribution. These estimates are higher than the lower bounds provided by Chebyshev's Inequality because they take advantage of the normal distribution's properties."}),"\n"]})}),"\n",(0,n.jsx)(e.h4,{id:"chebyshevs-inequality-visualized-on-a-normal-distribution",children:"Chebyshev\u2019s Inequality visualized on a normal distribution"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Curve",src:a(9721).A+"",width:"618",height:"391"})}),"\n",(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.p,{children:"The graph above illustrates the distribution of weights sampled from a normal distribution with a mean of 70 and a standard deviation of 10. The dashed lines represent one, two, and three standard deviations from the mean, providing insight into the spread of data around the central tendency."}),(0,n.jsx)(e.p,{children:"Annotations on the plot indicate the actual proportion of data within each standard deviation range: around 68.6% of data are within 1 std, 95.6% of data are within 2stds, 99.7% of data are within 3 stds.\r\nThis aligns with the expected percentages for a normal distribution."})]}),"\n",(0,n.jsx)(e.h4,{id:"chebyshevs-inequality-visualized-on-a-non-normal-distribution",children:"Chebyshev\u2019s Inequality visualized on a non-normal distribution"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Curve",src:a(1524).A+"",width:"645",height:"391"})}),"\n",(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.p,{children:"The graph above illustrates the distribution of weight values intentionally chosen to be non-normally distributed. Annotations on the plot indicate the actual proportion of data within each standard deviation range: roughly 57.3% of data fall within 1 standard deviation, while all data points fall within 2 and 3 standard deviations."}),(0,n.jsx)(e.p,{children:"Despite the deviation from normality, Chebyshev's Inequality still applies, providing a conservative estimate of the proportion of data within a certain number of standard deviations from the mean."})]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},8597:(s,e,a)=>{a.d(e,{A:()=>i});a(6540);var n=a(4848);const i=s=>{let{data:e}=s,a=[],i=[],t="",l=[];if(e){const s=JSON.parse(e);a=s.columns||[],i=s.data||[],t=s.indexName||"Index",l=s.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:t}),a.map(((s,e)=>(0,n.jsx)("th",{children:s},e)))]})}),(0,n.jsx)("tbody",{children:i.map(((s,e)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:l[e]}),s.map(((s,e)=>{return(0,n.jsx)("td",{children:(a=s,"boolean"==typeof a?a.toString().charAt(0).toUpperCase()+a.toString().slice(1):a)},e);var a}))]},e)))})]})})}},5158:(s,e,a)=>{a.d(e,{A:()=>t});var n=a(6540),i=a(4848);const t=function(s){let{src:e,sourceLink:a,aspectRatio:t=16/9}=s;const[l,r]=(0,n.useState)(0),[c,h]=(0,n.useState)(0),m=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const s=()=>{if(m.current){const s=m.current.offsetWidth;h(s/t)}};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)}),[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:m,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,i.jsx)("iframe",{src:e,style:{width:"100%",height:`${c}px`,border:"0",allowFullScreen:!0}},l)}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,i.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,i.jsx)("button",{onClick:()=>{r((s=>s+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:s=>s.currentTarget.style.backgroundColor="#45a049",onMouseOut:s=>s.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},9721:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/chebyshev-normal-e98e59bd42025035eb9415f58f32433f.png"},1524:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/chebyshev-notnormal-4f883f3e8c4870e74383cc82894add0b.png"},8453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>r});var n=a(6540);const i={},t=n.createContext(i);function l(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);