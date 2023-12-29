import { device, expect } from "detox";
import PortfolioPage from "../models/wallet/portfolioPage";
import SettingsPage from "../models/settings/settingsPage";
import GeneralSettingsPage from "../models/settings/generalSettingsPage";
import PasswordEntryPage from "../models/passwordEntryPage";
import { loadConfig } from "../bridge/server";


let portfolioPage: PortfolioPage;
let settingsPage: SettingsPage;
let generalSettingsPage: GeneralSettingsPage;
let passwordEntryPage: PasswordEntryPage;

describe("Check terms & conditions", () => {
  beforeAll(async () => {
    loadConfig("1AccountBTC1AccountETHReadOnlyFalse", true);

    portfolioPage = new PortfolioPage();
    settingsPage = new SettingsPage();
    generalSettingsPage = new GeneralSettingsPage();
  });

  it("should open on Portfolio page", async () => {
    await portfolioPage.waitForPortfolioPageToLoad();
  });

  it("should go to Settings", async () => {
    await portfolioPage.navigateToSettings();
  });

  it("should navigate to About section", async () => {
    await settingsPage.navigateToAboutSettings();
  });
});
