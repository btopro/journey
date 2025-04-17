/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see License.md for full text.
 */
import { HAXCMSLitElementTheme, css, unsafeCSS, html, store, autorun, toJS } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@haxtheweb/simple-cta/simple-cta.js";
import "@haxtheweb/simple-icon/lib/simple-icon-lite.js";
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
    this.manifest = {};
    this.t = {
      readMore: "Read more",
    };
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
      body.dark-mode {
        background-color: var(--my-theme-high-tone);
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
          height: var(--ddd-spacing-10);
          padding-bottom: var(--ddd-spacing-4);
        }
        .author a {
          color: white;
          text-decoration: none;
        }
        .author-image {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          margin-right: var(--ddd-spacing-10);
          border: 2px solid white;
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
        simple-icon-lite {
          width: var(--ddd-spacing-6);
          height: var(--ddd-spacing-6);
          padding: 0;
          position: absolute;
        }
        simple-icon-lite.top {
          margin-top: var(--ddd-spacing-5);
          left: calc(50% - 12px);
        }
        simple-icon-lite.article {
          margin-top: 92px;
          margin-left: -10px;
          color: var(--ddd-primary-2);
        }
        
        .even {
          margin-left: 50%;
        }
        .odd {
          margin-right: 50%;
          text-align: right;
        }
        .article-wrap {
          padding: var(--ddd-spacing-10);
        }
        .article-wrap h3 {
          font-size: var(--ddd-font-size-xl);
        }
        .article-wrap p {
          font-size: var(--ddd-font-size-3xs);
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

        .not-home {
          background-color: var(--my-theme-low-tone);
          padding: var(--ddd-spacing-30);
        }
        site-active-title h1 {
          font-size: var(--ddd-font-size-4xl);
          margin-top: 0;
        }
      `,
    ];
  }

  render() {
    return html`
    <header>
      <div class="author">
        <a href="/">${this.manifest.metadata.author.image ? html`<img class="author-image" src="${this.manifest.metadata.author.image}" alt="${this.manifest.metadata.author.name}" />`: ``}
        <h1>${this.manifest.title}</h1>
        <h2>${this.manifest.description}</h2>
        </a>
      </div>
    </header>
    <div class="lower-header-box">
      <simple-icon-lite class="top" icon="${this.manifest.metadata.icon ? this.manifest.metadata.icon : "av:album"}"></simple-icon-lite>
    </div>
    <main class="main ${this.location.route.name === "home" ? "home" : "not-home"}">   
      ${this.location.route.name === "home" ? html`
        ${this._items.map((item, index) => {
        return html`
          <article class="${index % 2 === 0 ? "even" : "odd"}">
          <simple-icon-lite class="article" icon="${item.metadata.icon ? item.metadata.icon : "av:album"}"></simple-icon-lite>
            <div class="article-wrap">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <simple-cta link="${item.slug}" label="${this.t.readMore}"></simple-cta>
            </div>
          </article>
        `;
        })}` : ``}
      
      <article>
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
