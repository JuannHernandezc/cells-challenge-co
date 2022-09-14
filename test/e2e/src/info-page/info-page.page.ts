import { Page, PageContext } from '@testing/wdio-page-objects';

@PageContext({
  path: '#!/help',
  wrapper: 'cells-template-paper-drawer-panel[state="active"]',
})
export class InfoPage extends Page {
  private get infoList() {
    return $$(`bbva-list-info`);
  }

  headerText(): string {
    return $(`bbva-header-main`).getText();
  }

  listElementsCount(): number {
    return this.infoList.length
  }
}