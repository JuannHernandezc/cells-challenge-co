import { Page, PageContext } from '@testing/wdio-page-objects';
import { componentProvider } from "@testing/wdio-page-objects";
import {MovementComponent} from "src/movement/movement.component";
import {Movement} from "src/common/model/movement";

@PageContext({
  path: '#!/dashboard',
  wrapper: 'cells-template-paper-drawer-panel[state="active"]',
})
export class DashboardPage extends Page {
  private get logoutButton() {
    return $('bbva-header-main').shadow$(`[aria-label="Cerrar Sesión"]`);
  }

  private get helpButton() {
    return $('bbva-header-main').shadow$(`[aria-label="Ayuda"]`);
  }

  movements(): Movement[] {
    return componentProvider.findMany(MovementComponent).map(component => component.getMovement())
  }

  viewMovement(movementIndex: number): void {
    const movementsList = componentProvider.findMany(MovementComponent);
    movementsList[movementIndex].viewDetail();
  }

  logout(): void {
    this.logoutButton.click();
  }

  viewHelp(): void {
    this.helpButton.click();
  }
}
