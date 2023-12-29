import { getElementById, tapByElement, waitForElementById } from "../../helpers";

export default class SettingsPage {
  generalSettingsButton = () => getElementById("general-settings-card");
  aboutSettingsButton = () => getElementById("about-settings-card");
  helpSettingsButton = () => getElementById("help-settings-card");
  

  async navigateToGeneralSettings() {
    await waitForElementById("general-settings-card");
    await tapByElement(this.generalSettingsButton());
  }

  async navigateToAboutSettings() {
    await waitForElementById("about-settings-card");
    await tapByElement(this.helpSettingsButton());
  }

  async navigateToHelpSettings() {
    await waitForElementById("help-settings-card");
    await tapByElement(this.helpSettingsButton());
  }
}
