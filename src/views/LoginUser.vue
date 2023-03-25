<template>
  <section class="bg-login">
    <div
      class="modal-backdrop-login"
      v-if="isLoggedIn == false || isLoggedIn == null"
    >
      <div
        class="container_login hide_min_576 container login-form"
        id="container"
      >
        <div class="overlay-container">
          <div class="log-in">
            <img src="../assets/img/logoprabu.png" width="180" height="180" />
            <div class="form-group">
              <!-- <label class="label">NISN</label> -->
              <input
                type="text"
                class="form-control mb-3 log"
                v-model="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <!-- <label class="label">Password (contoh:02/20/****)</label> -->
              <!-- <input
                type="date"
                v-model="birthdate"
                class="form-control mb-5"
                placeholder="Password"
              /> -->
              <input
                type="text"
                class="form-control mb-3 log"
                v-model="nisn"
                placeholder="NISN"
              />
              <br />
            </div>
            <div class="row">
              <button @click="loginForm" value="kirim" class="btn btn-log">
                Login
              </button>
            </div>
          </div>
        </div>
        <div class="form-container sign-in-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1 class="welcome-login">Selamat Datang<br />Prabu 2022</h1>
              <p>
                Silahkan Masukkan NPM dan Tanggal Lahir untuk masuk ke akun
                Prabu Kamu
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container_login2 hide_max_576 container login-form2"
        id="container"
      >
        <div action="#" class="log-in2">
          <img src="../assets/img/logoprabu.png" width="180" height="180" />
          <h1 class="welcome-login2">Selamat Datang</h1>
          <p>
            Silahkan Login terlebih dahulu untuk mengakses Website Prabu 2022
          </p>
          <div class="form-group">
            <!-- <label class="label">NISN</label> -->
            <input
              type="text"
              class="form-control mb-3 log"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <!-- <label class="label">Password (contoh:02/20/****)</label> -->
            <!-- <input
                type="date"
                v-model="birthdate"
                class="form-control mb-5"
                placeholder="Password"
              /> -->
            <input
              type="text"
              class="form-control log"
              v-model="nisn"
              aria-describedby="emailHelp"
              placeholder="NISN"
            />
            <br />
          </div>
          <div class="row" style="padding-bottom: 40px">
            <button @click="loginForm" value="kirim" class="btn btn-log2">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import qs from "qs";
import axios from "axios";
import moment from "moment";

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: null,
      email: "",
      nisn: "",
    };
  },
  methods: {
    loginForm() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/account/login`,
        data: {
          email: this.email,
          nisn: this.nisn,
        },
      })
        .then((response) => {
          console.log("berhasil", response);
          const bearerToken = response.data.token;
          const role = response.data.role;

          localStorage.setItem("token", bearerToken);

          if (role === "pramuda") {
            // this.$router.push({ name: "Profile" });
            window.location.href = `${
              import.meta.env.VITE_FE_BASE_URL
            }/profile`;
          } else if (role === "admin") {
            window.location.href = `${
              import.meta.env.VITE_BACKEND_BASE_URL
            }/admin/login?token=${bearerToken}&role=${role}`;
          } else {
            this.$router.push({ name: "Role" });
          }
        })
        .catch((e) => {
          console.log("Ada Eror mas", e);
          Swal.fire({
            icon: "error",
            title: "NISN/Password tidak terdaftar",
            text: "Silahkan menghubungi pihak admin atau login menggunakan Paus Unpad",
          });
        });
    },
    //Loginn Paus Unpad
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
  computed: {
    formattedDate() {
      return moment(this.birthdate).format("MM/DD/YYYY");
    },
  },
};
</script>

<style>
.modal-backdrop-login {
  top: 0;
  width: 100%;
  height: 100%;
}
.login-form {
  background-color: #28244c;
  width: 60%;
  height: 60vh;
  border-radius: 15px;
  animation: slide_up 1s ease;
}
.login-form2 {
  background-color: #1f1c3c;
  width: 80%;
  height: 80vh;
  border-radius: 10px;
  animation: slide_up 1s ease;
}
</style>
