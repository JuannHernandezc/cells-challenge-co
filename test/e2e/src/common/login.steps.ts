import { Given, Then } from '@testing/cucumber-runner';
import { LoginPage } from './login.page';
import { pageProvider } from "@testing/wdio-page-objects";

export class LoginSteps {
  @Given("I'm a logged user with movements")
  IAmALoggedUserWithMovements() {
    //If you want to use data manager for user retrieval, uncomment next line and remove hardcoded credencials in favor of this?.world?.users?.get() as User
    //getStepClassInstance(UserProviderSteps).findUser("movements");
    pageProvider.go(LoginPage).doLogin({username: 'CellsUser', password: '123456'});
  }

  @Given("I'm a logged user")
  IAmALoggedUser() {
    //If you want to use data manager for user retrieval, uncomment next line and remove hardcoded credencials in favor of this?.world?.users?.get() as User
    //getStepClassInstance(UserProviderSteps).findUser("validuser");
    pageProvider.go(LoginPage).doLogin({username: 'CellsUser', password: '123456'});
  }

  @Then('I should see the login page')
  iShouldSeeTheLoginPage() {
    pageProvider.wait(LoginPage);
  }
}