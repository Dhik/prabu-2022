<template>
  <section class="background-kuis">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitBudaya" />
    <div id="kuis">
      <div class="container">
        <h2 class="h-quiz">QUIZ</h2>
        <h3 class="h-type" v-if="current > 30 && current <= questionCount">
          Keunpadan
        </h3>
        <h3 class="h-type" v-else>Kebudayaan</h3>
        <h4 class="h-type">Time</h4>
        <div v-for="question in paginated" :key="question.no">
          <div class="d-flex justify-content-between align-items-center">
            <span class="question">
              Question <span class="question" v-html="question.no"></span>/
              40</span
            >
          </div>










          <span v-if="current == 35 && current < questionCount">
            <div class="img-soal">
              <img class="img-35" src="../assets/img/imgquiz.png" alt="" />
            </div>
            <div class="deskripsi" v-html="question.question"></div>
          </span>
          <span v-else>
            <div class="deskripsi" v-html="question.question"></div>
          </span>
          <br />
          <div class="row">
            <div class="d-flex justify-content-around multiple-choice">
              <div class="d-flex flex-column text-center option-container">
                <label class="form-control2">
                  <input
                    type="radio"
                    name="A"
                    value="A"
                    v-model="answer[question.no - 1]"
                  />
                  <h5 class="opsi">A. {{ question.A }}</h5>
                </label>
                <label class="form-control2">
                  <input
                    type="radio"
                    name="B"
                    value="B"
                    v-model="answer[question.no - 1]"
                  />
                  <h5 class="opsi">B. {{ question.B }}</h5>
                </label>
              </div>
              <div class="d-flex flex-column text-center option-container">
                <label class="form-control2">
                  <input
                    type="radio"
                    name="C"
                    value="C"
                    v-model="answer[question.no - 1]"
                  />
                  <h5 class="opsi">C. {{ question.C }}</h5>
                </label>
                <label class="form-control2">
                  <input
                    type="radio"
                    name="D"
                    value="D"
                    v-model="answer[question.no - 1]"
                  />
                  <h5 class="opsi">D. {{ question.D }}</h5>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-4 score-time">
          <div class="btn btn-quiz mx-5" @click="prev">Back</div>
          <div
            class="btn btn-quiz"
            @click="next"
            v-if="current != questionCount"
          >
            Next
          </div>
          <button
            v-else
            v-show="current == questionCount"
            ref="submitBtn"
            type="submit"
            class="btn btn-nav"
            @click="toggleModal"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Confirm from "../components/Confirm.vue";
