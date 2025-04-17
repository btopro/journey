import{HAXCMSLitElementTheme as A,autorun as s,toJS as r,store as l,css as c,html as t}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";import"@haxtheweb/haxcms-elements/lib/ui-components/magic/site-collection-list.js";import"@haxtheweb/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";import"@haxtheweb/simple-cta/simple-cta.js";import{DDDAllStyles as j}from"@haxtheweb/d-d-d/lib/DDDStyles.js";import"@haxtheweb/simple-tooltip/simple-tooltip.js";import"@haxtheweb/simple-icon/lib/simple-icon-button-lite.js";import"@haxtheweb/scroll-button/scroll-button.js";import{licenseList as M}from"@haxtheweb/license-element/license-element.js";var d=Object.freeze,H=Object.defineProperty,e=(o,n)=>d(H(o,"raw",{value:d(n||o.slice())}));/**
* Copyright 2025 btopro
* @license Apache-2.0, see License.md for full text.
*/var h,m,p,g,v,u,f,b,x,y,w,k,z,S,T,I;class C extends A{static get tag(){return"custom-journey-theme"}constructor(){super(),this.HAXCMSThemeSettings.autoScroll=!1,this.siteTheme="",this._items=[],this.location=null,this.activeItem={},this.basePath=null,this.manifest={},this.t={readMore:"Read more",home:"Home"};try{this.basePath=globalThis.document.querySelector("base").href}catch(n){this.basePath=globalThis.location.origin}s(()=>{this.manifest=r(l.manifest);let n=new M;this.manifest.license&&n[this.manifest.license]&&(this.licenseName=n[this.manifest.license].name,this.licenseLink=n[this.manifest.license].link,this.licenseImage=n[this.manifest.license].image),this._items=this.getItemChildren(null)}),s(()=>{this.activeItem=r(l.activeItem)}),s(()=>{let n=r(l.location);globalThis.document&&globalThis.document.startViewTransition?globalThis.document.startViewTransition(()=>{this.shadowRoot.querySelector(".lower-header-box").scrollIntoView(),this.location=n,this.shadowRoot.querySelector(".lower-header-box").scrollIntoView(),setTimeout(()=>{this.shadowRoot.querySelector(".lower-header-box").scrollIntoView()},10)}):this.location=n})}getItemChildren(n){if(this.manifest&&this.manifest.items)return this.manifest.items.filter(a=>a.parent===n)}static get properties(){return{...super.properties,activeItem:{type:Object},location:{type:String},basePath:{type:String},_items:{type:Array},licenseName:{type:String},licenseLink:{type:String},licenseImage:{type:String},siteTheme:{type:String,reflect:!0,attribute:"site-theme"}}}HAXCMSGlobalStyleSheetContent(){return[...super.HAXCMSGlobalStyleSheetContent(),c(h||(h=e(['\n      :root {\n        --haxcms-site-theme-low-tone: white;\n        --haxcms-site-theme-high-tone: var(--ddd-theme-default-coalyGray);\n      }\n      body {\n        padding: var(--ddd-spacing-0);\n        margin: var(--ddd-spacing-0);\n        background-color: var(--haxcms-site-theme-low-tone);\n      }\n      custom-journey-theme::before {\n        height: 100vh;\n        content: "";\n        border-left: 4px dashed var(--haxcms-site-theme-color-2);\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 50%;\n        margin: 0 auto;\n        z-index: -1;\n      }\n      @media (max-width: 800px) {\n        custom-journey-theme::before {\n          display: none;\n        }\n      }\n      body.dark-mode {\n        background-color: var(--haxcms-site-theme-high-tone);\n        color: var(--haxcms-site-theme-low-tone);\n      }\n      @media (prefers-color-scheme: dark) {\n        body {\n          background-color: var(--haxcms-site-theme-high-tone);\n          color: var(--haxcms-site-theme-low-tone);\n        }\n      }\n      '])))]}static get styles(){return[j,super.styles,c(m||(m=e(['\n        :host {\n          scroll-behavior: auto;\n          display: block;\n          padding: var(--ddd-spacing-0);\n          margin: var(--ddd-spacing-0);\n          --haxcms-site-theme-color-1: var(--ddd-primary-2);\n          --haxcms-site-theme-color-2: var(--ddd-primary-8);  \n        }\n\n        :host([site-theme="earth"]) {\n          --haxcms-site-theme-color-1: var(--ddd-theme-default-opportunityGreen);\n          --haxcms-site-theme-color-2: var(--ddd-theme-default-futureLime);          \n        }\n\n        :host([site-theme="water"]) {\n          --haxcms-site-theme-color-1: var(--ddd-theme-default-creekTeal);\n          --haxcms-site-theme-color-2: var(--ddd-theme-default-creekLight);          \n        }\n\n        :host([site-theme="fire"]) {\n          --haxcms-site-theme-color-1: var(--ddd-theme-default-original87Pink);\n          --haxcms-site-theme-color-2: var(--ddd-theme-default-discoveryCoral);          \n        }\n\n        :host([site-theme="sand"]) {\n          --haxcms-site-theme-color-1: var(--ddd-primary-15);\n          --haxcms-site-theme-color-2: var(--ddd-primary-10);         \n        }\n\n        header {\n          display: flex;\n          text-align: center;\n          justify-content: center;\n          align-items: center;\n          color: var(--haxcms-site-theme-low-tone);\n          background-color: var(--haxcms-site-theme-color-1);\n          height: 50vh;\n          overflow: hidden;\n          padding: var(--ddd-spacing-10);\n          z-index: 1;\n          transition: .3s all ease-in-out;\n        }\n        .theme-picker {\n          z-index: 1;\n          color: var(--haxcms-site-theme-color-2);\n          background-color: var(--haxcms-site-theme-color-1);\n          padding: var(--ddd-spacing-1);\n          --simple-icon-width: var(--ddd-spacing-8);\n          --simple-icon-height: var(--ddd-spacing-8);\n        }\n        header .theme-picker {\n          position: absolute;\n          color: var(--haxcms-site-theme-color-1);\n          background-color: var(--haxcms-site-theme-color-2);\n          right: var(--ddd-spacing-2);\n          top: var(--ddd-spacing-2);\n        }\n        .lower-header-box {\n          background-color: var(--haxcms-site-theme-color-2);\n          transition: .3s all ease-in-out;\n          height: var(--ddd-spacing-12);\n          padding: var(--ddd-spacing-6);\n          display: flex;\n          justify-content: center;\n          z-index: 1;\n          position: relative;\n        }\n\n        .author a {\n          color: var(--haxcms-site-theme-low-tone);\n          text-decoration: none;\n        }\n        footer .author .spacing {\n          display: flex;\n          justify-content: space-evenly;\n          align-items: center;\n        }\n        footer .author {\n          color: var(--haxcms-site-theme-high-tone);\n        }\n        footer .author h1 {\n          font-size: var(--ddd-font-size-m);\n        }\n        footer .author h2 {\n          font-size: var(--ddd-font-size-s);\n        }\n        .author-image {\n          border-radius: 50%;\n          width: 15vw;\n          height: 15vw;\n          border: 4px solid var(--haxcms-site-theme-color-2)\n        }\n        .author-image:hover,\n        .author-image:focus-within {\n          transition: .3s all ease-in-out;\n          transform: scale(1.1);\n        }\n        footer .author-image {\n          width: 5vw;\n          height: 5vw;\n          border: 4px solid var(--haxcms-site-theme-color-1)\n        }\n        header h1 {\n          font-size: var(--ddd-font-size-4xl);\n        }\n\n        header h2 {\n          font-size: var(--ddd-font-size-xl);\n        }\n\n        article {\n          display: block;\n        }\n        .articles article {\n          display: flex;\n        }\n        simple-icon-button-lite {\n          --simple-icon-width: var(--ddd-spacing-12);\n          --simple-icon-height: var(--ddd-spacing-12);\n          padding: 0;\n          border-radius: 50%;\n        }\n        simple-tooltip {\n          --simple-tooltip-font-size: var(--page-section-tooltip-font-size, var(--ddd-font-size-s, 16px));\n          --simple-tooltip-background: var(--page-section-tooltip-background, #000000);\n          --simple-tooltip-opacity: var(--page-section-tooltip-opacity, 0.8);\n          --simple-tooltip-text-color: var(--page-section-tooltip-text-color, var(--haxcms-site-theme-low-tone));\n          --simple-tooltip-delay-in: var(--page-section-tooltip-delay-in, 300);\n          --simple-tooltip-delay-out: var(--page-section-tooltip-delay-out, 0);\n          --simple-tooltip-duration-in: var(--page-section-tooltip-duration-in, 300);\n          --simple-tooltip-duration-out: var(--page-section-tooltip-duration-out, 0);\n        }\n        scroll-button {\n          --scroll-button-color: var(--haxcms-site-theme-color-2);\n          --scroll-button-background-color: var(--haxcms-site-theme-color-1);\n          --simple-icon-width: var(--ddd-spacing-8);\n          --simple-icon-height: var(--ddd-spacing-8);\n        }\n        .article-link-icon.top {\n          color: var(--haxcms-site-theme-color-1);\n          margin: 0 var(--ddd-spacing-4);\n        }\n        .article-link-icon.top:not(.active) simple-icon-button-lite::part(button):hover,\n        .article-link-icon.top:not(.active) simple-icon-button-lite::part(button):focus-within {\n          transition: all 0.3s ease-in-out;\n          transform: scale(1.05);\n          background-color: white;\n          opacity: 1;\n        }\n        .article-link-icon.top::before {\n          border-top: 4px dashed var(--haxcms-site-theme-low-tone);\n          content: "";\n          display: block;\n          width: 80px;\n          position: absolute;\n          margin-top: 22px;\n        }\n        .article-link-icon.top:last-of-type::before {\n          display: none;\n        }\n        .article-link-icon.top  simple-icon-button-lite::part(button) {\n          background-color: var(--haxcms-site-theme-color-2);\n          transition: .3s all ease-in-out;\n        }\n        .article-link-icon.active simple-icon-button-lite.article {\n          color: var(--haxcms-site-theme-low-tone);\n        }\n        .article-link-icon.active  simple-icon-button-lite::part(button) {\n          background-color: var(--ddd-primary-4);\n        }\n        a {\n          display: block;\n        }\n        \n        simple-icon-button-lite.article {\n          color: var(--haxcms-site-theme-color-1);\n        }\n        simple-icon-button-lite::part(button) {\n          height: auto;\n          background-color: var(--haxcms-site-theme-low-tone);\n        }\n        .even .article-link-icon {\n          margin-left: -20px;          \n        }\n        .odd .article-link-icon {\n          margin-right: -28px;\n        }\n        \n        .even {\n          margin-left: 50%;\n        }\n        .articles a.article-link-icon {\n          display: flex;\n          width: 48px;\n          vertical-align: middle;\n          align-content: flex-end;\n        }\n        .odd {\n          margin-right: 50%;\n          flex-direction: row-reverse;\n          text-align: right;\n        }\n        .article-wrap {\n          padding: var(--ddd-spacing-10);\n        }\n        .article-wrap h3 {\n          font-size: var(--ddd-font-size-xl);\n          margin-top: 0;\n        }\n        .article-wrap p {\n          font-size: var(--ddd-font-size-s);\n          margin-left: var(--ddd-spacing-4);\n          min-width: 200px;\n          display: flex;\n          line-height: normal;\n          font-family: var(--ddd-font-secondary);\n        }\n\n        .child-pages-container {\n          display: block;\n          margin-bottom: var(--ddd-spacing-6);\n        }\n\n        .child-page-link {\n          display: inline-block;\n          width: var(--ddd-spacing-20);\n          height: var(--ddd-spacing-20);\n          line-height: normal;\n          margin: var(--ddd-spacing-4);\n        }\n        .child-page-link img {\n          width: var(--ddd-spacing-20);\n          height: var(--ddd-spacing-20);\n          border: 4px solid var(--haxcms-site-theme-color-2);\n          transition: all 0.3s ease-in-out;\n        }\n        .child-page-link img:hover,\n        .child-page-link:focus-within img {\n          border-radius: 50%;\n          transform: scale(1.1);\n        }        \n        .odd .article-wrap p {\n          margin-right: var(--ddd-spacing-4);\n          justify-content: right;\n          min-height: var(--ddd-spacing-10);\n        }\n        .even .article-wrap p {\n          margin-left: var(--ddd-spacing-4);\n        }\n        .article-wrap simple-cta {\n          margin-top: var(--ddd-spacing-4);\n          --component-background-color: var(--haxcms-site-theme-color-2);\n          --component-color: var(--lowContrast-override, var(--haxcms-site-theme-low-tone));\n        }\n        .article-wrap simple-cta:hover,\n        .article-wrap simple-cta:focus-visible {\n          --component-color: var(--lowContrast-override, var(--haxcms-site-theme-low-tone));\n          --component-background-color: var(--haxcms-site-theme-color-1);\n        }\n        main {\n          padding: var(--ddd-spacing-10);\n        }\n        footer {\n          display: block;\n          padding: var(--ddd-spacing-10);\n          background-color: var(--haxcms-site-theme-color-2);\n          color: var(--haxcms-site-theme-low-tone);\n          min-height: var(--ddd-spacing-5);\n          transition: .3s all ease-in-out;\n        }\n\n        main.not-home {\n          background-color: var(--haxcms-site-theme-low-tone);\n          padding: var(--ddd-spacing-15);\n          max-width: 960px;\n          margin: 0 auto;\n        }\n        article.home {\n          display: none;\n        }\n        site-active-title {\n          line-height: normal;\n        }\n        site-breadcrumb {\n          --site-breadcrumb-margin: 0 0 var(--ddd-spacing-4) 0;\n        }\n        site-active-title h1 {\n          font-size: var(--ddd-font-size-4xl);\n          margin-top: 0;\n        }\n        main.home .articles article:last-of-type {\n          border-bottom: none;\n        }\n\n        #scolltop {\n          position: fixed;\n          right: 0px;\n          bottom: 125px;\n          z-index: 10000;\n          --simple-icon-width: 48px;\n          --simple-icon-height: 48px;\n          --simple-icon-button-border-radius: none;\n        }\n\n        @media (max-width: 800px) {\n          header {\n            height: unset;\n            padding: var(--ddd-spacing-5);\n          }\n          .lower-header-box {\n            padding: var(--ddd-spacing-2);\n          }\n          header h1 {\n            font-size: var(--ddd-font-size-xl);\n          }\n          header h2 {\n            font-size: var(--ddd-font-size-sm);\n          }\n          main {\n            padding: var(--ddd-spacing-0);\n          }\n          main.not-home {\n            padding: var(--ddd-spacing-5);\n          }\n          main.not-home article {\n            border-bottom: none;\n          }\n          article {\n            padding: var(--ddd-spacing-5);\n            font-size: var(--ddd-font-size-3xs);\n            border-bottom: 4px dashed var(--haxcms-site-theme-color-2);\n          }\n          site-active-title h1 {\n            font-size: var(--ddd-font-size-xl);\n          }\n          .even {\n            margin-left: unset;\n          }\n          .odd {\n            margin-right: unset;\n            text-align: unset;\n          }\n          .odd .article-wrap p {\n            margin-right: 0;\n            margin-left: 0;\n            justify-content: unset;\n          }\n          .even .article-wrap p {\n            margin-right: 0;\n            margin-left: 0;\n          }\n          article simple-icon-button-lite.article {\n            display: none;\n          }\n          .article-wrap simple-cta {\n            margin-top: var(--ddd-spacing-2);\n          }\n          .article-wrap {\n            padding: var(--ddd-spacing-5);\n          }\n          .even .article-wrap p {\n            margin-left: unset;\n          }\n          .article-wrap p {\n            min-width: unset;\n            max-width: unset;\n            font-size: var(--ddd-font-size-s);\n          }\n        } \n      '])))]}firstUpdated(n){super.firstUpdated(n),this.HAXCMSThemeSettings.autoScroll=!1,this.HAXCMSThemeSettings.scrollTarget=this.shadowRoot.querySelector(".lower-header-box"),globalThis.AbsolutePositionStateManager.requestAvailability().scrollTarget=this.HAXCMSThemeSettings.scrollTarget,console.log(this.HAXCMSThemeSettings)}toggleSiteTheme(n){switch(this.siteTheme){case"earth":this.siteTheme="water";break;case"water":this.siteTheme="fire";break;case"fire":this.siteTheme="sand";break;case"sand":this.siteTheme="";break;default:this.siteTheme="earth";break}}render(){return t(I||(I=e(['\n    <header>\n      <simple-icon-button-lite icon="image:style" class="theme-picker" @click="','"></simple-icon-button-lite>\n      <div class="author">\n        <a href="','">',"\n          <h1>","</h1>\n          <h2>",'</h2>\n        </a>\n      </div>\n    </header>\n    <div class="lower-header-box">\n      <simple-tooltip for="top" position="bottom">','</simple-tooltip>\n      <a tabindex="-1" href="','" class="top article-link-icon"><simple-icon-button-lite id="top" label="','" icon="','"></simple-icon-button-lite></a>\n      ','\n    </div>\n    <main class="main ','"> \n      <div class="articles">  \n        ','\n      </div>\n      <article part="transitioncontent" class="','">\n        ','\n        <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->\n        <div id="contentcontainer"><div id="slot">','</div></div>\n      </article>\n    </main>\n    <footer>\n      <div class="author">\n        <div class="spacing"><a href="','">',"\n          </a>\n          <h1>","</h1>\n          <h2>",'</h2>\n          <div\n            class="license-body"\n            xmlns:cc="','"\n            xmlns:dc="http://purl.org/dc/elements/1.1/"\n          >\n          ','\n          </div>\n          <simple-icon-button-lite icon="image:style" class="theme-picker" @click="','"></simple-icon-button-lite>\n          <scroll-button></scroll-button>\n        </div>\n        </div>\n      <slot name="footer"></slot>\n    </footer>\n    '])),this.toggleSiteTheme,this.basePath,this.manifest.metadata.author.image?t(p||(p=e(['\n          <img \n            class="author-image"\n            loading="lazy"\n            decoding="async"\n            fetchpriority="low"\n            src="','"\n            alt="','"\n          />'])),this.manifest.metadata.author.image,this.manifest.metadata.author.name):"",this.manifest.title,this.manifest.description,this.t.home,this.basePath,this.t.home,this.manifest.metadata.icon?this.manifest.metadata.icon:"av:album",this.location&&this.location.route.name!=="home"?t(v||(v=e(["\n          ",""])),this._items.map((n,a)=>t(g||(g=e(['\n            <simple-tooltip for="','" position="bottom">','</simple-tooltip>\n            <a tabindex="-1" href="','" class="article-link-icon top ','"><simple-icon-button-lite id="','" class="article" icon="','"></simple-icon-button-lite></a>\n          '])),n.id,n.title,n.slug,this.activeItem&&(n.id===this.activeItem.id||n.id===this.activeItem.parent)?"active":"",n.id,n.metadata.icon?n.metadata.icon:"av:album"))):"",this.location&&this.location.route.name==="home"?"home":"not-home",this.location&&this.location.route.name==="home"?t(w||(w=e(["\n          ",""])),this._items.map((n,a)=>t(y||(y=e(['\n            <article class="post ','">\n            <simple-tooltip for="v-','" position="','"">','</simple-tooltip>\n            <a tabindex="-1" href="','" class="article-link-icon"><simple-icon-button-lite id="v-','" class="article" icon="','"></simple-icon-button-lite></a>\n              <div class="article-wrap">\n                <h3>',"</h3>\n                <div>\n                  <p>","</p>\n                </div>\n                ",'\n                <simple-cta link="','" label="','"></simple-cta>\n              </div>\n            </article>\n          '])),a%2===0?"even":"odd",n.id,a%2===0?"left":"right",n.title,n.slug,n.id,n.metadata.icon?n.metadata.icon:"av:album",n.title,n.description,this.getItemChildren(n.id).length>0?t(x||(x=e(['\n                  <div class="child-pages-container">\n                    ',"\n                  </div>"])),this.getItemChildren(n.id).map(i=>t(b||(b=e(['\n                      <simple-tooltip for="v-','" position="bottom">','</simple-tooltip>\n                      <a id="v-','" href="','" class="child-page-link">',"\n                      </a>\n                      "])),i.id,i.title,i.id,i.slug,i.metadata.image?t(u||(u=e(['<img src="','" loading="lazy"\n                        decoding="async"\n                        fetchpriority="low" alt="','"/>'])),i.metadata.image,i.title):t(f||(f=e(['<img \n                          loading="lazy"\n                          decoding="async"\n                          fetchpriority="low"\n                          src="','"\n                          alt="','"\n                        />'])),this.manifest.metadata.author.image,this.manifest.metadata.author.name)))):"",n.slug,this.t.readMore))):"",this.location&&this.location.route.name==="home"?"home":"not-home",this.location&&this.location.route.name!=="home"?t(k||(k=e(["\n        <site-breadcrumb></site-breadcrumb>\n        <site-active-title></site-active-title>\n        "]))):"",this.location&&this.location.route.name!=="home"?t(z||(z=e(['<slot></slot>\n        <site-collection-list published limit="0" sort="order" parent="','"></site-collection-list>'])),this.activeItem?this.activeItem.id:null):"",this.basePath,this.manifest.metadata.author.image?t(S||(S=e(['\n          <img \n            class="author-image"\n            loading="lazy"\n            decoding="async"\n            fetchpriority="low"\n            src="','"\n            alt="','"\n          />'])),this.manifest.metadata.author.image,this.manifest.metadata.author.name):"",this.manifest.title,this.manifest.description,this.licenseLink,this.licenseImage?t(T||(T=e(['\n                <a\n                  class="big-license-link"\n                  target="_blank"\n                  href="','"\n                  rel="noopener noreferrer"\n                  >\n                  <img\n                    loading="lazy"\n                    decoding="async"\n                    fetchpriority="low"\n                    alt="',' graphic"\n                    src="','"\n                  />\n                </a>\n              '])),this.licenseLink,this.licenseName,this.licenseImage):"",this.toggleSiteTheme)}}globalThis.customElements.define(C.tag,C);
