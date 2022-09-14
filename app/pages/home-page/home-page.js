import { CellsPage } from '@cells/cells-page';
import { LitElement, html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@bbva-web-components/bbva-card-photo';
import '@bbva-web-components/bbva-button-default';


class HomePage extends CellsPage {
  static get is() {
    return 'home-page';
  }

  static get styles() {
    return css`
    .container-main{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
      .card-container{
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        margin: 10px;
      }
      .card-container img{
        width: 400px;
        height: 393px;
        margin-bottom: 10px;
      }
    `
  }

  static get properties() {
    return {
      data: {type: Array}
    };
  }

  constructor(){
    super();
    this.data = [];
    this._getData();
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
          text="APP GIPHY"></bbva-header-main>
        </div>
        <div slot="app__main">
          <div class="container-main">
          ${
              this.data.map((item) => {
                return html `
                <div class="card-container">
                  <p>${item.title}</p>
                  <img src="${item.url}">
                  <bbva-button-default>Añadir al carro</bbva-button-default>
                </div>
                `
              })
            }
          </div>
        </div>
      </cells-template-paper-drawer-panel>
    `
  }

  async _getData() {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=mx86gcqn1QMbH8sXj6cF0tJXVkdYlWyN&q=pug&limit=25&offset=0&rating=g&lang=en';
    const answer = await fetch(url);
    const { data } = await answer.json();
    console.log(data);
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    });

    this.data = gifs;
    return this.data;
  }

}
customElements.define(HomePage.is, HomePage);