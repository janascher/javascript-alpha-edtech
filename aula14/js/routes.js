import { main } from "./modules/pages/main.js";
import { brigadeiros } from "./modules/pages/brigadeiros.js";
import { candies } from "./modules/pages/candies.js";
import { cupcakes } from "./modules/pages/cupcakes.js";

export const routes = [
    {
        path: '/',
        view: main
    },
    {
        path: '/brigadeiros',
        view: brigadeiros
    },
    {
        path: '/doces',
        view: candies
    },
    {
        path: '/brigadeiros',
        view: cupcakes
    }
];
