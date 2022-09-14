import { Page, PageContext } from '@testing/wdio-page-objects';

@PageContext({
  path: '#!/movement/:movementId/:movementSlug',
  wrapper: 'cells-template-paper-drawer-panel[state="active"]',
})
export class MovementDetailPage extends Page {
  private get movementDetailList() {
    return $$(`bbva-list-simple`);
  }

  private get backButton() {
    return $(`[aria-label="Volver"]`);
  }

  getMovementDetailTexts() : string[] {
    return this.movementDetailList.map(element => element.getText())
  }

  backFromDetail() {
    this.backButton.click();
  }
}