export default {
  components: {
    Confirm,
  },
  data() {
    return {
      date: moment(60),
      // date: moment(60 * 30 * 1000),
      correct: "",
      incorrect: "",
      done: false,
      taken: false,

      grade: "",
      answer: new Array(40).fill(""),
      current: 1,
      pageSize: 1,
      questionCount: 40,
      grade: false,
      // isLoading: true,
      showModal: false,
      question: [
        {
          no: 35,
          question: `
            Berdasarkan ilustrasi kegiatan diatas, kegiatan yang termasuk ke dalam Tri Dharma Perguruan Tinggi poin Pengabdian terhadap masyarakat yaitu…`,
          A: "(1) dan (2)",
          B: "(2) dan (3)",
          C: "(2) dan (4)",
          D: "(3) dan (4)",
        },
        {
          no: 37,
          question:
            "Salah satu fasilitas yang disediakan unpad ialah asrama, apa sebutan/nama asrama yang ada di Unpad?",
          A: "Bale Aweuhan",
          B: "Bale Wilasa",
          C: "Bale Santika",
          D: "Bale Kandiga",
        },
        {
          no: 38,
          question:
            "Sistem otentikasi yang mengizinkan pengguna untuk mengakses aktivasi PINTAS(Padjadjaran Internet Access) di Universitas Padjadjaran adalah…",
          A: "Pacis",
          B: "PAuS",
          C: "PUaS",
          D: "LiVe",
        },
        {
          no: 39,
          question: `Arial merupakan mahasiswa baru, ia selalu mengerjakan tugas dengan sungguh-sungguh dan tepat waktu, baik tugas individu maupun kelompok. Arial berkelompok dengan Bella dan Carla. Bella merupakan mahasiswa dengan banyak ide serta inovasi, ia selalu menemukan ide baru dan inovatif dalam mencari cara-cara baru saat mengerjakan tugasnya. Sementara itu, Carla merupakan mahasiswa yang senang dengan penelitian, ia memiliki rasa ingin tahu yang tinggi dan selalu menggunakan metode penelitian serta data-data faktual untuk menyelesaikan suatu permasalahan.

             <br/>Sifat/sikap Arial, Bella, dan Carla secara berturut-turut menunjukkan implementasi dari budaya RESPECT Unpad yaitu :`,
          A: "Responsibility, Scientific Rigor, Creativity",
          B: "Professionalism, Encouragement, Scientific Rigor",
          C: "Responsibility, Creativity, Scientific Rigor",
          D: "Excellence, Trust, Encouragement",
        },
        {
          no: 40,
          question: `Perilaku yang mendorong atau memberikan dukungan pada teman, dosen, tenaga kependidikan dan mahasiswa untuk berbuat terbaik unpad adalah pengertian dari budaya RESPECT…`,
          A: "Trust",
          B: "Encouragement",
          C: "Responsibility",
          D: "Creativity",
        },
      ],
    };
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.question.slice(this.indexStart, this.indexEnd);
    },
    time: function () {
      return this.date.format("mm:ss");
    },
  },
  methods: {
    toggleConfirm() {
      this.showModal = !this.showModal;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    checkLoggedInForPenugasan() {
      if (!localStorage.token) {
        this.$router.push({
          name: "LoginUser",
        });
      }
    },
    prev() {
      if (this.current > 1) {
        this.current--;
      }
    },
    next() {
      if (this.questionCount > this.current) {
        this.current++;
      }
    },
    quizTakenCheck() {
      // chekc user submision in databse
      this.taken = false;
    },

    // setTime() {
    //   const timer = setInterval(() => {
    //     console.log("setTime");
    //     this.date = moment(this.date.subtract(1, "seconds"));
    //     console.log(this.date);
    //     localStorage.setItem("time", this.date);
    //     console.log(moment.duration(localStorage.time));
    //     if (this.date.diff(moment(0)) === 0) {
    //       clearInterval(timer);
    //       // localStorage.removeItem("quiz");
    //       localStorage.removeItem("time");
    //       localStorage.removeItem("answer");
    //       this.done = true;
    //       this.$refs.submitBtn.click();
    //     }
    //   }, 1000);
    // },

    // setTimeContinue() {
    //   console.log("no  time");
    //   this.date = moment(localStorage.getItem("time"));
    //   const timer = setInterval(() => {
    //     this.date = moment(this.date.subtract(1, "seconds"));
    //     localStorage.setItem("time", this.date);
    //     // localStorage.setItem("time", this.date);
    //     if (this.date.diff(moment(0)) === 0) {
    //       clearInterval(timer);
    //       // localStorage.removeItem("quiz");
    //       localStorage.removeItem("time");
    //       localStorage.removeItem("answer");
    //       this.done = true;
    //       this.$refs.submitBtn.click();
    //     }
    //   }, 1000);
    // },

    submitBudaya() {
      this.isLoading = true;
      const token = localStorage.getItem("token");
      localStorage.removeItem("answer");
      // localStorage.removeItem("time");
      // localStorage.removeItem("quiz");

      // console.log(token);
      //kebudayaan
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/quiz-budaya`,
        data: {
          answer1: this.answer[0],
          answer2: this.answer[1],
          answer3: this.answer[2],
          answer4: this.answer[3],
          answer5: this.answer[4],
          answer6: this.answer[5],
          answer7: this.answer[6],
          answer8: this.answer[7],
          answer9: this.answer[8],
          answer10: this.answer[9],
          answer11: this.answer[10],
          answer12: this.answer[11],
          answer13: this.answer[12],
          answer14: this.answer[13],
          answer15: this.answer[14],
          answer16: this.answer[15],
          answer17: this.answer[16],
          answer18: this.answer[17],
          answer19: this.answer[18],
          answer20: this.answer[19],
          answer21: this.answer[20],
          answer22: this.answer[21],
          answer23: this.answer[22],
          answer24: this.answer[23],
          answer25: this.answer[24],
          answer26: this.answer[25],
          answer27: this.answer[26],
          answer28: this.answer[27],
          answer29: this.answer[28],
          answer30: this.answer[29],
        },
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          this.isLoading = false;
          this.done = true;
          console.log(res);
          this.correct = res.data.correct;
          this.incorrect = res.data.incorrect;
          this.grade = res.data.grade;
          if (this.grade != null || this.grade !== "") {
            localStorage.removeItem("answer");
            this.$router.push({
              name: "Profile",
              params: { message: "Anda telah mengerjakan Quiz Budaya" },
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Quiz Budaya",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          // localStorage.removeItem("time");
          // localStorage.removeItem("quiz");
          this.$router.push({
            name: "Profile",
            params: { title: "Error!" },
          });
        });

      //unpad
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/quiz-unpad`,
        data: {
          answer11: this.answer[0],
          answer22: this.answer[1],
          answer33: this.answer[2],
          answer44: this.answer[3],
          answer55: this.answer[4],
          answer66: this.answer[5],
          answer77: this.answer[6],
          answer88: this.answer[7],
          answer99: this.answer[8],
          answer1010: this.answer[9],
        },
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          this.isLoading = false;
          this.done = true;
          console.log(res);
          this.correct = res.data.correct;
          this.incorrect = res.data.incorrect;
          this.grade = res.data.grade;
          if (this.grade != null || this.grade !== "") {
            localStorage.removeItem("answer");
            this.$router.push({
              name: "Profile",
              params: { message: "Anda telah mengerjakan Quiz Budaya" },
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Quiz Budaya",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          // localStorage.removeItem("time");
          // localStorage.removeItem("quiz");
          this.$router.push({
            name: "Profile",
            params: { title: "Error!" },
          });
        });
    },
    getUserGrade() {
      if (this.submitBudaya != true) {
        this.done = true;
        this.$router.push({
          name: "Profile",
        });
        Swal.fire({
          icon: "success",
          title: "Anda telah mengerjakan Quiz Bagaskara",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Terjadi masalah saat mengambil data, silahkan coba lagi",
        });
      }
    },
  },
  mounted() {
    // this.getUserGrade();
    this.checkLoggedInForPenugasan();
    this.quizTakenCheck();
    if (localStorage.answer) {
      this.answer = JSON.parse(localStorage.getItem("answer"));
    }
    //  localStorage.quiz = "quizSecretKeyH3HH3";
    // if (localStorage.time) {
    //   console.log("lanjooot");
    //   this.setTimeContinue();
    // } else {
    //   this.setTime();
    // }
  },
  updated() {
    if (!this.done) {
      localStorage.setItem("answer", JSON.stringify(this.answer));
    }
  },
};
</script>

<style scoped>
.img-35 {
  padding-bottom: 30px;
}
.img-soal {
  object-fit: cover;
  width: 30%;
  position: relative;
  margin: auto;
}
.btn.btn-nav[type="submit"] {
  background-color: #ad3c3f;
  color: white;
  border: none;
}

.answer {
  border: 2px solid #ad3c3f;
  background-color: transparent;
  color: #ad3c3f;
  cursor: pointer;
  padding: 20px 50px;
  max-width: 70vh;
}

.answer:hover {
  background-color: #ad3c3f;
  color: white;
}
.answer:focus {
  background-color: #ad3c3f;
  color: white;
}
.answer:active {
  background-color: #ad3c3f;
  color: white;
}
input[type="radio"] {
  margin-right: 10px;
}

.background-kuis {
  background-image: url("../assets/img/quiz.png");
  height: 240vh;
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#kuis .kuis {
  text-align: right;
  position: relative;
  font-family: "GROBOLD" !important;
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 0.08em;
  background: rgb(173, 60, 63);
  background: linear-gradient(
    180deg,
    rgba(173, 60, 63, 1) 35%,
    rgba(255, 90, 130, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#kuis .question {
  text-align: left;
  position: relative;
  padding: 10px;
  font-family: "montserrat" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 43px;
  background: rgb(173, 60, 63);
  background: linear-gradient(
    180deg,
    rgba(173, 60, 63, 1) 35%,
    rgba(255, 90, 130, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;
}

#kuis .deskripsi {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  align-items: center;
  color: #ad3c3f;
}

#kuis .col {
  width: 100px;
  flex: 1;
}

#kuis .btn-quiz {
  border: 3px solid #ad3c3f;
  border-radius: 25px;
  width: 276px;
  font-size: 24px;
  color: #ad3c3f;
  font-weight: 700;
}
#kuis .btn-quiz:hover {
  background: #ad3c3f;
  color: white;
}

/* Mobile */
div.background-kuis2 {
  /* margin-bottom: -10px; */
  /* height: 20vh; */
  margin-top: -700px;
}
.background-kuis2 img {
  width: 100%;
  height: 100vh;
}

.kuis-background {
  background: rgb(242, 229, 197);
  background: linear-gradient(
    90deg,
    rgba(242, 229, 197, 1) 0%,
    rgba(255, 246, 223, 1) 50%,
    rgba(242, 229, 197, 1) 100%
  );
  height: 150vh;
}

#kuis2,
.kuis2 {
  text-align: right;
  position: relative;
  font-family: "GROBOLD" !important;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 0.08em;
  background: rgb(173, 60, 63);
  background: linear-gradient(
    180deg,
    rgba(173, 60, 63, 1) 35%,
    rgba(255, 90, 130, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#kuis2,
.question2 {
  text-align: left;
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  background: rgb(173, 60, 63);
  background: linear-gradient(
    180deg,
    rgba(173, 60, 63, 1) 35%,
    rgba(255, 90, 130, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#kuis2,
.deskripsi2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #ad3c3f;
}

#kuis2 .col {
  width: 100px;
  flex: 1;
}

#kuis2,
.btn-quiz {
  border: 2px solid #ad3c3f;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  color: #ad3c3f;
}

#kuis2,
.btn-quiz:hover {
  background: #ad3c3f;
  color: white;
}
.form-control2 {
  font-family: system-ui, sans-serif;
  font-size: 20px;
  display: grid;
  grid-template-columns: 1em auto;
  border: 3px solid #ad3c3f;
  background-color: transparent;
  color: #ad3c3f;
  cursor: pointer;
  padding: 20px 50px;
  border-radius: 50px;
  margin-bottom: 20px;
}
input[type="radio"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}
input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  background-color: CanvasText;
}
.form-control:focus-within {
  color: var(--form-control-color);
}
input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}
.form-control + .form-control {
  margin-top: 1em;
}

h2.h-quiz {
  font-family: "GROBOLD";
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 0.08em;

  background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: right;
}
h3.h-type {
  font-family: "GROBOLD";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;

  background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: right;
}
h4.h-type {
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;

  background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.opsi {
  padding-left: 27px;
}
</style>
