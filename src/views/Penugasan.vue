<template>
  <div class="section bg-penugasan hide_min_576">
    <div class="container">
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="head-type1" style="margin-top: 100px">
            Materi dan Penugasan
          </h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 col-sm-6 col-6">
          <div class="zoom card mx-auto card-rad-20 h-100">
            <img
              src="./img/home/tugas/tugas1.png"
              class="card-img-top card-tugas"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Tugas Narasi</h4>
              </div>
              <p class="card-acara">
                Petualangan baru untuk menjadi mahasiswa seutuhnya telah tiba!
                Tugas Narasi akan mengisi awal perjalanan kalian sebagai Pramuda
                dengan membuat video campaign.
              </p>
            </div>
            <div class="card-footer card-footer-merc2">
              <router-link to="/desc_narasi">
                <a href="#" class="btn btn-primer">Selengkapnya</a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6">
          <div class="zoom card mx-auto card-rad-20 h-100">
            <img
              src="./img/home/tugas/tugas2.png"
              class="card-img-top card-tugas"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Tugas Pradia</h4>
              </div>
              <p class="card-acara">
                Merupakan penugasan berbentuk infografis untuk membangun
                kesadaran dalam bermedia sosial disertai langkah preventif
                sebagai upaya pencegahan dan memberi ruang aman dalam bermedia
                sosial.
              </p>
            </div>
            <div class="card-footer card-footer-merc2">
              <router-link to="/desc_pradia">
                <a href="#" class="btn btn-primer">Selengkapnya</a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6">
          <div class="zoom card mx-auto card-rad-20 h-100">
            <img
              src="./img/home/tugas/tugas3.png"
              class="card-img-top card-tugas"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Kuis Bagaskara</h4>
              </div>
              <p class="card-acara">
                Pramuda diharapkan memiliki pengetahuan dan pemahaman akan
                budaya-budaya di Tanah Sunda melalui Kuis Bagaskara yang terdiri
                dari 2 bagian. Penugasan ini dikerjakan melalui website Prabu
                2022.
              </p>
            </div>
            <div class="card-footer card-footer-merc2">
              <router-link to="/desc_bagaskara">
                <a href="#" class="btn btn-primer">Selengkapnya</a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6">
          <div class="zoom card mx-auto card-rad-20 h-100">
            <img
              src="./img/home/tugas/tugas4.png"
              class="card-img-top card-tugas"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Post Test</h4>
              </div>
              <p class="card-acara">
                Halo, Pramuda! dalam rangka mengevaluasi dan mengetahui sejauh
                mana pehamaman Pramuda mengenai materi pada Prabu 2022, terdapat
                sebuah post test yang harus dikerjakan.
              </p>
            </div>
            <div class="card-footer card-footer-merc2">
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center m-5">
        <a
          href="https://drive.google.com/drive/folders/1b7pBKVoHT__crojfZsx2AnGJTAhhcSfC"
          class="btn btn-tugas"
          >Booklet Penugasan</a
        >
      </div>
    </div>
  </div>
  <section class="bg-penugasan2 hide_max_576">
    <div class="container">
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="head-type3">Materi dan Penugasan</h2>
          <br />
          <br />
        </div>
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card mx-auto card-rad">
              <img
                src="./img/home/tugas/tugas1.png"
                class="card-img-top card-tugas2"
                alt="..."
              />
              <div class="card-body pd-20">
                <div class="card-title">
                  <h4 class="card-head-tugas">Tugas Narasi</h4>
                </div>
                <p class="card-tugas">
                  Petualangan baru untuk menjadi mahasiswa seutuhnya telah tiba!
                  Tugas Narasi akan mengisi awal perjalanan kalian sebagai
                  Pramuda dengan membuat video campaign yang dapat
                  mengoptimalkan peran dan fungsi mahasiswa melalui platform
                  instagram.
                </p>
                <router-link to="/desc_narasi">
                  <a href="#" class="btn btn-primer4">Selengkapnya</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card mx-auto card-rad">
              <img
                src="./img/home/tugas/tugas2.png"
                class="card-img-top card-tugas2"
                alt="..."
              />
              <div class="card-body pd-20">
                <div class="card-title">
                  <h4 class="card-head-tugas">Tugas Pradia</h4>
                </div>
                <p class="card-tugas">
                  Merupakan penugasan berbentuk infografis untuk membangun
                  kesadaran dalam bermedia sosial disertai langkah preventif
                  sebagai upaya pencegahan dan memberi ruang aman dalam bermedia
                  sosial.
                </p>
                <router-link to="/desc_pradia">
                  <a href="#" class="btn btn-primer4">Selengkapnya</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card mx-auto card-rad">
              <img
                src="./img/home/tugas/tugas3.png"
                class="card-img-top card-tugas2"
                alt="..."
              />
              <div class="card-body pd-20">
                <div class="card-title">
                  <h4 class="card-head-tugas">Kuis Bagaskara</h4>
                </div>
                <p class="card-tugas">
                  Pramuda diharapkan memiliki pengetahuan dan pemahaman akan
                  budaya-budaya di Tanah Sunda melalui Kuis Bagaskara yang
                  terdiri dari 2 bagian. Penugasan ini dikerjakan melalui
                  website Prabu 2022.
                </p>
                <router-link to="/desc_bagaskara">
                  <a href="#" class="btn btn-primer4">Selengkapnya</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card mx-auto card-rad">
              <img
                src="./img/home/tugas/tugas4.png"
                class="card-img-top card-tugas2"
                alt="..."
              />
              <div class="card-body pd-20">
                <div class="card-title">
                  <h4 class="card-head-tugas">Post Test</h4>
                </div>
                <p class="card-tugas">
                  Halo, Pramuda! dalam rangka mengevaluasi dan mengetahui sejauh
                  mana pehamaman Pramuda mengenai materi pada Prabu 2022,
                  terdapat sebuah post test yang harus dikerjakan.
                </p>
                <a href="#" class="btn btn-cs2">Comming Soon</a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon arrow"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon arrow"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row justify-content-center m-5">
        <a
          href="https://drive.google.com/drive/folders/1b7pBKVoHT__crojfZsx2AnGJTAhhcSfC"
          class="btn btn-tugas"
          >Booklet Penugasan</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import ModalQuiz from "../components/ModalQuiz.vue";
