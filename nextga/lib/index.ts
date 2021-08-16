export const GA_TRACKING_ID = "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};


export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};