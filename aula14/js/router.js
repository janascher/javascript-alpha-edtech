import { routes } from "./routes.js";

const app = document.querySelector("#app");

const route = () => {
    const findRoute = routes.find(route => route.path === location.pathname);
    return findRoute;
};

const resolveRoute = () => {
    const resolve = route();

    if(resolve) {
        app.innerHTML = resolve.view();
    } else {
        app.innerHTML = "Página não encontrada.";
    };
};

const router = {
    route: route(),
    push: (url, state = null) => {
        history.pushState(state, null, url);
        resolveRoute();
    }
};

window.addEventListener('load', resolveRoute);

export default router;