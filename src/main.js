import Vue from 'vue'
import App from './App.vue'
import * as Keycloak from 'keycloak-js';

let initOptions = {
  url: `${process.env.VUE_APP_CLOAK_URL}`,
  realm: `${process.env.VUE_APP_CLOAK_REALM}`,
  clientId: `${process.env.VUE_APP_CLOAK_CLIENT_ID}`,
  onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    console.log.info("Authenticated");

    new Vue({
      el: '#app',
      render: h => h(App, { props: { keycloak: keycloak } })
    })
  }

//Token Refresh
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.log.info('Token refreshed' + refreshed);
      } else {
        console.log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      console.log.error('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  console.log.error("Authenticated Failed");
});


