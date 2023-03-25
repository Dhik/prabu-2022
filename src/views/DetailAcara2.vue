<template>
  <div class="container_acara">
    <p>Test</p>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/navbar.vue";
import Iklan from "../components/iklan.vue";
import moment from "moment";
// import { ref } from "@vue/reactivity";
export default {
  name: "DetailAcara",
  data() {
    return {
      iklan: "../video.mp4",
      moment: moment,
    };
  },
  methods: {
    getLive() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url:
          `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/resource/acara/` +
          this.$route.params.id,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          // this.videos = res.data;
          // const url = res.data.url;
          // this.videos.url = `https://www.youtube-nocookie.com/embed/${url}?enablejsapi=1&origin=https%3A%2F%2Ftip.tm&widgetid=1&modestbranding=1&cc_load_policy=1&autoplay=1`;
          // this.videos.chat = `https://www.youtube.com/live_chat?v=${url}&embed_domain=prabu.unpad.ac.id&wmode=transparent`;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    this.getLive();
  },
};
</script>

<style scoped>
@import "../assets/acara.css";
@import "../assets/nav.css";

@media screen and (max-width: 820px) {
  .gambar-sponsor {
    max-width: 150px;
    max-height: 150px;
  }
}
@media screen and (max-width: 750px) {
  .gambar-sponsor {
    max-width: 120px;
    max-height: 120px;
  }
}
</style>
