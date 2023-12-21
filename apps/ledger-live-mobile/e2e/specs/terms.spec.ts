import PortfolioPage from "../models/wallet/portfolioPage";
import SettingsPage from "../models/settings/settingsPage";
import AboutSettingsPage from "../models/settings/aboutSettingsPage";
import { loadConfig } from "../bridge/server";
import { isAndroid } from "../helpers";
import jestExpect from "expect";

let portfolioPage: PortfolioPage;
let settingsPage: SettingsPage;
let aboutSettingsPage: AboutSettingsPage;

beforeAll(async () => {
    loadConfig("1AccountBTC1AccountETHReadOnlyFalse", true);

    portfolioPage = new PortfolioPage();
    settingsPage = new SettingsPage();
    aboutSettingsPage = new AboutSettingsPage();

    await portfolioPage.waitForPortfolioPageToLoad();
  });

  it("should go to About Settings", async () => {
    await portfolioPage.navigateToSettings();
    await settingsPage.navigateToAboutSettings();
  });

  it("should redirect to terms and conditions", async () => {
    await aboutSettingsPage.openTerms();
    await aboutSettingsPage.expectTerms();
    

  
  });