import ModalSubmit from "../components/ModalSubmit.vue";
import "../assets/pen.css";

export default {
  components: {
    ModalQuiz,
    ModalSubmit,
  },
  data() {
    return {
      quizOverview2: [
        {
          no: 1,
          desc: "Terdapat 20 soal pilihan ganda yang terintegrasi dengan seluruh konten yang dibawakan di Prabu 2021",
        },
        {
          no: 2,
          desc: "waktu pengerjaan selama 20 menit",
        },
        {
          no: 3,
          desc: "setiap 1 soal salah bernilai 0, setiap 1 soal memiliki bobot 5",
        },
      ],
      quizOverview: [
        {
          no: 1,
          desc: "Terdapat 30 butir soal pilihan ganda yang diintegrasikan dengan materi yang berupa infografis pada website Prabu serta LINE Webtoon",
        },
        {
          no: 2,
          desc: "Waktu pengerjaan soal selama 30 menit",
        },
        {
          no: 3,
          desc: "setiap 1 soal salah bernilai 0, setiap 1 soal memiliki bobot nilai 3,33",
        },
      ],
      bookletOverview: [
        {
          no: 1,
          desc: "Terdapat beberapa penugasan baru",
        },
        {
          no: 2,
          desc: "Penugasan terdiri dari Analisis Swot, Life Plan, Tri Dharma Perguruan Tinggi, Visi dan Misi Unpad, Filosofi Logo Unpad, Sejarah Unpad, Respect, ",
        },
      ],
      showModalQuiz: false,
      showModalQuiz2: false,
      showModalBooklet: false,
      showModalSubmit: false,
      showModalEssay: false,
    };
  },
  methods: {
    toggleModalQuiz2() {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Penugasan telah ditutup",
        showConfirmButton: true,
      });
      // this.showModalQuiz2 = !this.showModalQuiz2;
    },
    toggleModalQuiz() {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Penugasan telah ditutup",
        showConfirmButton: true,
      });
      // this.showModalQuiz = !this.showModalQuiz;
    },
    toggleModalBooklet() {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Penugasan telah ditutup",
        showConfirmButton: true,
      });
      // this.showModalBooklet = !this.showModalBooklet;
    },
    toggleModalSubmit() {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Penugasan telah ditutup",
        showConfirmButton: true,
      });
      // this.showModalSubmit = !this.showModalSubmit;
    },
    toggleModalEssay() {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Penugasan telah ditutup",
        showConfirmButton: true,
      });
      // this.showModalEssay = !this.showModalEssay;
    },
    checkQuizStorage() {
      if (localStorage.quiz) {
        this.$router.push({
          name: "Quiz",
        });
      }
    },
    checkLoggedInForPenugasan() {
      // if (!localStorage.token) {
      //   this.$router.push({
      //     name: "NotLogin",
      //   });
      // }
    },
  },
  mounted() {
    this.checkLoggedInForPenugasan();
    this.checkQuizStorage();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;700&display=swap");

@font-face {
  font-family: Brudge;
  src: url("../assets/Font/Brudge Regular.otf") format("truetype");
}

.base_penugasan {
  width: 100%;
  height: auto;
  z-index: -1;
  position: absolute;
}

.senandika_img {
  position: relative;
  width: 480px;
  height: 380px;
}
.nuraga_img {
  position: relative;
  width: 370px;
  height: 320px;
}
.pranata_img {
  position: relative;
  width: 320px;
  height: 270px;
}
.cakrawala_img {
  position: relative;
  width: 600px;
  height: 460px;
}

.assessment_img {
  position: relative;
  width: 1000px;
  height: 860px;
}
.title-page {
  font-size: 5rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin: 110px 0px 70px 0px;
  position: absolute;
  z-index: 100;
}

.title-penugasan {
  font-size: 2rem;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
  width: 300px;
}
.sub-penugasan {
  font-size: 24px;
  text-align: center;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
  width: 300px;
}

.dot {
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  margin: auto;
}

.dot:hover {
  background-color: #4b4141;
  cursor: pointer;
}

.row.new-line {
  margin-top: 40px;
}

@media only screen and (max-width: 800px) {
  .row.new-line {
    margin-top: 0px;
  }
}
#warning-mess {
  display: none;
}

