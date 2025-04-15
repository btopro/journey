/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see License.md for full text.
 */
import { HAXCMSLitElementTheme, css, unsafeCSS, html, store, autorun, toJS } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@haxtheweb/simple-cta/simple-cta.js";
import "@haxtheweb/simple-tooltip/simple-tooltip.js";
import "@haxtheweb/simple-icon/lib/simple-icon-button-lite.js";
import "@haxtheweb/scroll-button/scroll-button.js";
import { licenseList } from "@haxtheweb/license-element/license-element.js";

/**
 * `CustomJourneyTheme`
 * `CustomJourneyTheme based on HAXCMS theming ecosystem`
 * `This theme is an example of extending an existing theme component`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSLitElementTheme - A class that provides correct baseline wiring to build a new theme that HAX can use
 *
 * @documentation - see HAX docs to learn more about theming
 *  - Custom theme development - https://haxtheweb.org/documentation/developers/haxsite/custom-theme-development
 *  - Theme Blocks - https://haxtheweb.org/documentation/developers/theme-blocks
 *  - DDD - https://haxtheweb.org/documentation/ddd
 *  - Data Store - https://haxtheweb.org/documentation/developers/haxsite/data-store
 * @element custom-journey-theme
 */
class CustomJourneyTheme extends HAXCMSLitElementTheme {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "custom-journey-theme";
  }

  // set defaults or tie into the store
  constructor() {
    super();
    this.HAXCMSThemeSettings.autoScroll = false;
    this._items = [];
    this.location = null;
    this.activeItem = {};
    this.basePath = null;
    this.manifest = {};
    this.t = {
      readMore: "Read more",
      home: "Home",
    };
    try {
      this.basePath = globalThis.document.querySelector('base').href;
    }
    catch (e) {
      this.basePath = globalThis.location.origin;
    }
    autorun(() => {
      this.manifest = toJS(store.manifest);
      let LList = new licenseList();
      if (this.manifest.license && LList[this.manifest.license]) {
        this.licenseName = LList[this.manifest.license].name;
        this.licenseLink = LList[this.manifest.license].link;
        this.licenseImage = LList[this.manifest.license].image;
      }
      this._items = store.getItemChildren(null);
    });
    autorun(() => {
      this.activeItem = toJS(store.activeItem);
    });
    autorun(() => {
      this.location = toJS(store.location);
    });
  }

  static get properties() {
    return {
      ...super.properties,
      activeItem: { type: Object },
      location: { type: String },
      basePath: { type: String },
      _items: { type: Array },
      licenseName: { type: String },
      licenseLink: { type: String },
      licenseImage: { type: String },
    };
  }

  // allows for global styles to be set against the entire document
  // you can also use this to cascade styles down to the theme
  // but the more common reason is to influence the body or other things
  // put into the global index.html context by the system itself
  HAXCMSGlobalStyleSheetContent() {
    return [
      ...super.HAXCMSGlobalStyleSheetContent(),
      css`
      :root {
        --my-theme-low-tone: white;
        --my-theme-high-tone: var(--ddd-theme-default-coalyGray);
      }
      body {
        padding: var(--ddd-spacing-0);
        margin: var(--ddd-spacing-0);
        background-color: var(--my-theme-low-tone);
      }
      custom-journey-theme::before {
        height: 100vh;
        content: "";
        border-left: 4px dashed var(--ddd-primary-8);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 50%;
        margin: 0 auto;
        z-index: -1;
      }
      @media (max-width: 800px) {
        custom-journey-theme::before {
          display: none;
        }
      }
      body.dark-mode {
        background-color: var(--my-theme-high-tone);
        color: var(--my-theme-low-tone);
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: var(--my-theme-high-tone);
          color: var(--my-theme-low-tone);
        }
      }
      `,
    ];
  }

  //styles function
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-0);
          margin: var(--ddd-spacing-0);
        }
        header {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          color: white;
          background-color: var(--ddd-primary-2);
          height: 50vh;
          overflow: hidden;
          padding: var(--ddd-spacing-10);
          z-index: 1;
        }
        .lower-header-box {
          background-color: var(--ddd-primary-8);
          height: var(--ddd-spacing-12);
          padding: var(--ddd-spacing-6);
          display: flex;
          justify-content: center;
        }
        .lower-header-box {

        }
        .author a {
          color: white;
          text-decoration: none;
        }
        footer .author a {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        footer .author a h1 {
          font-size: var(--ddd-font-size-m);
        }
        footer .author a h2 {
          font-size: var(--ddd-font-size-s);
        }
        footer .author-image {
          width: 5vw;
          height: 5vw;
        }
        .author-image {
          border-radius: 50%;
          width: 15vw;
          height: 15vw;
          border: 4px solid white;
        }
        header h1 {
          font-size: var(--ddd-font-size-4xl);
        }

        header h2 {
          font-size: var(--ddd-font-size-xl);
        }

        article {
          display: block;
        }
        .articles article {
          display: flex;
        }
        simple-icon-button-lite {
          --simple-icon-width: var(--ddd-spacing-12);
          --simple-icon-height: var(--ddd-spacing-12);
          padding: 0;
          border-radius: 50%;
        }
        simple-tooltip {
          --simple-tooltip-font-size: var(--page-section-tooltip-font-size, var(--ddd-font-size-s, 16px));
          --simple-tooltip-background: var(--page-section-tooltip-background, #000000);
          --simple-tooltip-opacity: var(--page-section-tooltip-opacity, 0.8);
          --simple-tooltip-text-color: var(--page-section-tooltip-text-color, white);
          --simple-tooltip-delay-in: var(--page-section-tooltip-delay-in, 300);
          --simple-tooltip-delay-out: var(--page-section-tooltip-delay-out, 0);
          --simple-tooltip-duration-in: var(--page-section-tooltip-duration-in, 300);
          --simple-tooltip-duration-out: var(--page-section-tooltip-duration-out, 0);
        }
        .article-link-icon.top {
          color: var(--ddd-primary-2);
          margin: 0 var(--ddd-spacing-4);
        }
        .article-link-icon.top::before {
          border-top: 4px dashed white;
          content: "";
          display: block;
          width: 80px;
          position: absolute;
          margin-top: 22px;
        }
        .article-link-icon.top:last-of-type::before {
          display: none;
        }
        .article-link-icon.top  simple-icon-button-lite::part(button) {
          background-color: var(--ddd-primary-8);
        }
        .article-link-icon.active simple-icon-button-lite.article {
          color: white;
        }
        .article-link-icon.active  simple-icon-button-lite::part(button) {
          background-color: var(--ddd-primary-4);
        }
        a {
          display: block;
        }
        
        simple-icon-button-lite.article {
          color: var(--ddd-primary-2);
        }
        simple-icon-button-lite::part(button) {
          height: auto;
          background-color: white;
        }
        .even .article-link-icon {
          margin-left: -20px;          
        }
        .odd .article-link-icon {
          margin-right: -28px;
        }
        
        .even {
          margin-left: 50%;
        }
        .articles a.article-link-icon {
          display: flex;
          width: 48px;
          vertical-align: middle;
          align-content: flex-end;
        }
        .odd {
          margin-right: 50%;
          flex-direction: row-reverse;
          text-align: right;
        }
        .article-wrap {
          padding: var(--ddd-spacing-10);
        }
        .article-wrap h3 {
          font-size: var(--ddd-font-size-xl);
          margin-top: 0;
        }
        .article-wrap p {
          font-size: var(--ddd-font-size-s);
          margin-left: var(--ddd-spacing-4);
          min-width: 200px;
          display: flex;
          line-height: normal;
          font-family: var(--ddd-font-secondary);
        }

        .child-pages-container {
          display: block;
          margin-bottom: var(--ddd-spacing-6);
        }

        .child-page-link {
          display: inline-block;
          margin: var(--ddd-spacing-4);
        }
        .child-page-link img {
          width: var(--ddd-spacing-20);
          height: var(--ddd-spacing-20);
          border: 4px solid var(--ddd-primary-8);
          transition: all 0.3s ease-in-out;
        }
        .child-page-link img:hover,
        .child-page-link:focus-within img {
          border-radius: 50%;
        }        
        .odd .article-wrap p {
          margin-right: var(--ddd-spacing-4);
          justify-content: right;
          min-height: var(--ddd-spacing-10);
        }
        .even .article-wrap p {
          margin-left: var(--ddd-spacing-4);
        }
        .article-wrap simple-cta {
          margin-top: var(--ddd-spacing-4);
        }
        main {
          padding: var(--ddd-spacing-10);
        }
        footer {
          display: block;
          padding: var(--ddd-spacing-10);
          background-color: var(--ddd-primary-8);
          color: white;
          min-height: var(--ddd-spacing-5);
        }

        main.not-home {
          background-color: var(--my-theme-low-tone);
          padding: var(--ddd-spacing-15) var(--ddd-spacing-30);
        }
        article.home {
          display: none;
        }
        site-active-title h1 {
          font-size: var(--ddd-font-size-4xl);
          margin-top: 0;
        }
        main.home .articles article:last-of-type {
          border-bottom: none;
        }

        #scolltop {
          position: fixed;
          right: 0px;
          bottom: 125px;
          z-index: 10000;
          --simple-icon-width: 48px;
          --simple-icon-height: 48px;
          --simple-icon-button-border-radius: none;
        }

        @media (max-width: 800px) {
          header {
            height: unset;
            padding: var(--ddd-spacing-5);
          }
          .lower-header-box {
            padding: var(--ddd-spacing-2);
          }
          header h1 {
            font-size: var(--ddd-font-size-xl);
          }
          header h2 {
            font-size: var(--ddd-font-size-sm);
          }
          main {
            padding: var(--ddd-spacing-0);
          }
          main.not-home {
            padding: var(--ddd-spacing-5);
          }
          main.not-home article {
            border-bottom: none;
          }
          article {
            padding: var(--ddd-spacing-5);
            font-size: var(--ddd-font-size-3xs);
            border-bottom: 4px dashed var(--ddd-primary-8);
          }
          site-active-title h1 {
            font-size: var(--ddd-font-size-xl);
          }
          .even {
            margin-left: unset;
          }
          .odd {
            margin-right: unset;
            text-align: unset;
          }
          .odd .article-wrap p {
            margin-right: 0;
            margin-left: 0;
            justify-content: unset;
          }
          .even .article-wrap p {
            margin-right: 0;
            margin-left: 0;
          }
          article simple-icon-button-lite.article {
            display: none;
          }
          .article-wrap simple-cta {
            margin-top: var(--ddd-spacing-2);
          }
          .article-wrap {
            padding: var(--ddd-spacing-5);
          }
          .even .article-wrap p {
            margin-left: unset;
          }
          .article-wrap p {
            min-width: unset;
            max-width: unset;
            font-size: var(--ddd-font-size-s);
          }
        } 
      `,
    ];
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.HAXCMSThemeSettings.autoScroll = false;
    this.HAXCMSThemeSettings.scrollTarget =
      this.shadowRoot.querySelector("#contentcontainer");
    globalThis.AbsolutePositionStateManager.requestAvailability().scrollTarget =
      this.HAXCMSThemeSettings.scrollTarget;
  }

  render() {
    return html`
    <header>
      <div class="author">
        <a href="${this.basePath}">${this.manifest.metadata.author.image ? html`
          <img 
            class="author-image" 
            src="${this.manifest.metadata.author.image}"
            alt="${this.manifest.metadata.author.name}"
          />`: ``}
          <h1>${this.manifest.title}</h1>
          <h2>${this.manifest.description}</h2>
        </a>
      </div>
    </header>
    <div class="lower-header-box">
      <simple-tooltip for="top" position="bottom">${this.t.home}</simple-tooltip>
      <a tabindex="-1" href="${this.basePath}" class="top article-link-icon"><simple-icon-button-lite id="top" label="${this.t.home}" icon="${this.manifest.metadata.icon ? this.manifest.metadata.icon : "av:album"}"></simple-icon-button-lite></a>
      ${this.location && this.location.route.name !== "home" ? html`
          ${this._items.map((item, index) => {
          return html`
            <simple-tooltip for="${item.id}" position="bottom">${item.title}</simple-tooltip>
            <a tabindex="-1" href="${item.slug}" class="article-link-icon top ${item.id === this.activeItem.id || item.id === this.activeItem.parent ? "active" : ""}"><simple-icon-button-lite id="${item.id}" class="article" icon="${item.metadata.icon ? item.metadata.icon : "av:album"}"></simple-icon-button-lite></a>
          `;
        })}` : ``}
    </div>
    <main class="main ${this.location && this.location.route.name === "home" ? "home" : "not-home"}"> 
      <div class="articles">  
        ${this.location && this.location.route.name === "home" ? html`
          ${this._items.map((item, index) => {
          return html`
            <article class="post ${index % 2 === 0 ? "even" : "odd"}">
            <simple-tooltip for="v-${item.id}" position="${index % 2 === 0 ? "left" : "right"}"">${item.title}</simple-tooltip>
            <a tabindex="-1" href="${item.slug}" class="article-link-icon"><simple-icon-button-lite id="v-${item.id}" class="article" icon="${item.metadata.icon ? item.metadata.icon : "av:album"}"></simple-icon-button-lite></a>
              <div class="article-wrap">
                <h3>${item.title}</h3>
                <div>
                  <p>${item.description}</p>
                </div>
                ${store.getItemChildren(item.id).length > 0 ? html`
                  <div class="child-pages-container">
                    ${store.getItemChildren(item.id).map((child) => 
                    html`
                      <simple-tooltip for="v-${child.id}" position="bottom">${child.title}</simple-tooltip>
                      <a id="v-${child.id}" href="${child.slug}" class="child-page-link">${child.metadata.image ? html`<img src="${child.metadata.image}" loading="lazy"
                      decoding="async"
                      fetchpriority="low" alt="${child.title}"/>` : html`${child.title}`}</a>
                      `)}
                  </div>` : ``}
                <simple-cta link="${item.slug}" label="${this.t.readMore}"></simple-cta>
              </div>
            </article>
          `;
        })}` : ``}
      </div>
      <article class="${this.location && this.location.route.name === "home" ? "home" : "not-home"}">
        ${this.location && this.location.route.name !== "home" ? html`
        <site-active-title></site-active-title>
        ` : ``}
        <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->
        <div id="contentcontainer"><div id="slot">${this.location && this.location.route.name !== "home" ? html`<slot></slot>` : ``}</div></div>
      </article>
    </main>
    <footer>
      <div class="author">
        <a href="${this.basePath}">${this.manifest.metadata.author.image ? html`
          <img 
            class="author-image" 
            src="${this.manifest.metadata.author.image}"
            alt="${this.manifest.metadata.author.name}"
          />`: ``}
          <h1>${this.manifest.title}</h1>
          <h2>${this.manifest.description}</h2>
          <div
            class="license-body"
            xmlns:cc="${this.licenseLink}"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
          >
          ${this.licenseImage
            ? html`
                <a
                  class="big-license-link"
                  target="_blank"
                  href="${this.licenseLink}"
                  rel="noopener noreferrer"
                  >
                  <img
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    alt="${this.licenseName} graphic"
                    src="${this.licenseImage}"
                  />
                </a>
              ` : ``}
          </div>
        </a>
      </div>
      <slot name="footer"></slot>
    </footer>
    `;
  }

}
globalThis.customElements.define(CustomJourneyTheme.tag, CustomJourneyTheme);
export { CustomJourneyTheme };
