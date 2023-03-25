<template>
  <div class="background-kuis section">
    <Confirm v-if="showModal" @close="toggleConfirm" @submit="submitBudaya" />
    <div id="kuis" class="container" style="margin-top: 200px">
      <div class="container">
        <h2 class="h-quiz">QUIZ</h2>
        <h3 class="h-type" v-if="current > 30 && current <= questionCount">
          Keunpadan
        </h3>
        <h3 class="h-type" v-else>Kebudayaan</h3>
        <h4 class="h-type">{{ time }}</h4>
        <div v-for="question in paginated" :key="question.no">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="question2">
              Question <span class="question2" v-html="question.no"></span>/ 40
            </h2>
          </div>
          <span v-if="current == 33 && current < questionCount">
            <table style="font-weight: 700" class="table">
              <tbody>
                <tr>
                  <td style="">No</td>
                  <td>Simbol</td>
                  <td>Makna</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Obor</td>
                  <td>
                    Menggambarkan ilmu yang merupakan suluh penerangan
                    kehidupan, yang membawa cahaya bahagia menuju keluhuran
                    budi.
                  </td>
                </tr>
                <td>2</td>
                <td>Kujang</td>
                <td>
                  Menggambarkan kemasyarakatan seperti halnya dengan roda yang
                  senantiasa bergerak berputar dalam proses perubahan dan yang
                  menjadi corak Universitas Padjadjaran.
                </td>
                <tr>
                  <td>3</td>
                  <td>Sayap</td>
                  <td>
                    Menggambarkan Sindiran terhadap kota Pakuan yang mengandung
                    kata “paku” yang merupakan Pusat Kebesaran dari Keprabuan
                    “Padjadjaran” dan daun paku ini merupakan sayap berarti
                    senantiasa berusaha mencapai taraf atau mutu yang lebih
                    tinggi.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Roda</td>
                  <td>Sebagai lambang kebudayaan dan pendidikan</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Bunga Teratai</td>
                  <td>
                    Melambangkan kekuatan dan keberanian untuk melindungi hak
                    dan kebenaran, yang menjadi tugas ilmu pengetahuan.
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pentagon</td>
                  <td>
                    Menggambarkan pancasila yang menjadi pedoman bagi segala
                    usaha serta kegiatan universitas demi kepentingan negara dan
                    bangsa.
                  </td>
                </tr>
              </tbody>
            </table>
            <br
          /></span>
          <span v-if="current == 35 && current < questionCount">
            <div
              class="row justify-content-center"
              style="padding-bottom: 20px"
            >
              <div class="col-md-5 col-sm-6">
                <img class="img-35" src="../assets/img/q1.png" alt="" />
              </div>
              <div class="col-md-5 col-sm-6">
                <img class="img-35" src="../assets/img/q2.png" alt="" />
              </div>
              <div class="col-md-5 col-sm-6">
                <img class="img-35" src="../assets/img/q3.png" alt="" />
              </div>
              <div class="col-md-5 col-sm-6">
                <img class="img-35" src="../assets/img/q4.png" alt="" />
              </div>
            </div>
            <div class="deskripsi" v-html="question.question"></div>
          </span>
          <div v-else>
            <div class="deskripsi" v-html="question.question"></div>
          </div>
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
        <div class="d-flex justify-content-end mt-4 score-time">
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
      // date: moment(10 * 10 * 150),
      date: moment(60 * 40 * 1000),
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
          no: 1,
          question:
            "Salah satu falsafah masyarakat suku Sunda yang masih selalu dijadikan pedoman dan pegangan adalah…",
          A: "Cageur, Bener, Bageur, Pinter, Singer",
          B: "Silih Asah, Silih Asih, Silih Asuh",
          C: "Sanghyang Siksakandang Karesian",
          D: "Cikaracak ninggang batu laun-laun jadi legok",
        },
        {
          no: 2,
          question:
            "Apa yang dimaksud dengan naskah Sanghyang Siksakandang Karesian (SSKK)?",
          A: "Naskah yang berisi konsep seni Sunda dan mengandung konsep dasar tentang kehidupan kesenian masyarakat suku Sunda",
          B: "Naskah yang merupakan falsafah agama masyarakat suku Sunda yang masih selalu dijadikan pedoman dan pegangan",
          C: "Naskah yang merupakan salah satu sumber falsafah pemahaman masyarakat Suku Sunda akan kehidupan",
          D: "Naskah falsafah Sunda yang membahas bagaimana caranya membangun sistem pemerintahan yang harmonis",
        },
        {
          no: 3,
          question:
            "Kapan naskah Sanghyang Siksakandang Karesian selesai disusun?",
          A: "Tahun 1986",
          B: "Tahun 1987",
          C: "Tahun 1517",
          D: "Tahun 1516",
        },
        {
          no: 4,
          question:
            "Siapa tokoh Sunda yang membukukan dan memublikasikan naskah Sanghyang Siksakandang Karesian?",
          A: "Atja dan Saleh Danasasmita",
          B: "Atja dan Ajip Rosidi",
          C: "Saleh Danasasmita dan Hidayat Suryalaga",
          D: "Saleh Danasasmita dan Ajip Rosidi",
        },
        {
          no: 5,
          question:
            "Kata ‘silih’ dalam falsafah Sunda ‘Silih Asah, Silih Asih, Silih Asuh’ memiliki arti … dalam Bahasa Indonesia.",
          A: "falsafah",
          B: "saling",
          C: "nilai",
          D: "naskah",
        },
        {
          no: 6,
          question:
            "Prinsip falsafah Sunda ‘Silih Asah, Silih Asih, Silih Asuh’ bisa disebut dengan istilah …",
          A: "Tri As",
          B: "Tri Silih",
          C: "Silas",
          D: "Sila",
        },
        {
          no: 7,
          question: "Prinsip ‘Silih Asah’ memiliki makna …",
          A: "saling membimbing dengan seksama agar selamat lahir dan batin",
          B: "saling mengasihi dengan segenap kebeningan hati",
          C: "saling mencerdaskan dan saling menambah ilmu pengetahuan",
          D: "saling menyayangi satu dengan yang lain tanpa memandang perbedaan",
        },
        {
          no: 8,
          question:
            "Berikut merupakan salah satu contoh implementasi prinsip ‘Silih Asah’ di lingkungan kampus adalah?",
          A: "Memberikan dukungan kepada teman yang mengikuti lomba ",
          B: "Mentraktir teman-teman ketika sedang istirahat ",
          C: "Menawarkan tumpangan kendaraan kepada teman",
          D: "Mengusulkan ide pemecahan masalah saat kerja kelompok",
        },
        {
          no: 9,
          question: `Perhatikan percakapan berikut ini.
          <br/> Poldemor    : “Ri, pulang ngampus kita kerjain tugas Pak Snep bareng, yuk! Kebetulan aku punya ide buat pengerjaannya. Nanti kita diskusi bareng aja weh.” 
          <br/> Heri        : “Oh, iya ya lupa ada tugas itu. Makasih ya Pol udah ngingetin. Hayu atuh gas! Aku sebenernya agak bingung juga sama tugasnya euy. Btw, ngerjainnya sambil makan-makan yuk ah. Kamu pasti lapar kan?”
          <br/> Poldemor    : “Tul! Emang si paling paham kamu teh, Ri.” Percakapan di atas merupakan salah satu contoh implementasi prinsip …`,
          A: "Memberikan dukungan kepada teman yang mengikuti lomba",
          B: "Mentraktir teman-teman ketika sedang istirahat",
          C: "Menawarkan tumpangan kendaraan kepada teman",
          D: "Mengusulkan ide pemecahan masalah saat kerja kelompok",
        },
        {
          no: 10,
          question: `Perhatikan beberapa pernyataan berikut ini.
           <br/> 1) Mendiskusikan materi perkuliahan bersama-sama.
           <br/> 2) Membuat sebuah kerajinan tangan dari bahan bekas.
           <br/> 3) Membantu teman mencari buku di perpustakaan.
            <br/> 4) Menyapa dengan sopan saat bertemu dosen.
    Pernyataan di atas yang merupakan contoh implementasi prinsip Silih Asah adalah …
`,
          A: "1) dan 2)",
          B: "1) dan 3)",
          C: "2) dan 4)",
          D: "1), 3), dan 4)",
        },
        {
          no: 11,
          question:
            "Pernyataan berikut yang merupakan salah satu contoh implementasi prinsip ‘Silih Asah’ adalah …",
          A: "Sizuka memberikan ide berupa tips agar tugas proyek kelompoknya bisa berjalan dengan baik dan hasilnya maksimal.",
          B: "Mail memberikan hadiah kepada Meimei karena dia telah mengajari materi kuliah yang cukup sulit dipahami.",
          C: "Vina meminjamkan beberapa buku yang dia punya kepada Vini yang akan mengikuti lomba di bulan depan.",
          D: "Petrik selalu mengingatkan Sponbob untuk mengisi presensi saat kuliah karena dia seringkali lupa untuk melakukannya.",
        },
        {
          no: 12,
          question:
            "Berikut merupakan salah satu contoh implementasi prinsip ‘Silih Asah’ di lingkungan masyarakat adalah?",
          A: "Mengadakan sosialisasi untuk tidak membuang sampah ke sungai",
          B: "Mendengarkan teman yang sedang berkeluh kesah",
          C: "Mengajak masyarakat untuk melanggar peraturan yang ada",
          D: "Melayat ke rumah tetangga yang meninggal dunia",
        },
        {
          no: 13,
          question: `Perhatikan beberapa pernyataan berikut ini.
           <br/> 1) Memberikan ide konsep acara lomba 17 Agustus
           <br/> 2) Ikut serta dalam kegiatan penyuluhan di desa
           <br/> 3) Membantu teman mencari buku
           <br/> 4) Menawarkan makanan kepada teman 
           <br/> Pernyataan di atas yang merupakan contoh implementasi prinsip Silih Asah adalah …`,
          A: "1) dan 2)",
          B: "1) dan 3)",
          C: "2) dan 4)",
          D: "1), 3), dan 4",
        },
        {
          no: 14,
          question:
            "Pernyataan berikut yang bukan merupakan salah satu contoh implementasi prinsip ‘Silih Asah’ adalah …",
          A: "Mengikuti kegiatan perkuliahan di kelas secara aktif",
          B: "Mengadakan penyuluhan tentang pengolahan sampah organik di desa",
          C: "Mengadakan sosialisasi untuk tidak membuang sampah ke sungai",
          D: "Menjenguk teman yang sedang sakit",
        },
        {
          no: 15,
          question: "Prinsip ‘Silih Asih’ memiliki makna … ",
          A: "saling membimbing dengan seksama agar selamat lahir dan batin",
          B: "saling mengasihi dengan segenap kebeningan hati",
          C: "saling mencerdaskan dan saling menambah ilmu pengetahuan",
          D: "saling memberikan kontribusi dan bekerja sama dalam menghadapi tantangan",
        },
        {
          no: 16,
          question:
            "Berikut merupakan salah satu contoh implementasi prinsip ‘Silih Asih’ di lingkungan kampus adalah … ",
          A: "Dosen mengajarkan materi perkuliahan kepada mahasiswanya dengan teliti.",
          B: "Mengusulkan ide pemecahan masalah saat kerja kelompok.",
          C: "Selalu bertegur sapa dan tidak membeda-bedakan teman di kampus.",
          D: "Menegur teman yang berisik saat dosen sedang memberikan materi.",
        },
        {
          no: 17,
          question: `         Dadan    : “Ton, denger-denger lu lagi ikut KKN ya?”
             <br/>    Toni    : “Eh, Dadan. Iya nih, gue lagi bingung banget, mana capek lagi.”
              <br/>   Dadan    : “Gak apa-apa Ton, bingung sama capek itu wajar, mungkin lu perlu istirahat sejenak. Prosesnya emang panjang, seterusnya kita perlu berusaha yang terbaik sama berdoa aja.”
             <br/>  Toni    : “Iya ya, Dan. Thanks ya bro.”
              <br/> Percakapan di atas merupakan salah satu contoh implementasi prinsip …`,
          A: "Silih Asah",
          B: "Silih Asih",
          C: "Silih Asuh",
          D: "Pilihan a, b, dan c benar",
        },
        {
          no: 18,
          question: `Aisyah memberikan semangat kepada Jamilah yang akan mengikuti lomba olimpiade di tingkat nasional.
Pernyataan di atas merupakan salah satu contoh implementasi prinsip …`,
          A: "Silih Asih",
          B: "Silih Asuh",
          C: "Silih Asah",
          D: "Pilihan a, b, dan c benar",
        },
        {
          no: 19,
          question:
            "Berikut yang bukan merupakan salah satu contoh implementasi prinsip ‘Silih Asih’ di lingkungan kampus adalah …",
          A: "Membantu teman mencarikan buku yang tepat di perpustakaan.",
          B: "Berdiskusi dengan dosen terkait suatu materi kuliah.",
          C: "Bersimpati kepada teman yang sedang tertimpa masalah atau musibah.",
          D: "Tidak ada jawaban yang benar.",
        },
        {
          no: 20,
          question:
            "Berikut merupakan salah satu contoh implementasi prinsip ‘Silih Asih’ di lingkungan masyarakat adalah …",
          A: "Polisi menegur pengguna jalan raya yang tidak mematuhi rambu lalu lintas",
          B: "Sebuah instansi memberikan edukasi di balai desa mengenai pola hidup sehat",
          C: "Teknisi berhasil membuat teknologi robotik untuk memudahkan pekerjaan",
          D: "Setiap hari Jumat, sebuah warung membagikan makanan kepada kaum dhuafa",
        },
        {
          no: 21,
          question: `Perhatikan beberapa pernyataan berikut ini!
          <br/>   1) Najla hobi memanggang kue, ia kerap membagikan kue yang ia buat kepada teman-temannya.
          <br/>   2) Selaku ketua RT, Pak Andre menegur salah satu warga yang membuang sampah di lingkungan yang tidak seharusnya.
          <br/>   3) Raihan memiliki sikap yang ramah, ia selalu menyapa tetangga yang ia temui di sekitar rumah.
          <br/>   4) Malik mengikuti organisasi masyarakat dan aktif memberikan kontribusi di forum tersebut dengan baik.
          <br/>    Pernyataan di atas yang merupakan contoh implementasi prinsip ‘Silih Asih’ adalah … `,
          A: "1) dan 2) ",
          B: "1) dan 3)",
          C: "2) dan 4)",
          D: "1), 3), dan 4)",
        },
        {
          no: 22,
          question:
            "Berikut yang bukan merupakan contoh implementasi prinsip ‘Silih Asih’ di lingkungan masyarakat adalah …",
          A: "Daffa berbela sungkawa dan mengunjungi tetangganya yang sedang berduka.",
          B: "Bu Siti membagikan hasil masakannya kepada tetangga sekitar rumah.",
          C: "Seluruh warga desa Sukamaju membantu dalam perayaan hari-hari besar keagamaan.",
          D: "Pak Rizqi menegur salah satu warga yang membuang sampah sembarangan.",
        },
        {
          no: 23,
          question: "Prinsip ‘Silih Asuh’ memiliki makna …",
          A: "saling membimbing dengan seksama agar selamat lahir dan batin",
          B: "saling mengasihi dengan segenap kebeningan hati",
          C: "saling mencerdaskan dan saling menambah ilmu pengetahuan",
          D: "saling memberikan kontribusi dan bekerja sama dalam menghadapi tantangan",
        },
        {
          no: 24,
          question:
            "Berikut merupakan salah satu contoh implementasi prinsip ‘Silih Asuh’ di lingkungan kampus adalah?",
          A: "Selalu bertegur sapa dan tidak membeda-bedakan teman perkuliahan.",
          B: "Dosen mengajarkan materi perkuliahan kepada mahasiswanya dengan teliti.",
          C: "Menegur teman yang asyik mengobrol saat perkuliahaan sedang berlangsung",
          D: "Mengusulkan ide pemecahan masalah saat sedang diskusi kelompok.",
        },
        {
          no: 25,
          question: `Perhatikan percakapan berikut ini.
Asep: “Ujang, punten itu sampahnya jangan dibuang di situ. Itu ada tempat sampah di sana, Jang.”
Ujang: “Eh, Asep, hehe. Iya maaf, ya. Saya lupa terus, kebiasaan jelek.”
Percakapan di atas merupakan salah satu contoh implementasi prinsip …
`,
          A: "Silih Asah",
          B: "Silih Asih",
          C: "Silih Asuh",
          D: "Pilihan a, b, dan c benar.",
        },
        {
          no: 26,
          question: `Perhatikan beberapa pernyataan berikut ini.
          <br/> 1) Saling menegur dan mengingatkan sesama ketika salah
          <br/> 2) Saling mengasihi dengan segenap kebeningan hati
          <br/> 3) Saling membimbing, membina, dan mengarahkan sesama
          <br/> 4) Masa bodoh dengan tindakan orang lain yang melakukan kesalahan
          <br/>   Pernyataan di atas yang merupakan contoh implementasi prinsip Silih Asuh adalah …
`,
          A: "1) dan 2)",
          B: "1) dan 3)",
          C: "2) dan 4)",
          D: "1), 3), dan 4)",
        },
        {
          no: 27,
          question:
            "Pernyataan berikut yang bukan merupakan salah satu contoh implementasi prinsip ‘Silih Asuh’ adalah …",
          A: "Menegur teman yang membuang sampah sembarangan.",
          B: "Berusaha untuk bertanggung jawab dengan apa yang sedang dikerjakan",
          C: "Ayah sedang menceritakan hal-hal yang menjadi budaya di desa.",
          D: "Mengusulkan ide pemecahan masalah saat diskusi kelompok.",
        },
        {
          no: 28,
          question:
            "Berikut merupakan salah satu contoh implementasi prinsip ‘Silih Asuh’ di lingkungan masyarakat adalah …",
          A: "Sebuah instansi memberikan edukasi di balai desa mengenai pola hidup sehat.",
          B: "Setiap hari Jumat, sebuah warung membagikan makanan kepada kaum dhuafa.",
          C: "Masyarakat mengadakan kegiatan kerja bakti supaya lingkungan tetap asri.",
          D: "Teknisi berhasil membuat teknologi robotik untuk memudahkan pekerjaan.",
        },
        {
          no: 29,
          question: `Sebagai seorang ketua RW, Pak Radi selalu bertanggung jawab kepada masyarakatnya.
Pernyataan di atas merupakan salah satu contoh implementasi prinsip …
`,
          A: "Silih Asah",
          B: "Silih Asih",
          C: "Silih Asuh",
          D: "Pilihan a, b, dan c benar.",
        },
        {
          no: 30,
          question: `Perhatikan beberapa pernyataan berikut ini.
      <br/> 1) Iki mengingatkan temannya untuk membawa buku yang ditugaskan dosen.
      <br/> 2) Mahasiswa memberikan edukasi di balai desa mengenai pola hidup sehat.
      <br/> 3) Bu Lala menegur Po yang lalai dalam memimpin kelompoknya.
      <br/> 4) Dipsi melerai teman-temannya yang sedang berkelahi.
    <br/> Pernyataan di atas yang merupakan contoh implementasi prinsip Silih Asuh adalah …`,
          A: "1) dan 2)",
          B: "1) dan 3)",
          C: "2) dan 4)",
          D: "1), 3), dan 4)",
        },
        {
          no: 31,
          question:
            "Pada rentang tahun berapa Unpad mulai memiliki 8 fakultas?",
          A: "1958-1963",
          B: "1957-1960",
          C: "1982-1990",
          D: "1995-2000",
        },
        {
          no: 32,
          question: `Salah satu misi dari Universitas Padjadjaran adalah membangun karakter kepemimpinan dengan budaya ...., ...., dan ..... dalam pengelolaan keberlanjutan Universitas. Lengkapilah titik-titik di atas!`,
          A: "kolektif, berintegritas, dan profesional",
          B: "kolektif, profesional, dan berintegritas",
          C: "berintegritas, profesional, dan kolektif",
          D: "profesional, berintegritas, dan kolektif",
        },
        {
          no: 33,
          question: `Pasangan simbol bagian dan makna pada logo Universitas Padjadjaran
              yang tepat ditunjukkan oleh nomor…`,
          A: "(1), (2), dan (3)",
          B: "(1), (3), dan (6)",
          C: "(2), (4), dan (5)",
          D: "(4), (5), dan (6)",
        },
        {
          no: 34,
          question:
            "Di bawah ini yang bukan tujuan dari adanya Tri Dharma Perguruan Tinggi, adalah …",
          A: "Memiliki peran dalam memecahkan persoalan pada lingkungan sekitar",
          B: "Memiliki peran dalam menelaah suatu kejadian yang terjadi di masyarakat ",
          C: "Memiliki peran untuk menjaga kesehatan jasmani saat menghadapi permasalahan",
          D: "Memiliki peran yang aktif dan kreatif pada bidang industri dan juga pada bidang usaha ",
        },
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
          no: 36,
          question:
            "Tri Dharma Perguruan Tinggi terdiri dari tiga poin, diantaranya",
          A: "Pendidikan, Penelitian, dan Pengabdian kepada masyarakat",
          B: "Pendidikan, Pengembangan, dan Pengabdian kepada masyarakat",
          C: "Pendanaan, Penelitian, dan Pengabdian kepada masyarakat",
          D: "Pendanaan, Pengembangan, dan Pengabdian kepada masyarakat",
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

    setTime() {
      const timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, "seconds"));
        localStorage.setItem("time", this.date);
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("quiz");
          localStorage.removeItem("time");
          localStorage.removeItem("answer");
          this.done = true;
          this.submitBudaya();
        }
      }, 1000);
    },

    setTimeContinue() {
      this.date = moment(localStorage.getItem("time"));
      const timer = setInterval(() => {
        this.date = moment(this.date.subtract(1, "seconds"));
        localStorage.setItem("time", this.date);
        // localStorage.setItem("time", this.date);
        if (this.date.diff(moment(0)) === 0) {
          clearInterval(timer);
          localStorage.removeItem("quiz");
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
      localStorage.removeItem("quiz");

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
          // console.log(res);
          this.correct = res.data.correct;
          this.incorrect = res.data.incorrect;
          this.grade = res.data.grade;
          if (this.grade != null || this.grade !== "") {
            localStorage.removeItem("answer");
            localStorage.removeItem("time");
            localStorage.removeItem("quiz");
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          localStorage.removeItem("time");
          localStorage.removeItem("quiz");
          this.$router.push({
            name: "Profile",
          });
        });

      //unpad
      axios({
        method: "post",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/quiz-unpad`,
        data: {
          answer1: this.answer[30],
          answer2: this.answer[31],
          answer3: this.answer[32],
          answer4: this.answer[33],
          answer5: this.answer[34],
          answer6: this.answer[35],
          answer7: this.answer[36],
          answer8: this.answer[37],
          answer9: this.answer[38],
          answer10: this.answer[39],
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
            localStorage.removeItem("quiz");
            this.$router.push({
              name: "Profile",
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Quiz Bagaskara",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          localStorage.removeItem("time");
          localStorage.removeItem("quiz");
          this.$router.push({
            name: "Profile",
          });
          Swal.fire({
            icon: "error",
            title: "Terjadi masalah, silahkan hubungi admin",
          });
        });
    },
    getUserGrade() {
      const token = localStorage.getItem("token");
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/v1/assessment/get-answer/bagaskara-unpad`,
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
            localStorage.removeItem("quiz");
            this.$router.push({
              name: "Profile",
            });
            Swal.fire({
              icon: "success",
              title: "Anda telah mengerjakan Quiz Bagaskara",
            });
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
          localStorage.removeItem("answer");
          localStorage.removeItem("time");
          localStorage.removeItem("quiz");
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
    localStorage.quiz = "quizSecretKeyH3HH3";
    if (localStorage.time) {
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
    border: 2px solid #ad3c3f;
    color: #ad3c3f;
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
    color: #ad3c3f;
  }
  .form-control2 {
    font-family: system-ui, sans-serif;
    font-size: 30px;
    display: grid;
    grid-template-columns: 1em auto;
    border: 3px solid #ad3c3f;
    background-color: transparent;
    color: #ad3c3f;
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
    border: 3px solid #ad3c3f;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    color: #ad3c3f;
    font-weight: 700;
    margin: 10px;
  }
  #kuis .btn-quiz2 {
    border: 3px solid #fff;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    color: #fff;
    background-color: #ad3c3f;
    font-weight: 700;
    margin: 10px;
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
  #kuis .question2 {
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
  h4.h-type {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;

    background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .background-kuis {
    background-image: url("../assets/img/quiz.png");
    height: 300vh;
    margin: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media (max-width: 1300px) {
  td {
    border: 2px solid #ad3c3f;
    color: #ad3c3f;
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
    color: #ad3c3f;
  }
  .form-control2 {
    font-family: system-ui, sans-serif;
    font-size: 30px;
    display: grid;
    grid-template-columns: 1em auto;
    border: 3px solid #ad3c3f;
    background-color: transparent;
    color: #ad3c3f;
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
    border: 3px solid #ad3c3f;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    color: #ad3c3f;
    font-weight: 700;
    margin: 10px;
  }
  #kuis .btn-quiz2 {
    border: 3px solid #fff;
    border-radius: 25px;
    width: 276px;
    font-size: 24px;
    background-color: #ad3c3f;
    color: #fff;
    font-weight: 700;
    margin: 10px;
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
  #kuis .question2 {
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
  h4.h-type {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;

    background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .background-kuis {
    background-image: url("../assets/img/quiz.png");
    height: 300vh;
    margin: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media (max-width: 576px) {
  td {
    border: 1px solid #ad3c3f;
    color: #ad3c3f;
    padding: 5px;
    font-size: 14px;
    line-height: 28px;
  }
  #kuis .deskripsi {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    align-items: center;
    color: #ad3c3f;
  }
  .form-control2 {
    font-family: system-ui, sans-serif;
    font-size: 30px;
    display: grid;
    grid-template-columns: 1em auto;
    border: 2px solid #ad3c3f;
    background-color: transparent;
    color: #ad3c3f;
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 10px;
    margin: 10px;
  }
  .opsi {
    font-size: 12px;
  }
  #kuis .btn-quiz {
    border: 2px solid #ad3c3f;
    border-radius: 25px;
    font-size: 18px;
    color: #ad3c3f;
    font-weight: 700;
    margin: 10px;
  }
  #kuis .btn-quiz2 {
    border: 2px solid #fff;
    border-radius: 25px;
    font-size: 18px;
    background-color: #ad3c3f;
    color: #fff;
    font-weight: 700;
    margin: 10px;
  }
  h2.h-quiz {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 0.08em;

    background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: center;
  }
  h3.h-type {
    font-family: "GROBOLD";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;

    background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
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
  #kuis .question2 {
    text-align: left;
    position: relative;
    font-family: "montserrat" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 60px;
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
  h4.h-type {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;

    background: linear-gradient(180deg, #ad3c3f 0%, #ff5a82 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .background-kuis {
    background-image: url("../assets/img/quiz.png");
    height: 470vh;
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
  background: #ad3c3f;
  color: white;
}
#kuis .btn-quiz2:hover {
  color: #ad3c3f;
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

.form-control + .form-control {
  margin-top: 1em;
}
</style>
