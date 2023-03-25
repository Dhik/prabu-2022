<template>
  <NotLogin v-if="showLogin == false || showLogin == null" />
  <Spinner v-if="isLoading" />
  <section v-else class="bg-home-7 hide_min_576">
    <div class="container">
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="acara">Acara</h2>
        </div>
      </div>

      <div
        class="row justify-content-center"
        v-if="filterVideos.length"
      >
        <div
          class="col-md-4 col-sm-6 col-6 mt-5"
          v-for="vid in filterVideos"
          :key="vid._id"
        >
          
            <div class="card mx-auto card-rad h-100">
              <div @click="imageDetail(vid._id)" title="klik untuk melihat video">
              <img
                v-if="vid.thumbnail == ''"
                 src="./img/home/acara1.png"
                class="card-img-top pd-20 cursor-pointer "
                alt="..."
              />
              <img
                v-else
                :src="vid.thumbnail"
                class="card-img-top pd-20 cursor-pointer"
                alt="..."
              />
              </div>
              <div>
              </div>
                <ModalAcara v-if="showImage[vid._id]" @close="toggleImage(vid._id)">
                
                <iframe
                class="image-full"
                :src="url + vid.video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              </ModalAcara>
              <div class="card-body pd-20">
                <div class="card-title">
                  <h4 class="card-head-acara" >Prabu Day {{ vid.title }}</h4>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      
      <div
        class="row justify-content-center"
        v-else
      ><p class="title-wait text-center mx-auto my-auto"> Coming Soon
        </p></div>

      <div class="d-flex justify-content-center mt-4">
          <template v-if="listToShow < videos.length">
            <span
              class="btn btn-acara-back justify-content-center"
              v-if="loadList == true"
              @click="listToShow += 2"
            >
              Load More
            </span>
          </template>
        </div>

      <br />
      <div
        class="row justify-content-center"
      >
        <div
          class="col-md-3 col-sm-6 col-6"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara1.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Jingle Prabu</h4>
              </div>
              <p class="card-acara">
                Jingle Prabu yang berjudul “Welcome to Prabu” merupakan sebuah nyanyian khas dalam menyambut mahasiswa baru Universitas Padjadjaran setiap tahunnya. 
              </p>
             <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-6 col-6"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara2.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Lentera Padjadjaran</h4>
              </div>
              <p class="card-acara">
                Candrakara Lentera Padjadjaran merupakan persembahan akbar berisikan pertunjukan lentera dengan jumlah ribuan formasi yang menceritakan latar belakang di dalam Universitas Padjadjaran yang lahir di tanah Sunda. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-6 col-6"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara3.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Swapan Padjadjaran</h4>
              </div>
              <p class="card-acara">
                Swapan Padjadjaran atau Swara Harapan Padjadjaran bertujuan memperkenalkan lingkungan Unpad kepada pramuda melalui opini dan representasi perwakilan mahasiswa dari 16 fakultas serta civitas akademika. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-6 col-6"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara4.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Padjadjaran Got Talent</h4>
              </div>
              <p class="card-acara">
                Pertunjukan drama musikal yang menampilkan seni dalam beragam bentuk dan jenis sebagai bentuk apresiasi terhadap seluruh bentuk seni dengan tujuan menyampaikan pesan dan kesan mahasiswa baru, serta memberikan ilmu keunpadan. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-center m-5"
      >
        <a href="#" class="btn btn-acara py-2">Let's Explore!</a>
      </div>
    </div>
  </section>

  <section class="bg-home-72 hide_max_576">
    <div class="container">
      <div class="row justify-content-center w3-animate-left">
        <div class="col-md-10 col-sm-10 col-xs-10">
          <h2 class="acara">Acara</h2>
        </div>
      </div>
      <div
        class="row justify-content-center"
        v-if="filterVideos.length"
      >
        <div
          class="col-md-4 col-sm-9 col-9"
           v-for="vid in filterVideos"
          :key="vid._id"
        >
          <div class="card mx-auto card-rad h-100">
            <div @click="imageDetail(vid._id)" title="klik untuk melihat video">
              <img
                v-if="vid.thumbnail == ''"
                 src="./img/home/acara1.png"
                class="card-img-top pd-20"
                alt="..."
              />
              <img
                v-else
                :src="vid.thumbnail"
                class="card-img-top pd-20"
                alt="..."
              />
              </div>
              <div>
              </div>
                <ModalAcara v-if="showImage[vid._id]" @close="toggleImage(vid._id)">
                <iframe
                class="image-full"
                :src="url + vid.video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              </ModalAcara>
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara" >Prabu Day {{ vid.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-center"
        v-else
      ><p class="title-wait text-center mx-auto my-auto"> Coming Soon
        </p></div>

        <div class="d-flex justify-content-center mt-4">
          <template v-if="listToShow < videos.length">
            <span
              class="btn btn-acara-back justify-content-center"
              v-if="loadList == true"
              @click="listToShow += 2"
            >
              Load More
            </span>
          </template>
        </div>
        
      <br />
      <div
        class="row justify-content-center"
      >
        <div
          class="col-md-3 col-sm-9 col-9"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara1.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Jingle Prabu</h4>
              </div>
              <p class="card-acara3">
                Jingle Prabu yang berjudul “Welcome to Prabu” merupakan sebuah nyanyian khas dalam menyambut mahasiswa baru Universitas Padjadjaran setiap tahunnya. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-9 col-9"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara2.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Lentera Padjadjaran</h4>
              </div>
              <p class="card-acara3">
                Candrakara Lentera Padjadjaran merupakan persembahan akbar berisikan pertunjukan lentera dengan jumlah ribuan formasi yang menceritakan latar belakang di dalam Universitas Padjadjaran yang lahir di tanah Sunda. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-9 col-9 "
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara3.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Swapan Padjadjaran</h4>
              </div>
              <p class="card-acara3">
                Swapan Padjadjaran atau Swara Harapan Padjadjaran bertujuan memperkenalkan lingkungan Unpad kepada pramuda melalui opini dan representasi perwakilan mahasiswa dari 16 fakultas serta civitas akademika. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
        <div
          class="col-md-3 col-sm-9 col-9"
        >
          <div class="zoom card mx-auto card-rad h-100">
            <img
              src="./img/home/acara4.png"
              class="card-img-top pd-20"
              alt="..."
            />
            <div class="card-body pd-20">
              <div class="card-title">
                <h4 class="card-head-acara">Padjadjaran Got Talent</h4>
              </div>
              <p class="card-acara3">
                Pertunjukan drama musikal yang menampilkan seni dalam beragam bentuk dan jenis sebagai bentuk apresiasi terhadap seluruh bentuk seni dengan tujuan menyampaikan pesan dan kesan mahasiswa baru, serta memberikan ilmu keunpadan. 
              </p>
              <a href="#" class="btn btn-cs">Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-center m-5"
      >
        <a href="#" class="btn btn-acara">Let's Explore!</a>
      </div>
    </div>
  </section>
