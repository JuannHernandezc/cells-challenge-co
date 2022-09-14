import { Given, When, Then, getStepClassInstance } from '@testing/cucumber-runner';
import { pageProvider } from "@testing/wdio-page-objects";
import { MovementDetailPage } from "src/movement-detail/movement-detail.page";
import {expect} from "chai";
import {DashboardSteps} from "src/dashboard/dashboard.steps";

export class MovementDetailSteps {

  @Given("I'm in a movement's detail")
  imInAMovementsDetail() {
    getStepClassInstance(DashboardSteps).iChooseMovementXInPosition(0)
    pageProvider.wait(MovementDetailPage);
  }

  @When("I go back from movement's detail")
  iGoBackFromTheMovementDetail() {
    pageProvider.wait(MovementDetailPage).backFromDetail();
  }

  @Then("I should see the movement's detail")
  iShouldSeeTheMovementsDetail() {
    const movementsDetailTexts = pageProvider.wait(MovementDetailPage).getMovementDetailTexts();
    movementsDetailTexts.forEach(text => {
      expect(text).is.not.empty;
    });
  }

}