@media only screen and (orientation: portrait) {
  #wrapper {
    display: none;
  }

  #peta {
    display: none;
  }

  #warning-mess {
    display: block;
    color: white;
  }
}

/* BLINKING EYES EFFECT LOGO */
@keyframes blink {
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

#logo_wrapper {
  margin: 0 auto;
  overflow: hidden;
  width: 1333px;
  position: relative;
}

a {
  text-decoration: none;
}

.point_1 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 107px;
  left: 950px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  z-index: 6;
}

.point_2 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 280px;
  left: 730px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  z-index: 6;
}

.point_3 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 500px;
  left: 640px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  z-index: 6;
}

.point_4 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 600px;
  z-index: 10;
  left: 150px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.point_5 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  z-index: 10;
  top: 850px;
  left: 320px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.text_1 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 135px;
  left: 840px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}

.text_2 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 270px;
  left: 740px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}

.text_3 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 520px;
  left: 630px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}

.text_4 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 580px;
  left: 150px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}

.text_5 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 850px;
  left: 320px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}

.title_1 {
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 250px;
  left: 220px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  z-index: 0;
  color: #362222;
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  font-size: 4.5rem;
}

.img_sn {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 440px;
  left: -50px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}
.img_nr {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 730px;
  left: 170px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.img_pr {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 160px;
  left: 620px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 4;
}
.img_ck {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 345px;
  left: 380px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}
.img_ase {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: -345px;
  left: 520px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

img#move_1 {
  transform-origin: bottom;
  animation-name: move_1;
  animation-duration: 2s;
  animation-iteration-count: 10000;
}

@keyframes move_1 {
  0% {
    transform: translate(5px);
  }

  50% {
    transform: translate(-5px);
  }

  100% {
    transform: translate(5px);
  }
}

img#move_2 {
  transform-origin: center;
  animation-name: move_2;
  animation-duration: 0.8s;
  animation-iteration-count: 10000;
}

