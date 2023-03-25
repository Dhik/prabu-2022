<template>
  <div id="appy">
    <img
      src="./img/sertif/jadi3.png"
      style="width: 900px; height: 636px; position: absolute"
      class="center"
    />
    <div style="position: relative; text-align: center">
      <div style="width: 900px; padding-top: 68px">
        <h6 class="nomr">{{ code }}/PRABU/BEM-KMUP/IX/2022</h6>
      </div>
      <div style="width: 900px; padding-top: 95px">
        <h5 class="name">{{ name }}</h5>
      </div>
      <div style="height: 300px; width: 900px; padding-top: 110px">
        <table class="center">
          <tr>
            <td class="cert" style="padding-left: 47px; padding-right: 47px">
              {{ unpad }}
            </td>
            <td class="cert" style="padding-left: 50px; padding-right: 50px">
              {{ budaya }}
            </td>
            <td class="cert" style="padding-left: 52px; padding-right: 52px">
              {{ pradia }}
            </td>
            <td class="cert" style="padding-left: 50px; padding-right: 50px">
              {{ narasi }}
            </td>
            <td class="cert" style="padding-left: 47px; padding-right: 47px">
              {{ post_test }}
            </td>
            <td class="cert" style="padding-left: 47px; padding-right: 47px">
              {{ average }}
            </td>
          </tr>
        </table>
      </div>
      <div style="height: 50px; width: 900px; padding-top: 0px">
        <button
          @click="makePDF"
          class="btn btn-primary"
          style="position: absolute"
        >
          Make PDF
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      code: "",
      attendance: "",
      assignment: "",
      assessment: "",
      total: "",
    };
  },
  name: "Sertif",
  methods: {
    makePDF() {
      window.html2canvas = html2canvas;
      var doc = new jsPDF("l", "px", [900, 636]);
      doc.html(document.querySelector("#appy"), {
        callback: function (pdf) {
          pdf.save("mypdf.pdf");
        },
      });
    },
    getData() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/profile/certificate`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.code = res.data.code;
          this.name = res.data.name;
          this.budaya = res.data.quiz_budaya_grade;
          this.unpad = res.data.quiz_unpad_grade;
          this.pradia = res.data.submit_pradia_grade;
          this.narasi = res.data.submit_narasi_grade;
          this.post_test = res.data.post_test_grade;
          this.average = res.data.average_grade;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    getCode() {
      const token = localStorage.getItem("token");
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/account/profile/sertificate/create`,
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.code = res.data.code;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    this.getData();
    this.getCode();
  },
};
</script>
<style scoped>
.cent {
  display: flex;
  justify-content: center;
}
table {
}
table.center {
  margin-left: auto;
  margin-right: auto;
}

td.cert {
  font-weight: bold;
  color: #fff;
}

h5.name {
  text-align: center;
  color: #fff;
  font-size: 30px;
  -webkit-text-stroke: 1px #6a5ea8;
  font-weight: 700;
}
h6.nomr {
  text-align: center;
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
}
</style>
