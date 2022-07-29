import {Injectable} from '@angular/core';
import {AuthConfig} from "@auth0/auth0-angular";
import {OAuthService} from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
  domain: "dev-utyk40nt.us.auth0.com",
  issuer: 'https://dev-utyk40nt.us.auth0.com/',
  redirectUri: window.location.origin + "/admin",
  clientId: 'uwoDgF8rmbI6cD3ILpc9opDOaVhL1um0',
  responseType: 'code',
  scope: 'openid profile admin',
  showDebugInformation: true,
  silentRefreshRedirectUri: window.location.origin,
  useSilentRefresh: true,
  customQueryParams: {
    /**
     * replace with your API-Audience
     * This is very important to retrieve a valid access_token for our API
     * */
    audience: 'https://dev-utyk40nt.us.auth0.com/api/v2/',
  }
};

@Injectable({
  providedIn: 'root'
})
export class BgbAuthService {

  constructor(private oauth: OAuthService) {
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin();
    this.oauth.setupAutomaticSilentRefresh();
  }

  login(): void {
    this.oauth.initLoginFlow();
  }

  logout(): void {
    console.log(this.oauth.authorizationHeader())
    this.oauth.logOut();
    console.log(this.oauth.authorizationHeader())
  }

}
