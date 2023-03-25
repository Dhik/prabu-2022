<template>
  <section class="bg-studfest">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4">
          <h2 class="mt-4">
            <router-link to="/">
              <span class="backs">&lt; </span>
            </router-link>
            <span class="studfest mt-5">&emsp;Studfest</span>
          </h2>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            v-model="search"
            class="search-bar mt-5"
            placeholder="Masukan kata kunci nama"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div id="overflowTest">
            <div id="style-1" class="scrollbar">
              <div v-for="post in filteredPosts" :key="post.id">
                <div class="card-rad studfest float-left">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="card-block stud">
                        <h4 class="card-title stud">{{ post.title }}</h4>
                        <p class="stud" v-html="post.body"></p>
                        <div class="row">
                          <div class="col-md-6">
                            <p class="stud2">
                              Instagram : {{ post.ig }}<br />Line :
                              {{ post.line }} <br />Tiktok: {{ post.tiktok
                              }}<br />Youtube:
                              {{ post.yt }}
                            </p>
                          </div>
                          <div class="col-md-6">
                            <p class="stud2">
                              Email : {{ post.email }}<br />
                              Website : {{ post.web }}<br />Facebook:
                              {{ post.fb }}<br />Narahubung:
                              {{ post.wa }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-5">
                      <img class="d-block studfest" :src="post.img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <jw-pagination
            :pageSize="2"
            :items="posts"
            @changePage="onChangePage"
          ></jw-pagination>
        </div>
        <div class="col-lg-12" id="page-two" style="display: none"></div>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/acara.css";
import axios from "axios";
import moment from "moment";
// import { Input } from "postcss";
export default {
  name: "Acara",
  data() {
    return {
      moment: moment,
      label: "Live",
      videos: [],
      pageOfItems: [],
      search: "",
      posts: [
        {
          id: 1,
          title: "AIESEC in Unpad",
          body: `AIESEC in Unpad adalah salah satu Local Chapter dari AIESEC
                    in Indonesia, sebuah organisasi internasional yang bergerak
                    di bidang kepemimpinan pemuda. AIESEC dapat menjadi platform
                    global bagi kamu untuk meningkatkan potensi melalu
                    pengalaman praktis. We would like to become a safe place for
                    youth to learn, so together we can create a contagious
                    impact! <br />
                    Connect to us through DM (@aiesec_unpad) or LINE Offical
                    Account (@fhr5031l)`,
          img: "https://i.ibb.co/hFvDQJW/stud1.png",
          ig: "aiesec_unpad",
          line: "@fhr5031ll",
          email: "aiesec.unpad@aiesec.net",
          web: "aiesec.or.id/",
        },
        {
          id: 2,
          title: "English Speaking Union (ESU)",
          body: `English Speaking Union (ESU) merupakan unit kegiatan
                    mahasiswa (UKM) yang berdiri sejak 1982. ESU berfokus pada
                    kompetisi debat Bahasa Inggris, Model United Nations (MUN),
                    serta pengembangan skill berorganisasi. Dalam tiga fokus
                    tersebut, ESU mengadakan berbagai kegiatan rutin maupun
                    tahunan, seperti latihan reguler debat dan MUN serta
                    kompetisi tahunan tingkat nasional, yaitu Padjadjaran Open
                    dan ESU Unpad MUN. Selain itu, ESU memiliki kegiatan yang
                    bertujuan untuk memelihara hubungan baik antar anggota,
                    seperti alumni talk, bukber, dll.`,
          img: "https://i.ibb.co/JB69hvs/stud2.png",
          ig: "@esu_unpad",
          line: "@wih8119x",
          email: "philophycabinet22@gmail.com",
          tiktok: "@esu_unpad",
        },
        {
          id: 3,
          title: "Gelanggang Seni Sastra Teater dan Film",
          body: `Gelanggang Seni Sastra Teater dan Film Universitas
                    Padjadjaran atau yang dikenal sebagai GSSTF Unpad merupakan
                    UKM yang bergerak di bidang seni sastra, teater, film, dan
                    artistik. GSSTF berfungsi sebagai wadah penyaluran dan
                    pengembangan minat dan bakat mahasiswa Universitas
                    Padjadjaran dalam seni sastra, teater, film, dan artistik.
                    GSSTF memiliki tiga kegiatan besar, yaitu PDS yang merupakan
                    kegiatan pengenalan seni kepada calon anggota baru, yang
                    kemudian dipentaskan pada acara Pena; dan Parade yaitu
                    pementasan terbesar tahunan GSSTF.`,
          img: "https://i.ibb.co/5Tz9PFN/stud3.png",
          ig: "@esu_unpad",
          line: "@wih8119x",
          email: "philophycabinet22@gmail.com",
          tiktok: "@esu_unpad",
        },
        {
          id: 4,
          title: "IAAS LC Unpad",
          body: `International Association of Students in Agricultural and
                    Related Sciences Local Committee Padjadjaran University
                    (IAAS LC Unpad), merupakan organisasi internasional yang
                    bergerak di bidang pertanian dan ilmu terkait. IAAS LC Unpad
                    merupakan wadah yang tepat untuk meningkatkan kemampuan
                    dalam berbagai hal (keorganisasian, pertanian, pengembangan
                    masyarakat, dan lainnya) dengan family-based organization.
                    IAAS Think Globally, Act locally!`,
          img: "https://i.ibb.co/ThZLbYN/stud4.png",
          ig: "@iaaslcunpad",
          line: "@chm5168e",
          email: "iaaslcunpad@gmail.com",
          fb: "IAAS Lc Unpad",
        },
        {
          id: 5,
          title: "Orkestra Universitas Padjadjaran",
          body: `Orkestra Universitas Padjadjaran, atau Orkes Unpad,
                    merupakan UKM di bidang seni musik. Sejak tahun 2012, Orkes
                    Unpad melatih, membina, menghimpun, dan menunjang jiwa musik
                    mahasiswa Unpad; memadukan suara beragam
                    instrumen—woodwinds, brass, strings, piano, gitar, hingga
                    perkusi—ke dalam musik ensambel orkestra. Melalui konser,
                    kompetisi, performa, dan karya-karya kreatif, Orkes Unpad
                    membidik harumnya nama Almamater serta keunggulan setiap
                    karakter seninya di mata rakyat hingga dunia internasional.`,
          img: "https://i.ibb.co/LrHnP9r/stud5.png",
          ig: "@orkesunpad",
          yt: "Orkestra Unpad",
          tiktok: "@orkesunpad",
          line: "@jaj4717c",
        },
        {
          id: 6,
          title: "Menwa Batalyon 2 UNPAD",
          body: `Resimen Mahasiswa Mahawarman Batalyon II/Unpad merupakan
                    unit kegiatan mahasiswa yang bergerak di bidang
                    kebelanegaraan. Berdiri sejak 11 November 1964 menjadikan
                    UKM Resimen Mahasiswa salah satu UKM tertua di Unpad.
                    Kegiatan yang dilaksanakan oleh UKM Resimen Mahasiswa
                    Batalyon II/Unpad bertujuan untuk membentuk
                    mahasiswa-mahasiswa unggul melalui kegiatan seperti
                    Diklatsarmil, Latihan Pemantapan, berbagai perlombaan, dan
                    kursus-kursus lain yang akan menunjang softskill anggotanya,
                    serta didukung oleh jaringan alumni yang bisa membantu
                    menunjang karir untuk masa depan.`,
          img: "https://i.ibb.co/pf0Fw3p/stud6.png",
          ig: "Menwayon2unpad",
          yt: "Menwa Batalyon 2 UNPAD",
          tiktok: "",
          web: "https://castrena-id.blogspot.com/",
          email: "",
          line: "@899hxygb",
        },
        {
          id: 7,
          title: "Unit Baseball Softball Universitas Padjadjaran",
          body: `Unit Baseball Softball Universitas Padjadjaran (UBSU)
                    merupakan salah satu UKM yang berada di lingkungan
                    Universitas Padjadjaran. Olahraga baseball – softball
                    merupakan olahraga yang populer dan penting dipertandingkan
                    baik dalam event nasional maupun internasional. UBSU
                    kemudian hadir untuk menampung minat dan bakat mahasiswa
                    Universitas Padjadjaran yang memiliki keinginan untuk
                    mengembangkan diri dalam olahraga baseball dan softball.`,
          img: "https://i.ibb.co/mTP3ynx/stud7.png",
          ig: "@unpad.softball",
          yt: "",
          tiktok: "",
          web: "",
          email: "",
          line: "iqbal.firdaus",
          wa: "087832603094",
        },
        {
          id: 8,
          title: "Unit Bola Basket Unpad (UBBU)",
          body: `Unit Bola Basket Unpad (UBBU) secara organisasi resmi
                    didirikan bersamaan dengan disahkannya AD/ART UBBU oleh BEM
                    KEMA Universitas Padjadjaran. UBBU menjadi UKM dengan
                    peminat nomor 2 terbanyak setelah futsal/sepak bola. UBBU
                    turut mengikuti kalender event yang diadakan PERBASI dengan
                    mengirimkan wakilnya dikejuaraan LIMA, CAMPUS LEAGUE, dan
                    PON untuk bertanding membawa nama Unpad. Tentunya latihan
                    rutin juga diadakan setiap minggunya untuk menghadapi
                    kejuaraan basket antar perguruan tinggi baik di Jawa Barat
                    maupun Indonesia.`,
          img: "https://i.ibb.co/027vCTq/stud8.png",
          ig: "@unpadbasketball",
          yt: "",
          tiktok: "",
          web: "",
          email: "",
          line: "@vck5884y / alysshas",
          wa: "087863514141",
        },
        {
          id: 9,
          title: "Bridge",
          body: `Bridge merupakan Unit Kegiatan Mahasiswa (UKM) berupa
                    olahraga otak dengan memainkan satu set kartu remi secara
                    berpasangan. Bridge Unpad berdiri sejak tanggal 21 Maret
                    1999. Permainan bridge berfokus untuk melatih ingatan dan
                    menghindarkan kepikunan, menambah tingkat kecerdasan baik
                    IQ, EQ, maupun SQ, serta membentuk pola pikir yang
                    terstruktur, sistematis, praktis, dan pragmatis dalam ilmu
                    sains, sosial, dan psikologi secara bersamaan.`,
          img: "https://i.ibb.co/ySZdx9r/stud9.png",
          ig: "@bridge_unpad",
          yt: "UKM BRIDGE UNPAD",
          tiktok: "",
          web: "",
          email: "ukm.bridge@unpad.ac.id",
          line: "@els1965r",
        },
        {
          id: 10,
          title: "Unit Catur Mahasiswa Unpad (UCMU)",
          body: `Unit Catur Mahasiswa Unpad (UCMU) didirikan pada tahun 1980
                    oleh GM Utut Adianto (alumni FISIP Unpad). UCMU merupakan
                    salah satu UKM di lingkungan Universitas Padjadjaran yang
                    menampung minat dan bakat mahasiswa yang berkeinginan untuk
                    mengembangkan diri dan kemampuannya dalam olahraga catur.
                    UCMU aktif menyelenggarakan kepelatihan dan kaderisasi bagi
                    anggota seperti coaching clinic, mentoring, dan turnamen
                    internal yang diselenggarakan setiap minggu atau bulan.
                    Selain itu, UCMU juga sering mengikuti kejuaraan tingkat
                    daerah maupun Nasional`,
          img: "https://i.ibb.co/S6Zw2nC/stud10.png",
          ig: "catur.unpad",
          yt: "",
          tiktok: "",
          web: "",
          email: "unitcaturmahasiswaunpad@gmail.com",
          line: "",
          wa: "081225501411",
        },
        {
          id: 11,
          title: "Unit Flag Football Unpad (UFFU)",
          body: `Unit Flag Football Unpad (UFFU) merupakan UKM yang berada di Universitas Padjadjaran.  Flag Football adalah permainan modifikasi American Football yang bertujuan mengurangi kontak fisik pada pemain. UFFU yang diresmikan pada tahun 2011, terlahir sebagai wadah penyaluran minat dan bakat mahasiswa Universitas Padjadjaran pada olahraga Flag Football. Prestasi UFFU diantaranya menjuarai College Bowl sebanyak 2 kali dan IFFA Bandung Major League sebanyak 5 kali.`,
          img: "https://i.ibb.co/wRp3knC/stud11.png",
          ig: "@ff_unpad",
          yt: "",
          wa: "08971173508",
          tiktok: "",
          web: "",
          email: "flagfootballunpad@gmail.com",
          line: "jihanauliana",
        },
        {
          id: 12,
          title: "Spektrum",
          body: `Spektrum merupakan UKM di Unpad yang bertujuan untuk mewadahi minat dan bakat Kema Unpad dalam bidang fotografi melalui kegiatan-kegiatan yang dapat meningkatkan pengetahuan dan kemampuan fotografi. Beberapa kegiatan Spektrum di antaranya, yaitu: Pendidikan dan Pelatihan Fotografi, Pameran Foto Tahunan, Lomba Foto Nasional, Hunting Foto Bersama, dan kegiatan seru lainnya. Spektrum juga memberikan peluang kepada Kema Unpad yang ingin mencari pengalaman kerja karena Spektrum juga memfasilitasi anggotanya untuk dapat mencoba kesempatan menjadi fotografer, juri, dan pemateri.`,
          img: "https://i.ibb.co/Qp88YzK/stud12.png",
          ig: "@spektrum_unpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "tsatha",
        },
        {
          id: 13,
          title: "Unit Hoki Unpad (UHU)",
          body: `Unit Hoki Unpad (UHU) merupakan salah satu UKM Universitas Padjadjaran bidang olahraga. Ada beberapa kegiatan yang biasanya dilakukan UHU: latihan rutin, latihan tanding, mengikuti turnamen, dan bonding anggota. Adapun beberapa prestasi yang pernah diraih oleh UHU: Juara 1 Putri dan Juara 3 Putra Bali Hockey Festival (2019), Juara 2 Putri dan Juara 3 Putra IHRPT ISTN (2019), Juara 2 Putri dan Juara 3 Putra Kulonprogo Indooor Hockey Open Tournament (2022), Juara 2 Putra PIHF 2022.`,
          img: "https://i.ibb.co/gSBGqLG/stud13.png",
          ig: "@unithokiunpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "fazhrymp / rafaaurellia",
        },
        {
          id: 14,
          title: "Unit Karate Universitas Padjadjaran (UKU)",
          body: `Unit Karate Universitas Padjadjaran (UKU) merupakan salah satu unit kegiatan mahasiswa yang bergerak dalam bidang seni bela diri karate. Pada awalnya, UKU merupakan komunitas yang didirikan oleh para atlet yang mengenyam pendidikan di Universitas Padjadjaran, agar tetap dapat berlatih bersama di tengah kesibukan kuliah. Namun, seiring berjalannya waktu, UKU berkembang menjadi unit kegiatan mahasiswa.`,
          img: "https://i.ibb.co/CnqTgDj/stud14.png",
          ig: "@unitkarateunpad",
          wa: " 085318496207",
          yt: "",
          tiktok: "",
          web: "",
          email: "unitkarate.unpad1@gmail.com",
          line: "@601tsxfk /  alfianuar.",
        },
        {
          id: 15,
          title: "Kiryokukai Aikido Unpad Dojo",
          body: `Aikido merupakan suatu jenis beladiri yang berasal dari Jepang yang dikembangkan oleh Morihei Ueshiba yang menekankan prinsip ketenangan dengan mengarahkan tenaga lawan untuk menaklukan lawan tanpa bertujuan untuk melukai. Kiryokukai Aikido Unpad Dojo menyelenggarakan kegiatan antara lain; latihan rutin, ujian kenaikan sabuk, seminar, lomba, dan lain-lain. Adapun beberapa prestasi yang telah kami capai diantaranya adalah juara umum pada Aikigames tahun 2018 dan 2019.`,
          img: "https://i.ibb.co/xJYK4yS/stud15.png",
          ig: "@aikidounpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "kiryokukaiaikidounpad@gmail.com",
          line: "@pel1693f / sahibmusthafa",
        },
        {
          id: 16,
          title: "Korps Protokoler Mahasiswa (KPM Unpad)",
          body: `Korps Protokoler Mahasiswa Universitas Padjadjaran (KPM Unpad) adalah organisasi dalam lingkup Unit Kegiatan Mahasiswa (UKM) Unpad yang berfokus pada bidang keprotokolan, event organizer, public speaking, dan master of ceremony. KPM Unpad berdiri secara de jure pada 10 April 2000. KPM Unpad berkembang secara progresif seiring dengan datangnya tawaran-tawaran kerja sama baik dari pihak internal maupun eksternal Unpad. KPM Unpad telah berpengalaman menjalankan berbagai acara berskala nasional dan internasional secara profesional.`,
          img: "https://i.ibb.co/f8wtgDx/stud16.png",
          ig: "@kpmunpad",
          yt: "",
          wa: "0895413005447 (Hawa)",
          tiktok: "",
          web: "",
          email: "kpmunpad@gmail.com",
          line: "@kpmunpad",
        },
        {
          id: 17,
          title: "KSR PMI Unit Unpad",
          body: `KSR PMI Unit Unpad merupakan sebuah organisasi kemahasiswaan di tingkat universitas yang bergerak di bidang kemanusiaan dan berpegang teguh pada prinsip Palang Merah Indonesia. Organisasi ini bersifat mandiri, demokratis, sukarela, dan kekeluargaan sehingga dalam setiap kegiatannya selalu berusaha untuk melakukan segala sesuatu yang bermanfaat bagi masyarakat. Dengan kesukarelaan, setiap anggota KSR PMI Unit Unpad siap diterjunkan ke lapangan untuk kegiatan kemanusiaan baik dalam lingkungan universitas maupun lingkungan masyarakat.`,
          img: "https://i.ibb.co/qnwkYtG/stud17.png",
          ig: "@ksrpmiunitunpad",
          yt: "",
          wa: "082120987739 (Kennisa)",
          tiktok: "",
          web: "",
          email: "ksrpmiunitunpad@gmail.com",
          line: "@tof7117d",
        },
        {
          id: 18,
          title: "LPPMD",
          body: `Lembaga Pengkajian dan Pengabdian Masyarakat Demokratis atau LPPMD merupakan Unit Kegiatan Mahasiswa (UKM) Universitas Padjadjaran yang bergerak di kajian isu sosial-politik. Didirikan sejak tahun 16 Maret 1999, LPPMD menjadi UKM sekaligus organisasi yang menjadi tempat bagi mahasiswa untuk berdiskusi dan mengkaji fenomena sosial-politik yang terjadi di tengah masyarakat. Beberapa kegiatan yang rutin LPPMD laksanakan antara lain adalah Diskusi Kurikulum, Kelas Advokasi, Majalah Aufklarung, Arisan Literasi, Seminar Nasional, Workshop Research dan masih banyak lagi.`,
          img: "https://i.ibb.co/kS0ckqc/stud18.png",
          ig: "@lppmd",
          yt: "",
          wa: "",
          tiktok: "",
          fb: "LPPMD Unpad",
          web: "",
          email: "lppmunpad99@gmail.com",
          line: "@lppmdunpad",
        },
        {
          id: 19,
          title: "Lises Unpad",
          body: `Kebudayaan Sunda sebagai bagian yang tidak terpisahkan dan merupakan salah satu kekayaan budaya bangsa memerlukan upaya untuk digali, dikembangkan, dan dilestarikan. Untuk menyalurkan bakat, aspirasi, aktivitas, dan kreativitas mahasiswa dengan ini kami mahasiswa Universitas Padjadjaran dengan penuh kesadaran dan tanggung jawab menggabungkan diri dalam organisasi yang bernama Lingkung Seni Sunda Unpad.`,
          img: "https://i.ibb.co/mv4hMBJ/stud19.png",
          ig: "@lises_unpad	",
          yt: "",
          wa: "085722480827 – Faiz Azhari",
          tiktok: "lisesunpad",
          web: "",
          email: "",
          line: "@jij7198w",
        },
        {
          id: 20,
          title: "UKM Merpati Putih",
          body: `UKM Merpati Putih adalah UKM yang bergerak di bidang bela diri pencak silat, yang berasal dari Yogyakarta. Selain mempelajari dasar dari beladiri, di merpati putih juga berlatih tata nafas yang menjadikan ciri khas tersendiri bagi Merpati Putih dan bermanfaat untuk kesehatan. UKM Merpati Putih tentu memiliki banyak prestasi yang telah ditorehkan, Juara umum 2 piala Menpora, Medali Emas kategori tanding putra Kejuaraan Nasional Pencak Silat antar  Perguruan Tinggi ke-IX Universitas Pembangunan Negeri Veteran Yogyakarta.`,
          img: "https://i.ibb.co/f1cmwSw/stud20.png",
          ig: "@mpunpad",
          yt: "",
          wa: "083825471681 (Ryan) / 081254621654 (Regina)",
          tiktok: "mpunpad",
          web: "",
          email: "mp.unpad@gmail.com",
          line: "",
        },
        {
          id: 21,
          title: "Unit Paduan Suara Mahasiwa Unpad (PSM)",
          body: `Paduan Suara Mahasiwa Universitas Padjadjaran (PSM Unpad) merupakan Unit Kegiatan Mahasiswa yang bergerak pada bidang seni suara dan musik, yang telah berkarya dan berprestasi untuk mengapresiasi seni musik sejak 1978. Anggota PSM Unpad dapat berkembang dan menyalurkan minatnya melalui program rutin seperti Resital Vokal, Konser Internal, Konser Tahunan, hingga Festival Luar Negeri Indonesia Kirana.`,
          img: "https://i.ibb.co/HtvN8t3/stud21.png",
          ig: "@unpadchoir / @unpadchoir2022",
          yt: "",
          wa: "085794240201 (Nada Yasmin) / 087723987808 (Ijat)",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 22,
          title: "Unit Palawa Unpad",
          body: `Palawa Unpad merupakan organisasi kemahasiswaan yang berorientasi di alam bebas. Didirikan pada 24 Maret 1982. ‘Palawa’ bukanlah sebuah singkatan, melainkan kata yang diambil dari aksara pertama di tanah Jawa yaitu ‘Pallawa’, ialah sebuah aksara yang membawa pencerahan pada awal perkembangan literasi bangsa. Sejalan dengan makna filosofinya, kegiatan Palawa Unpad dapat membentuk karakter, menumbuhkan rasa cinta terhadap lingkungan, bangga terhadap tanah air, serta dapat menjadi wadah pengembangan aktivitas dan kreativitas mahasiswa sesuai dengan Tri-Dharma Perguruan Tinggi. `,
          img: "https://i.ibb.co/JppdPPr/stud22.png",
          ig: "palawa_unpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "palawa.unpad.ac.id",
          email: "",
          line: "@164yvuif / @newejibjibril (Jibril)",
        },
        {
          id: 23,
          title: "Unit Pencinta Budaya Minangkabau Unpad (UPBM)",
          body: `Unit Pencinta Budaya Minangkabau Universitas Padjadjaran atau UPBM Unpad berdiri pada 24 Oktober 1986. UPBM hadir mewadahi mahasiswa Unpad untuk belajar, memahami dan mengembangkan serta melestarikan budaya Minangkabau. Sehingga UKM ini tidak terbatas oleh suku bangsa. Tujuan UPBM terus berkembang menciptakan kader-kader yang mampu bernalar dengan baik dan mampu melestarikan seni budaya Minangkabau, seperti tari, randai dan musik. UPBM juga menyelenggarakan berbagai kegiatan berbasis penalaran seperti forum kajian, kaderisasi, serta telah mampu mengukir banyak prestasi.`,
          img: "https://i.ibb.co/MM7w9Bp/stud23.png",
          ig: "@upbmunpad",
          yt: "",
          wa: "",
          tiktok: "upbmunpad ",
          web: "",
          email: "",
          line: "@oga7644c / bmaprstya (Bima) ",
        },
        {
          id: 24,
          title: "Unit Perisai Diri Unpad (RD)",
          body: `Unit Mahasiswa Perisai Diri merupakan salah satu unit kegiatan bela diri yang tergabung dalam IPSI. UKM Perisai Diri Universitas Padjadjaran merupakan unit latihan yang berada langsung di bawah naungan PD Cabang Bandung serta merupakan bela diri pertama yang berdiri di lingkungan UKM Unpad. Pada tahun 1988 Perisai Diri Unpad menjadi UKM secara resmi diakui dan disahkan oleh rektor. UKM PDUP sudah banyak berkontribusi dalam memberikan prestasi untuk unpad dari segi daerah, nasional hingga internasional.`,
          img: "https://i.ibb.co/mCc9zyM/stud24.png",
          ig: "Perisaidiriunpad",
          yt: "",
          wa: "081220630782 (Abad Bastian)",
          tiktok: "",
          web: "",
          email: "",
          line: "Perisai Diri Unpad",
        },
        {
          id: 25,
          title: "Unit Pramuka Unpad",
          body: `Pramuka Unpad resmi didirikan pada 30 Agustus 1975. Kegiatan yang dilaksanakan oleh Pramuka Unpad berada di ruang lingkup pengembangan keterampilan anggota berwawasan lingkungan, bakti kepada masyarakat, kegiatan alam bebas, seni dan budaya, kewirausahaan, serta kegiatan lain yang menunjang pengembangan anggota Ambalan-Racana Padjadjaran. Contoh kegiatan yang dilakukan Pramuka Unpad diantaranya Hiking Bersama Berorientasi Alam (Hiberbola) dan upgrading anggota.`,
          img: "https://i.ibb.co/0VpL1SY/stud25.png",
          ig: "@pramukaunpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "http://pramuka.unpad.ac.id",
          email: "pramuka.unpad75@gmail.com",
          line: "",
        },
        {
          id: 26,
          title: "Unit Renang Unpad (URU)",
          body: `Unit Renang Unpad (URU) merupakan salah satu Unit Kegiatan Mahasiswa yang berperan sebagai wadah bagi mahasiswa Unpad untuk mengembangakan minat, bakat, dan potensi diri khususnya pada olahraga renang. URU didirikan pada tanggal 1 Oktober 1988 yang berjalan sebagai sarana bagi mahasiswa yang mempunyai hobi dan daya tarik dalam olahraga renang, serta pengalaman dalam keterampilan berorganisasi. URU memiliki sistem pelatihan dengan membagi tiga kelas kolam (dangkal, sedang, dalam) yang dibagi berdasarkan kemampuan anggota dalam olahraga renang.`,
          img: "https://i.ibb.co/vxMLbSk/stud26.png",
          ig: "unitrenangunpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "unitrenangunpad1988@gmail.com",
          line: "@iig9525w",
        },
        {
          id: 27,
          title: "Sadaluhung Padjadjaran Drum Corps (SPDC)",
          body: `Sadaluhung Padjadjaran Drum Corps (SPDC) adalah salah satu Unit Kegiatan Mahasiswa di bidang olahraga dan seni yang dimiliki Unpad. SPDC juga merupakan salah satu Marching Band tertua di Indonesia yang didirikan sejak 1984. Di SPDC Unpad, mahasiswa  tidak hanya belajar tentang musik saja tapi juga belajar baris-berbaris, tari, dan akting karena pada pertunjukan marching band umumnya menampilkan cerita lewat lagu dan tari, mirip dengan teater tetapi dibawakan bersama instrumen-instrumen musik yang dimainkan secara ansambel.`,
          img: "https://i.ibb.co/8d9Q0Nw/stud27.png",
          ig: "@spdc_unpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: " @fhv9784l/zlftlfildzah30 (Fildzah)/nadakhania22 (Nada)",
        },
        {
          id: 28,
          title: "Unit  Search And Rescue Unpad (SAR)",
          body: `Unit  SAR  Unpad  merupakan  organisasi  yang  mewadahi  orang-orang  berjiwa  sosial  untuk menolong sesamanya atas dasar kemanusiaan. Kegiatan: Kegiatan Insidentil: Operasi SAR dan Operasi Kebencanaan. Kegiatan Rutin: Latihan berkelanjutan untuk  meningkatkan skill anggotanya untuk menunjang kegiatan insidentil. Pendidikan spesifikasi: Vertical rescue, Jungle rescue, Water rescue. Berikan jiwa dan ragamu untuk kemanusiaan. Avignam Jagat Samagram.`,
          img: "https://i.ibb.co/g9rTD5Q/stud28.png",
          ig: "@unitsarunpad",
          yt: "Unit SAR Unpad Official",
          wa: "085155299934 (Raynaldaldy)",
          tiktok: "",
          web: "",
          email: "",
          line: "@vvhy7140",
        },
        {
          id: 29,
          title: "Unit Sepak Bola Unpad (USBU)",
          body: `Unit Sepak Bola Unpad (USBU) didirikan pada tanggal 28 Januari 1984. USBU merupakan salah satu Unit Kegiatan Mahasiswa yang berada di bawah naungan Universitas Padjadjaran. USBU terdiri dari 3 cabang olahraga yaitu Sepak Bola, Futsal Putra, dan Futsal Putri yang berlatih di Gor Jati dan Bale Santika Unpad. USBU memiliki program kerja unggulan yaitu mengikuti Liga Mahasiswa Regional dan Nasional, UITM Malaysia, Piala Pancasila UGM, dan Piala Menpora`,
          img: "https://i.ibb.co/JCWCy7T/stud29.png",
          ig: "@soccerunpad/@futsalunpad",
          yt: "",
          wa: "082112873085 (Raga Al Pasha)",
          tiktok: "",
          web: "",
          email: "",
          line: "raga687 (Raga Al Pasha)",
        },
        {
          id: 30,
          title: "Shorinji Kempo Unpad",
          body: `Shorinji Kempo Unpad merupakan unit kegiatan kemahasiswaan dibawah naungan BEM KEMA UNPAD yang bergerak dibidang olahraga yang berasal dari Jepang. Pengajaran seni bela diri Kempo berpegang teguh pada suatu doktrin yang diajarkan sejak munculnya bela diri Kempo yaitu "Kekuatan tanpa kasih sayang adalah kezaliman, kasih sayang tanpa kekuatan adalah kelemahan". UKM Kempo Unpad telah banyak mendapatkan penghargaan dikompetisi tingkat nasional.`,
          img: "https://i.ibb.co/sbh9fdS/stud30.png",
          ig: "@orkesunpad",
          yt: "Orkestra Unpad",
          wa: "",
          tiktok: "@orkesunpad",
          web: "",
          email: "",
          line: "@jaj4717c",
        },
        {
          id: 31,
          title: "Unit Taekwondo Unpad (UTKD)",
          body: `Unit Taekwondo Unpad (UTKD) didirikan pada tanggal 16 September 1982. UTKD mengadakan latihan rutin setiap hari Selasa & Jumat di Bale Santika atau di Stadion Jati Padjadjaran (Jatinangor) mulai pukul 16.00 WIB.`,
          img: "https://i.ibb.co/8M4N4QF/stud31.png",
          ig: "@kempo_unpad",
          yt: "",
          wa: "089691927311 (Abraham Luther F)",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 32,
          title: "Unit Tarung Derajat (UTDU)",
          body: `Unit Tarung Derajat UNPAD didirikan pada tanggal 19 Oktober 2015. UTDU mengadakan latihan rutin setiap hari Rabu & Jumat di Bale Santika atau di Stadion Jati Padjadjaran (Jatinangor) mulai pukul 19.00 WIB.`,
          img: "https://i.ibb.co/Qn9hJ2S/stud32.png",
          ig: "@satlatunpad",
          yt: "",
          wa: "08882389215 (Firlahi)",
          tiktok: "",
          web: "",
          email: "satlatunpad@gmail.com",
          line: "firlahi04 (Firlahi)",
        },
        {
          id: 33,
          title: "Unit Tenis Meja Unpad (UTMU)",
          body: `Unit Kegiatan Mahasiswa dibidang olahraga yang berfokus pada cabang tenis meja dengan tujuan memberikan pelatihan dan wadah kepada mahasiswa Unpad baik yang sudah mahir maupun baru ingin menganali tenis meja.`,
          img: "https://i.ibb.co/7rzcy8x/stud33.png",
          ig: "@utmunpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "tenismejaunpad@gmail.com",
          line: "",
        },
        {
          id: 34,
          title: "Unpad Archery (Padry)",
          body: `Unpad Archery atau yang biasa dikenal dengan Padry merupakan UKM Panahan Universitas Padjadjaran yang diresmikan pada tahun 2021. Padry memiliki kegiatan yang berfokus pada pelatihan bagi anggotanya dari teknik dasar memanah hingga teknik lanjutan. Padry juga turut serta dalam pertandingan atau event yang diselenggarakan oleh lembaga lain pada tingkat nasional. `,
          img: "https://i.ibb.co/jrGX5ws/stud34.png",
          ig: "unpad_archery",
          yt: "Unpad Archery",
          wa: "",
          tiktok: "",
          web: "",
          email: "unpadarchery@gmail.com",
          line: "@lta8173h",
        },
        {
          id: 35,
          title: "Girl Up Unpad",
          body: `Girl Up hadir sebagai komunitas yang dapat membantu peningkatan keterampilan, hak, dan peluang perempuan untuk menjadi pemimpin serta menjadi sarana pengembangan sikap kepemimpinan yaitu advocacy, fundraising, storytelling, dan organizing sebagai landasan untuk mencapai kesetaraan gender yang berkelanjutan. Selaras dengan tujuan Universitas Padjadjaran, tujuan utama Girl Up Unpad adalah mendukung pendidikan dan pemberdayaan masyarakat Jawa Barat secara khusus dan masyarakat Indonesia secara umum di tanah Padjadjaran.`,
          img: "https://i.ibb.co/JzDT3hX/stud35.png",
          ig: "@girlup.unpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "Girl Up Unpad (LinkedIn)",
          email: "girlup.unpad@gmail.com",
          line: "@172eigom",
        },
        {
          id: 36,
          title: "Islamic Studies of Economics Group (ISEG)",
          body: `Islamic Studies of Economics Group (ISEG) Unpad adalah kelompok kajian studi ekonomi Islam yang berdiri pada 21 Januari 1997 oleh Mahasiswa Fakultas Ekonomi Universitas Padjadjaran yang mewadahi seluruh Mahasiswa dari semua fakultas di Universitas Padjadjaran untuk belajar ekonomi Islam sekaligus menyebarluaskannya. Kemudian terdapat program dan kegiatan menarik untuk diikuti, seperti Kajian terkait ekonomi Islam, Self Development Training, Pelatihan Perlombaan Olimpiade Ekonomi Islam, Business Plan, dan Karya Tulis Ilmiah.`,
          img: "https://i.ibb.co/qrPgzLc/stud36.png",
          ig: "@isegunpad",
          yt: "",
          wa: "085693151033 (Hapid)",
          tiktok: "",
          web: "",
          email: "",
          line: "@zfm4047e/hapidanakjiput55",
        },
        {
          id: 37,
          title: "KMB Dharmavira",
          body: `KMB Dharmavira berdiri sejak tahun 1986 yang diprakarsai oleh beberapa mahasiswa Universitas Padjadjaran yang merasakan perlunya suatu wadah menampung mahasiswa-mahasiswa beragama Buddha. Pada awalnya, KMB Dharmavira masih bernama “Keluarga Mahasiswa Buddhis” (KMB), namun pada 3 Juni 1988 ditambahkan kata “Dharmavira” di belakang kata KMB yang berarti “Pejuang Dhamma”. Oleh karena itu, tanggal 3 Juni ditetapkan sebagai tanggal lahir KMBD. `,
          img: "https://i.ibb.co/G7C07tV/stud37.png",
          ig: "@kmbdharmavira",
          yt: "",
          wa: "",
          tiktok: "",
          web: "https://kmbdharmavira.org/",
          email: "humas@kmbdharmavira.org",
          line: "huangjesslyn",
        },
        {
          id: 38,
          title: "KMH Brahmacari",
          body: `KMH Brahmacari merupakan perkumpulan bagi mahasiswa hindu di UNPAD dengan tujuan memberikan wadah bagi mahasiswa hindu di UNPAD untuk menjalin silaturahmi antar anggotanya. Terdapat istilah Brahmacari yang artinya adalah masa menuntut ilmu. Hal ini sangat menggambarkan KMH yang beranggotakan mahasiswa yang sedang menuntut ilmu. Adapun program kerja dari KMH Brahmacari adalah bonding serta melakukan kunjungan ke pura dalam rangka melakukan persembahyangan bersama.`,
          img: "https://i.ibb.co/vjdzfMm/stud38.png",
          ig: "@kmh.bramhacari",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "diva211201/adnyanjani",
        },
        {
          id: 39,
          title: "Keluarga Mahasiswa Katolik (KMK)",
          body: `Keluarga Mahasiswa Katolik (KMK) Universitas Padjadjaran merupakan wadah bagi para mahasiswa/I Katolik se-Unpad yang lahir pada 13 Maret 1983. Melalui KMK, para mahasiswa/I Katolik dapat berkumpul, saling berbagi, dan menjalankan kegiatan-kegiatan dengan tujuan kebersamaan, pelayanan, dan terutama untuk memuliakan Tuhan. KMK dapat dijadikan sebagai rumah kedua bagi teman-teman sesama perantauan sebagai satu keluarga KMK.`,
          img: "https://i.ibb.co/3Sp1pL0/stud39.png",
          ig: "@kmkunpad",
          yt: "",
          wa: "085156167126",
          tiktok: "",
          web: "",
          email: "",
          line: " @066lpcqp/terminus_est2002",
        },
        {
          id: 40,
          title: "Keluarga Mahasiswa Masjid Kampus (KMMK)",
          body: `Keluarga Mahasiswa Masjid Kampus (KMMK) Syamil Unpad merupakan Lembaga Dakwah Kampus yang berfungsi untuk mewadahi mahasiswa Muslim dalam agenda syiar Islam. Beberapa program kerja unggulan dari KMMK Syamil adalah Ahlan (Penerimaan Mahasiswa Baru Muslim), Soulmate dan PIC (Padjadjaran Islamic Conference). `,
          img: "https://i.ibb.co/mBgYGg8/stud40.png",
          ig: " @syamilunpad",
          yt: "",
          wa: "082267847171 (Nadhira)",
          tiktok: "",
          web: "",
          email: "",
          line: "@hze9208d/nadhiraa1",
        },
        {
          id: 41,
          title: "Kabim Unpad",
          body: `Kulawargi Mahasiswa Bidikmisi, KIP-K, dan Afirmasi Universitas Padjadjaran (Kabim Unpad) merupakan organisasi yang mewadahi seluruh mahasiswa/i penerima beasiswa Bidikmisi, KIP-K, dan Afirmasi Universitas Padjadjaran untuk saling berinteraksi dan berkoordinasi serta mendapatkan informasi seputar beasiswa tersebut maupun dunia perkuliahan. Kabinet Kabim Unpad tahun ini adalah Kabinet Nawasena yang mempunyai beberapa program unggulan seperti Improvement Skill, Kabim Expo, I-Box, Grow Up with Kabim, dan Career Talk. `,
          img: "https://i.ibb.co/Km3qb4t/stud41.png",
          ig: "@kabimunpad",
          yt: "",
          wa: "085889052589/0895357882987",
          tiktok: "",
          web: "",
          email: "",
          line: "@kabimunpad/aldian.ramadhan/anre.andiy",
        },
        {
          id: 42,
          title: "Kopma Unpad",
          body: `Koperasi Mahasiswa Universitas Padjadjaran atau dikenal dengan Kopma Unpad merupakan lembaga koperasi (badan usaha) mahasiswa yang berada dilingkup Universitas Padjadjaran. Kopma Unpad memiliki visi yaitu sebagai koperasi mahasiswa terdepan di Indonesia yang mandiri dan dikelola secara professional. Kenapa harus ikut Kopma Unpad? Satu-satuya UKM UNPAD yang bergerak di bidang usaha. UKM yang menekankan profesionalitas sekaligus kekeluargaan dalam menjalankan tugasnya. Meningkatkan soft skill dalam berorganisasi yang dapat diaplikasikan dalam kehidupan sehari-hari`,
          img: "https://i.ibb.co/r0HRtSB/stud42.png",
          ig: "@kopmaunpad",
          yt: "",
          wa: "085794622483 (Ulfah)/081313479020 (Deny)",
          tiktok: "",
          web: "kopmaunpad.com",
          email: "",
          line: "",
        },
        {
          id: 43,
          title: "Persekutuan Mahasiswa Kristen Unpad",
          body: `Persekutuan Mahasiswa Kristen Unpad, atau sering disebut sebagai PMKU, adalah sebuah komunitas kerohanian agama Kristen Protestan di Universitas Padjadjaran. Dalam perjalanannya, banyak kegiatan yang telah dan akan dijalani untuk membentuk seseorang yang siap terjun ke tengah dunia diantaranya : Paskah, Kebaktian Pengucapan Syukur, PMK United Service, A Day With Alumni, Natal, Mentoring, dan di tahun ini kami mengupayakan pengabdian masyarakat.`,
          img: "https://i.ibb.co/JdQdF8n/stud43.png",
          ig: "@pmkunpad",
          yt: "PMK UNPAD",
          wa: "087777727788/089521256772",
          tiktok: "",
          web: "",
          email: "",
          line: "steve_iman_1/kristinsng123",
        },
        {
          id: 44,
          title: "Radio Mahasiswa Unpad (RadioMU)",
          body: `Radio Mahasiswa Unpad (RadioMU) adalah komunitas radio yang berlandaskan pada konsep creative knowledge–kombinasi antara kemasan yang menghibur dan edukatif, yang dikelola sepenuhnya oleh mahasiswa Universitas Padjadjaran secara semi profesional. RadioMU berada di naungan BEM Kema Unpad Departemen Medkraf dan Hubin.`,
          img: "https://i.ibb.co/VCzFw5y/stud44.png",
          ig: "@radio_mu",
          yt: "",
          wa: "081221082525",
          tiktok: "radio.mu",
          web: "Twitter		: Radio_MU, Medium	: Radio Mahasiswa Unpad, Spotify		: Radio Mahasiswa Unpad",
          email: "",
          line: "destiny_a",
        },
        {
          id: 45,
          title: "Radio Unpad",
          body: `Radio Unpad merupakan sebuah radio komunitas yang dikelola para mahasiswa terbaik Universitas Padjadjaran dibawah Direktur Tata Kelola dan Komunikasi Publik Universitas Padjadjaran. Selain siaran on air, kegiatan yang dilaksanakan diantaranya adalah liputan di lapangan, menerbitkan artikel dan berita, serta turut berkontribusi dalam mengelola kegiatan-kegiatan penting di lingkungan Universitas Padjadjaran.`,
          img: "https://i.ibb.co/Xphmn4v/stud45.png",
          ig: " & Twitter: @radiounpad",
          yt: "",
          wa: "+6287822383834 (Galih)",
          tiktok: "@radiounpad",
          web: "radio.unpad.ac.id.",
          email: "",
          line: "@radiounpad (use @)",
        },
        {
          id: 46,
          title: "SHINE!",
          body: `SHINE! adalah organisasi sosial yang bergerak di bidang pendidikan. SHINE menyediakan bimbingan belajar gratis bagi siswa/i SMA/SMK Sederajat yang terkendala biaya untuk bimbingan persiapan masuk Perguruan Tinggi. SHINE! merupakan evolusi dari sebuah proyek yang sebelumnya bernama Taman Siswa Project Chapter Unpad atau disingkat TSP Unpad. Proyek ini hadir  sebagai bentuk respon dari keresahan mahasiswa terhadap kondisi pendidikan Kabupaten Sumedang`,
          img: "https://i.ibb.co/SNJxdK0/stud46.png",
          ig: "@shinewik_official",
          yt: "Shine! School of Wisdom, Insight & Knowledge",
          wa: "085161917533/081311445546",
          tiktok: "",
          web: "",
          email: "",
          line: "@fph1216o/arz_rezhmaa/fns3623",
        },
        {
          id: 47,
          title: "STUDENT ENERGY",
          body: `Student Energy adalah organisasi global yang dipimpin oleh anak muda, dalam tujuannya untuk mempercepat transisi energi berkelanjutan melalui berbagai inisiatif, termasuk Chapter berbasis universitas, Peta Sistem Energi Digital, dan konferensi energi di dunia yang dipimpin oleh mahasiswa. Kegiatan SE Chapter Unpad meliputi Company Visit, International Webinar, Project Easy Bike, SE Mini Bootcamp, dan masih banyak lagi.`,
          img: "https://i.ibb.co/nLYX5Y7/stud47.png",
          ig: "@studentenergy.unpad",
          yt: "",
          wa: "081292978675",
          tiktok: "",
          web: "",
          email: "unpad@studentenergy.org",
          line: "@qms4770v/hamura123 (Jody)",
        },
        {
          id: 48,
          title: "Warta Kema",
          body: `Warta Kema hadir sebagai Lembaga Pers Mahasiswa (LPM) di Universitas Padjadjaran (Unpad) yang berperan untuk meliput kegiatan mahasiswa Unpad, rektorat Unpad, isu kampus & mahasiswa, dan hal-hal yang berkaitan dengan mahasiswa. Dalam berperan sebagai pers mahasiswa, visi utama Warta Kema adalah untuk mewujudkan Lembaga Pers Mahasiswa yang terdepan dalam memberi kabar, berimbang dalam memberitakan, dan mencerdaskan sivitas akademika Universitas Padjadjaran juga khalayak ramai dengan konten yang diproduksi Warta Kema.`,
          img: "https://i.ibb.co/Bn3KcXG/stud48.png",
          ig: "wartakema",
          yt: "",
          wa: "+62856593554193 (Adit)",
          tiktok: "",
          web: "https://wartakema.com",
          email: "",
          line: "@199fioim",
        },
        {
          id: 49,
          title: "BAK Kema Unpad",
          body: `BAK Kema Unpad merupakan lembaga yang independen dalam mengaudit pengelolaan keuangan Kema Unpad. BAK Kema Unpad bertujuan untuk membentuk keuangan Kema Unpad yang akuntabel, profesional, dan transparan. BAK Kema Unpad berfungsi sebagai pemeriksa keuangan lembaga kemahasiswaan di lingkup Universitas Padjadjaran. Kedudukan BAK Kema Unpad adalah sebagai satu lembaga yang independen dalam memeriksa pengelolaan keuangan lembaga kemahasiswaan di Kema Unpad dan bertanggung jawab langsung kepada mahasiswa melalui Kongres Kema Unpad.`,
          img: "https://i.ibb.co/wRj9mfj/stud49.png",
          ig: "@bakkemaunpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "@qyk7457p/hisabilli(Husni Ibnu Sabilli)",
        },
        {
          id: 50,
          title: "PRAMA UNPAD",
          body: `Prama Unpad (Pemilihan Raya Mahasiswa Universitas Padjadjaran) merupakan salah satu lembaga kemahasiswaan di Universitas Padjadjaran untuk melakukan pemilihan Ketua dan Wakil Ketua BEM KEMA Unpad, Anggota BPM KEMA Unpad, dan MWA WM Unpad. Pelaksanaan Prama Unpad didasarkan pada Peraturan Mahasiswa Universitas Padjadjaran Nomor 1 Tahun 2020. Unsur penyelenggara Prama Unpad dibagi menjadi : <br/>1.Badan Penyelenggaran Prama (BP-Prama)<br/>2.Badan Pengawas Unpad (Bawas-Unpad)<br/>3.Dewan Kehormatan Penyelenggaraan Prama (DKPP)`,
          img: "https://i.ibb.co/YtwGP0r/stud50.png",
          ig: "@pramaunpad",
          yt: "",
          wa: "0877 - 7562 - 6413 (Danial)",
          tiktok: "",
          web: "",
          email: "",
          line: "citrafsf (Citra)",
        },
        {
          id: 51,
          title: "Koorda BEM PSDKU Unpad",
          body: `Koorda BEM PSDKU Unpad telah berdiri selama kurang lebih 6 tahun sejak tahun 2016. Saat ini, BEM Koorda PSDKU merupakan perpanjangan tangan dari BEM Kema Unpad. Visi dari BEM Kema Koorda pada periode saat ini adalah menjadikan Koorda BEM Kema Unpad sebagai wadah untuk melayani sekaligus pengembangan SDM bagi Kema PSDKU secara inovatif, aspiratif, dan solutif serta menjadi pionir dari pergerakan yang ada di PSDKU Pangandaran guna mewujudkan PSDKU Pangandaran yang berdikari.`,
          img: "https://i.ibb.co/0Jz4mgs/stud51.png",
          ig: "@koorda.bem.unpad",
          yt: "",
          wa: "+62 822-4020-4373(M. Waskita Julian)",
          tiktok: "",
          web: "",
          email: "",
          line: "@112ktmar",
        },
        {
          id: 52,
          title: "BEM KEMA FTIP UNPAD",
          body: `Fakultas Teknologi Industri Pertanian (FTIP UNPAD) diresmikan pada 13 September 2005. FTIP lahir dari peningkatan Jurusan Teknologi Pertanian (Teknotan) Fakultas Pertanian. FTIP Unpad pada awalnya memiliki 2 (dua) Program Studi yaitu Teknik Pertanian dan Teknologi Pangan, dan sejak tahun 2014 telah menambah satu Program Studi yaitu Teknologi Industri Pertanian.`,
          img: "https://i.ibb.co/FXVwx1R/stud52.png",
          ig: "@bemftipunpad/@ftipcare",
          yt: "",
          wa: "082116953331/089621383349",
          tiktok: "",
          web: "",
          email: "",
          line: "arifitrawan/talitawonka",
        },
        {
          id: 53,
          title: "BEM KEMA FPIK UNPAD",
          body: `Badan Eksekutif Mahasiswa Fakultas Perikanan dan Ilmu Kelautan atau akrab disebut BEM FPIK Unpad adalah salah satu lembaga kemahasiswaan yang memiliki fungsi eksekutif di tingkat fakultas. Dalam proses menyediakan layanan bagi Keluarga Mahasiswa FPIK dan menjalankan perannya, BEM FPIK Unpad memiliki tim kerja yang terdiri dari 4 bidang dan 13 departemen dan biro di bawahnya. Pada pelaksanaannya, BEM FPIK Unpad juga bekerjasama dengan lembaga internal seperti Unit Kegiatan Mahasiswa dan Himpunan Mahasiswa serta lembaga eksternal.`,
          img: "https://i.ibb.co/sKyDhzr/stud53.png",
          ig: "@bemfpikunpad",
          yt: "",
          wa: "08111920884 (Revinia Aisha)",
          tiktok: "",
          web: "",
          email: "",
          line: "@vgn8830k/revinia",
        },
        {
          id: 54,
          title: "BEM KEMA FEB UNPAD",
          body: `BEM Kema FEB Unpad merupakan Lembaga Kemahasiswaan tingkat Fakultas yang menaungi Fakultas Ekonomi dan Bisnis Universitas Padjadjaran, mewadahi berbagai aspek penting yang mewakili peran mahasiswa FEB Unpad sebagai bagian dari masyarakat. Tahun ini BEM Kema FEB Unpad, Kabinet Jejak Karya, memiliki visi “Terlahirnya Kema FEB Unpad yang hadir sebagai pilar asa perjuangan” yang melangkah dengan 4 misi besar untuk mewujudkan hal baik dan yang terbaik.`,
          img: "https://i.ibb.co/RvJsCsW/stud54.png",
          ig: "@bemkemafebunpad",
          yt: "",
          wa: "081219196221(Juan Manuel Aprilio)",
          tiktok: "",
          web: "",
          email: "",
          line: "@bemkemafebunpad/juanmaprilios",
        },
        {
          id: 55,
          title: "BEM GAMA FIB UNPAD",
          body: `Fakultas Ilmu Budaya (FIB) Unpad resmi dibuka pada 1 November 1958. Pembukaan ini didasarkan atas Surat Keputusan Yayasan Pembina Universitas Padjadjaran No. 6/FS/531 tertanggal 1 Oktober 1958 tentang Pembukaan Fakultas Sastra. Dua tahun kemudian, status Fakultas Ilmu Budaya (ketika itu Fakultas Sastra) memperoleh legalitas yang lebih kuat dengan dikeluarkannya Surat Keputusan Menteri PPK No. 66971/UU/60 tertanggal 12 Agustus 1960 yang menetapkan Fakultas Ilmu Budaya sebagai salah satu fakultas di lingkungan Unpad.`,
          img: "https://i.ibb.co/wQJvg2j/stud55.png",
          ig: "@bemfibunpad",
          yt: "",
          wa: "Zahrah (082247996567) Fadilla (082320252531)",
          tiktok: "",
          web: "",
          email: "bemgamafib.unpad@gmail.com",
          line: "",
        },
        {
          id: 56,
          title: "BEM KEMA FISIP UNPAD",
          body: `Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) didirikan tanggal 12 Agustus 1960. Berbagai program studi yang diselenggarakan oleh FISIP Unpad bertujuan untuk menghasilkan tenaga ahli yang unggul dalam penguasaan bidang ilmu sosial dan politik. Untuk itu, mata kuliah yang diberikan juga memberikan pemahaman kepada mahasiswa mengenai konsep-konsep dasar ilmu sosial dan politik serta mata kuliah kekhususan program studi yang bertujuan memberikan kemampuan profesional mahasiswa di bidang studi yang dipilihnya.`,
          img: "https://i.ibb.co/RQHHs9G/stud56.png",
          ig: "@bemfisipunpad",
          yt: "",
          wa: "085161398815 (Petra)",
          tiktok: "",
          web: "",
          email: "",
          line: "@251lgcrk",
        },
        {
          id: 57,
          title: "BEM KEMA FAPET UNPAD",
          body: `Fakultas Peternakan Universitas Padjadjaran yang dirintis oleh Prof. Dr. Didi Atmadilaga  berdiri Tahun 1963 berdasarkan SK Menteri PTIP No.86/63 Tanggal 27 Juli 1963 dan diresmikan pada Tanggal 1 September 1963.  Fakultas Peternakan menjadi salah satu perintis yang menempati kampus Universitas Padjadjaran di kawasan Jatinangor. Lulusan tersebar di berbagai instansi dan bidang usaha, baik sektor pemerintahan, swasta, wirausaha, agribisnis, perbankan, pendidikan, pusat penelitian dan pengembangan, dan sebagainya`,
          img: "https://i.ibb.co/mXJFhf6/stud57.png",
          ig: "@bemfapetunpad",
          yt: "",
          wa: "082219003725 (Amelia Nuralfiyani)",
          tiktok: "",
          web: "",
          email: "",
          line: "@llk3794u/amelianuraa",
        },
        {
          id: 58,
          title: "BEM KEMA FKEP UNPAD",
          body: `Fakultas Keperawatan Unpad merupakan salah satu Fakultas Keperawatan tertua kedua di Indonesia. FKep Unpad dituntut untuk menghasilkan SDM yang berkualitas tinggi untuk menciptakan kesehatan masyarakat yang holistik. Lokasi kampus FKep unpad berada di Jatinangor dan PSDKU Pangandaran. FKep Unpad tidak hanya berfokus pada kegiatan Akademik namun berfokus juga pada kegiatan Non-Akademik. Dengan adanya LK-UKMF seperti BEM, BPM, PNC, ROHIS, PMKK, dan PSM serta Club Olahraga dan Seni diharapkan mampu meningkatkan kualitas SDM di FKep Unpad. `,
          img: "https://i.ibb.co/SBxdbhP/stud58.png",
          ig: "@bemfkepunpad / @bemfkepunpadpnd",
          yt: "",
          wa: "Muhammad Zaky 087718616522",
          tiktok: "",
          web: "",
          email: "",
          line: "@vkm9350d/zakyyr",
        },
        {
          id: 59,
          title: "BEM KEMA FIKOM UNPAD",
          body: `Fakultas Ilmu Komunikasi (Fikom) Unpad yang lahir pada 18 September 1960 merupakan Fakultas Ilmu Komunikasi pertama di Indonesia.  Selama lima puluh tahun, Fikom Unpad telah membuktikan dirinya sebagai penyelenggara pendidikan dan penelitian di bidang  ilmu komunikasi. Rentetan penghargaan berhasil diraih fakultas ini, dan pengakuan yang terakhir didapatkan yaitu penghargaan sebagai “The Best Universities School of Communications” dari Majalah MIX Marketing`,
          img: "https://i.ibb.co/Z2NX2zj/stud59.png",
          ig: "Utama @bemfikomunpad / Advokasi @fikomhi / Informasi Karir @fci_unpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "bit.ly/WABEMFikomUnpad",
          line: "",
        },
        {
          id: 60,
          title: "BEM KEMA FAPSI UNPAD",
          body: `Fakultas Psikologi Universitas Padjadjaran diresmikan pada tanggal 2 September 1961. Fapsi Unpad merupakan fakultas psikologi pertama di Indonesia yang langsung berdiri sendiri dan tergolong dalam rumpun saintek karena berfokus pada penelitian ilmiah. Dalam Fapsi Unpad terdapat 12 kelompok kegiatan dan 5 kelompok keagamaan, organisasi seperti BEM dan BPM, dan juga sebelas kepanitiaan lainnya untuk mahasiswa Fapsi bisa mendalami minat individunya masing-masing. Fapsi juga memiliki budaya tersendiri yang unik, yaitu ramah dan mengedepankan unsur kekeluargaan.`,
          img: "https://i.ibb.co/WsPmNYN/stud60.png",
          ig: "bemfapsiunpad",
          yt: "",
          wa: "+62 81310584056",
          tiktok: "",
          web: "",
          email: "",
          line: "@aq7800q/lucasrobert",
        },
        {
          id: 61,
          title: "BEM KEMA FMIPA UNPAD",
          body: `Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) Unpad diresmikan pada tanggal 17 November 1959. Pada mulanya FMIPA berdiri dengan 4 jurusan, Matematika, Fisika, Kimia, dan Biologi. Kemudian didirikan 3 jurusan berikutnya yaitu Geologi, Geografi, dan Farmasi. Pada tahun 1964 jurusan Geografi diintegrasikan ke Universitas Indonesia, disusul dengan berdirinya Jurusan Statistika. Pada tahun 2007 Prodi Geologi dan Farmasi menjadi fakultas, dan hingga saat ini FMIPA memiliki 17 program studi dari jenjang Diploma hingga Doktoral  `,
          img: "https://i.ibb.co/XCjsvJn/stud61.png",
          ig: "@pmkunpad",
          yt: "PMK UNPAD",
          wa: "087777727788 / 089521256772",
          tiktok: "",
          web: "",
          email: "",
          line: "steve_iman_1/kristinsng123",
        },
        {
          id: 62,
          title: "BEM KEMA FAPERTA UNPAD",
          body: `BEM KMFP 2022 mengambil nama Arah Baru sebagai nama kabinetnya. Arah Baru merupakan perwujudan BEM KMFP untuk siap menjadi nahkoda dalam menghadapi kondisi krisis dan dipenuhi ketidakpastian. BEM KMFP akan menjadi garda terdepan dalam melayani kebutuhan, mengembangkan potensi, minat dan bakat Warga KMFP, serta konsisten membantu menghadapi permasalahan dan mengawal pergerakan yang mengedepankan intelektualitas. BEM KMFP dalam Fakultas Pertanian mewadahi 3 Jurusan, 6 Himpunan, 6 Perhimpunan dan 2 Lembaga Keagamaan di Lingkungan Kembahasiswaan KMFP.`,
          img: "https://i.ibb.co/txd7Q4D/stud62.png",
          ig: "@bemkmfpunpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "(LinkedIn) BEM KMFP Universitas Padjadjaran",
          email: "depkominfobemkmfpunpad@gmail.com",
          line: "@bemkmfpunpad",
        },
        {
          id: 63,
          title: "BEM KEMA FARMASI UNPAD",
          body: `Fakultas Farmasi merupakan salah satu fakultas rumpun kesehatan di Universitas Padjadjaran yang memiliki segudang prestasi di lingkup nasional, maupun internasional. Terdapat beberapa Lembaga Kemahasiswaan di Keluarga Mahasiswa Farmasi Unpad (Kemafar Unpad), seperti Majelis Tetap Kongres, BPM Kemafar, dan BEM Kemafar; Badan Semi Otonom, yaitu Pharmacy Muslim Family; dan beberapa Komunitas Kegiatan Mahasiswa yang bergerak di bidang seni dan olahraga yang mewadahi kebutuhan mahasiswa serta diharapkan dapat mengembangkan setiap potensinya sehingga Kemafar dapat bereksplorasi sejauh mungkin.`,
          img: "https://i.ibb.co/932cqby/stud63.png",
          ig: "@bemkemafar_unpad",
          yt: "",
          wa: "082126651098",
          tiktok: "",
          web: "",
          email: "",
          line: "@kemafarunpad/shafiragaluh",
        },
        {
          id: 64,
          title: "BEM KEMA FH UNPAD",
          body: `Badan Eksekutif Mahasiswa Fakultas Hukum Universitas Padjadjaran atau BEM FH Unpad merupakan organisasi mahasiswa internal kampus yang merupakan lembaga eksekutif di tingkat Fakultas yang melalui kebijakan-kebijakannya bertujuan untuk melakukan koordinasi dengan Unit Kegiatan Mahasiswa dalam melaksanakan ketentuan Konstitusi KMFH Unpad dan Garis-Garis Besar Haluan Kerja serta bertugas menyikapi politik luar atas nama Keluarga Mahasiswa Fakultas Hukum Unpad. Adapun dalam melaksanakan program-programnya, BEM FH Unpad memiliki sembilan bidang yang membawahkan 18 Departemen dan Biro.`,
          img: "https://i.ibb.co/yBpXbgV/stud64.png",
          ig: "bemfhunpad",
          yt: "",
          wa: "081288756312 / 87888749547",
          tiktok: "",
          web: "",
          email: "",
          line: "@keluargahukumunpad/ syahlaaputri/ Aqila512",
        },
        {
          id: 65,
          title: "BEM KEMA FK UNPAD",
          body: `Fakultas Kedokteran merupakan salah satu fakultas yang pertama kali didirikan di Universitas Padjadjaran dengan 2 falsafah utama, yakni kemaslahatan bagi masyarakat dan kebersamaan dalam kesejawatan. Fakultas Kedokteran Universitas Padjadjaran (FKUP) memiliki tujuan untuk menghasilkan tenaga kesehatan yang mampu mengembangkan diri sendiri dan beradaptasi dengan kemajuan zaman. Selain bidang akademik, FKUP juga menghadirkan UKMF sebagai sarana pengembangan kemampuan mahasiswa di bidang lain seperti olahraga, kesenian, bahkan pengabdian masyarakat guna menghasilkan lulusan dokter yang berkualitas.`,
          img: "https://i.ibb.co/Jy9WKcW/stud65.png",
          ig: "@bemhimakemafkunpad",
          yt: "",
          wa: "081321311700",
          tiktok: "",
          web: "",
          email: "",
          line: "@bemkemafkunpad/nisyaaa911",
        },
        {
          id: 66,
          title: "BEM KEMA FKG UNPAD",
          body: `Fakultas Kedokteran Gigi (FKG) UNPAD berdiri pada tanggal 1 September 1959 yang sebelumnya sempat tergabung dengan fakultas kedokteran. Fakultas Kedokteran Gigi Unpad menjadi Fakultas Kedokteran Gigi pertama yang terpisah dari Fakultas Kedokteran. FKG Unpad memiliki 11 program pendidikan kedokteran gigi yang terdiri dari jenjang sarjana dan profesi kedokteran gigi. Proses pembelajaran di FKG Unpad menggunakan metode yang berfokus pada mahasiswa (student centered learning) dengan kurikulum berbasis kompetensi yang mengacu pada Standard Kompetensi Dokter Gigi Indonesia. `,
          img: "https://i.ibb.co/njCLKNj/stud66.png",
          ig: "@bemfkgunpad",
          yt: "",
          wa: "081287627022",
          tiktok: "",
          web: "",
          email: "",
          line: "@ogv7969o/ revabelles",
        },
        {
          id: 67,
          title: "BPM KEMA UNPAD",
          body: `Badan Perwakilan Mahasiswa Keluarga Mahasiswa Universitas Padjadjaran (BPM Kema Unpad) merupakan salah satu Badan Kelengkapan Organisasi Utama (BKOU) dalam lingkup Kema Unpad yang berperan sebagai lembaga legislatif. BPM Kema Unpad mempunyai 4 fungsi utama, yakni Legislasi (membuat atau mengamandemen peraturan), Aspirasi dan Advokasi (menyerap aspirasi dari Kema Unpad dan mengadvokasikannya ke pihak berwenang), Pengawasan (mengawasi kinerja BEM Kema Unpad, MWA WM Unpad, dan Prama Unpad), dan Penganggaran (menyeleksi ajuan program kerja BEM Kema Unpad). `,
          img: "https://i.ibb.co/wJg2T09/stud67.png",
          ig: "@bpmkemaunpad",
          yt: "",
          wa: "085159839946",
          tiktok: "",
          web: "",
          email: "",
          line: "@bpmkemaunpad/ postmanaris",
        },
        {
          id: 68,
          title: "BEM KM FTG UNPAD",
          body: `HMG Unpad didirikan pada tanggal 16 November 1960 di Bandung dan dengan berubahnya status jurusan teknik geologi menjadi Fakultas Teknik Geologi pada tanggal 12 Desember 2007, maka HMG Unpad menjadi KM “HMG” FTG Unpad dan ditetapkan pada tanggal 27 Maret 2010.`,
          img: "https://i.ibb.co/DwPrPw3/stud68.png",
          ig: "hmgunpad",
          yt: "BEM KM FTG UNPAD",
          wa: "",
          tiktok: "",
          fb: "HMG UNPAD",
          web: "www.ftgeologi.unpad.ac.id",
          email: "bemhmg.ftgunpad@gmail.com",
          line: "@bhh0147w",
        },
        {
          id: 69,
          title: "BEM KEMA UNPAD",
          body: `BEM Kema Unpad adalah lembaga pemerintahan dalam kampus yang menjadi wadah bagi pengabdian, pergerakan, pelayanan, dan kemahasiswaan di tingkat universitas. Bersama 12 departemen, 4 biro, 100+ program kerja, dan 340 mahasiswa sebagai pengurus, menyandang organisasi kemahasiswaan terbesar di lingkup Unpad. BEM Kema Unpad memiliki visi memaksimalkan keberagaman potensi, minat bakat Kema Unpad untuk melahirkan perubahan bagi Jawa Barat dan Indonesia. Garis Depan adalah nama kabinet yang diusung dan menjadi doa untuk membawa Unpad semakin terdepan.`,
          img: "https://i.ibb.co/0GkBCRv/stud69.png",
          ig: "@bem.unpad",
          yt: "",
          wa: "Virdian Aurellio Hartono Ketua BEM Kema Unpad 2022 081383439722",
          tiktok: "",
          web: "",
          email: "",
          line: "@kemaunpad",
        },
        {
          id: 70,
          title: "PAGUYUBAN MAHASISWA UNPAD ASAL PURWAKARTA (WARTA)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 71,
          title: "SOLIDARITAS MAHASISWA BATAK (Somba Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 72,
          title: "MAHASISWA MALUKU UNPAD (Salawuku)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 73,
          title: "RAKAN ANEUK NANGGROE UNPAD (RANUP)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 74,
          title: "PAGUYUBAN UNPAD BATAM (PUB)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 75,
          title: "PAGUYUBAN UNPAD SUMEDANG [Padjadjaran Insun Medal (PRIME )]",
          body: `Padjadjaran Insun Medal (PRIME) merupakan paguyuban mahasiswa Universitas Padjadjaran asal Kabupaten Sumedang yang terbentuk atas kesadaran mahasiswa untuk menciptakan suatu tempat berkreasi, bersilaturahmi, dan berkolaborasi sesama mahasiswa Universitas Padjadjaran asal Kabupaten Sumedang. Paguyuban ini dibentuk dengan tujuan untuk menciptakan inovasi-inovasi yang berguna dan bermanfaat untuk mahasiswa, universitas, dan Kabupaten Sumedang.`,
          img: "https://i.ibb.co/BKmpL22/LOGO-PRIME.png",
          ig: "@primeunpad",
          yt: "",
          wa: "089697294154 (Ridwan Maulyno), 087843106280 (Insaan M. Setiana), 0895361214214 (Ayka Putri)",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 76,
          title:
            "PAGUYUBAN KELUARGA MAHASISWA KOTA TASIKMALAYA UNIVERSITAS PADJADJARAN (PKMT UNPAD)",
          body: `PKMT Unpad adalah suatu wadah bagi mahasiswa yang berkuliah di Universitas Padjadjaran dan berasal dari Kota dan Kabupaten Tasikmalaya atau yang pernah bersekolah di Kota Atau Kabupaten Tasikmalaya untuk berkumpul dan bersosialisasi dan mengembangkan diri. PKMT Unpad didirikan di Jatinangor pada 26 Oktober 2006. Sadar akan peran, fungsi, dan kewajibannya sebagai generasi muda bangsa, PKMT Unpad  bertekad untuk belajar, berkarya, dan berjuang dengan dilandasi oleh rasa pengabdian dan tanggung jawab kepada Tuhan, bangsa, dan almamater.`,
          img: "https://i.ibb.co/8sCKhL2/Logo-PKMT-UNPAD-FIX.png",
          ig: "@pkmt_unpad",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "salsabilazhr.a (Salsabila)",
        },
        {
          id: 77,
          title: "PAGUYUBAN KELUARGA MAHASISWA TASIKMALAYA (PKMT Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 78,
          title: "PAGUYUBAN MAHASISWA BANTEN UNPAD (PAMATEN)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 79,
          title: "PAGUYUBAN MAHASISWA GARUT INTAN UNPAD (GAMAKU UNPAD)",
          body: `Pamasagi adalah paguyuban kekaryaan mahasiswa Universitas Padjadjaran asal Garut yang independen, serta bersifat kekeluargaan dan gotong royong. Pamasagi berorientasi kepada peningkatan integritas, dengan mengusung dan melestarikan nilai-nilai budaya dalam kegiatan yang dapat mengharumkan Garut. Motto Pamasagi ialah “Berkarya dan Mengabdi Untuk Garut”.`,
          img: "https://i.ibb.co/CzBW6qm/Logo-Pamasagi.jpg",
          ig: "@pamasagi",
          yt: "",
          wa: "",
          tiktok: "",
          web: "@pamasagi (twitter), https://www.linkedin.com/company/pamasagi/",
          email: "keluargapamasagi@gmail.com",
          line: "@948arbql / bagusafhr782 / panjiapriatna",
        },
        {
          id: 80,
          title: "JAWA TIMUR, DIY, JAWA TENGAH (PADJADJAVA UNPAD)",
          body: `Apa itu Padjadjava? <br/> Padjadjava berasal dari kata Padjadjaran yang berarti Tanah Sunda yang menjadi tanah di mana kita berdiri dan Java yang berarti Suku Jawa yang menjadi ciri khas dari paguyuban ini. Dengan demikian, Padjadjava menggunakan logo yang menggambarkan perpaduan antara Padjadjaran dan Javanese. Padjadjava mengandung arti untuk menyatukan, mengumpulkan, dan menghimpun mahasiswa Universitas Padjadjaran dari Suku Jawa yang tinggal di Tanah Sunda Padjadjaran. Sedangkan, Padjadjava (Padjadjaran Javanese) sendiri adalah paguyuban Orang Jawa di Universitas Padjadjaran yang didirikan pada tahun 2009 dan baru aktif pada tahun 2011.`,
          img: "https://i.ibb.co/4YmTTCb/Logo-padjadjava.png",
          ig: "@padjadjavaunpad",
          yt: "",
          wa: "",
          tiktok: "@padjadjavaunpad",
          web: "",
          email: "padjadjavaunpad@gmail.com",
          line: "@421pfktv / @narazsyahbelza / iniintanajaa",
        },
        {
          id: 81,
          title: "MAHASISWA UNPAD ASAL SUKABUMI (MUSI)",
          body: `MUSI merupakan kepanjangan dari Mahasiswa Unpad Asal Sukabumi. MUSI ini didirikan untuk menghimpun temen-temen mahasiswa Unpad asal Sukabumi. Selain sebagai keluarga di Jatinangor, MUSI sendiri memiliki tujuan dalam pengabdian kepada daerah Sukabumi khususnya di bidang edukasi. Jangan lupa bergabung ya temen-temen.`,
          img: "https://i.ibb.co/zmmVczL/Logo-MUSI.png",
          ig: "@musisukabumi",
          yt: "",
          wa: "089508599901 (Bagas Hilmanda), 085722075705 (Mutiara)",
          tiktok: "",
          web: "",
          email: "",
          line: "@sin3216o / bagashilmanda.p / timuti567",
        },
        {
          id: 82,
          title: "KULAWARGI MAHASISWA CIANJUR UNPAD (KWACI Unpad)",
          body: `KWACI UNPAD merupakan singkatan dari Kulawargi Mahasiswa Cianjur Universitas Padjadjaran yang didirikan pada tanggal 16 Mei 2010 di Jatinangor. KWACI ini dibentuk dengan tujuan untuk mempererat tali silaturrahmi antara mahasiswa dan alumni UNPAD yang berasal dari Cianjur. Dengan memberikan segala kemampuan dan potensi yang dimiliki sehingga dapat diberikan kontribusi bagi masyarakat Cianjur baik dalam hal pendidikan ataupun non pendidikan.`,
          img: "https://i.ibb.co/0JGNfw0/Kwaci-png.png",
          ig: "@kwaciunpad",
          yt: "",
          wa: "082217010949",
          tiktok: "",
          web: "",
          email: "kwaci2022.unpad@gmail.com",
          line: "@all8375g / syahlana15",
        },
        {
          id: 83,
          title: "KOMUNITAS RIAU PADJADJARAN (KORAN)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 84,
          title: "KOMUNITAS MAHASISWA PADJADJARAN ASAL SUBANG (KOMPAS)",
          body: `Kompas adalah sebuah paguyuban mahasiswa Universitas Padjajaran yang didirikan dengan backgroud asal dari subang yang memiliki tujuan sebagai rumah bagi mahasiswa Unpad asal Subang untuk mengekpresikan tenang perkuliahan ataupun di luar perkulihan, Kompas diharapkan menjadi tempat yang nyaman dan menjadi tempat tumbuh dan berkembangnya mahasiswa yang bisa menjadi lebih baikl lagi`,
          img: "https://i.ibb.co/1rj9xdh/Logo-Kompas.png",
          ig: "Subangunpad",
          yt: "",
          wa: "087744407853 (Reza Erlangga)",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 85,
          title: "ANAK BEKASI UNPAD (KOASI)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 86,
          title: "KELUARGA MAHASISWA PANGANDARAN (KMP)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 87,
          title: "KELUARGA MAHASISWA NIAS UNPAD (KMN Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 88,
          title: "KELUARGA MAHASISWA KOTA BANJAR UNPAD (KMKB Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 89,
          title: "KELUARGA MAHASISWA CIAMIS PADJADJARAN (KMC Padjadjaran)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 90,
          title: "KOMUNITAS MAHASISWA BOGOR UNPAD (KMBU)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 91,
          title: "KELUARGA MAHASISWA SULAWESI UNPAD (KEMASS)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 92,
          title: "KELUARGA MAHASISWA KABUPATEN BANDUNG RAYA (KAKABAN)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 93,
          title:
            "IKATAN MAHASISWA UNPAD BUKITTINGGI DAN SEKITARNYA (IMUBS Sumbar)",
          body: `IMUBS Sumbar ( Ikatan Mahasiswa UNPAD Bukittinggi & Sekitar Sumatera Barat ) merupakan paguyuban yang menghimpun dan mengayomi mahasiswa UNPAD yang berasal dari Kota Bukittinggi & Sekitarnya. Melalui IMUBS Sumbar diharapkan mahasiswa yang berasal dari daerah Bukittinggi & Sekitar menemukan rumah untuk mengembangkan & menyalurkan potensi diri mahasiswa. IMUBS memiliki salah satu proker unggulan yaitu UNPAD goes to school (UGTS) yang merupakan kegiatan sosialisasi kepada siswa - siswa daerah Bukittinggi & Sekitar tentang Universitas Padjadjaran`,
          img: "https://i.ibb.co/tMF24MC/IMUBS.png",
          ig: "@imubssumbar / ameliahardina",
          yt: "",
          wa: "",
          tiktok: "",
          web: "https:/www.linkedin.com/in/imubs-sumbar-451374235",
          email: "hardinaameliaa18@gmail.com",
          line: "_hrdnml",
        },
        {
          id: 94,
          title: "IKATAN KELUARGA MAHASISWA MAJALENGKA UNPAD (IKMM Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 95,
          title: "IKATAN KELUARGA MAHASISWA PAPUA (IKMAPA Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 96,
          title: "HIMPUNAN MAHASISWA JAMBI UNPAD (HIMAJA)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 97,
          title: "HIMPUNAN MAHASISWA BUMI RAFFLESIA (HIMAHIRA)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 98,
          title:
            "HIMPUNAN KELUARGA MAHASISWA INDRAMAYU-SUMEDANG (HIKMI Sumedang)",
          body: `Himpunan Keluarga Mahasiswa Indramayu- Sumedang (HIKMI SUMEDANG) merupakan Organisasi Daerah atau Paguyuban yang menaungi mahasiswa asal Indramayu yang Berkuliah di Sumedang. Oleh Karena itu, terdapat beberapa kampus di daerah Sumedang  yang dibawah naungan HIKMI yaitu UNPAD, ITB Jatinangor, UPI Sumedang, IKOPIN, IPDN, dan masih banyak yang lainnya.<br/><br/>Sejarahnya, Pada tanggal 15 April 1995 dibentuk organisasi dengan nama IKA DHARMA AYU ( IDA) komisariat Jatinangor sebagai tempat berkumpul mahasiswa Indramayu yang berkuliah di Sumedang, kemudian berganti nama menjadi Himpunan Keluarga Mahasiswa Indramayu ( HIKMI ) pada tanggal 9 Juni 2002`,
          img: "https://i.ibb.co/3c8VzPs/LOGO-HIKMI-FIX.png",
          ig: "@hikmi_sumedang",
          yt: "",
          wa: "089685102956 (Kang Taufiq)",
          tiktok: "",
          web: "",
          email: "hikmisumedang22@gmail.com",
          line: "@pdv5449r",
        },
        {
          id: 99,
          title: "CIREBON (GAWAREBON)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 100,
          title: "KELUARGA MAHASISWA KOTA BANDUNG (Gamaban Unpad)",
          body: ``,
          img: "",
          ig: "",
          yt: "",
          wa: "",
          tiktok: "",
          web: "",
          email: "",
          line: "",
        },
        {
          id: 101,
          title: "PAGUYUBAN MAHASISWA LAMPUNG DI UNPAD (Commel)",
          body: `Community of Muli Mekhanai Lampung Unpad atau Commel Unpad merupakan Paguyuban Mahasiswa Unpad yang berasal dari Provinsi Lampung.`,
          img: "https://i.ibb.co/5GPy2YP/Logo-Commel-Unpad.png",
          ig: "@commelunpad",
          yt: "",
          wa: "082289009754 (Hanif Alaudi)",
          tiktok: "",
          web: "",
          email: "",
          line: "alaudi.hanif",
        },
        {
          id: 102,
          title: "BARUDAK MAHASISWA KAB. BANDUNG (Bangbara Unpad)",
          body: `Paguyuban Barudak Mahasiswa Kabupaten Bandung Barat Universitas Padjadjaran atau yang lebih dikenal dengan Bangbara Unpad ini berdiri pada tanggal 18 Februari 2018. Paguyuban Bangbara Unpad berdiri sebagai bentuk pengabdian dan wadah konsolidasi bagi setiap mahasiswa Unpad yang berasal dari Kabupaten Bandung Barat. Selain itu, Bangbara Unpad berfungsi sebagai representatif dan katalisator akademik daerah Kabupaten Bandung Barat melalui media sosial kreatif, menjalin komunikasi dan kolaborasi dengan elemen-elemen terkait, serta mencetak calon pemimpin bangsa.`,
          img: "https://i.ibb.co/zJzFnHF/IMG-4821.png",
          ig: "@bangbaraunpad",
          yt: "",
          wa: "+62 822-9502-0313 (Ade Gini)/ +62 877-8761-3689 (Salma Fajrina)",
          tiktok: "@bangbaraunpad",
          web: "@bangbaraunpad (linkedin, spotify)",
          email: "bangbaraunpad@gmail.com",
          line: "https://line.me/ti/g/1ByGcE06ND",
        },
        {
          id: 103,
          title:
            "ASOSIASI MAHASISWA PADJADJARAN SRIWIJAYA (SUMSEL-PALEMBANG) (AMPERA)",
          body: `Asosiasi Mahasiswa Padjadjaran Sriwijaya atau AMPERA Unpad, merupakan paguyuban Mahasiswa Universitas Padjadjaran yang berasal dari Sumatera Selatan. AMPERA Unpad mulai aktif sejak 2015 hingga sekarang. Berbagai macam program kerja telah dilakukan, dalam rangka mempererat rasa kekeluargaan diantara anggota nya. AMPERA turut berusaha untuk memperkenalkan ciri khas dan kebudayaan dari Sumatera Selatan kepada teman-teman Unpad.`,
          img: "https://i.ibb.co/2nCGdMk/Logo-Ampera-copy-page-0001.jpg",
          ig: "https://www.instagram.com/ampera_unpad/",
          yt: "",
          wa: "08127126600 (Mutiara Tsabitah)",
          tiktok: "",
          web: "",
          email: "ampera.padjadjaran@gmail.com",
          line: "mutiaratsabitah",
        },
      ],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) =>
        post.body.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    getData() {
      axios({
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_BASE_URL}/v1/resource/studfest`,
      })
        .then((res) => {
          // this.title = res.title;
          // this.body = res.description;
          // this.img = res.image;
          // posts.concat(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  mounted() {
    this.getData();
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
.scrollbar {
  width: 100%;
  height: 2070px;
  overflow-y: auto;
  overflow-x: hidden;
}
#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fdd689;
}

#style-1::-webkit-scrollbar {
  width: 14px;
  background-color: #fdd689;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
.search-bar {
  background-color: #fdd689;
  border: 3px solid #28244d;
  border-radius: 30px;
}
.search-bar::placeholder {
  font-size: 20px;
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

/* div.dropdown-wrapper {
  max-width: 350px;
  position: relative;
  margin: 0 auto;
}

div.dropdown-wrapper > div.selected-item {
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400px;
}

div.dropdown-popover {
  position: absolute;
  border: 2px solid lightgray;
  background-color: #fff;
  max-width: 100%;
  padding: 10px;
  visibility: hidden;
  transition: all 0 5s linear;
  max-height: 0px;
  overflow: hidden;
}

div.dropdown-popover > input {
  width: 90%;
  height: 30px;
  border: 2px solid lightgray;
  font-size: 16px;
  padding-left: 5px;
}

div.dropdown-popover > div.option {
  width: 100%;
}

div.dropdown-popover > div.option > ul {
  list-style: none;
  text-align: left;
  padding-left: 8px;
  max-height: 180px;
  overflow-y: scroll;
  overflow-x: hidden;
}

div.dropdown-popover > div.option > ul > li {
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 16px;
}

div.dropdown-popover > div.option > ul > li:hover {
  background: #70878a;
  color: #fff;
  font-weight: bold;
} */
</style>
