"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76696,29263],{895739:(e,r,t)=>{t.d(r,{Z:()=>p});var n=t(431705),i=t(868808),a=t(720398),o=t(319453);let s={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},l=e=>{let r={};return e&&(r={objectiveTypes:[e]}),r},d=e=>{let{campaignId:r,objectiveType:t,partialCreate:n,catalogsFeedId:i,managedClientId:o,catalogId:s,productGroupId:l,resumeLastDraft:d}=e,c={};return r&&n&&(c.campaignId=r),t&&(c.objectiveType=t),"CATALOG_SALES"===t&&i&&(c.catalogsFeedId=i),s&&(c.catalogId=s),l&&(c.productGroupId=l),o&&(c.managedClientId=o),d&&(c.resumeLastDraft=!0),(0,a.Z)("/ads/create/",c)},c=e=>{let{campaignToolPreference:r,...t}=e;return(0,a.Z)("/automated/ads/create/",t)},u={overview:()=>"/",reporting:e=>{let r=e.objectiveType||null;delete e.objectiveType;let t={...e,...l(r)};return(0,a.Z)("/reporting/campaigns/",t)},reportingAdGroup:e=>{let{campaignId:r,objectiveType:t,showAllEntities:n,adGroupId:i,message:o}=e,d={campaignIds:[r],...n?s:{},...l(t),...i?{adGroupIds:[i]}:{},message:o};return(0,a.Z)("/reporting/adgroups/",d)},campaign:e=>{let{id:r,objectiveType:t}=e;return(0,a.Z)("/reporting/adgroups/",{campaignIds:[r],...l(t)})},editCampaign:e=>e.isAutomatedCampaign?u.editAutomated({campaignId:e.id,view:"campaign"}):u.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{let{id:r,objectiveType:t,showAllEntities:n,pinPromotionId:i,campaignId:o}=e;return"TEMPORARY_SHOPPING"===t||"CATALOG_SALES"===t?(0,a.Z)("/reporting/productgroups/",{adGroupIds:[r],...l(t)}):(0,a.Z)("/reporting/ads/",{adGroupIds:[r],...l(t),...n?s:{},...i?{pinPromotionIds:[i]}:{},...o?{campaignIds:[o]}:{}})},editAdGroup:e=>e.isAutomatedCampaign?u.editAutomated({campaignId:e.id,view:"campaign"}):u.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{let{id:r,adFilter:t}=e;return(0,a.Z)("/reporting/ads/",{pinPromotionIds:[r],...t?{adFilter:t}:{}})},editPinPromotion:e=>{let r=e.isCreatingPins?{isCreatingPins:!0}:{},t=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return u.editV2({adGroupId:e.adGroupId,view:"ad",...t,...r})},productGroup:e=>{let{id:r,name:t}=e;return(0,a.Z)("/reporting/productgroups/",{productGroupIds:[r],name:t})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",bulkEdit:e=>{let{entity_level:r,ids:t}=e;return(0,a.Z)("/ads/bulk_edit/",{entity_level:r,ids:t})},productgroups:()=>"/reporting/productgroups/",productitems:()=>"/reporting/productitems/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>u.pinPromotion(e),createPreferred:e=>{switch(e.campaignToolPreference){case o.k.ADS_MANAGER:return d(e);case o.k.AUTOMATED_CAMPAIGN:return c(e);default:return(0,a.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0)}},campaignMode:e=>(0,a.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:d,createAutomated:c,editV2:e=>(0,a.Z)("/ads/edit/",e),editAutomated:e=>(0,a.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,a.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,a.Z)("/ads/duplicate/",e),audiences:e=>(0,a.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{let{page:r,subSection:t,nextStepUrl:i}=e;switch(r){case n.kM.BILLING_HISTORY:return"/billing/history/";case n.kM.ORDER_LINES:return"/billing/order_lines/";case n.kM.PROMOTIONS:return"/billing/promotions/";case n.kM.DOCUMENTS:return"/billing/documents/";case n.kM.TAX_DOCUMENTS:return"/billing/tax_documents/";case n.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:let o={};return t&&(o.section=t),i&&(o.next_step_link_url=i),(0,a.Z)("/billing/",o)}},bulk:e=>{let{subSection:r,page:t,jobStarted:i}=e||{};switch(t){case n.fm.UPLOAD_TEMPLATE:return(0,a.Z)("/bulk_editor/upload_template/",{section:r});case n.fm.DOWNLOAD_TEMPLATE:return(0,a.Z)("/bulk_editor/download_template/",{section:r});case n.fm.HISTORY:return(0,a.Z)("/bulk_editor/history/",{section:r,job_started:i});case n.fm.BULK_ID_LIBRARY:return(0,a.Z)("/bulk_editor/bulk_id_library/",{section:r});case n.fm.RESOURCES:return(0,a.Z)("/bulk_editor/resources/",{section:r});default:return"/bulk_editor/"}},experiments:e=>{let{page:r,id:t}=e;switch(r){case n.S9.CREATE:return"/experiments/create/";case n.S9.VIEW_RESULTS:return"/experiments/view-results/";case n.S9.VIEW_REPORT:return`/experiments/view-results/${t}`;case n.S9.AB_TEST_CREATE:return"/experiments/ab-test/create";default:return"/experiments/"}},history:e=>(0,a.Z)("/history/",e),shopping:e=>u.reporting(l("TEMPORARY_SHOPPING")),pinterest_tag:e=>{let{page:r,subSection:t,platform:i,source:o,origin:s}=e;switch(r){case n.qp.PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:return"/conversions/events-overview/";case n.qp.PINTEREST_EVENT_HISTORY:if(o)return(0,a.Z)("/conversions/event-history/",{source:o});return"/conversions/event-history/";case n.qp.CONVERSION_HEALTH:return"/conversions/health/";case n.qp.PINTEREST_TEST_EVENTS:return(0,a.Z)("/conversions/test-events/",{subPage:t,platform:i});case n.qp.PINTEREST_TAG:return(0,a.Z)("/conversions/tag/",{subPage:t,platform:i});case n.qp.PINTEREST_TAG_MANUAL_SETUP_FLOW:let l=(0,a.Z)("/conversions/tag_manual_setup/",{origin:s});if(i)return(0,a.Z)(l,{platform:i,source:o});return l;case n.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case n.qp.CONVERSION_UPLOAD:return(0,a.Z)("/conversions/upload/",{subPage:t});case n.qp.UPLOAD_HISTORY:return(0,a.Z)("/conversions/history/",{subPage:t});case n.qp.PCA_UPLOAD_HISTORY:return(0,a.Z)("/conversions/pca_history/",{subPage:t});case n.qp.PCA_UPLOAD:return(0,a.Z)("/conversions/pca_upload/",{subPage:t});case n.qp.CONVERSIONS_API_MANUAL_SETUP_FLOW:if(o||s)return(0,a.Z)("/conversions/api_manual_setup/",{source:o,origin:s});return"/conversions/api_manual_setup/";case n.qp.CONVERSIONS_API_PARTNER_SETUP_FLOW:if(o||s)return(0,a.Z)("/conversions/api_partner_setup/",{source:o,origin:s});return"/conversions/api_partner_setup/";case n.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case n.qp.PINTEREST_SETUP_API:return"/conversions/setup-api/";case n.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";case n.qp.PAYLOAD_HELPER:return"/conversions/payload-helper/";case n.qp.CONVERSIONS:return"/conversions/";case n.qp.NOCODE_CONVERSIONS_API_SETUP_FLOW:return"/conversions/pinterest_capi_connect/";case n.qp.PINTEREST_EVENT_HISTORY_CAPI_TAB:return"/conversions/event-history/#conversionsAPI";case n.qp.PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:return"/conversions/events-overview/#conversionsAPI";default:return"/conversions/tag/"}},"pin-builder":e=>(0,a.Z)("/pin-builder/",e),purchases:()=>u.reporting(l("PURCHASE")),awareness_reserved:()=>u.reporting(l("IMPRESSION")),engagement:()=>u.reporting(l("BILLABLE_ENGAGEMENT")),videos:()=>u.reporting(l("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>u.reporting(l("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>u.reporting(l("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>u.reporting(l("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,a.Z)("/reporting/preferences/",e),report_builder:e=>(0,a.Z)("/report-center/builder/",e),report_history:e=>(0,a.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,a.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,a.Z)("/report-center/download/",e),awareness:()=>u.reporting(l("AWARENESS")),traffic:()=>u.reporting(l("TRAFFIC")),app_installs:()=>u.reporting(l("APP_INSTALL")),catalog_sales:()=>u.reporting(l("CATALOG_SALES")),web_conversion:()=>u.reporting(l("WEB_CONVERSION")),video_view:()=>u.reporting(l("VIDEO_VIEW")),quick_promote:e=>(0,a.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,a.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source",campaign_insights:e=>{let r=`/campaign-insights/${e.campaignId}/`;if(e.queryParams){let{start_date:t,end_date:n,comp_start_date:a,comp_end_date:o}=e.queryParams;r+=`?${(0,i.XP)({start_date:t,end_date:n,comp_start_date:a,comp_end_date:o})}`}return r},product_group_reporting:e=>`/campaign-insights/${e.campaignId}/product-group/${e.productGroupId}`,media_planner:e=>(0,a.Z)("/media_planner/",e),ad_spend_optimizer:e=>(0,a.Z)("/msot-optimizer/",e)},p=u},729263:(e,r,t)=>{t.d(r,{default:()=>o});var n=t(895739),i=t(635258),a=t(54473);function o(e,r,t){var o;let s;if(!n.Z[e])throw Error(`unknown url key: ${e}`);t||(t={});let l=n.Z[e](t),d=(s=null,(o=t)&&(s=o.advertiserId||null),!s&&r&&(s=r.id),s),c=!!t.absolutify;return"string"==typeof d&&(l="/advertiser/"+d+l),c&&(l=(0,a.Z)(l,void 0,i.KUo)),l}},717067:(e,r,t)=>{t.d(r,{Z:()=>n});function n(e){let r=Math.round(e/1e3),t=Math.floor(r/60),n=r%60;return t+":"+(n<10?"0":"")+n}},289762:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(167912),i=t(244311),a=t(286102);let o=function({strategy:e,query:r,variables:t,options:o,useGetLegacyResource:s,useGetLegacyPaginatedResource:l,useGetLegacyData:d}){if("GRAPHQL"===e){let e=(0,i.getRequest)(r);return(0,n.useLazyLoadQuery)(e,t,o)}if(null!=s&&null!=l&&null!=d)throw Error("Only pass one of those calls from the list: \n[useGetLegacyResource, useGetLegacyPaginatedResource, useGetLegacyData]\nto useLazyLoadQueryOrLegacy");if(null!=d){let e=d(t);if(!e)return null;let{selections:n}=(0,i.getRequest)(r).fragment;return(0,a.Z)(n,{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null})}if(null!=s){let{data:e,refresh:n}=s(t);if(null==e)return null;let{selections:o}=(0,i.getRequest)(r).fragment;return(0,a.Z)(o,{kind:"LegacyData",singularLegacyData:e,refetchInfo:{refetch:n},paginationInfo:null})}if(null!=l){let{data:e,refresh:n,isFetching:o,isAtEnd:s,fetchMore:d}=l(t);if(null==e)return null;let{selections:c}=(0,i.getRequest)(r).fragment;return(0,a.Z)(c,{kind:"PaginationLegacyData",paginationLegacyData:e,refetchInfo:{refetch:n},paginationInfo:{isLoadingNext:o,hasNext:!s,loadNext:d}},null)}throw Error("useGetLegacyData or useGetLegacyResource must be provided")}},715824:(e,r,t)=>{t.d(r,{ZP:()=>i,mP:()=>n});let n="…";function i(e,r=80,t=n,a=!1){let o;if(!e)return"";if(e.length<=r)return e;if(" "!==e[r-1]&&" "===e[r]||a)o=e.substring(0,r);else{let t=e.lastIndexOf(" ",r);o=e.substring(0,t)}return(o=o.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+t}},566344:(e,r,t)=>{t.d(r,{AO:()=>g,Ag:()=>a,C0:()=>l,L1:()=>p,Vi:()=>o,Wm:()=>m,YD:()=>u,kS:()=>i,oo:()=>s,p3:()=>_,vC:()=>d,vI:()=>c});var n=t(697254);let i="https://www.pinterest.com/business/hub/",a="https://www.pinterest.com/homefeed/",o="www.pinterest.com",s="https://www.pinterest.com/_/_/help",l=`${(0,n.Z)({site:"www"})}`,d=(0,n.Z)({site:"developers"}),c=`${(0,n.Z)({site:"sterling"})}`,u=`${(0,n.Z)({site:"analytics"})}`,p=`${(0,n.Z)({site:"trends"})}`,_=`${(0,n.Z)({site:"www",path:"/business/catalogs/?advertiserId="})}`,g=`${(0,n.Z)({site:"business"})}`,m="https://www.pinterest.com/_/_/policy"},319453:(e,r,t)=>{t.d(r,{T:()=>i,k:()=>n});let n={ADS_MANAGER:"ADS_MANAGER",AUTOMATED_CAMPAIGN:"AUTOMATED_CAMPAIGN"},i=e=>Object.values(n).includes(e)},948938:(e,r,t)=>{t.d(r,{Z:()=>A});var n=t(667294),i=t(883119),a=t(559028),o=t(357013),s=t(144326),l=t(240760),d=t(297728),c=t(415384),u=t(715824),p=t(228867),_=t(453854),g=t(383399),m=t(115642),E=t(811093),I=t(701918),f=t(785893);let A=function(e){let r=(0,s.ZP)(),{isCloseupRelatedPinsAboveTheFoldEnabled:t}=(0,m.x4)(),{followerCount:A,fullName:h,isVerifiedIdentity:P,imageUrl:T,isPromoted:v,isVerifiedMerchant:S,profileUrl:O,sponsorName:N,sponsorshipStatus:w,sponsorUsername:R="",verified:y,color:b="default",onAvatarClick:Z,onNavigateClick:x,onNavigateSponsorClick:C,openNewTab:L,isLeadPin:D=!1}=e,k=(0,d.F)().checkExperiment("mweb_web_android_ios_backend_clbc_display_controls").anyEnabled,M=(0,g.Z)(),G=M.isAuth?M?.avatar_color_index:void 0,V=(0,c.Z)(r.bt("Lien vers l’avatar de {{ fullName }}", "{{ fullName }} avatar link", "creatorCardProfile.avatar.accessibilityLabel", undefined, true),{fullName:h??""}),j=(0,f.jsx)(_.q,{children:({active:e,focused:r,hovered:n,onBlur:o,onFocus:s,onMouseEnter:l,onMouseLeave:d})=>(0,f.jsx)(i.xu,{onBlur:o,onFocus:s,onMouseDown:()=>{Z&&Z()},onMouseEnter:l,onMouseLeave:d,children:(0,f.jsx)(i.zd,{rounding:"circle",wash:n||e||r,children:(0,f.jsx)(a.qE,{accessibilityLabel:V,color:G,name:h??"",size:t?"xs":"md",src:T??"",verified:y})})})}),U=(0,u.ZP)(h,70),q=(0,f.jsxs)(n.Fragment,{children:[v&&(0,f.jsx)(i.xv,{lineClamp:1,size:"200",weight:"bold",children:r.bt("Sponsorisée par", "Promoted by", "indicating the username of the person who promoted the pin", undefined, true)}),(0,f.jsx)(i.xu,{"data-test-id":"creator-profile-name",children:(0,f.jsx)(i.xu,{maxWidth:270,children:(0,f.jsx)(i.xv,{color:b,size:"200",weight:D||t?"normal":"bold",children:P||S?(0,f.jsx)(i.xu,{"data-test-id":"verified-name",children:(0,f.jsx)(I.Z,{badgeSize:"xs",badgeSpacing:2,fullName:U,isVerifiedIdentity:P,isVerifiedMerchant:S})}):h})})})]}),B=R&&N||E.j.includes(w)&&k,z=`/${R??""}/`,H=!(P||S)&&!M.isAuth;return(0,f.jsxs)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},"data-test-id":"creator-card-profile",display:"flex",marginEnd:-1,marginStart:-1,children:[(0,f.jsx)(i.xu,{"data-test-id":"creator-avatar",flex:"none",paddingX:1,children:O?(0,f.jsx)(i.Tg,{dataTestId:"creator-avatar-link",href:O,onTap:x,rel:(0,p.Z)(O)?"none":"nofollow",target:L?"blank":null,children:j}):j}),(0,f.jsxs)(i.xu,{children:[O?(0,f.jsx)(i.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,f.jsx)(i.rU,{dataTestId:"creator-profile-link",href:O,onClick:x,rel:(0,p.Z)(O)?"none":"nofollow",target:L?"blank":null,underline:"none",children:q})}):q,B?(0,f.jsx)(i.xu,{"data-test-id":"sponsor-title",display:"flex",paddingX:1,children:(0,f.jsx)(E.Z,{href:z,isPromoted:v,onNavigateSponsorClick:C,sponsorName:N,sponsorshipStatus:w,sponsorUsername:R})}):!!A&&!H&&!t&&(0,f.jsx)(i.xu,{"data-test-id":"follower-count",display:"flex",paddingX:1,children:(0,f.jsx)(i.xv,{color:b,size:"200",children:(0,l.nk)(r.nbt(["{{ followerCount }} abonné", "{{ followerCount }} abonnés"], A, "closeup.creator.followerCount", true),{followerCount:(0,f.jsx)(o.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:A},A)})})})]})]})}},701918:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(667294),i=t(883119),a=t(598259),o=t(785893);let s=function({badgeSize:e,badgeSpacing:r,fullName:t,isVerifiedIdentity:s,isVerifiedMerchant:l,truncate:d=!1,size:c="200"}){let u=t.split(" "),p=u.slice(0,u.length-1).join(" "),_=" ".concat(u[u.length-1]);return d?(0,o.jsxs)(i.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,o.jsx)(i.xv,{lineClamp:1,size:c,weight:"bold",children:t}),(0,o.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{top:r}},flex:"none",paddingX:1,position:"relative",children:(0,o.jsx)(a.Z,{isVerifiedIdentity:s,isVerifiedMerchant:l,size:e})})]}):(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)("span",{children:p}),(0,o.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[_," ",(0,o.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{top:r}},display:"inlineBlock",flex:"none",position:"relative",children:(0,o.jsx)(a.Z,{isVerifiedIdentity:s,isVerifiedMerchant:l,size:e})})]})]})}},508629:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(468808);function i(e,r){return t=>t((0,n.U)("BoardSectionResource",{options:{field_set_key:r||"board_page",section_id:e}}))}},255507:(e,r,t)=>{function n(e){return{type:"PIN_BETTER_SAVE",payload:e}}function i(e){return{type:"PIN_BETTER_SAVE_CUTOUT",payload:e}}function a(e){return{type:"PIN_BETTER_UNSAVE",payload:e}}function o(e){return{type:"PIN_BETTER_UNSAVE_CUTOUT",payload:e}}function s(e){return{type:"PIN_BETTER_SELECT_BOARD_OR_SECTION",payload:e}}function l(e){return{type:"PIN_BETTER_SELECT_BOARD_CUTOUT",payload:e}}function d(e){return{type:"POST_REPIN_MORE_IDEAS_UPSELL_SHOWN",payload:{boardId:e}}}t.d(r,{ND:()=>d,Vp:()=>s,a1:()=>n,b6:()=>l,jg:()=>a,o4:()=>i,ti:()=>o})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76696.fr-d3a41e0261bcf565.mjs.map