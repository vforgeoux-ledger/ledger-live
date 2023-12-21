import {
    getElementById, isAndroid
  } from "../../helpers";
import { web, by } from "detox";
  
  export default class AboutSettingsPage {
    termsRedirect = () => getElementById("terms-conditions");
    privacyPolicyRedirect = () => getElementById("privacy-policy");
  
    async openTerms() {
      await this.termsRedirect().tap();
    }
    
    async openPrivacyPolicy() {
        await this.privacyPolicyRedirect().tap();
      }
      
    async expectTerms() {
      if (isAndroid()) {
        const url = await web.element(by.web.id("__next")).getCurrentUrl();
        const expectedUrl = "https://shop.ledger.com/";
  
          expect(url).toContain(expectedUrl);
        } else {
          console.warn("Skipping webview check on iOS");
        }
      }
  }