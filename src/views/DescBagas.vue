<template>
  <div class="bg-desc5 section">
    <div class="container">
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="desc">Kuis Bagaskara</h2>
          <h3 class="desc">(Bangun Gagasan Keunpadan Pramuda)</h3>
          <br /><br />
          <p class="desc">
            Pada saat memasuki masa perkuliahan, seorang pelajar akan memulai
            fase baru yaitu peralihan dari siswa ke mahasiswa dimana biasanya
            terjadi perubahan-perubahan yang berbeda dari pelajar pada umumnya
            seperti adanya tuntutan, aturan yang berbeda dan lingkungan yang
            baru. Perubahan-perubahan tersebut dapat membuat aspek psikologis
            dan sosioemosional seseorang mengalami kecemasan atau sering disebut
            culture shock. Culture shock merupakan istilah yang digunakan untuk
            menggambarkan kegelisahan, kecemasan, dan perasaan yang dirasakan
            apabila seseorang berada pada kebudayaan yang berlainan atau
            lingkungan yang baru.
            <br /><br />
            Salah satu upaya untuk menghadapi culture shock yaitu dengan cara
            mengenali lingkungan baru beserta budaya yang terdapat di dalamnya.
            Pengenalan lingkungan baru merupakan bentuk adaptasi pramuda untuk
            menyelaraskan diri dengan identitas dan budaya Unpad. Universitas
            Padjadjaran merupakan universitas yang berada di Tanah Sunda yang
            kaya akan budaya. Seperti peribahasa ‘di mana bumi dipijak, di situ
            langit dijunjung’, mahasiswa Unpad yang berasal dari berbagai daerah
            di Indonesia sebaiknya memiliki pengetahuan akan budaya-budaya yang
            ada di Tanah Sunda. Prinsip ‘Silih Asah, Silih Asih, Silih Asuh’,
            yang merupakan salah satu falsafah yang masih selalu dijadikan
            pedoman dan pegangan oleh masyarakat Sunda, sangat penting untuk
            diketahui dan dipahami oleh Pramuda karena akan sering berinteraksi
            dengan masyarakat Sunda di lingkungan Universitas Padjadjaran.
            <br /><br />
            Maka dari itu, Prabu Unpad 2022 memberikan penugasan Bagaskara
            berupa kuis yang terdiri dari 2 bagian. Bagian pertama mengenai
            prinsip ‘Silih Asah, Silih Asih, Silih Asuh’ yakni kebudayaan dalam
            kehidupan sehari-hari dengan harapan pramuda dapat berbaur sebaik
            mungkin dengan masyarakat serta dapat melakukan aksi nyata. Untuk
            bagian kedua, mengenai keunpadan yang terdiri dari materi sejarah,
            visi misi, hingga filosofi logo Universitas Padjadjaran. Dengan
            memahami tugas ini, diharapkan pramuda dapat mengenali lingkungan
            yang baru dan mengurangi culture shock di lingkungan Universitas
            Padjadjaran.<br /><br />
          </p>
        </div>
      </div>
      <div
        class="row justify-content-center w3-animate-left"
        style="margin-top: 10px"
      >
        <div class="col-md-4 col-sm-6">
          <img
            src="./img/maskot/rusa.png"
            id="maskot"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="col-md-4 hide_min_576"></div>
        <div class="col-md-4 col-sm-6">
          <img
            src="./img/maskot/elang.png"
            id="maskot"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
  <div class="section bg-desc6">
    <div class="container" style="margin-top: 150px">
      <div class="row justify-content-center">
        <div class="col-md-10 col-sm-11 aos-init aos-animate">
          <div class="desc_tugas mx-auto card-rad">
            <div class="card-body descs">
              <h4 class="head-type4">Syarat & Ketentuan</h4>
              <br />
              <h6 class="head-type4">I. Teknik Pengerjaan Tugas</h6>
              <br />
              <p>Teknis pengerjaan Kuis Bagaskara adalah sebagai berikut:</p>
              <ol class="desc_tugas">
                <li>
                  Sebelum mengerjakan kuis, Pramuda diharuskan membaca materi
                  dasar mengenai Kebudayaan dan Keunpadan terlebih dahulu yang
                  tersedia pada laman website Prabu 2022
                </li>
                <li>Kuis dapat dikerjakan melalui website Prabu 2022.</li>
                <li>
                  Pramuda harus menyelesaikan kuis dalam waktu yang telah
                  ditentukan.
                </li>
                <li>
                  Soal berjumlah 30 butir untuk Kebudayaan dan 10 soal untuk
                  Keunpadan dengan bentuk soal pilihan ganda.
                </li>
                <li>
                  Waktu pengerjaan adalah 45 menit untuk Kebudayaan dan 20 menit
                  untuk Keunpadan. Waktu pengerjaan tidak dapat digabung.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <router-link class="btn" to="/profile">
          <button class="btn btn-booklet">Pengumpulan Penugasan</button>
        </router-link>
      </div>
    </div>
  </div>
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
