import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import homePage from './pages/homPage';
import { render, router } from "./utilities";
import notFound from './pages/notFound';
import postPage from './pages/postPages';
import projectPages from './pages/projectPages';

const app = document.querySelector('#app');

router.on('/', () => render(homePage, app));
router.on('/post', () => render(postPage, app));
router.on('/project', () => render(projectPages, app));
router.notFound(() => render(notFound, app));

router.resolve();