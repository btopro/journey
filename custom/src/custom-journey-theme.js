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
    this._items = [];
    this.activeId = null;
    this.location = null;
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
      this.activeId = toJS(store.activeId);
      this.location = toJS(store.location);
      this._items = toJS(store.manifest.items);
    });
  }

  // properties to respond to the activeID and list of items
  static get properties() {
    return {
      ...super.properties,
      activeId: { type: String },
      location: { type: String },
      basePath: { type: String },
      _items: { type: Array },
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
      custom-journey-theme:before {
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
        custom-journey-theme:before {
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
        }
        .author a {
          color: white;
          text-decoration: none;
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
        .top {
          left: calc(50% - 22px);
          position: absolute;
        }
        .article-link-icon {
          color: var(--ddd-primary-2);
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
          font-size: var(--ddd-font-size-m);
          margin-left: var(--ddd-spacing-4);
          min-width: 200px;
          display: flex;
          line-height: normal;
          font-family: var(--ddd-font-secondary);
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
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--ddd-spacing-10);
          background-color: var(--ddd-primary-8);
          color: white;
          height: var(--ddd-spacing-5);
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
          simple-icon-button-lite.article {
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
      <simple-tooltip for="top" position="top">${this.t.home}</simple-tooltip>
      <a href="${this.basePath}" id="top" class="top article-link-icon"><simple-icon-button-lite label="${this.t.home}" icon="${this.manifest.metadata.icon ? this.manifest.metadata.icon : "av:album"}"></simple-icon-button-lite></a>
    </div>
    <main class="main ${this.location.route.name === "home" ? "home" : "not-home"}"> 
      <div class="articles">  
        ${this.location.route.name === "home" ? html`
          ${this._items.map((item, index) => {
          return html`
            <article class="post ${index % 2 === 0 ? "even" : "odd"}">
            <simple-tooltip for="${item.id}" position="${index % 2 === 0 ? "left" : "right"}"">${item.title}</simple-tooltip>
            <a href="${item.slug}" class="article-link-icon" id="${item.id}"><simple-icon-button-lite class="article" icon="${item.metadata.icon ? item.metadata.icon : "av:album"}"></simple-icon-button-lite></a>
              <div class="article-wrap">
                <h3>${item.title}</h3>
                <div>
                  <p>${item.description}</p>
                </div>
                <simple-cta link="${item.slug}" label="${this.t.readMore}" large></simple-cta>
              </div>
            </article>
          `;
        })}` : ``}
      </div>
      <article class="${this.location.route.name === "home" ? "home" : "not-home"}">
        ${this.location.route.name !== "home" ? html`
        <site-active-title></site-active-title>
        ` : ``}
        <!-- this block and names are required for HAX to edit the content of the page. contentcontainer, slot, and wrapping the slot. -->
        <div id="contentcontainer"><div id="slot">${this.location.route.name !== "home" ? html`<slot></slot>` : ``}</div></div>
      </article>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    `;
  }

}
globalThis.customElements.define(CustomJourneyTheme.tag, CustomJourneyTheme);
export { CustomJourneyTheme };
