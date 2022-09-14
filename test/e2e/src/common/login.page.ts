import { Page, PageContext } from '@testing/wdio-page-objects';
import { getLogger } from '@testing/base';
import { User } from './model/user';

const logger = getLogger('app.common.LoginPage');

@PageContext({
  path: '#!/',
  wrapper: `cells-template-paper-drawer-panel[state=active]`,
})
export class LoginPage extends Page {
  doLogin(user: User) {
    logger.info('login');
    this.username.setValue(user.username);
    this.password.setValue(user.password);
    this.submit.click();
  }

  private get username() {
    logger.debug('username');
    return $(`#user input`);
  }

  private get password() {
    logger.debug('password');
    return $(`#password input`);
  }

  private get submit() {
    logger.debug('submit');
    return $(`bbva-button-default`);
  }
}