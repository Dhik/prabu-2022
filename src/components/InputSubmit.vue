<template>
  <div class="backdrop-confirm" @click.self="closeModal">
    <div class="modal-container-confirm">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <h3 class="title-modals mb-3" v-if="title == 'Tugas Pradia'">
            Tugas Pradia
          </h3>
          <h3 class="title-modals mb-3" v-if="title == 'Tugas Narasi'">
            Tugas Narasi
          </h3>
        </div>
        <div class="col-md-7 col-sm-3" style="text-align: right">
          <button class="btn cw" @click="closeModal">
            <i
              class="fa fa-times-circle-o"
              aria-hidden="true"
              style="font-size: 40px"
            ></i>
          </button>
        </div>
      </div>
      <div v-if="title == 'Tugas Pradia'">
        <form action="" @submit.prevent="submitPradia">
          <input
            type="text"
            class="input-link"
            placeholder="Masukan Link"
            v-model="linkPradia"
          />
          <div class="d-flex justify-content-center">
            <button class="btn btn-edit" disabled="true">Kirim</button>
          </div>
        </form>
      </div>

      <div v-if="title == 'Tugas Narasi'">
        <form action="" @submit.prevent="submitNarasi">
          <input
            type="text"
            class="input-link"
            placeholder="Masukan Link"
            v-model="linkNarasi"
          />
          <div class="d-flex justify-content-center">
            <button class="btn btn-edit" disabled="true">Kirim</button>
          </div>
        </form>
      </div>

      <div class="d-flex" style="justify-content: right">
        <button class="btn btn-back" @click="submitBooklet">Kirim</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data(){
   return{
     linkNarasi = "",
     linkPradia ="",
   }
  },
  props: ["title"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    submitBooklet() {
      this.$emit("submit");
    },
    submitNarasi() {
      const token = localStorage.getItem("token");
      console.log(token);
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/submit-narasi`,
        data: {
          link: this.linkNarasi,
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.closeModal();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    },
    submitPradia() {
      const token = localStorage.getItem("token");
      console.log(token);
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/submit-pradia`,
        data: {
          link: this.linkPradia,
        },
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.closeModal();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Penugasan telah dikirim",
            showConfirmButton: true,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    },
  },
};
</script>

<style scoped>
.cw {
  color: #fff;
}
.btn.btn-back {
  background: #fff;
  border-radius: 25px;
  color: #28244c;
  font-weight: 700;
  font-size: 20px;
  width: 256px;
  height: 49px;
  text-transform: capitalize;
}

.text-detail-modal {
  font-family: "Montserrat", sans-serif;
  font-weight: medium;
  color: #ad3c3f !important;
  text-align: center;
}
.custom-icon {
  margin: 5px 29px;
  color: rgb(223, 85, 85);
}
.circle {
  border: 6px solid rgb(223, 85, 85);
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.title-modals {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff !important;
  text-align: left;
}
.modal-container-confirm {
  width: 70%;
  padding: 50px;
  margin: 25vh auto;
  background-color: #28244c !important;
  border-radius: 10px;
  z-index: 9999;
  animation: down 0.5s ease forwards;
}
@keyframes down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }

  100% {
    transform: translatex(0);
  }
}

.backdrop-confirm {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.btn-confirm-submit {
  background-color: #ad3c3f !important;
  margin: 10px;
  color: white;
}
.btn-confirm-submit:hover {
  border: 2px #ad3c3f solid;
  background-color: white;
}
.btn-confirm-cancel {
  border: 2px #ad3c3f solid;
  margin: 10px;
}
.btn-confirm-cancel:hover {
  background-color: #ad3c3f;
  color: white;
}
.icon {
  margin: 0 auto;
}
</style>
