import { getElementById, tapByElement, waitForElementById } from "../../helpers";

export default class SettingsPage {
  generalSettingsButton = () => getElementById("general-settings-card");
  aboutSettingsButton=() => getElementById("about-settings-card");

  async navigateToGeneralSettings() {
    await waitForElementById("general-settings-card");
    await tapByElement(this.generalSettingsButton());
  }

  async navigateToAboutSettings() {
    await waitForElementById("about-settings-card");
    await tapByElement(this.aboutSettingsButton());
  }
}
