<template>
  <div class="background-post section">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitBudaya" />
    <div id="kuis" class="container" style="margin-top: 200px">
      <div class="container">
        <h2 class="h-post">POST TEST</h2>
        <!-- <h3 class="h-type">
          Post Test
        </h3> -->
        <h4 class="h-type-post">{{ time }}</h4>
        <div v-for="question in paginated" :key="question.no">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="question-post">
              Question <span class="question-post" v-html="question.no"></span>/
              25
            </h2>
          </div>
          <div class="deskripsi" v-html="question.question"></div>
          <br />
          <div class="row">
            <div class="d-flex justify-content-around">
              <div class="flex-column text-center option-container">
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
        <div class="d-flex justify-content-end mt-4">
          <div class="btn btn-quiz" @click="prev">Back</div>
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
            refs="submitBtn"
            type="submit"
            class="btn btn-quiz2"
            @click="toggleModal"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
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
      // UJICOBA
      // date: moment(10 * 10 * 100),
      date: moment(60 * 30 * 1000),
      correct: "",
      incorrect: "",
      done: false,
      taken: false,
      grade: "",
      answer: new Array(40).fill(""),
      current: 1,
      pageSize: 1,
      questionCount: 25,
      grade: false,
      // isLoading: true,
      showModal: false,
      question: [
        {
          no: 1,
          question: "Apa judul yang diangkat dalam Mega Present Prabu 2022 ?",
          A: "Gama Abhipraya Padjadjaran",
          B: "Abhipraya Gama Padjadjaran",
          C: "Padjadjaran Gama Abhipraya",
          D: "Gema Abhipraya Padjadjaran",
        },
        {
          no: 2,
          question:
            "Dalam konten Kisah Suara Pramuda, apa yang terjadi saat Ara dan David ketahuan membeli makanan di gerlam saat ospek masih berlangsung?",
          A: "Dibiarkan saja",
          B: "Ditegur oleh Ebi sebagai keamanan dan memberi tahu alasannya",
          C: "Ditegur oleh dosen",
          D: "Difoto oleh salah satu temannya",
        },
        {
          no: 3,
          question: "Secara umum, Kisah Suara Pramuda membahas mengenai apa?",
          A: "Lingkungan fisik unpad",
          B: "Tata krama sunda",
          C: "Transportasi unpad",
          D: "Tri Dharma Perguruan Tinggi",
        },
        {
          no: 4,
          question: "Apa tujuan dari kegiatan Pramuda Menyapa ?",
          A: "Mengenal akang/teteh yang ada di unpad",
          B: "Menyapa akang/teteh yang ada di unpad",
          C: "Membangun etika mahasiswa dan budaya Unpad",
          D: "Melihat semua akang/teteh",
        },
        {
          no: 5,
          question:
            "Apa esensi dari digunakannya nyiru dalam Mega Present Prabu 2022?",
          A: "Karena nyiru dapat memiliki banyak manfaat sehingga bisa menjadi harapan pramuda agar menjadi sosok yang bermanfaat",
          B: "Karena nyiru terbuat dari anyaman sehingga diharapkan pramuda mencintai produk lokal",
          C: "Karena nyiru menjadi simbol untuk Pramuda dalam menyaring situasi kehidupan yang berubah-ubah seperti menyaring beras dari kerikil",
          D: "Karena nyiru berbentuk bulat yang melambangkan tekad Pramuda yang bulat",
        },
        {
          no: 6,
          question:
            "Padjajaran Berbincang dengan Teh Vina dan Teh Rania kemarin tidak membahas tentang?",
          A: "Budaya organisasi",
          B: "Budaya kerja",
          C: "Pengembangan diri",
          D: "Budaya cara belajar di kampus",
        },
        {
          no: 7,
          question:
            "Kegiatan ini merupakan salah satu bentuk kontribusi nyata untuk mengembangkan ilmu yang berkaitan dengan masalah yang sedang terjadi di masyarakat. Kewajiban TDPT yang dimaksud adalah...",
          A: "Pengelolaan",
          B: "Penelitian",
          C: "Pendidikan",
          D: "Pengabdian",
        },
        {
          no: 8,
          question: `(1) Mengajar untuk anak yang putus sekolah
            <br/> (2) Penelitian tentang obat virus Corona
            <br/> (3) KKN di desa-desa
            <br/> Berdasarkan ilustrasi kegiatan diatas, kegiatan yang termasuk ke dalam Tri Dharma Perguruan Tinggi poin Pengabdian terhadap masyarakat yaitu…`,
          A: "(1) saja",
          B: "(2) saja",
          C: "(3) saja",
          D: "(1), (2), dan (3)",
        },
        {
          no: 9,
          question:
            "Kekuatan moral yang dimiliki oleh mahasiswa seperti cara bersikap, cara berbicara, cara berpikir serta yang lainnya dan dipakai sebagai acuan dasar dalam berperilaku disebut dengan...",
          A: "Mural face",
          B: "Muddy voice",
          C: "Moral force",
          D: "May the force be with you",
        },
        {
          no: 10,
          question:
            "Nilai yang harus dijaga dan dilestarikan oleh mahasiswa sebagai Guardian of Value yang sudah menjadi budaya asli Indonesia adalah ....",
          A: "Kejujuran",
          B: "Gotong Royong",
          C: "Integritas",
          D: "Keadilan",
        },
        {
          no: 11,
          question:
            "Saputra adalah mahasiswa fakultas kedokteran. Dirinya ingin menjadi manusia kuat & tangguh yang memiliki kemampuan juga akhlak mulia agar nantinya dapat menggantikan generasi sebelumnya untuk memberikan kontribusi terbaik bagi bangsa ini. Keinginan Banner merupakan salah satu peran mahasiswa sebagai....",
          A: "Social Control",
          B: "Agent of Change",
          C: "Moral Force",
          D: "Iron Stock",
        },
        {
          no: 12,
          question:
            "Ara, David, Nando, Aceng, Ebi memilki minat terhadap UKM di Unpad. Akan tetapi, UKM yang diminati berbeda-beda. Untuk Ara dan Nando, mengikuti UKM Orkestra Unpad. David mengikuti UKM Bridge. Untuk Ebi, Ebi berminat di bidang fotografi. Ebi bisa mengikuti UKM ...",
          A: "Spektrum",
          B: "UBBU",
          C: "AIESEC",
          D: "LPPMD",
        },
        {
          no: 13,
          question:
            "Menegur teman yang tidak taat peraturan dan mengingatkannya agar tidak mengulangi perbuatannya kembali dengan tujuan supaya temannya tidak semakin terjerumus ke dalam masalah. Hal tersebut termasuk contoh penerapan dari nilai ....",
          A: "Silih Asah, Silih Asih, dan Silih Asuh",
          B: "Silih Asuh, dan Silih Asah",
          C: "Silih Asih, dan Silih Asah",
          D: "Silih Asih, dan Silih Asuh",
        },
        {
          no: 14,
          question:
            "Logo Unpad terdiri dari 6 bagian. Bagian yang menunjukkan bahwa Unpad terletak di Tanah Sunda adalah dengan adanya ....",
          A: "Api",
          B: "Kujang",
          C: "Roda",
          D: "Sayap (Terlukis daun paku)",
        },
        {
          no: 15,
          question:
            "Saat ini pramuda 2020 melaksanakan Prabu 2020 secara daring dikarenakan adanya himbauan social distancing. Namun setelah itu para pramuda diharapkan berperan sebagai pengontrol kehidupan sosial dalam masyarakat. Peran yang dimaksud adalah...",
          A: "Moral Force",
          B: "Social Control",
          C: "Agent of Change",
          D: "Iron Stock",
        },
        {
          no: 16,
          question:
            "Seorang pramuda yang lolos program sarjana jalur prestasi sebagai atlet nasional panahan bernama Aceng bercita-cita memberikan masyarakat dilingkungannya kesejahteraan yang adil dan merata. Dirinya berusaha memberikan perubahan baik terhadap sistem yang berlaku agar keinginannya dapat tercapai. Hal yang dilakukan Katniss mencerminkan peran mahasiswa sebagai...",
          A: "Moral Force",
          B: "Iron Stock",
          C: "Agent of Change",
          D: "Social Control",
        },
        {
          no: 17,
          question:
            "Dalam sejarahnya Universitas Padjadjaran memiliki 4 Fakultas, namun seiring perkembangan jaman dan teknologi saat ini Universitas Padjadjaran terdiri dari ... Fakultas",
          A: "16",
          B: "12",
          C: "11",
          D: "8",
        },
        {
          no: 18,
          question:
            "Kemampuan untuk mennemukan hal baru dan mengaplikasikan ide yang dari sudut pandang yang berbeda merupakan budaya...",
          A: "Creativity",
          B: "Responsibilty",
          C: "Scientific Rigor",
          D: "Extertness",
        },
        {
          no: 19,
          question:
            "Bertanggung jawab terhadap kewajibannya terhadap Tuhan,diri sendiri dan lingkungannya yang dipenuhi dengan kesadaran merupakan salah satu komponen RESPECT yaitu...",
          A: "Excellence",
          B: "Responsibility",
          C: "Scientific Rigor",
          D: "Extertness",
        },
        {
          no: 20,
          question:
            "Asep merupakan salah satu Mahasiswa Berprestasi Unpad. Ia memang dikenal sebagai pribadi yang unggul. Salah satu dari komponen Budaya RESPECT yang terdapat dalam diri Asep adalah....",
          A: "Excellence",
          B: "Superiority",
          C: "Transcendence",
          D: "Talented",
        },
        {
          no: 21,
          question:
            "Mahasiswa Unpad yang bertanggungjawab, disiplin, dan komitmen terhadap setiap pekerjaan yang diberikan merupakan mahasiswa Unpad yang memiliki sikap...",
          A: "Superiority",
          B: "Creative",
          C: "Integrity",
          D: "Professionalism",
        },
        {
          no: 22,
          question:
            "Seorang mahasiswa Unpad yang selalu menjaga Kredibilitas (Jujur dan dapat dipercaya), Reabiltas (Keandalan), dan Integritas (Memiliki moral yang kuat) sehingga ia selalu dipercaya oleh lingkungannya di banyak keadaan merupakan mahasiswa Unpad yang memegang teguh budaya...",
          A: "Excellence",
          B: "Responsibility",
          C: "Trust",
          D: "Professionalism",
        },
        {
          no: 23,
          question:
            "Ara adalah mahasiswi jurusan Sastra Inggris yang mempelajari linguistik, seperti berbicara, menulis, dll. Ara memanfaatkan yang dipelajari untuk menciptakan sebuah aplikasi digital yang dapat memudahkan para pelajar untuk belajar bahasa Inggris secara otodidak. Dengan demikian, sebagai mahasiswa, Ara sudah berhasil melakukan implementasi poin ...... yang bermanfaat bagi masyarakat.",
          A: "Pendidikan dan Pengajaran",
          B: "Penelitian dan Pengembangan",
          C: "Pengabdian kepada Masyarakat",
          D: "Tidak ada yang benar",
        },
        {
          no: 24,
          question:
            "Penelitian yang objektif, seimbang, dan konsistensi penelitian jika direplikasikan pada subjek dan konteks yang sama merupakan pengertian dari...",
          A: "Transcendence",
          B: "Superiority",
          C: "Scientific Rigor",
          D: "Professionalism",
        },
        {
          no: 25,
          question:
            "Yang termasuk ke dalam Visi Universitas Padjajaran adalah ...",
          A: "Mencapai Universitas Bereputasi Dunia dan Berdampak pada Masyarakat",
          B: "Mewujudkan kemandirian dengan kapitalisasi sumber daya internal dan kemitraan strategis",
          C: "Meningkatkan kontribusi Unpad dalam penyelesaian masalah yang berdampak pada kesejahteraan masyarakat Jawa Barat dan Indonesia",
          D: "Membangun karakter kepemimpinan dengan budaya kolektif, profesional, dan berintegritas dalam pengelolaan keberlanjutan Universitas",
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

    setTime() {
      const timer = setInterval(() => {
        // console.log("setTime");
        this.date = moment(this.date.subtract(1, "seconds"));
        // console.log(this.date);
        localStorage.setItem("time", this.date);
        // console.log(moment.duration(localStorage.time));
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("postTest");
          localStorage.removeItem("time");
          localStorage.removeItem("answer");
          this.done = true;
          this.submitBudaya();
        }
      }, 1000);
    },

    setTimeContinue() {
      // console.log("no  time");
      this.date = moment(localStorage.getItem("time"));
      const timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, "seconds"));
        localStorage.setItem("time", this.date);
        // localStorage.setItem("time", this.date);
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("postTest");
          localStorage.removeItem("time");
          localStorage.removeItem("answer");
          this.done = true;
          this.submitBudaya();
        }
      }, 1000);
    },

    submitBudaya() {
      this.isLoading = true;
      const token = localStorage.getItem("token");
      localStorage.removeItem("answer");
      localStorage.removeItem("time");
      localStorage.removeItem("postTest");

      // console.log(token);
      //kebudayaan
      axios({
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/assessment/post-test`,
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
        },
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          this.isLoading = false;
          this.done = true;
          // console.log(res);
          this.correct = res.data.correct;
          this.incorrect = res.data.incorrect;
          this.grade = res.data.grade;
          if (this.grade != null || this.grade !== "") {
            localStorage.removeItem("answer");
            localStorage.removeItem("time");
            localStorage.removeItem("postTest");
            this.$router.push({
              name: "Profile",
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Post Test",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          localStorage.removeItem("time");
          localStorage.removeItem("postTest");
          this.$router.push({
            name: "Profile",
          });
        });
    },
    getUserGrade() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/get-answer/post-test`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          // console.log(res);
          this.grade = res.data.answer;
          // console.log(this.grade);
          if (this.grade != null) {
            localStorage.removeItem("answer");
            localStorage.removeItem("time");
            localStorage.removeItem("postTest");
            this.$router.push({
              name: "Profile",
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Post Test",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          localStorage.removeItem("time");
          localStorage.removeItem("postTest");
          this.$router.push({
            name: "Profile",
          });
          Swal.fire({
            icon: "error",
            title: "Terjadi masalah, silahkan hubungi admin",
          });
        });
    },
  },
  mounted() {
    this.getUserGrade();
    this.checkLoggedInForPenugasan();
    this.quizTakenCheck();
    if (localStorage.answer) {
      this.answer = JSON.parse(localStorage.getItem("answer"));
    }
    localStorage.postTest = "quizSecretKeyH3HH3KDJIK";
    if (localStorage.time) {
      // console.log("lanjooot");
      this.setTimeContinue();
    } else {
      this.setTime();
    }
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
  width: 100%;
  margin: auto;
}
.img-soal {
  object-fit: cover;
  width: 30%;
  position: relative;
  margin: auto;
}
.btn.btn-nav[type="submit"] {
  background-color: #2e466b;
  color: white;
  border: none;
}

.answer {
  border: 2px solid #2e466b;
  background-color: transparent;
  color: #2e466b;
  cursor: pointer;
  padding: 20px 50px;
  max-width: 70vh;
}

.answer:hover {
  background-color: #2e466b;
  color: white;
}
.answer:focus {
  background-color: #2e466b;
  color: white;
}
.answer:active {
  background-color: #2e466b;
  color: white;
}
input[type="radio"] {
  margin-right: 10px;
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
@media (min-width: 1300px) {
  td {
    border: 2px solid #2e466b;
    color: #2e466b;
    padding: 10px;
    font-size: 20px;
    line-height: 32px;
  }
  #kuis .deskripsi {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    align-items: center;
    color: #2e466b;
  }
  .form-control2 {
    font-family: system-ui, sans-serif;
    font-size: 30px;
    display: grid;
    grid-template-columns: 1em auto;
    border: 3px solid #2e466b;
    background-color: transparent;
    color: #2e466b;
    cursor: pointer;
    padding: 20px 50px;
    border-radius: 50px;
    margin: 10px;
  }
  .opsi {
    padding-left: 27px;
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
  #kuis .btn-quiz {
    border: 3px solid #2e466b;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    color: #2e466b;
    font-weight: 700;
    margin: 10px;
  }
  #kuis .btn-quiz2 {
    border: 3px solid #fff;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    color: #fff;
    background-color: #2e466b;
    font-weight: 700;
    margin: 10px;
  }
  h2.h-post {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 0.08em;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: right;
  }
  h3.h-type-post {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: right;
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
  #kuis .question-post {
    text-align: left;
    position: relative;
    padding: 10px;
    font-family: "montserrat" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 43px;
    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0;
  }
  h4.h-type-post {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .background-post {
    background-image: url("../assets/img/posTest.png");
    height: 180vh;
    margin: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media (max-width: 1300px) {
  td {
    border: 2px solid #2e466b;
    color: #2e466b;
    padding: 10px;
    font-size: 20px;
    line-height: 32px;
  }
  #kuis .deskripsi {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    align-items: center;
    color: #2e466b;
  }
  .form-control2 {
    font-family: system-ui, sans-serif;
    font-size: 30px;
    display: grid;
    grid-template-columns: 1em auto;
    border: 3px solid #2e466b;
    background-color: transparent;
    color: #2e466b;
    cursor: pointer;
    padding: 20px 50px;
    border-radius: 50px;
    margin: 10px;
  }
  .opsi {
    padding-left: 27px;
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
  #kuis .btn-quiz {
    border: 3px solid #2e466b;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    color: #2e466b;
    font-weight: 700;
    margin: 10px;
  }
  #kuis .btn-quiz2 {
    border: 3px solid #fff;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    background-color: #2e466b;
    color: #fff;
    font-weight: 700;
    margin: 10px;
  }
  h2.h-post {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 0.08em;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: right;
  }
  h3.h-type-post {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: right;
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
  #kuis .question-post {
    text-align: left;
    position: relative;
    padding: 10px;
    font-family: "montserrat" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 43px;
    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0;
  }
  h4.h-type-post {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .background-post {
    background-image: url("../assets/img/posTest.png");
    height: 180vh;
    margin: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media (max-width: 576px) {
  td {
    border: 1px solid #2e466b;
    color: #2e466b;
    padding: 5px;
    font-size: 14px;
    line-height: 28px;
  }
  #kuis .deskripsi {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    align-items: center;
    color: #2e466b;
  }
  .form-control2 {
    font-family: system-ui, sans-serif;
    font-size: 30px;
    display: grid;
    grid-template-columns: 1em auto;
    border: 2px solid #2e466b;
    background-color: transparent;
    color: #2e466b;
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 10px;
    margin: 10px;
  }
  .opsi {
    font-size: 12px;
  }
  #kuis .btn-quiz {
    border: 2px solid #2e466b;
    border-radius: 25px;
    font-size: 18px;
    color: #2e466b;
    font-weight: 700;
    margin: 10px;
  }
  #kuis .btn-quiz2 {
    border: 2px solid #fff;
    border-radius: 25px;
    font-size: 18px;
    background-color: #2e466b;
    color: #fff;
    font-weight: 700;
    margin: 10px;
  }
  h2.h-post {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 0.08em;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: center;
  }
  h3.h-type-post {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: center;
  }
  #kuis .question {
    text-align: left;
    position: relative;
    font-family: "montserrat" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
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
  #kuis .question-post {
    text-align: left;
    position: relative;
    font-family: "montserrat" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 60px;
    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0;
  }
  h4.h-type-post {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;

    background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .background-post {
    background-image: url("../assets/img/posTest.png");
    height: 220vh;
    margin: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

#kuis .col {
  width: 100px;
  flex: 1;
}

#kuis .btn-quiz:hover {
  background: #2e466b;
  color: white;
}
#kuis .btn-quiz2:hover {
  color: #2e466b;
  background: white;
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
.question-post {
  text-align: left;
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  background: linear-gradient(180deg, #2e316b 0%, #5195ff 100%);
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
  color: #2e466b;
}

#kuis2 .col {
  width: 100px;
  flex: 1;
}

#kuis2,
.btn-quiz {
  border: 2px solid #2e466b;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  color: #2e466b;
}

#kuis2,
.btn-quiz:hover {
  background: #2e466b;
  color: white;
}

.form-control + .form-control {
  margin-top: 1em;
}
</style>
