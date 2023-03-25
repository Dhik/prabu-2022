<template>
  <nav class="navbar navbar-expand-lg bg-navbar hide_max_576">
    <div class="container icon-center">
      <div class="text-center p-4">
        <a href="https://instagram.com/prabunpad"
          ><i class="fa-5x fab fa-instagram logo_color2 mr-2"></i
        ></a>
        <a href="https://www.tiktok.com/@prabunpad?_t=8Ug5AYUDBZa&_r=1"
          ><i class="fa-5x fab fa-tiktok logo_color2 mr-2"></i
        ></a>
        <a href="https://twitter.com/prabunpad"
          ><i class="fa-5x fab fa-twitter logo_color2 mr-2"></i
        ></a>
        <a
          href="https://linevoom.line.me/user/_dfVYyq2CnMKDUNK-sss7GF44hotXgqF5QGioVvA?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
          ><i class="fa-5x fab fa-line logo_color2 mr-2"></i
        ></a>
        <a
          href="https://open.spotify.com/show/2uqTYRlfrlaa3wFzsw7gBk?si=VTaxhWJmT4yDs5CXIjDgwg&utm_source=copy-link"
          ><i class="fa-5x fab fa-spotify logo_color2 mr-2"></i
        ></a>
        <a href="https://youtube.com/c/PrabuUnpad"
          ><i class="fa-5x fab fa-youtube logo_color2 mr-2"></i
        ></a>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-navbar hide_min_576">
    <div class="container icon-center">
      <div class="text-center p-4">
        <a href="https://instagram.com/prabunpad"
          ><i class="fa-5x fab fa-instagram logo_color mr-4"></i
        ></a>
        <a href="https://www.tiktok.com/@prabunpad?_t=8Ug5AYUDBZa&_r=1"
          ><i class="fa-5x fab fa-tiktok logo_color mr-4"></i
        ></a>
        <a href="https://twitter.com/prabunpad"
          ><i class="fa-5x fab fa-twitter logo_color mr-4"></i
        ></a>
        <a
          href="https://linevoom.line.me/user/_dfVYyq2CnMKDUNK-sss7GF44hotXgqF5QGioVvA?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
          ><i class="fa-5x fab fa-line logo_color mr-4"></i
        ></a>
        <a
          href="https://open.spotify.com/show/2uqTYRlfrlaa3wFzsw7gBk?si=VTaxhWJmT4yDs5CXIjDgwg&utm_source=copy-link"
          ><i class="fa-5x fab fa-spotify logo_color mr-4"></i
        ></a>
        <a href="https://youtube.com/c/PrabuUnpad"
          ><i class="fa-5x fab fa-youtube logo_color mr-4"></i
        ></a>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-navbar hide_max_576">
    <div class="container">
      <div class="navbar-collapse" id="navbarNav">
        <div class="row justify-content-center w3-animate-left">
          <div class="col-md-5 col-sm-9 col-xs-9" style="padding-top: 1em">
            <h2 class="footer_head">Universitas Padjadjaran</h2>
            <p class="footer_p">
              Jl. Raya Bandung Sumedang KM.21, Hegarmanah, Kec. Jatinangor,
              Kabupaten Sumedang, Jawa Barat 45363
            </p>
            <p class="footer_p">
              Jl. Dipati Ukur No.35, Lebakgede, Kecamatan Coblong, Kota Bandung,
              Jawa Barat 40132
            </p>
          </div>
        </div>
        <div class="row justify-content-center w3-animate-left">
          <div class="col-md-5 col-sm-10 col-xs-10" style="padding-top: 1em">
            <h2 class="webapps2">WebApps 2022</h2>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-navbar hide_min_576">
    <div class="container">
      <div id="navbarNav">
        <div class="row justify-content-center w3-animate-left">
          <div class="col-md-5 col-sm-5 col-xs-5" style="padding-top: 1em">
            <h2 class="footer_head">Universitas Padjadjaran</h2>
            <p class="footer_p">
              Jl. Raya Bandung Sumedang KM.21, Hegarmanah, Kec. Jatinangor,
              Kabupaten Sumedang, Jawa Barat 45363
            </p>
            <p class="footer_p">
              Jl. Dipati Ukur No.35, Lebakgede, Kecamatan Coblong, Kota Bandung,
              Jawa Barat 40132
            </p>
          </div>
        </div>
        <div class="row justify-content-center w3-animate-left">
          <div class="col-md-10 col-sm-10 col-xs-10" style="padding-top: 1em">
            <h2 class="webapps">WebApps Copyright</h2>
          </div>
        </div>
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
