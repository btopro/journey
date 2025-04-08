/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see License.md for full text.
 */
import { HAXCMSLitElementTheme, css, unsafeCSS, html, store, autorun, toJS } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import "@haxtheweb/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@haxtheweb/simple-cta/simple-cta.js";
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
        --my-theme-low-tone: var(--ddd-theme-default-slateMaxLight);
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
        border-left: 4px dashed var(--ddd-primary-2);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 4px;
        margin: 0 auto;
        z-index: 0;
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
          margin-bottom: var(--ddd-spacing-10);
          color: white;
          background-color: var(--ddd-primary-2);
          height: 50vh;
          width: 100%;
          overflow: hidden;
          padding: var(--ddd-spacing-10);
          z-index: 1;
        }
        .author-image {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          margin-right: var(--ddd-spacing-10);
        }
        header h1 {
          font-size: var(--ddd-font-size-4xl);
        }

        header h2 {
          font-size: var(--ddd-font-size-3xl);
        }

        article {
          display: block;
        }
        .even {
          margin-left: 50%;
        }
        .odd {
          margin-right: 50%;
        }
        .article-wrap {
          padding: var(--ddd-spacing-10);
        }
        .article-wrap h3 {
          font-size: var(--ddd-font-size-2xl);
        }
        .article-wrap p {
          font-size: var(--ddd-font-size-xs);
        }
      `,
    ];
  }

  render() {
    return html`
    <header>
      <div class="author">
        ${this.manifest.metadata.author.image ? html`<img class="author-image" src="${this.manifest.metadata.author.image}" alt="${this.manifest.metadata.author.name}" />`: ``}
        <h1>${this.manifest.name}</h1>
        <h2>${this.manifest.description}</h2>
      </div>
    </header>
    <main>
      
      ${this.location.route.name === "home" ? html`
        ${this._items.map((item, index) => {
        return html`
          <article class="${index % 2 === 0 ? "even" : "odd"}">
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
