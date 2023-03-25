<template>
  <nav class="navbar navbar-expand-lg bg-navbar hide_min_576">
    <div
      style="padding-left: 10px !important; padding-right: 10px !important"
      class="container"
    >
      <a href="/" class="navbar-brand d-flex">
        <img src="../views/img/home/logo.png" width="72" height="55" />
        <h1>Prabu 2022</h1>
      </a>
      <span
        class="navbar-toggler bg-menus"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-black"></i>
      </span>
      <div class="navbar-collapse collapse w-100" id="navbarNav">
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <!-- <li class="nav-item ml-auto pad_button">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/minimap">Minimap 
            <i class="fas fa-map"></i>
            </router-link>
          </li> -->
          <li class="nav-item pad_button">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/"
              >Beranda
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item pad_button">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/about"
              >Tentang Prabu
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item pad_button">
            <router-link
              class="btn btn_nav home mb-sm-3 mb-md-2"
              to="/infografis"
              >Infografis
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item pad_button">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/acara"
              >Acara
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item pad_button">
            <router-link
              class="btn btn_nav home mb-sm-3 mb-md-2"
              to="/penugasan"
              >Penugasan
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item pad_button">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/faq"
              >FAQ
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <span v-if="isLoggedIn == false || isLoggedIn == null">
              <router-link to="/login_user" class="btn btn_nav">
                Login
                <!-- <i class="fas fa-sign-in-alt"></i> -->
              </router-link>
            </span>
            <div v-else>
              <router-link class="btn btn_nav" to="/profile">
                Profile
              </router-link>
              <button class="btn btn_nav cap" @click="logout">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-navbar hide_max_576">
    <div class="container">
      <a href="/" class="navbar-brand d-flex">
        <img src="../views/img/home/logo.png" width="72" height="55" />
        <h1 class="brand-min">Prabu 2022</h1>
      </a>
      <span
        class="navbar-toggler bg-menus"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-black"></i>
      </span>
      <div class="navbar-collapse collapse w-100" id="navbarNav">
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <!-- <li class="nav-item ml-auto pad_button">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/minimap">Minimap 
            <i class="fas fa-map"></i>
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/"
              >Beranda
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/about"
              >Tentang Prabu
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="btn btn_nav home mb-sm-3 mb-md-2"
              to="/infografis"
              >Infografis
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/acara"
              >Acara
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="btn btn_nav home mb-sm-3 mb-md-2"
              to="/penugasan"
              >Penugasan
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn_nav home mb-sm-3 mb-md-2" to="/faq"
              >FAQ
              <!-- <i class="fas fa-map"></i> -->
            </router-link>
          </li>
          <li class="nav-item">
            <span v-if="isLoggedIn == false || isLoggedIn == null">
              <router-link to="/login_user" class="btn btn_nav">
                Login
                <!-- <i class="fas fa-sign-in-alt"></i> -->
              </router-link>
            </span>
            <div v-else>
              <router-link class="btn btn_nav" to="/profile">
                Profile
              </router-link>
              <button class="btn btn_nav cap" @click="logout">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import "../assets/nav.css";
import qs from "qs";

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: null,
    };
  },
  methods: {
    login() {
      const params = {
        client_id: import.meta.env.VITE_PAUS_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_PAUS_REDIRECT_URI,
        state: "2rNrG0DSz8OLK2y1Cj4m", // To Do checking state
        response_type: "code",
        scope: "user.basic",
      };
      window.location.href = `${
        import.meta.env.VITE_PAUS_ORIGINAL
      }?${qs.stringify(params)}`;
    },
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push({
        name: "Home",
      });
    },
    checkLogin() {
      if (localStorage.token) {
        this.isLoggedIn = true;
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style>
ul {
  list-style: none;
}

.home {
  margin-right: 10px;
}

.logins {
  margin-left: 10px;
}

/* .navbar.navbar-expand-lg.bg-white{
  border-radius: 0 0 10px 10px;
  box-shadow: 0 20px 20px rgba(164, 205, 220, 100%);
} */
.btn_map a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.bg-menus {
  border-color: #333;
}

@media (max-width: 450px) {
  .pad_button {
    margin-bottom: 7px;
  }
}
</style>
