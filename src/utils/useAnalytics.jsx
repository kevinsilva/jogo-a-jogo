import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export default function useAnalytics() {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Jogo a Jogo" });
  }, []);
}

