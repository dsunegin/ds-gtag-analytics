/**
@license
MIT License
Copyright (c) 2020 Denis Sunegin
This code may be used under the MIT license found at https://github.com/dsunegin/ds-gtag-analytics/LICENSE
*/
class DsGtagAnalytics extends HTMLElement {
  connectedCallback() {
    let newScript = document.createElement("script");
    const key = this.getAttribute('key');
    newScript.type = "text/javascript";
    newScript.setAttribute("async", "true");
    newScript.setAttribute("src", "//www.googletagmanager.com/gtag/js?id=" + key);
    document.documentElement.firstChild.appendChild(newScript);

    window.gtag = function() {
      dataLayer.push(arguments);
    };
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', key);
  }
}
customElements.define('ds-gtag-analytics', DsGtagAnalytics);