</template>
<script>
import "../assets/acara.css";
import ModalAcara from "./modalAcara.vue";
import NotLogin from "./NotLogin.vue";
import axios from "axios";
import moment from "moment";
import Spinner from "../components/Spinner.vue";
export default {
  name: "Acara",
  data() {
    return {
      moment: moment,
      label: "Live",
      videos: [],
      showVideo: false,
      showLogin: null,
      showImage: [],
      isLoading: true,
      url : 'https://www.youtube.com/embed/',
      listToShow:3,
      loadList: false,

    };
  },
  components: {
    ModalAcara,
    NotLogin,
    Spinner,
  },
  methods: {
    imageDetail(_id){
      this.showImage[_id] = true
    },
    toggleImage(_id) {
      this.showImage[_id] = false;
    },
    getLive() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/resource/acara`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.videos = res.data;
          this.isLoading = false;
          this.loadList = true;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    checkLogin() {
      if (localStorage.token) {
        this.showLogin = true;
      } else {
        this.showLogin = false;
      }
    },
  },
  mounted() {
    this.getLive();
    this.checkLogin();
  },
  computed:{
    filterVideos(){
      return this.videos.slice(0,this.listToShow)
    },
  },
};
</script>

<style>
.bg-home-72.hide_max_576{
  height: 100%;
  padding-top: 10vh;
}


 @media (min-width: 1536px) {
 .image-full {
  width: 80% !important;
  height: 100%;
  border: 3px dashed #ad3c3f ;
}

 }

  @media (min-width: 1900px) {
 .image-full {
  width: 60% !important;
  height: 100%;
  border: 3px dashed #ad3c3f ;
}

 }
.image-full {
  width: 100%;
  height: 100%;
  border: 3px dashed #ad3c3f ;
}
.btn-confirm-back {
  background-color: #ad3c3f;
  color: white;
}
.btn-confirm-back:hover {
  border: 2px #ad3c3f solid;
  margin: 10px;
  color: #ad3c3f;
}

</style>
