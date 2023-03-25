import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginUser from "../views/LoginUser.vue";
import Studfest from "../views/Studfest.vue";
import About from "../views/About.vue";
import Faq from "../views/Faq.vue";
import Lainnya from "../views/Lainnya.vue";
import Profile from "../views/Profile2.vue";
import DetailAcara from "../views/DetailAcara2.vue";
import Acara from "../views/Acara2.vue";
import Raport from "../views/Raport.vue";
import Penugasan from "../views/Penugasan.vue";
import Quiz2 from "../views/Quiz2.vue";
import Assessment from "../views/Assessment.vue";
import Booklet from "../views/Booklet.vue";
import Timeline from "../views/booklet/VisiMisi.vue";
import Sejarah from "../views/booklet/Sejarah.vue";
import Respect from "../views/booklet/Respect.vue";
import Life from "../views/booklet/Life.vue";
import Swot from "../views/booklet/Swot.vue";
import Infografis from "../views/Infografis2.vue";
import TriDharma from "../views/booklet/TriDharma.vue";
import Filosofi from "../views/booklet/FilosofiLogo.vue";
import Login from "../views/LoginCallback.vue";
import Error from "../views/Error.vue";
import Role from "../views/Role.vue";
import Setup from "../views/Setup.vue";
import Soon from "../views/Soon.vue";
import Sertif from "../views/Sertif2.vue";
import NotLogin from "../views/NotLogin.vue";
import Presensi from "../views/Presensi.vue";
import DescNarasi from "../views/DescNarasi.vue";
import DescPradia from "../views/DescPradia.vue";
import DescBagaskara from "../views/DescBagas.vue";
import Form_Login from "../components/Login.vue";
import Info1 from "../views/info/Info1.vue";
import Info2 from "../views/info/Info2.vue";
import Info3 from "../views/info/Info3.vue";
import Info4 from "../views/info/Info4.vue";
import Info5 from "../views/info/Info5.vue";
import Info6 from "../views/info/Info6.vue";
import Info7 from "../views/info/Info7.vue";
import Info8 from "../views/info/Info8.vue";
import Info9 from "../views/info/Info9.vue";
import App from "../views/App.vue";
import Post from "../views/postTest.vue";
import Quiz3 from "../views/Quiz3.vue";
import Stud from "../views/Stud.vue";

// import Babad from "../views/Babad.vue";

const routes = [
  {
    path: "/stud",
    name: "Stud",
    component: Stud,
  },
  {
    path: "/kuis3",
    name: "Quiz3",
    component: Quiz3,
  },
  {
    path: "/app",
    name: "App",
    component: App,
  },
  {
    path: "/form_login",
    name: "Form_Login",
    component: Form_Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/desc_narasi",
    name: "DescNarasi",
    component: DescNarasi,
  },
  {
    path: "/desc_pradia",
    name: "DescPradia",
    component: DescPradia,
  },
  {
    path: "/desc_bagaskara",
    name: "DescBagaskara",
    component: DescBagaskara,
  },
  {
    path: "/login_user",
    name: "LoginUser",
    component: LoginUser,
  },
  {
    path: "/studfest",
    name: "Studfest",
    component: Studfest,
  },
  {
    path: "/acara/:id",
    name: "DetailAcara",
    component: DetailAcara,
  },
  {
    path: "/acara",
    name: "Acara",
    component: Acara,
  },
  {
    path: "/lain-lain",
    name: "Lainnya",
    component: Lainnya,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/raport",
    name: "Raport",
    component: Raport,
  },
  {
    path: "/penugasan",
    name: "Penugasan",
    component: Penugasan,
  },
  {
    // /quiz
    path: "/quiz-$2a$12$fSyMbV3txjVBK7iXKZSso-JkNJ12tkjMDPh0n2DgkrnZ4rrRWGRbS",
    name: "Quiz2",
    component: Quiz2,
  },
  {
    // /quiz
    path: "/postTest-dd57b80806af85b312e13581f48b95c7",
    name: "Post",
    component: Post,
  },
  {
    path: "/^&^",
    name: "Assessment",
    component: Assessment,
  },
  {
    //"/booklet"
    path: "/^&^",
    name: "Booklet",
    component: Booklet,
  },
  {
    path: "/booklet/visi-misi",
    name: "VisiMisi",
    component: Timeline,
  },
  {
    path: "/booklet/sejarah",
    name: "Sejarah",
    component: Sejarah,
  },
  {
    path: "/booklet/respect",
    name: "Respect",
    component: Respect,
  },
  {
    path: "/booklet/life",
    name: "Life",
    component: Life,
  },
  {
    path: "/booklet/tri-dharma",
    name: "TriDharma",
    component: TriDharma,
  },
  {
    path: "/booklet/swot",
    name: "Swot",
    component: Swot,
  },
  {
    path: "/booklet/filosofi",
    name: "Filosofi",
    component: Filosofi,
  },

  //INFOGRAFIS
  {
    path: "/infografis",
    name: "Infografis",
    component: Infografis,
  },
  {
    path: "/infografis/Mengenal-Lebih-Jauh-Tentang-Unpad",
    name: "Info1",
    component: Info1,
  },
  {
    path: "/infografis/Filosofi-Logo-Universitas-Padjadjaran",
    name: "Info2",
    component: Info2,
  },
  {
    path: "/infografis/Budaya-Respect",
    name: "Info3",
    component: Info3,
  },
  {
    path: "/infografis/Apa-Itu-Tri-Dharma-Perguruan-Tinggi",
    name: "Info4",
    component: Info4,
  },
  {
    path: "/infografis/Kebudayaan-Silih-Asah-Silih-Asih-Silih-Asuh",
    name: "Info5",
    component: Info5,
  },
  {
    path: "/infografis/Mengenal-Fasilitas-Fasilitas-Unpad",
    name: "Info6",
    component: Info6,
  },
  {
    path: "/infografis/Ruang-Aman-Kekerasan-Seksual",
    name: "Info7",
    component: Info7,
  },
  {
    path: "/infografis/Padjadjaran-Peduli-Kesehatan-Mental",
    name: "Info8",
    component: Info8,
  },
  {
    path: "/infografis/Uang-Kuliah-Tunggal-UKT",
    name: "Info9",
    component: Info9,
  },
  {
    path: "/oauth/callback",
    name: "Login",
    component: Infografis,
  },
  {
    path: "/oauth/callback",
    name: "Login",
    component: Login,
  },
  {
    path: "/:error(.*)*",
    name: "Error",
    component: Error,
  },
  {
    path: "/role",
    name: "Role",
    component: Role,
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
  },
  {
    path: "/soon",
    name: "Soon",
    component: Soon,
  },
  {
    path: "/sertif",
    name: "Sertif",
    component: Sertif,
  },
  {
    path: "/sertif",
    name: "Sertif",
    component: Sertif,
  },
  {
    path: "/presensi",
    name: "Presensi",
    component: Presensi,
  },
  {
    path: "/no-login",
    name: "NotLogin",
    component: NotLogin,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: Faq,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
