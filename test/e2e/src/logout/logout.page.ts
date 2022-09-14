import { Page, PageContext } from '@testing/wdio-page-objects';
import { getLogger } from "@testing/base";

const logger = getLogger('app.common.LogoutPage');

@PageContext({
  wrapper: '#logoutModal',
})
export class LogoutPage extends Page {

  private get confirmButtonModal() {
    return $(`.footer-button`);
  }

  confirmLogout() {
    logger.info('confirmLogout');
    this.confirmButtonModal.click();
  }
}