@keyframes move_2 {
  0% {
    transform: rotate(3deg) translate(5px);
  }

  50% {
    transform: rotate(-3deg) translate(-5px);
  }

  100% {
    transform: rotate(3deg) translate(5px);
  }
}

img#move_2_2 {
  transform-origin: center;
  animation-name: move_2_2;
  animation-duration: 0.9s;
  animation-iteration-count: 10000;
}

@keyframes move_2_2 {
  0% {
    transform: rotate(-3deg);
  }

  50% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(-3deg);
  }
}

img#move_2_3 {
  transform-origin: center;
  animation-name: move_2_3;
  animation-duration: 1s;
  animation-iteration-count: 10000;
}

@keyframes move_2_3 {
  0% {
    transform: rotate(-3deg) translate(5px);
  }

  50% {
    transform: rotate(3deg) translate(-5px);
  }

  100% {
    transform: rotate(-3deg) translate(5px);
  }
}

img#move_3 {
  transform-origin: center;
  animation-name: move_3;
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
}

@keyframes move_3 {
  0% {
    transform: rotate(1deg);
  }

  50% {
    transform: rotate(-1deg);
  }

  100% {
    transform: rotate(1deg);
  }
}
img#move_3_2 {
  transform-origin: center;
  animation-name: move_3_2;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}

@keyframes move_3_2 {
  0% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(-3deg);
  }

  100% {
    transform: rotate(3deg);
  }
}

img#move_4 {
  transform-origin: center;
  animation-name: move_4;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes move_4 {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(30px);
  }

  100% {
    transform: translateY(0px);
  }
}
img#move_4_2 {
  transform-origin: center;
  animation-name: move_4_2;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes move_4_2 {
  0% {
    transform: translateY(30px);
  }

  50% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(30px);
  }
}

img#move_4_3 {
  transform-origin: center;
  animation-name: move_4_3;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes move_4_3 {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0px);
  }
}

img#move_5 {
  transform-origin: center;
  animation-name: move_5;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes move_5 {
  0% {
    transform: translate(0px);
  }

  50% {
    transform: translate(10px);
  }

  100% {
    transform: translate(0px);
  }
}

.text_2_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 310px;
  left: 840px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 30px;
  color: red;
  z-index: 5;
}
.text_3_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 570px;
  left: 630px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.text_4_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 620px;
  left: 200px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.text_5_p {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: justify;
  text-justify: inter-word;
  width: 68px;
  position: absolute;
  top: 900px;
  left: 380px;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  font-size: 40px;
  color: red;
  z-index: 5;
}

.hide_2 {
  display: none;
}
.hide_3 {
  display: none;
}
.hide_4 {
  display: none;
}
.hide_5 {
  display: none;
}
.text_1:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_2:hover + .hide_2 {
  display: block;
  animation: animatebottom 1s;
}
.text_2:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_3:hover + .hide_3 {
  display: block;
  animation: animatebottom 1s;
}
.text_3:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_4:hover + .hide_4 {
  display: block;
  animation: animatebottom 1s;
}
.text_4:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.text_5:hover + .hide_5 {
  display: block;
  animation: animatebottom 1s;
}
.text_5:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
