(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"9t4x":function(e,t,a){"use strict";var n=a("MVZn"),s=a.n(n),i=a("lSNA"),r=a.n(i),l=a("cDcd"),c=a.n(l),o=a("TSYQ"),m=a.n(o),d=a("17x9"),u=a.n(d),p=a("7lYa"),k=a("CFIE");function b(e){const t=e.badge;let a;if("milestone"===t.type){const e=t.solved,n=void 0===e?0:e,s=t.total_challenges,i=void 0===s?0:s,r=t.mockTestsProgress,l=void 0===r?{}:r,c=l.solved_count,o=void 0===c?0:c,m=l.total_count,d=void 0===m?0:m;a=Math.round((n+o)/(i+d)*100)}else a=Object(k.i)(t);return c.a.createElement("div",{className:"skill-progress-bar"},c.a.createElement(p.a,{value:a,theme:"theme-m"}),c.a.createElement("div",{className:"progress-count text-content"},c.a.createElement("span",{className:"percentage"},a,"%"),c.a.createElement("span",{className:"points-left"},Object(k.a)(t,"dashboard"))))}b.propTypes={badge:u.a.object};var E=a("PsEu"),v=a("eUGL"),g=a("eOGF"),f=a("oBtd"),N=a("Z/B0");a("V9bm");class h extends l.PureComponent{constructor(){super(...arguments),r()(this,"sendMetrics",e=>{const t=this.props,a=t.track,n=t.position,i=a.type,r=a.slug,l=a.badge_type,c=a.level,o=a.stars,m=!!e.target.closest("button")?"button":"card";let d;d="badge"===i?{attribute1:l,attribute2:c,attribute3:o}:{attribute1:r},f.a.batch_track("Click","BadgeTrackResumePractice",s()({},d,{attribute4:m,attribute8:n}))})}getLink(){const e=this.props.track,t=e.type,a=e.slug,n=e.taxonomy;return e.slug===N.k.INTERVIEW_PREPARATION_KIT?"/interview/"+N.k.INTERVIEW_PREPARATION_KIT:"branding"===t?"/interview/"+a:"milestone"===t?"/interview/preparation-kits/"+a:"badge"===t?Object(k.e)(e):Object(g.a)(`/domains/${"tutorial"===n?"tutorials/":""}${a}`,{filters:{status:["unsolved"]}})}trackToBadgeConverter(e){const t=e.slug===N.k.INTERVIEW_PREPARATION_KIT;return s()({},e,{badge_type:e.slug,badge_name:e.name,stars:0,level:0,total_challenges:e.total_challenges||e.challenges_count,category_name:t?"Interview Preparation":e.category_name})}render(){const e=this.props,t=e.track,a=e.primary,n=e.className,s=e.buttonText,i=void 0===s?"Continue Practice":s,r=t.type,l=this.getLink(),o=["track","branding","milestone"].includes(r)?this.trackToBadgeConverter(t):t;return c.a.createElement("div",{className:m()("skill-progress-card",n)},c.a.createElement(v.a,{cardTitle:o.category_name,primaryCard:a,title:o.badge_name,detail:c.a.createElement(b,{badge:o}),buttonText:i,buttonClass:m()("ui-btn-large",a?"ui-btn-primary":"ui-btn-line-primary"),onClick:this.sendMetrics,link:l}),"badge"===o.type&&c.a.createElement("div",{className:"badge-wrap"},c.a.createElement(E.a,{badge:o,shadow:!0})))}}t.a=h},DNJ5:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a("pVnL"),s=a.n(n),i=a("J4zp"),r=a.n(i),l=a("QILm"),c=a.n(l),o=a("cDcd"),m=a.n(o),d=a("MGin"),u=a("wd/R"),p=a.n(u),k=a("EfbJ"),b=a("veGU"),E=a("YZNL"),v=a("OEX3"),g=a("IreD"),f=a("j//G"),N=a("exN9"),h=a("gpaR");a("rlNo");function y(){return m.a.createElement(d.Link,{to:"/mock-tests","data-event-category":"HRC MockTests","data-event-label":"ViewAllMockTests","data-analytics":"ViewAllMockTests"},m.a.createElement(E.a,{className:"mock-test-promo-card",active:!0,layer:1},m.a.createElement("h2",{className:"mock-test-promo-title"},"View All Mock Tests"),m.a.createElement("p",{className:"mock-test-promo-description"},"Take the mock tests and analyze how you would perform in an actual interview"),m.a.createElement(v.f,{className:"mock-test-promo-cta"},"View Mock Tests"),m.a.createElement(b.a,{className:"mock-test-promo-icon","aria-hidden":"true",focusable:"false"})))}t.b=Object(k.b)((function(e){const t=e.appUtil.isEmailVerificationRequired,a=e.position,n=e.mockTest,i=n.unique_id,l=n.duration,u=n.name,k=n.icon_url,b=n.total_attempts,y=n.total_questions,T=n.status,w=n.score,R=n.completed_at,S=n.report_url,_=c()(e,["appUtil","position","mockTest"]),C=Object(o.useState)(!1),A=r()(C,2),I=A[0],O=A[1],P=Object(o.useState)(!1),x=r()(P,2),j=x[0],V=x[1],M=Object(g.e)(l),L=p()(R).format("MMM DD YYYY"),D=()=>{t({},{type:"info",data:"Please signup or login to take this test."})||O(!I)},J=()=>{V(!j)},Y=[f.a.STARTED,f.a.PROCESSING].includes(T),G=T===f.a.PASSED,U=Y||G,z={"data-event-category":"HRC MockTests","data-event-value":a,"data-cd-mock-test-id":i,"data-attr1":a,"data-attr2":i},K=U?"RetakeMockTest":"TakeMockTest";return m.a.createElement(E.a,s()({className:"mock-test-card",layer:1},_),k&&m.a.createElement("img",{src:k,alt:"",className:"mock-test-logo"}),m.a.createElement("div",{className:"mock-test-details"},m.a.createElement("h3",{className:"mock-test-title"},u),m.a.createElement("div",{className:"mock-test-attempts"},G?m.a.createElement("span",null,"Score: ",m.a.createElement("strong",null,w,"%")):`(${b} Attempts)`)),m.a.createElement("div",{className:"mock-test-stats"},U?m.a.createElement("span",null,"Last Attempted on ",m.a.createElement("strong",null,L)):m.a.createElement(o.Fragment,null,m.a.createElement("span",null,m.a.createElement("strong",null,y)," Questions"),", ",m.a.createElement("span",null,m.a.createElement("strong",null,M)))),m.a.createElement("div",{className:"mock-test-actions"},m.a.createElement(v.e,s()({onClick:D,className:"mock-test-cta",disabled:Y},z,{"data-event-label":K,"data-analytics":K}),U?"Retake":"Take Test"),G&&m.a.createElement(d.Link,s()({className:"text-link mock-test-report-link",to:S,target:"_blank"},z,{"data-event-label":"ViewReport","data-analytics":"ViewReport"}),"View Report"),Y&&m.a.createElement("button",s()({className:"btn-as-link text-link mock-test-status-btn",onClick:J},z,{"data-event-label":"ViewStatus","data-analytics":"ViewStatus"}),"View Status")),I&&m.a.createElement(N.a,{onClose:D,mockTest:e.mockTest}),j&&m.a.createElement(h.a,{onClose:J,mockTestName:u}))}))},L5Qz:function(e,t,a){"use strict";var n=a("J4zp"),s=a.n(n),i=a("cDcd"),r=a.n(i),l=a("TSYQ"),c=a.n(l),o=a("YZNL"),m=a("OEX3"),d=a("EfbJ");a("S7zJ");t.a=Object(d.b)((function(e){const t=e.className,a=e.appUtil.assetPath,n=e.hideElement,l=e.sendVerification,d=e.sentStatus,u=e.isDisabled,p=e.sendingVerification,k=e.position,b=e.profile;if(n)return null;const E=Object(i.useState)(!1),v=s()(E,2),g=v[0],f=v[1],N=Object(i.useState)(0),h=s()(N,2),y=h[0],T=h[1];Object(i.useEffect)(()=>{f(u),T(u?120:0)},[u]),Object(i.useEffect)(()=>{if(!y)return void f(!1);const e=setInterval(()=>{T(y-1)},1e3);return()=>clearInterval(e)},[y]);const w=d?"svgs/mail-sent.svg":"svgs/mail-not-sent.svg";return r.a.createElement(o.a,{layer:-1,className:c()("email-verification-card",t,{"mail-sent":d})},r.a.createElement("img",{src:a(w),className:"email-verification-card-status",alt:d?"mail sent":"resend mail"}),r.a.createElement("div",{className:"email-verification-card-content"},r.a.createElement("h3",{className:"email-verification-card-title"},"Confirm your",r.a.createElement("span",{className:"email-verification-card-title-highlight"}," email address"),"."),r.a.createElement("p",{className:"email-verification-card-description"},"Please check your Inbox. We’ve sent a link to confirm your email address. Once you confirm, you will be able to access all the features of our site, including",r.a.createElement("span",{className:"email-verification-card-description-highlight"}," ","Jobs, Leaderboard, Recommendations and more"),"."),r.a.createElement("div",{className:"email-verification-card-btns"},d&&!p&&r.a.createElement("span",{className:"email-verification-card-message"},"Email Sent ",r.a.createElement("i",{className:"ui-icon-success"})),r.a.createElement(m.h,{className:"email-verification-card-cta",size:"large",loading:p,onClick:l,"data-analytics":"ResendConfirmationEmail","data-attr3":"card","data-attr8":k,disabled:g},function(e,t,a){return e?"Sending Confirmation Email":t?`Retry in ${a} seconds`:"Resend Confirmation Email"}(p,g,y))),g&&r.a.createElement("p",{className:"email-verification-card-error"},"* We have sent the confirmation link to ",b.email)))}))},MTUB:function(e,t,a){"use strict";var n=a("lSNA"),s=a.n(n),i=a("cDcd"),r=a.n(i),l=a("ANjH"),c=a("/MKj"),o=a("fe33"),m=a("eUGL");class d extends r.a.Component{constructor(){super(...arguments),s()(this,"updateInterviewTryStatus",()=>{const e=this.props,t=e.profile,a=e.profileActions;t&&t.username&&!t.tried_interview_prep&&a.updateProfile("me",{tried_interview_prep:!0})})}render(){const e=this.props,t=e.className,a=e.position,n=r.a.createElement("p",null,"Get interview ready for top companies by solving ",r.a.createElement("br",null)," an interview preparation kit.");return r.a.createElement(m.a,{cardTitle:"Preparation Kits",title:"Interview Preparation Kit",detail:n,buttonText:"View all Kits",buttonClass:"ui-btn-large ui-btn-primary",link:"/interview",onClick:this.updateInterviewTryStatus,className:t,"data-analytics":"InterviewPromotionCard","data-attr8":a})}}d=Object(l.d)(Object(c.c)(null,e=>({profileActions:Object(l.b)(o.a,e)})))(d),t.a=d},S7zJ:function(e,t,a){},V9bm:function(e,t,a){},rlNo:function(e,t,a){},v2uj:function(e,t,a){"use strict";var n=a("lSNA"),s=a.n(n),i=a("cDcd"),r=a.n(i),l=a("17x9"),c=a.n(l),o=a("TSYQ"),m=a.n(o),d=a("eUGL");class u extends i.PureComponent{getContent(){return this.props.hasRecent?"HackerRank offers a variety of skills for you to practice. Feel free to choose an additional programming language too.":"Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."}render(){const e=this.props,t=e.text,a=e.hasRecent,n=e.className,s=e.position,i=this.getContent();return r.a.createElement("div",{className:m()("explore-skill-card",n)},r.a.createElement(d.a,{cardTitle:t,title:a?"Add another skill":"Add your first skill",detail:i,buttonText:"Explore Skills",buttonClass:"ui-btn-large ui-btn-line-primary",onClick:this.props.animateToSkills,"data-analytics":a?"AddAnotherSkill":"AddFirstSkill","data-attr8":s}))}}s()(u,"propTypes",{text:c.a.string.isRequired,hasRecent:c.a.bool.isRequired,animateToSkills:c.a.func.isRequired,position:c.a.number}),s()(u,"defaultProps",{text:"",hasRecent:!1}),t.a=u}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_dashboard~hackerrank_r_dashboard_v2-ce12a8d6.js.map