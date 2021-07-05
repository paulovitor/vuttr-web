import { getInstance } from "./authWrapper";

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    if (authService.isAuthenticated) {
      return next();
    }
    authService.loginWithRedirect({
      redirect_uri: "https://paulovitor.github.io/",
      appState: { targetUrl: to.fullPath },
      audience: process.env.VUE_APP_AUTH0_AUDIENCE,
      scope: "create:tools delete:tools",
    });
  };

  if (!authService.loading) {
    return fn();
  }

  authService.$watch("loading", (loading) => {
    if (loading === false) {
      return fn();
    }
  });
};
