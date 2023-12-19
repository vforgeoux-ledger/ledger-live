import {
    getElementById,
  } from "../../helpers";
  
  export default class AboutSettingsPage {
    termsRedirect = () => getElementById("terms-conditions");
    privacyPolicyRedirect = () => getElementById("privacy-policy");
  
    async openTerms() {
      await this.termsRedirect().tap();
    }
    
    async openPrivacyPolicy() {
        await this.privacyPolicyRedirect().tap();
      }
  
  }