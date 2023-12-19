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

  it.skip("should redirect to terms and conditions", async () => {
    await aboutSettingsPage.openTerms();
    

    if (isAndroid()) {
      const url = await web.element(by.web.id("main")).getCurrentUrl();
      const expectedUrl = "https://shop.ledger.com/";

      jestExpect(url).toContain(expectedUrl);
    } else {
      console.warn("Skipping webview check on iOS");
    }
  });