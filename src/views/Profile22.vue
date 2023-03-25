<template>
  <Spinner v-if="isLoading" />
  <div v-else class="profile-page">
    <InputNarasi
      v-if="showNarasi"
      @close="toggleNarasi"
      @submit="submitNarasi"
    />
    <InputPradia
      v-if="showPradia"
      @close="togglePradia"
      @submit="submitPradia"
    />
    <div class="page-header_" data-parallax="true">
      <img
        src="./img/profile/bg.png"
        alt="Circle Image"
        class="img-raised img-fluid hide_min_576"
        style="top: -10px"
      /><img
        src="./img/profile/bg2.png"
        alt="Circle Image"
        class="bg-prof-mb hide_max_576"
      />
    </div>
    <div class="main main-raised">
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col-md-3 ml-auto mr-auto bg-prof-name">
              <div class="profile">
                <div class="avatar">
                  <img
                    v-if="foto != ''"
                    :src="foto"
                    alt="Circle Image"
                    class="circular--landscape"
                  />
                  <img
                    v-if="foto == ''"
                    src="./img/placholder.png"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="nama-siswa">{{ nama }}</h3>
                  <h4 class="nama-siswa">{{ prodinama }}</h4>
                  <br />
                  <p class="nama-siswa">{{ npm }}</p>
                  <button class="btn btn-logout" @click="logout">Logout</button>
                </div>
              </div>
            </div>
            <div class="col-md-9 ml-auto mr-auto">
              <h2 class="head-profile">PENUGASAN</h2>
              <article class="postcard dark">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="./img/profile/task1.png"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h2 class="profile2">
                    Kuis Bagaskara - Bangun Gagasan Keunpadan Pramuda
                  </h2>
                  <div class="row justify-content-center">
                    <div class="col-md-1 col-sm-7 col-6">
                      <div class="row justify-content-center">
                        <div class="col-6">
                          <div class="postcard__bar">
                            <p
                              class="point"
                              v-if="
                                resultBagaskaraBud.grade == null ||
                                resultBagaskaraBud.grade == ''
                              "
                            >
                              0
                            </p>
                            <p class="point" v-else>
                              {{ resultBagaskaraBud.grade }}
                            </p>
                          </div>
                          <!-- <div class="postcard__bar">
                            <p class="point">
                              {{ total }}
                            </p>
                          </div> -->
                        </div>
                      </div>
                    </div>
                    <div class="col-md-1 col-sm-7 col-6">
                      <div class="row justify-content-center">
                        <div class="col-6">
                          <div class="postcard__bar">
                            <p
                              class="point"
                              v-if="
                                resultBagaskaraUnp.grade == null ||
                                resultBagaskaraUnp.grade == ''
                              "
                            >
                              0
                            </p>
                            <p class="point" v-else>
                              {{ resultBagaskaraUnp.grade }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-7 col-6"></div>
                    <div class="col-md-4 col-sm-7 col-6">
                      <!-- <span v-if="resultBagaskaraBud.grade == 0 ||resultBagaskaraBud == null" ><p class="stat-">0/1</p>
                      <router-link to="/quiz" class="btn btn-primer5"
                        >KERJAKAN KUIS</router-link
                      ></span>
                      <span v-else><p class="stat-">1/1</p>
                      </span> -->
                      <span
                        v-if="
                          resultBagaskaraBud.answer == '' ||
                          resultBagaskaraBud.answer == null
                        "
                      >
                        <p class="stat-">0/1</p>
                        <router-link
                          to="/quiz-$2a$12$fSyMbV3txjVBK7iXKZSso-JkNJ12tkjMDPh0n2DgkrnZ4rrRWGRbS"
                          class="btn btn-primer5"
                          >Kerjakan Kuis</router-link
                        ></span
                      >
                      <span v-else> <p class="stat-">1/1</p> </span>
                    </div>
                  </div>
                </div>
              </article>
              <article class="postcard dark">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="./img/profile/task2.png"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h2 class="profile2">Tugas Pradia - Pramuda Bermedia</h2>
                  <div class="row justify-content-center">
                    <div class="col-md-2 col-sm-7 col-6">
                      <div class="row justify-content-center">
                        <div class="col-6">
                          <div class="postcard__bar">
                            <p class="point" v-if="resultPradia.grade == null">
                              0
                            </p>
                            <p class="point" v-else>{{ resultPradia.grade }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-7 col-6"></div>
                    <div class="col-md-4 col-sm-7 col-6">
                      <span
                        v-if="
                          resultPradia.answer == '' ||
                          resultPradia.answer == null
                        "
                      >
                        <p class="stat-">0/1</p>
                        <button class="btn btn-primer5" @click="togglePradia">
                          Kirim Link
                        </button></span
                      >
                      <span v-else> <p class="stat-">1/1</p> </span>
                    </div>
                  </div>
                </div>
              </article>
              <article class="postcard dark">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="./img/profile/task3.png"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h2 class="profile2">
                    Tugas Narasi - Naluri Pramuda Berliterasi
                  </h2>
                  <div class="row justify-content-center">
                    <div class="col-md-2 col-sm-7 col-6">
                      <div class="row justify-content-center">
                        <div class="col-6">
                          <div class="postcard__bar">
                            <p class="point" v-if="resultNarasi.grade == null">
                              0
                            </p>
                            <p class="point" v-else>{{ resultNarasi.grade }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-7 col-6"></div>
                    <div class="col-md-4 col-sm-7 col-6">
                      <span
                        v-if="
                          resultNarasi.answer == '' ||
                          resultNarasi.answer == null
                        "
                      >
                        <p class="stat-">0/1</p>
                        <button class="btn btn-primer5" @click="toggleNarasi">
                          Kirim Link
                        </button></span
                      >
                      <span v-else> <p class="stat-">1/1</p> </span>
                    </div>
                  </div>
                </div>
              </article>
              <article class="postcard dark">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="./img/profile/task4.png"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h2 class="profile2">Post Test</h2>
                  <div class="row justify-content-center">
                    <div class="col-md-2 col-sm-7 col-6">
                      <div class="row justify-content-center">
                        <div class="col-6">
                          <div class="postcard__bar">
                            <p
                              class="point"
                              v-if="resultPostTest.grade == null"
                            >
                              0
                            </p>
                            <p class="point" v-else>
                              {{ resultPostTest.grade }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-7 col-6"></div>
                    <div class="col-md-4 col-sm-7 col-6">
                      <p class="stat-">0/1</p>
                      <button class="btn btn-cs2">Coming Soon</button>
                    </div>
                  </div>
                </div>
              </article>
              <span>
                <router-link
                  to="/quiz-$2a$12$fSyMbV3txjVBK7iXKZSso-JkNJ12tkjMDPh0n2DgkrnZ4rrRWGRbS"
                  class="btn btn-log"
                  style="margin-bottom: 30px; right: 0px; float: right"
                  >Sertifikat</router-link
                ></span
              >
            </div>
          </div>
          <!-- <div class="row">
            <div
              class="col-md-6 ml-auto mr-auto"
              style="background-color: #f2e5c3"
            >
              <div class="profile-tabs">
                <ul
                  class="nav nav-pills nav-pills-icons justify-content-center"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#studio"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="material-icons">camera</i>
                      Studio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#works"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="material-icons">palette</i>
                      Work
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#favorite"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="material-icons">favorite</i>
                      Favorite
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import axios from "axios";
import "../assets/profile.css";
import Spinner from "../components/Spinner.vue";
import Confirm from "../components/Confirm.vue";
import InputPradia from "../components/InputPradia.vue";
import InputNarasi from "../components/InputNarasi.vue";

export default {
  data() {
    return {
      // showAll: false,
      // showResult: false,
      viewButton: false,
      isLoading: true,
      isLoggedIn: null,
      nama: "",
      npm: "",
      prodikode: "",
      prodinama: "",
      fakultas: "",
      foto: "",
      resultBagaskaraBud: null,
      bagaskaraBud:null,
      bagaskaraUnp:null,
      resultBagaskaraBudGrade: null,
      resultBagaskaraUnp: null,
      resultBagaskaraUnpGrade: null,
      resultPradia: null,
      resultNarasi: null,
      resultPostTest: null,
      showPradia: false,
      showNarasi: false,
    };
  },
  components: {
    Spinner,
    Confirm,
    InputNarasi,
    InputPradia,
  },
  methods: {
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      window.location.href = `${import.meta.env.VITE_FE_BASE_URL}`;
    },
    toggleNarasi() {
      this.showNarasi = !this.showNarasi;
    },
    togglePradia() {
      this.showPradia = !this.showPradia;
    },

    checkLogin() {
      if (localStorage.token) {
        this.isLoggedIn = true;
      } else {
        this.$router.push({
          name: "Home",
        });
      }
    },
    getUserProfile() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/profile/pramuda`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.foto = res.data.foto;
          this.nama = res.data.nama;
          this.npm = res.data.npm;
          this.prodikode = res.data.prodikode;
          this.prodinama = res.data.prodinama;
          this.fakultas = res.data.fakultas;
          this.resultBagaskaraBud = res.data.assignment.bagaskara_budaya;
          this.resultBagaskaraUnp = res.data.assignment.bagaskara_unpad;
          this.bagaskaraBud = res.data.assignment.bagaskara_budaya.grade;
          this.bagaskaraUnp = res.data.assignment.bagaskara_unpad.grade;
          this.resultPradia = res.data.assignment.pradia;
          this.resultNarasi = res.data.assignment.narasi;
          this.resultPostTest = res.data.assignment.posttest;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    // getNilai(){
    //   if(this.resultBagaskaraUnpGrade != 0){
    //     this.viewButton == false
    //   }else{
    //     this.viewButton == true
    //   }
    // }
  },
  // computed:{
  //   total:function(){
  //     return (this.bagaskaraBud + this.bagaskaraUnp)/2;
  //   }
  // },
  mounted() {
    this.getUserProfile();
    this.checkLogin();
  },
};
</script>

<style>
.profile-image {
  width: 20%;
  height: 30%;
  border-radius: 10px;
}

.notification {
  background-color: #6c3a84;
  padding: 0px 10px;
  margin-top: -2px;
  font-size: 22px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
}

.card-profile {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 10px;
  box-shadow: 2px 5px 10px rgba(63, 63, 63, 0.604);
  min-height: 320px;
}

.card-text a {
  text-decoration: none;
  color: black;
}

.btn-card.result {
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 14px;
}

.view-all {
  cursor: pointer;
}

.card-text .view-all:hover {
  font-weight: bold;
}

.all-badge {
  display: none;
  transition: display 1s;
}

.all-badge.show {
  display: inline;
}

.all-result {
  display: none;
}

.all-result.show {
  display: inline;
}

.router-penugasan {
  text-decoration: none;
  color: white;
}

.router-penugasan:hover {
  color: white;
}

.no-badge {
  text-align: center;
  margin: 30px 0px;
  background-color: #fc8c86;
  margin: 20px 10px;
  border-radius: 5px;
  color: white;
  padding: 10px 5px;
}

.wait.no-badge {
  background-color: #3b928c;
}

.card-img-bs {
  width: 150px;
  height: 150px;
}
</style>
