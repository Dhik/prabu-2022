<template>
  <section class="bg-desc">
    <div class="container">
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="desc">Tugas Narasi</h2>
          <h3 class="desc">(Naluri Pramuda Berliterasi)</h3>
          <br /><br />
          <p class="desc">
            Literasi dapat diartikan sebagai kemampuan membaca dan menulis atau
            lebih dikenal dengan melek aksara. Namun, saat ini literasi memiliki
            arti yang cukup luas, sehingga melek aksara bukan lagi bermakna
            tunggal. Melek aksara dapat diartikan juga dengan melek teknologi,
            dimana kemampuan dalam berpikir kritis, peka terhadap lingkungan,
            bahkan juga peka terhadap politik.<br /><br />
            Membangun generasi literat diperlukan proses yang cukup panjang dan
            sarana yang kondusif. Proses ini dapat dimulai dari lingkungan kecil
            seperti lingkungan keluarga, lalu dikembangkan di lingkungan
            sekolah, pergaulan, hingga lingkungan pekerjaan. Berdasarkan survei
            yang dilakukan oleh Program for International Student Assessment
            (PISA) pada tahun 2019 yang di rilis Organization for Economic
            Co-operation and Development (OECD) menyatakan bahwa tingkat
            literasi Indonesia berada di nomor 62 pada 70 negara.<br /><br />
            Salah satu penyebab rendahnya Indeks Pembangunan Manusia di
            Indonesia ini adalah rendahnya kualitas pendidikan yang juga dapat
            berpengaruh terhadap sektor ekonomi dan kesehatan. Keadaan ini
            diperparah dengan dominasi budaya tutur (lisan) dibandingkan budaya
            baca. Hal inilah yang menjadi kendala utama dalam peningkatan
            kualitas sumber daya manusia dalam pengembangan diri secara mandiri
            melalui membaca.<br /><br />
            Oleh karena itu, Prabu 2022 memberikan penugasan NARASI dengan tema
            “Peran dan Fungsi Mahasiswa dalam Upaya Meningkatkan Budaya Literasi
            di Indonesia” melalui platform Instagram. Melalui tugas ini
            diharapkan Pramuda dapat mengoptimalkan peran dan fungsi mahasiswa
            melalui video campaign yang dibuat.
          </p>
        </div>
      </div>
      <div
        class="row justify-content-center w3-animate-left"
        style="margin-top: 10px"
      >
        <div class="col-md-4 col-sm-10 col-xs-10">
          <img src="./img/maskot/rusa.png" class="card-img-top" alt="..." />
        </div>
        <div class="col-md-4 col-sm-10 col-xs-10"></div>
        <div class="col-md-4 col-sm-10 col-xs-10">
          <img src="./img/maskot/elang.png" class="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-desc2">
    <div class="container">
      <div
        class="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div
          class="col-md-10 col-sm-6 col-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          <div class="card mx-auto card-rad">
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Prabu Day 1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/acara.css";
import axios from "axios";
import moment from "moment";
export default {
  name: "Acara",
  data() {
    return {
      moment: moment,
      label: "Live",
      videos: [],
    };
  },
  methods: {
    getLive() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/resource/livestream`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.videos = res.data;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
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
    this.getLive();
    this.checkLoggedInForPenugasan();
  },
};
</script>

<style>
.img-top-live {
  max-width: 800px;
  object-fit: cover;
}
.card-text {
  margin: 5px;
}
.label_live {
  border: 2px solid #ff6d55;
  padding: 3px;
  border-radius: 2px;
}
small.label_live {
  color: #ff6d55;
  font-weight: 600;
}
.label_video {
  display: none;
}
#avatar_live {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-image: url("./img/logoprabu.png");
  background-size: cover;
  background-position: center;
}
.title_live {
  color: rgb(49, 48, 48);
  font-weight: 600;
}

.detailAcara {
  text-decoration: none;
  color: rgb(49, 48, 48);
}
.detailAcara:hover {
  color: rgb(49, 48, 48);
}
.title-live {
  font-size: 3.5rem;
  color: rgb(49, 48, 48);
  text-shadow: 2px 2px 0 rgb(215, 226, 224);
  font-family: "Brudge", Arial, Helvetica, sans-serif;
  margin: 110px 0px 70px 0px;
}
.container_acara {
  background: url("../img/live.png") no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
.card-live {
  background-color: white;
}

p.desc_live {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.8rem;
}
h5.title_live {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
}
</style>
