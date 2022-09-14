import { Then, When } from '@testing/cucumber-runner';

import { DashboardPage } from  './dashboard.page';
import { InfoPage } from '../info-page/info-page.page';
import { expect } from "chai";
import { pageProvider } from "@testing/wdio-page-objects";
import { LogoutPage } from "src/logout/logout.page";

export class DashboardSteps {

  @When("I go to the dashboard")
  iGoToTheDashboard() {
    pageProvider.go(DashboardPage);
  }

  @When('I choose movement in position {int}')
  iChooseMovementXInPosition(movementIndex: number) {
    pageProvider.wait(DashboardPage).viewMovement(movementIndex);
  }

  @When(/^I log out$/)
  iLogout() {
    pageProvider.wait(DashboardPage).logout();
    pageProvider.wait(LogoutPage).confirmLogout();
  }

  @When(/^I view the help page$/)
  iViewTheHelpPage() {
    pageProvider.wait(DashboardPage).viewHelp();
  }

  @Then('I should see the dashboard')
  iShouldSeeTheDashboard() {
    pageProvider.wait(DashboardPage);
  }

  @Then('I should see at least {int} movements with a title')
  iShouldSeeAtLeastXMovementsWithATitle(expectedMinMovementsCount: number) {
    const movements = pageProvider.wait(DashboardPage).movements()
    expect(movements.length).to.be.at.least(expectedMinMovementsCount)
    movements.forEach(movement => {
      expect(movement.title).to.be.not.empty;
    })
  }

  @Then(/^I should see a lovely info page$/)
  iShouldSeeALovelyInfoPage() {
    expect(pageProvider.wait(InfoPage).headerText()).to.be.equal('Made with ❤️ by Cells Team');
    expect(pageProvider.wait(InfoPage).listElementsCount()).to.be.at.least(2);
  }
}
