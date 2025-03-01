"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[972],{3007:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(4848),i=s(8453),o=s(8597);s(5158);const r={sidebar_position:7,sidebar_label:"Hypothesis Test",title:"Hypothesis Test",tags:["querying","functions","for-loop","histogram"]},a=void 0,l={id:"statistical-inference/hypothesis_test",title:"Hypothesis Test",description:"Concept",source:"@site/docs/statistical-inference/hypothesis_test.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/hypothesis_test",permalink:"/bpd-reference/docs/statistical-inference/hypothesis_test",draft:!1,unlisted:!1,tags:[{label:"querying",permalink:"/bpd-reference/docs/tags/querying"},{label:"functions",permalink:"/bpd-reference/docs/tags/functions"},{label:"for-loop",permalink:"/bpd-reference/docs/tags/for-loop"},{label:"histogram",permalink:"/bpd-reference/docs/tags/histogram"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Hypothesis Test",title:"Hypothesis Test",tags:["querying","functions","for-loop","histogram"]},sidebar:"statsSidebar",previous:{title:"P-value",permalink:"/bpd-reference/docs/statistical-inference/p_value"},next:{title:"Spread of a Distribution",permalink:"/bpd-reference/docs/statistical-inference/spread_of_a_distribution"}},h={},c=[{value:"Concept",id:"concept",level:2},{value:"Code Example 1 (Difference)",id:"code-example-1-difference",level:2},{value:"1. State the question/hypothesis",id:"1-state-the-questionhypothesis",level:3},{value:"2. Calculate the overall proportion",id:"2-calculate-the-overall-proportion",level:3},{value:"3. Create a function to calculate test statistic",id:"3-create-a-function-to-calculate-test-statistic",level:3},{value:"4. Compute the observed statistic",id:"4-compute-the-observed-statistic",level:3},{value:"5. Simulate the hypothesis test under the null hypothesis",id:"5-simulate-the-hypothesis-test-under-the-null-hypothesis",level:3},{value:"6. Conclusion",id:"6-conclusion",level:3},{value:"7. Extra",id:"7-extra",level:3},{value:"Code Example 2 (TVD)",id:"code-example-2-tvd",level:2},{value:"1. State the question/hypothesis",id:"1-state-the-questionhypothesis-1",level:3},{value:"2. Create a function to calculate test statistic (TVD)",id:"2-create-a-function-to-calculate-test-statistic-tvd",level:3},{value:"3. Compute the observed statistic",id:"3-compute-the-observed-statistic",level:3},{value:"4. Simulate the hypothesis test under the null hypothesis",id:"4-simulate-the-hypothesis-test-under-the-null-hypothesis",level:3},{value:"5. Conclusion",id:"5-conclusion",level:3},{value:"6. Extra",id:"6-extra",level:3}];function d(e){const t={admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,n.jsx)(t.admonition,{title:"Note \ud83c\udf1f",type:"note",children:(0,n.jsxs)(t.p,{children:["This page refers to the ",(0,n.jsx)(t.strong,{children:"standard"})," hypothesis test."]})}),"\n",(0,n.jsx)(t.admonition,{title:"Key Idea",type:"tip",children:(0,n.jsx)(t.p,{children:"We use a hypothesis test to test whether a sample was drawn from a population."})}),"\n",(0,n.jsxs)(t.admonition,{title:"Terminology",type:"info",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Hypothesis Test"}),": A process that test whether a sample was drawn from a population, given a population distribution and a sample."]}),(0,n.jsx)(t.p,{children:"To conduct a hypothesis test:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Simulate the experiment many times under the assumption that the null hypothesis is true."}),"\n",(0,n.jsx)(t.li,{children:"Compute a test statistic on each of the simulated samples, as well as on the observed sample."}),"\n",(0,n.jsx)(t.li,{children:"Look at the resulting empirical distribution of test statistics and see where the observed test statistic falls. If it seems like an atypical value (too large or too small), we reject the null hypothesis; otherwise, we fail to reject the null."}),"\n"]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"code-example-1-difference",children:"Code Example 1 (Difference)"}),"\n",(0,n.jsx)(t.h3,{id:"1-state-the-questionhypothesis",children:"1. State the question/hypothesis"}),"\n",(0,n.jsxs)(t.admonition,{title:"Hypotheses",type:"info",children:[(0,n.jsx)(t.p,{children:"We will test the following pair of hypotheses at the standard p = 0.05 significance level."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Null Hypothesis:"}),'  The proportion of "white" dogs among dogs is ',(0,n.jsx)(t.strong,{children:"equal"}),' to the proportion of "white" pets in the overall population.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Alternative Hypothesis:"}),' The proportion of "white" dogs among dogs is ',(0,n.jsx)(t.strong,{children:"greater than"}),' the proportion of "white" pets in the overall population.']}),"\n"]})]}),"\n",(0,n.jsxs)(t.p,{children:['Since the alternative hypothesis is of the form "A is ',(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"greater than"})}),' B," the ',(0,n.jsx)(t.strong,{children:"test statistic"})," should measure ",(0,n.jsx)(t.strong,{children:"signed difference"})," rather than absolute difference."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsx)(t.mrow,{children:(0,n.jsx)(t.mo,{children:"\u2234"})}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\therefore"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.6922em"}}),(0,n.jsx)(t.span,{className:"mrel amsrm",children:"\u2234"})]})})]})," We use ",(0,n.jsx)(t.strong,{children:"the difference in proportions"})," of white dogs among dogs and white pets in the overall poplulation as the test statistic."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"2-calculate-the-overall-proportion",children:"2. Calculate the overall proportion"}),"\n",(0,n.jsx)(t.p,{children:"We first compute the proportion of white pets in the overall population, which will be used for calculating the test statistic."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"#Method 1: Obtain a series of boolean values (1s and 0s), and calculate the mean\noverall_prop = (full_pets.get('Color')=='white').mean()\n\n#Method 2: Query the DataFrame and obtain the proportion by using .shape[0]\n#overall_prop = full_pets[full_pets.get('Color')=='white'].shape[0]/full_pets.shape[0]\n\noverall_prop\n"})}),"\n",(0,n.jsx)(t.p,{children:"0.2631578947368421"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"3-create-a-function-to-calculate-test-statistic",children:"3. Create a function to calculate test statistic"}),"\n",(0,n.jsx)(t.p,{children:"Create a function to calculate the test statistic during every trial of our hypothesis test."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'def difference_in_proportions(dogs_prop, overall_prop):\n    """\n    Calculate the difference in proportions of white dogs among dogs and white pets in the overall population.\n    ---\n    Input:\n        dogs_prop: the proportion of white dogs among all dogs.\n        overall_prop: the proportion of white pets in the overall population.\n    ---\n    Output:\n        The difference in proportions of white dogs among dogs and white pets in the overall population.\n    """\n    return dogs_prop - overall_prop\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Note: Although we can simply do this in the for-loop shown in the next step, we can practice good coding habits by separating our code into readable bits!"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"4-compute-the-observed-statistic",children:"4. Compute the observed statistic"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Query the DataFrame to only include dogs\ndogs_df = full_pets[full_pets.get('Species') == 'dog']\n# Compute the observed proportion of white dogs among all dogs\nobs_dogs_prop = (dogs_df.get('Color') == 'white').mean()\n# Calculate the observed statistic\nobserved_stat = difference_in_proportions(obs_dogs_prop, overall_prop)\nobserved_stat\n"})}),"\n",(0,n.jsx)(t.p,{children:"0.18128654970760233"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"5-simulate-the-hypothesis-test-under-the-null-hypothesis",children:"5. Simulate the hypothesis test under the null hypothesis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'n = 500 # Number of simulations.\ntest_statistics = np.array([]) # Array to keep track of the test statistic for each iteration.\n\n# Calculte the smaple size (number of dogs)\nsample_size = dogs_df.shape[0]\n\n# Under the null hypothesis, proportion of "white" dogs among dogs is equal to the proportion of white pets among the overall population\nmodel_proportions = np.array([obs_dogs_prop, 1-obs_dogs_prop]) \n\nfor i in np.arange(n): # Run the simulation `n` number of times\n    \n    # 1. Simulate the dogs distribution\n    # Calculate the the proportion of white dogs among all dogs.\n    simulation_proportion = np.random.multinomial(sample_size, model_proportions)[0] / sample_size\n    \n    # 2. Compute the test statistic\n    test_stat = difference_in_proportions(simulation_proportion, overall_prop)\n\n    # 3. Save the result\n    test_statistics = np.append(test_statistics, test_stat)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This code will run the hypothesis test 500 times, but a different reasonable number can be used instead. It is ",(0,n.jsx)(t.strong,{children:"crucial"})," to keep track of the test statistic each time our for-loop runs so that the number of simulated values can be stored."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"6-conclusion",children:"6. Conclusion"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'p_value = np.count_nonzero(test_statistics >= observed_stat) / n\n\nprint("The observed value of the test statistic is:", observed_stat)\nprint("The p-value is:", p_value)\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The observed value of the test statistic is:"})," 0.18128654970760233 ",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.strong,{children:"The p-value is:"})," 0.616"]}),"\n",(0,n.jsx)(t.p,{children:"Using a significance level of 0.05:"}),"\n",(0,n.jsx)(t.admonition,{title:"Conclusion",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Under the null hypothesis, there is a sufficiently large probability of seeing a difference greater than the observed value. The data are consistent with the null hypothesis."}),"\n",(0,n.jsxs)(t.li,{children:["Since our p-value is greater than 0.05, we ",(0,n.jsx)(t.strong,{children:"fail to reject"})," the null hypothesis."]}),"\n"]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"7-extra",children:"7. Extra"}),"\n",(0,n.jsx)(t.p,{children:"Let's see how our observed statistic compares to the overall simulated values!"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Create the histogram.\nbpd.DataFrame().assign(test_statistics=test_statistics).plot(kind='hist', bins= 10, density=True, ec='w')\n# Don't worry about these lines - you won't need to know it for this course!\nplt.axvline(x=observed_stat, c='black', linewidth=4);\nyticks = plt.gca().get_yticks()\nplt.yticks(yticks, np.round(yticks * 0.1, 2))\nplt.show()\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Distribution",src:s(6709).A+"",width:"640",height:"480"})}),"\n",(0,n.jsxs)(t.p,{children:["From this graph, we can see that more than half of the data are to the ",(0,n.jsx)(t.strong,{children:"right"})," of the black vertical line (our observed statistic), meaning we have a relatively high p-value!"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"code-example-2-tvd",children:"Code Example 2 (TVD)"}),"\n",(0,n.jsx)(t.h3,{id:"1-state-the-questionhypothesis-1",children:"1. State the question/hypothesis"}),"\n",(0,n.jsx)(t.p,{children:"We found that the color distribution of dogs seems different from that of all pets."}),"\n",(0,n.jsx)(o.A,{data:'{"columns":["Pets_Dist","Dogs_Dist"],"index":["black","golden","white"],"data":[[0.53,0.44],[0.21,0.12],[0.26,0.44]]}'}),"\n",(0,n.jsx)(t.p,{children:"To see whether this difference is due to random chance, we will test the following pair of hypotheses at the standard p = 0.05 significance level."}),"\n",(0,n.jsx)(t.admonition,{title:"Hypotheses",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Null Hypothesis:"}),"  The color distribution of dogs is the ",(0,n.jsx)(t.strong,{children:"same as"})," the color distribution of pets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Alternative Hypothesis:"})," The color distribution of dogs is ",(0,n.jsx)(t.strong,{children:"different from"})," the color distribution of pets."]}),"\n"]})}),"\n",(0,n.jsxs)(t.p,{children:["Since we are comparing two ",(0,n.jsx)(t.strong,{children:"categorical"})," distributions, we use Total Variation Distance (TVD) between the two distributions as our ",(0,n.jsx)(t.strong,{children:"test statistic"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"2-create-a-function-to-calculate-test-statistic-tvd",children:"2. Create a function to calculate test statistic (TVD)"}),"\n",(0,n.jsx)(t.p,{children:"Create a function to calculate the test statistic during every trial of our hypothesis test."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"def total_variation_distance(dist1, dist2):\n    '''Computes the TVD between two categorical distributions, \n       assuming the categories appear in the same order.'''\n    return np.abs((dist1 - dist2)).sum() / 2\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"3-compute-the-observed-statistic",children:"3. Compute the observed statistic"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"pets_color_dist = np.array([0.53, 0.21, 0.26])\ndogs_color_dist = np.array([0.44, 0.12, 0.44])\nobserved_tvd = total_variation_distance(dogs_color_dist, pets_color_dist)\nobserved_tvd\n"})}),"\n",(0,n.jsx)(t.p,{children:"0.18"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"4-simulate-the-hypothesis-test-under-the-null-hypothesis",children:"4. Simulate the hypothesis test under the null hypothesis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"n = 5000 # Number of simulations.\ntvds = np.array([]) # Array to keep track of the test statistic for each iteration.\n\n# Get sample df (dogs df)\ndog_df = full_pets[full_pets.get('Species') == 'dog'] \n\n# Calculte the smaple size (number of dogs)\nsample_size = dog_df.shape[0]\n\nfor i in np.arange(n): # Run the simulation `n` number of times\n    \n    # 1. Simulate the color distribution of dogs.\n    # Under the null hypothesis, color distribution of dogs should be equal to the color distribution of pets among the overall population\n    sample_distribution = np.random.multinomial(sample_size, pets_color_dist) / sample_size\n\n    # 2. Compute the test statistic (TVD)\n    new_tvd = total_variation_distance(sample_distribution, pets_color_dist)\n\n    # 3. Save the result\n    tvds = np.append(tvds, new_tvd)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This code will run the hypothesis test 5000 times, but a different reasonable number can be used instead. It is ",(0,n.jsx)(t.strong,{children:"crucial"})," to keep track of the test statistic each time our for-loop runs so that the number of simulated values can be stored."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'p_value = np.count_nonzero(tvds >= observed_tvd) / n\n\nprint("The observed value of the test statistic is:", observed_tvd)\nprint("The p-value is:", p_value)\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The observed value of the test statistic is:"})," 0.18",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.strong,{children:"The p-value is:"})," 0.4972"]}),"\n",(0,n.jsx)(t.p,{children:"Using a significance level of 0.05:"}),"\n",(0,n.jsx)(t.admonition,{title:"Conclusion",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Under the null hypothesis, there is a sufficiently large probability of seeing a difference greater than the observed value. The data are consistent with the null hypothesis."}),"\n",(0,n.jsxs)(t.li,{children:["Since our p-value is greater than 0.05, we ",(0,n.jsx)(t.strong,{children:"fail to reject"})," the null hypothesis."]}),"\n"]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"6-extra",children:"6. Extra"}),"\n",(0,n.jsx)(t.p,{children:"Let's see how our observed statistic compares to the overall simulated values!"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Create the histogram.\nbpd.DataFrame().assign(tvds=tvds).plot(kind='hist', density=True, bins=20, ec='w', figsize=(10, 5), title='Empirical Distribution of TVD Between Pets Colors and Dogs Colors')\n# Don't worry about these lines - you won't need to know it for this course!\nplt.axvline(observed_tvd, color='black', linewidth=4, label='Observed Statistic')\nplt.legend();\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Distribution",src:s(5155).A+"",width:"1000",height:"500"})}),"\n",(0,n.jsxs)(t.p,{children:["From this graph, we can see that almost half of the data are to the ",(0,n.jsx)(t.strong,{children:"right"})," of the black vertical line (our observed statistic), meaning we have a relatively high p-value!"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8597:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var n=s(4848);const i=e=>{let{data:t}=e,s=[],i=[],o="",r=[];if(t){const e=JSON.parse(t);s=e.columns||[],i=e.data||[],o=e.indexName||"Index",r=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:o}),s.map(((e,t)=>(0,n.jsx)("th",{children:e},t)))]})}),(0,n.jsx)("tbody",{children:i.map(((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:r[t]}),e.map(((e,t)=>{return(0,n.jsx)("td",{children:(s=e,"boolean"==typeof s?s.toString().charAt(0).toUpperCase()+s.toString().slice(1):s)},t);var s}))]},t)))})]})})}},5158:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(6540),i=s(4848);const o=function(e){let{src:t,sourceLink:s,aspectRatio:o=16/9}=e;const[r,a]=(0,n.useState)(0),[l,h]=(0,n.useState)(0),c=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=()=>{if(c.current){const e=c.current.offsetWidth;h(e/o)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[o]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:c,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:`${l}px`,border:"0",allowFullScreen:!0}},r)}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,i.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,i.jsx)("button",{onClick:()=>{a((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},6709:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hypothesis-test-200177f66e9f7f0e360b809bc6c6f3c8.png"},5155:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hypothesis-test2-7615aa5325b73c6c19541b78e2619a30.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);