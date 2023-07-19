import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "./pages/Home.vue";
import Kdpa from "./pages/Kdpa.vue";
import Canvas from "./pages/Canvas.vue";
import Login from "./pages/Login.vue";
import AboutUs from "./pages/AboutUs.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import TermsOfService from "./pages/TermsOfService.vue";
import ReturnsAndRefunds from "./pages/ReturnsAndRefunds.vue";
import ChooseYourPlan from "./pages/ChooseYourPlan.vue";
import Blog from "./pages/Blog.vue";
import Blog2 from "./pages/Blog2.vue";
import Read from "./pages/Read.vue";
import ProductSearch from "./pages/ProductSearch.vue";
import KeywordResearch from "./pages/KeywordResearch.vue";
import TagGenerator from "./pages/TagGenerator.vue";
import ContactUs from "./pages/ContactUs.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";
import Register from "./pages/Register.vue";
import ResetPassword from "./pages/ResetPassword.vue";

const routes: Readonly<RouteRecordRaw[]> = [
    { path: '/', component: Home },
    { path: '/kdpa', component: Kdpa },
    { path: '/canvas', component: Canvas },
    { path: '/login', component: Login },
    { path: '/reset-password', component: ForgotPassword },
    { path: '/reset-password/:hash', component: ResetPassword },
    { path: '/register', component: Register },
    { path: '/about-us', component: AboutUs },
    { path: '/contact-us', component: ContactUs },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-of-service', component: TermsOfService },
    { path: '/cancellation-policy', component: ReturnsAndRefunds },
    { path: '/pricing-plans', component: ChooseYourPlan },
    { path: '/blog', component: Blog },
    { path: '/blog2', component: Blog2 },
    { path: '/read', component: Read },
    { path: '/search', component: ProductSearch },
    { path: '/keyword', component: KeywordResearch },
    { path: '/tag', component: TagGenerator },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
