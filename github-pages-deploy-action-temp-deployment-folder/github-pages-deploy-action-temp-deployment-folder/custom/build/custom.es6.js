import{HAXCMSLitElementTheme as x,autorun as w,toJS as e,store as a,css as d,html as i}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";import"@haxtheweb/simple-cta/simple-cta.js";import"@haxtheweb/simple-tooltip/simple-tooltip.js";import"@haxtheweb/simple-icon/lib/simple-icon-button-lite.js";import"@haxtheweb/scroll-button/scroll-button.js";var l=Object.freeze,k=Object.defineProperty,t=(o,n)=>l(k(o,"raw",{value:l(n||o.slice())}));/**
* Copyright 2025 btopro
* @license Apache-2.0, see License.md for full text.
*/var s,c,p,m,h,g,v,u,f,b;class y extends x{static get tag(){return"custom-journey-theme"}constructor(){super(),this.HAXCMSThemeSettings.autoScroll=!1,this._items=[],this.activeId=null,this.location=null,this.basePath=null,this.manifest={},this.t={readMore:"Read more",home:"Home"};try{this.basePath=globalThis.document.querySelector("base").href}catch(n){this.basePath=globalThis.location.origin}w(()=>{this.manifest=e(a.manifest),this.activeId=e(a.activeId),this.location=e(a.location),this._items=e(a.manifest.items)})}static get properties(){return{...super.properties,activeId:{type:String},location:{type:String},basePath:{type:String},_items:{type:Array}}}HAXCMSGlobalStyleSheetContent(){return[...super.HAXCMSGlobalStyleSheetContent(),d(s||(s=t(['\n      :root {\n        --my-theme-low-tone: white;\n        --my-theme-high-tone: var(--ddd-theme-default-coalyGray);\n      }\n      body {\n        padding: var(--ddd-spacing-0);\n        margin: var(--ddd-spacing-0);\n        background-color: var(--my-theme-low-tone);\n      }\n      custom-journey-theme::before {\n        height: 100vh;\n        content: "";\n        border-left: 4px dashed var(--ddd-primary-8);\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 50%;\n        margin: 0 auto;\n        z-index: -1;\n      }\n      @media (max-width: 800px) {\n        custom-journey-theme::before {\n          display: none;\n        }\n      }\n      body.dark-mode {\n        background-color: var(--my-theme-high-tone);\n        color: var(--my-theme-low-tone);\n      }\n      @media (prefers-color-scheme: dark) {\n        body {\n          background-color: var(--my-theme-high-tone);\n          color: var(--my-theme-low-tone);\n        }\n      }\n      '])))]}static get styles(){return[super.styles,d(c||(c=t(['\n        :host {\n          display: block;\n          padding: var(--ddd-spacing-0);\n          margin: var(--ddd-spacing-0);\n        }\n        header {\n          display: flex;\n          text-align: center;\n          justify-content: center;\n          align-items: center;\n          color: white;\n          background-color: var(--ddd-primary-2);\n          height: 50vh;\n          overflow: hidden;\n          padding: var(--ddd-spacing-10);\n          z-index: 1;\n        }\n        .lower-header-box {\n          background-color: var(--ddd-primary-8);\n          height: var(--ddd-spacing-12);\n          padding: var(--ddd-spacing-6);\n          display: flex;\n          justify-content: center;\n        }\n        .lower-header-box {\n\n        }\n        .author a {\n          color: white;\n          text-decoration: none;\n        }\n        .author-image {\n          border-radius: 50%;\n          width: 15vw;\n          height: 15vw;\n          border: 4px solid white;\n        }\n        header h1 {\n          font-size: var(--ddd-font-size-4xl);\n        }\n\n        header h2 {\n          font-size: var(--ddd-font-size-xl);\n        }\n\n        article {\n          display: block;\n        }\n        .articles article {\n          display: flex;\n        }\n        simple-icon-button-lite {\n          --simple-icon-width: var(--ddd-spacing-12);\n          --simple-icon-height: var(--ddd-spacing-12);\n          padding: 0;\n          border-radius: 50%;\n        }\n        simple-tooltip {\n          --simple-tooltip-font-size: var(--page-section-tooltip-font-size, var(--ddd-font-size-s, 16px));\n          --simple-tooltip-background: var(--page-section-tooltip-background, #000000);\n          --simple-tooltip-opacity: var(--page-section-tooltip-opacity, 0.8);\n          --simple-tooltip-text-color: var(--page-section-tooltip-text-color, white);\n          --simple-tooltip-delay-in: var(--page-section-tooltip-delay-in, 300);\n          --simple-tooltip-delay-out: var(--page-section-tooltip-delay-out, 0);\n          --simple-tooltip-duration-in: var(--page-section-tooltip-duration-in, 300);\n          --simple-tooltip-duration-out: var(--page-section-tooltip-duration-out, 0);\n        }\n        .article-link-icon.top {\n          color: var(--ddd-primary-2);\n          margin: 0 var(--ddd-spacing-4);\n        }\n        .article-link-icon.top::before {\n          border-top: 4px dashed white;\n          content: "";\n          display: block;\n          width: 80px;\n          position: absolute;\n          margin-top: 22px;\n        }\n        .article-link-icon.top:last-of-type::before {\n          display: none;\n        }\n        .article-link-icon.top  simple-icon-button-lite::part(button) {\n          background-color: var(--ddd-primary-8);\n        }\n        .article-link-icon.active simple-icon-button-lite.article {\n          color: white;\n        }\n        .article-link-icon.active  simple-icon-button-lite::part(button) {\n          background-color: var(--ddd-primary-4);\n        }\n        a {\n          display: block;\n        }\n        \n        simple-icon-button-lite.article {\n          color: var(--ddd-primary-2);\n        }\n        simple-icon-button-lite::part(button) {\n          height: auto;\n          background-color: white;\n        }\n        .even .article-link-icon {\n          margin-left: -20px;          \n        }\n        .odd .article-link-icon {\n          margin-right: -28px;\n        }\n        \n        .even {\n          margin-left: 50%;\n        }\n        .articles a.article-link-icon {\n          display: flex;\n          width: 48px;\n          vertical-align: middle;\n          align-content: flex-end;\n        }\n        .odd {\n          margin-right: 50%;\n          flex-direction: row-reverse;\n          text-align: right;\n        }\n        .article-wrap {\n          padding: var(--ddd-spacing-10);\n        }\n        .article-wrap h3 {\n          font-size: var(--ddd-font-size-xl);\n          margin-top: 0;\n        }\n        .article-wrap p {\n          font-size: var(--ddd-font-size-m);\n          margin-left: var(--ddd-spacing-4);\n          min-width: 200px;\n          display: flex;\n          line-height: normal;\n          font-family: var(--ddd-font-secondary);\n        }\n        .odd .article-wrap p {\n          margin-right: var(--ddd-spacing-4);\n          justify-content: right;\n          min-height: var(--ddd-spacing-10);\n        }\n        .even .article-wrap p {\n          margin-left: var(--ddd-spacing-4);\n        }\n        .article-wrap simple-cta {\n          margin-top: var(--ddd-spacing-4);\n        }\n        main {\n          padding: var(--ddd-spacing-10);\n        }\n        footer {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: var(--ddd-spacing-10);\n          background-color: var(--ddd-primary-8);\n          color: white;\n          height: var(--ddd-spacing-5);\n        }\n\n        main.not-home {\n          background-color: var(--my-theme-low-tone);\n          padding: var(--ddd-spacing-15) var(--ddd-spacing-30);\n        }\n        article.home {\n          display: none;\n        }\n        site-active-title h1 {\n          font-size: var(--ddd-font-size-4xl);\n          margin-top: 0;\n        }\n        main.home .articles article:last-of-type {\n          border-bottom: none;\n        }\n\n        #scolltop {\n          position: fixed;\n          right: 0px;\n          bottom: 125px;\n          z-index: 10000;\n          --simple-icon-width: 48px;\n          --simple-icon-height: 48px;\n          --simple-icon-button-border-radius: none;\n        }\n\n        @media (max-width: 800px) {\n          header {\n            height: unset;\n            padding: var(--ddd-spacing-5);\n          }\n          .lower-header-box {\n            padding: var(--ddd-spacing-2);\n          }\n          header h1 {\n            font-size: var(--ddd-font-size-xl);\n          }\n          header h2 {\n            font-size: var(--ddd-font-size-sm);\n          }\n          main {\n            padding: var(--ddd-spacing-0);\n          }\n          main.not-home {\n            padding: var(--ddd-spacing-5);\n          }\n          main.not-home article {\n            border-bottom: none;\n          }\n          article {\n            padding: var(--ddd-spacing-5);\n            font-size: var(--ddd-font-size-3xs);\n            border-bottom: 4px dashed var(--ddd-primary-8);\n          }\n          site-active-title h1 {\n            font-size: var(--ddd-font-size-xl);\n          }\n          .even {\n            margin-left: unset;\n          }\n          .odd {\n            margin-right: unset;\n            text-align: unset;\n          }\n          .odd .article-wrap p {\n            margin-right: 0;\n            margin-left: 0;\n            justify-content: unset;\n          }\n          .even .article-wrap p {\n            margin-right: 0;\n            margin-left: 0;\n          }\n          simple-icon-button-lite.article {\n            display: none;\n          }\n          .article-wrap simple-cta {\n            margin-top: var(--ddd-spacing-2);\n          }\n          .article-wrap {\n            padding: var(--ddd-spacing-5);\n          }\n          .even .article-wrap p {\n            margin-left: unset;\n          }\n          .article-wrap p {\n            min-width: unset;\n            max-width: unset;\n            font-size: var(--ddd-font-size-s);\n          }\n        } \n      '])))]}firstUpdated(n){super.firstUpdated(n),this.HAXCMSThemeSettings.autoScroll=!1}render(){return i(b||(b=t(['\n    <header>\n      <div class="author">\n        <a href="','">',"\n          <h1>","</h1>\n          <h2>",'</h2>\n        </a>\n      </div>\n    </header>\n    <div class="lower-header-box">\n      <simple-tooltip for="top" position="bottom">','</simple-tooltip>\n      <a tabindex="-1" href="','" class="top article-link-icon"><simple-icon-button-lite id="top" label="','" icon="','"></simple-icon-button-lite></a>\n      ','\n    </div>\n    <main class="main ','"> \n      <div class="articles">  \n        ','\n      </div>\n      <article class="','">\n        ','\n        <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->\n        <div id="contentcontainer"><div id="slot">','</div></div>\n      </article>\n    </main>\n    <footer>\n      <slot name="footer"></slot>\n    </footer>\n    '])),this.basePath,this.manifest.metadata.author.image?i(p||(p=t(['\n          <img \n            class="author-image" \n            src="','"\n            alt="','"\n          />'])),this.manifest.metadata.author.image,this.manifest.metadata.author.name):"",this.manifest.title,this.manifest.description,this.t.home,this.basePath,this.t.home,this.manifest.metadata.icon?this.manifest.metadata.icon:"av:album",this.location&&this.location.route.name!=="home"?i(h||(h=t(["\n          ",""])),this._items.map((n,r)=>i(m||(m=t(['\n            <simple-tooltip for="','" position="bottom">','</simple-tooltip>\n            <a tabindex="-1" href="','" class="article-link-icon top ','"><simple-icon-button-lite id="','" class="article" icon="','"></simple-icon-button-lite></a>\n          '])),n.id,n.title,n.slug,n.id===this.activeId?"active":"",n.id,n.metadata.icon?n.metadata.icon:"av:album"))):"",this.location&&this.location.route.name==="home"?"home":"not-home",this.location&&this.location.route.name==="home"?i(v||(v=t(["\n          ",""])),this._items.map((n,r)=>i(g||(g=t(['\n            <article class="post ','">\n            <simple-tooltip for="v-','" position="','"">','</simple-tooltip>\n            <a tabindex="-1" href="','" class="article-link-icon"><simple-icon-button-lite id="v-','" class="article" icon="','"></simple-icon-button-lite></a>\n              <div class="article-wrap">\n                <h3>',"</h3>\n                <div>\n                  <p>",'</p>\n                </div>\n                <simple-cta link="','" label="','" large></simple-cta>\n              </div>\n            </article>\n          '])),r%2===0?"even":"odd",n.id,r%2===0?"left":"right",n.title,n.slug,n.id,n.metadata.icon?n.metadata.icon:"av:album",n.title,n.description,n.slug,this.t.readMore))):"",this.location&&this.location.route.name==="home"?"home":"not-home",this.location&&this.location.route.name!=="home"?i(u||(u=t(["\n        <site-active-title></site-active-title>\n        "]))):"",this.location&&this.location.route.name!=="home"?i(f||(f=t(["<slot></slot>"]))):"")}}globalThis.customElements.define(y.tag,y);
