export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  role: string;
  contributions: string[];
  technologies: string[];
  results: string[];
  githubUrls?: string[];
  websiteUrl?: string;
  prototypeUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
  id: "chatbot-binamarga",
  title: "Landing Page Chatbot Bina Marga",
  description: "Redesign UI/UX landing page Chatbot Bina Marga sebagai media informasi dan pengenalan layanan chatbot.",
  image: "/images/project/bina marga.png",
  overview: "Landing Page Chatbot Bina Marga merupakan halaman informasi yang dirancang ulang selama magang di PT Aptikma Teknologi Indonesia. Pada proyek ini, saya berfokus pada redesign tampilan landing page agar lebih informatif, responsif, dan mudah dipahami oleh pengguna.",
  role: "UI/UX Designer",
  contributions: [
    "Melakukan redesign tampilan landing page Chatbot Bina Marga",
    "Menyusun struktur konten agar informasi layanan lebih mudah dipahami",
    "Mendesain tampilan halaman yang lebih rapi, modern, dan responsif",
    "Menyesuaikan desain dengan kebutuhan informasi layanan Bina Marga",
    "Membuat prototype landing page sebagai gambaran alur dan tampilan halaman",
  ],
  technologies: ["Figma", "UI/UX Design", "Prototype", "Responsive Design"],
  results: [
    "Prototype landing page berhasil dibuat sebagai gambaran tampilan halaman",
    "Desain landing page menjadi lebih rapi, informatif, dan mudah dipahami",
    "Struktur informasi layanan chatbot ditampilkan dengan lebih jelas",
    "Tampilan landing page dirancang responsif untuk berbagai ukuran layar",
  ],
    prototypeUrl: "https://www.figma.com/proto/n3WglAb57eU76IOGM93tbE/1?node-id=1-333&viewport=721%2C675%2C0.17&t=ZzgUNY7ma6NO7gMx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A333&page-id=0%3A1",
    featured: true,
    date: "",
  },
  {
    id: "ginio-website",
    title: "Ginio Digital Karya",
    description: "Pengembangan website landing page dan customer website untuk PT Ginio Digital Karya menggunakan WordPress custom dan Laravel.",
    image: "/images/project/ginio.png",
    overview: "Website company profile PT. Ginio Digital Karya yang berisi informasi perusahaan, layanan, portofolio, dan identitas digital perusahaan.",
    role: "Web Developer",
    contributions: [
      "Desain UI/UX halaman landing page Ginio",
      "Pengembangan website dengan WordPress custom",
      "Merancang antarmuka yang sesuai brand identity",
      "Memastikan tampilan website responsif dan sesuai dengan desain yang telah dibuat.",

    ],
    technologies: ["WordPress", "Figma", "UI/UX Design"],
    results: [
      "Website company profile berhasil dikembangkan sesuai brand identity perusahaan",
      "Tampilan website responsif dan dapat diakses dengan baik di berbagai perangkat",
      "Informasi perusahaan, layanan, dan portofolio ditampilkan secara lebih terstruktur",
    ],
    websiteUrl: "https://ginio.id/",
    prototypeUrl: "",
    featured: true,
    date: "",
  },
  {
  id: "infoev-website",
  title: "InfoEV Website",
  description: "Pengembangan fitur compare dan filter kendaraan listrik pada website InfoEV yang sudah berjalan.",
  image: "/images/project/infoev.png",
  overview: "InfoEV merupakan website informasi kendaraan listrik yang menyediakan data kendaraan, berita, dan informasi terkait electric vehicle. Pada proyek ini, saya berkontribusi dalam pengembangan website yang sudah ada, khususnya pada fitur compare dan filter kendaraan listrik selama periode magang.",
  role: "Web Developer Intern",
  contributions: [
    "Mengembangkan fitur compare kendaraan listrik",
    "Mengembangkan fitur filter untuk memudahkan pencarian kendaraan",
    "Menyesuaikan tampilan fitur menggunakan Tailwind CSS",
    "Mengintegrasikan fitur dengan data kendaraan yang tersedia",
    "Melakukan perbaikan bug dan penyesuaian tampilan pada fitur yang dikembangkan",
  ],
  technologies: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
  results: [
    "Fitur compare berhasil dikembangkan untuk membandingkan data kendaraan listrik",
    "Fitur filter membantu pengguna mencari kendaraan berdasarkan kriteria tertentu",
    "Tampilan fitur dibuat responsif dan menyesuaikan desain website yang sudah ada",
    "Fitur yang dikembangkan telah digunakan pada website InfoEV selama periode magang",
  ],
    websiteUrl: "https://infoev.id/compare",
    prototypeUrl: "",
    featured: true,
    date: "",
  },
  {
  id: "onic-esport-admin",
  title: "ONIC E-Sport Admin Dashboard",
  description: "Desain UI/UX halaman admin ONIC E-Sport untuk mendukung pengelolaan data tim dan kebutuhan administrasi.",
  image: "/images/project/oenic.png",
  overview: "ONIC E-Sport Admin Dashboard merupakan desain antarmuka halaman admin yang dibuat selama magang di PT Aptikma Teknologi Indonesia. Pada proyek ini, saya berfokus pada perancangan UI/UX dan pembuatan prototype sebagai gambaran tampilan serta alur penggunaan sistem.",
  role: "UI/UX Designer",
  contributions: [
    "Mendesain antarmuka halaman admin ONIC E-Sport",
    "Menyusun struktur halaman agar mudah digunakan oleh admin",
    "Membuat tampilan dashboard yang rapi, modern, dan mudah dipahami",
    "Menyesuaikan desain dengan kebutuhan pengelolaan data tim E-Sport",
    "Membuat prototype untuk menggambarkan alur penggunaan sistem",
  ],
  technologies: ["Figma", "UI/UX Design", "Prototype", "Dashboard Design"],
  results: [
    "Prototype halaman admin berhasil dibuat sebagai acuan pengembangan sistem",
    "Desain antarmuka admin menjadi lebih terstruktur dan mudah dipahami",
    "Alur penggunaan sistem dirancang agar memudahkan proses pengelolaan data",
    "Desain dapat digunakan sebagai referensi oleh tim pengembang website",
  ],
    prototypeUrl: "https://www.figma.com/proto/Iq1MNk57NEjQwgai7Nhe64/onic-esport?node-id=2-3819&p=f&viewport=293%2C442%2C0.13&t=syLecU0HAJcwK5Q3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A3819&page-id=0%3A1",
    featured: true,
    date: "",
  },
  {
  id: "cardiman-karya",
  title: "Cardiman Karya Website",
  description: "Website company profile untuk Cardiman Karya sebagai client PT. Ginio Digital Karya, dengan fokus pada desain UI/UX dan implementasi ke WordPress custom.",
  image: "/images/project/cardiman.png",
  overview: "Cardiman Karya merupakan proyek website company profile untuk client PT. Ginio Digital Karya. Pada proyek ini, saya berperan dalam membuat desain UI/UX serta mengimplementasikan desain tersebut ke dalam website menggunakan WordPress custom.",
  role: "UI/UX Designer & WordPress Developer",
  contributions: [
    "Mendesain tampilan UI/UX website company profile Cardiman Karya",
    "Menyusun struktur halaman agar informasi perusahaan mudah dipahami",
    "Mengimplementasikan desain ke dalam WordPress custom",
    "Menyesuaikan tampilan website dengan identitas dan kebutuhan client",
    "Memastikan tampilan website responsif pada perangkat desktop dan mobile",
  ],
  technologies: ["WordPress", "Figma", "UI/UX Design", "Responsive Design"],
  results: [
    "Website company profile berhasil dibuat sesuai kebutuhan client",
    "Desain website terlihat lebih profesional, rapi, dan informatif",
    "Implementasi WordPress custom sesuai dengan desain UI/UX yang telah dibuat",
    "Tampilan website responsif dan dapat diakses dengan baik di berbagai perangkat",
  ],
    websiteUrl: "https://cardiman.id/",
    featured: false,
    date: "",
  },
  {
      id: "klinik-dr-oe-ping",
  title: "Klinik dr. Oe Ping Website",
  description: "Website company profile untuk Klinik dr. Oe Ping sebagai client PT. Ginio Digital Karya, dengan fokus pada desain UI/UX dan implementasi ke WordPress custom.",
  image: "/images/project/klinik dr oeping.png",
  overview: "Klinik dr. Oe Ping merupakan proyek website company profile untuk client PT. Ginio Digital Karya. Pada proyek ini, saya berperan dalam membuat desain UI/UX serta mengimplementasikan desain tersebut ke dalam website menggunakan WordPress custom.",
  role: "UI/UX Designer & WordPress Developer",
  contributions: [
    "Mendesain tampilan UI/UX website Klinik dr. Oe Ping",
    "Menyusun struktur halaman agar informasi layanan klinik mudah dipahami",
    "Mengimplementasikan desain ke dalam WordPress custom",
    "Menyesuaikan tampilan website dengan identitas dan kebutuhan client",
    "Memastikan tampilan website responsif pada perangkat desktop dan mobile",
  ],
  technologies: ["WordPress", "Figma", "UI/UX Design", "Responsive Design"],
  results: [
    "Website Klinik dr. Oe Ping berhasil dibuat sesuai kebutuhan client",
    "Informasi layanan klinik ditampilkan secara lebih rapi dan terstruktur",
    "Implementasi WordPress custom sesuai dengan desain UI/UX yang telah dibuat",
    "Tampilan website responsif dan mudah diakses melalui berbagai perangkat",
  ],
    websiteUrl: "https://klinikdoeping.id/",
    featured: true,
    date: "",
  },
  {id: "sipami-uiux",
  title: "SIPAMI Mobile App",
  description: "Desain UI/UX aplikasi mobile SIPAMI untuk pelayanan surat akademik pada proyek kampus.",
  image: "/images/project/sipami.png",
  overview: "SIPAMI merupakan singkatan dari Sistem Informasi Pelayanan Surat Akademik. Proyek ini dibuat sebagai project kampus untuk membantu proses pengajuan dan pelayanan surat akademik secara lebih mudah melalui aplikasi mobile. Pada proyek ini, saya berperan dalam membuat desain UI/UX dan prototype aplikasi menggunakan Figma.",
  role: "UI/UX Designer",
  contributions: [
    "Mendesain tampilan aplikasi mobile SIPAMI",
    "Membuat desain halaman login dan halaman utama aplikasi",
    "Menyusun alur penggunaan aplikasi untuk pengajuan surat akademik",
    "Mendesain antarmuka yang sederhana dan mudah dipahami oleh pengguna",
    "Membuat prototype aplikasi sebagai gambaran alur dan tampilan sistem",
  ],
  technologies: ["Figma", "UI/UX Design", "Prototype", "Mobile App Design"],
  results: [
    "Prototype aplikasi mobile SIPAMI berhasil dibuat menggunakan Figma",
    "Desain aplikasi dibuat sederhana, rapi, dan mudah digunakan",
    "Alur pengajuan surat akademik divisualisasikan melalui prototype",
    "Desain dapat digunakan sebagai acuan untuk pengembangan aplikasi mobile",
  ],
    prototypeUrl: "https://www.figma.com/proto/Iq1MNk57NEjQwgai7Nhe64/onic-esport?node-id=2-3819&p=f&viewport=293%2C442%2C0.13&t=syLecU0HAJcwK5Q3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A3819&page-id=0%3A1",
    featured: true,
    date: "",
  },
  {
  id: "tripnesia-pbl",
  title: "Tripnesia Travel Website",
  description: "Website travel untuk project kampus berbasis team, dengan fokus pada pengelolaan destinasi, paket wisata, dan transaksi pemesanan.",
  image: "/images/project/tripnesia.png",
  overview: "Tripnesia merupakan project kampus berbasis Project Based Learning (PBL) yang dikembangkan bersama tim. Website ini dirancang untuk menyediakan informasi destinasi wisata, paket perjalanan, serta proses pemesanan paket wisata secara online. Pada proyek ini, saya berfokus pada bagian transaksi.",
  role: "Backend Developer - Transaction Feature",
  contributions: [
    "Mengembangkan fitur transaksi pemesanan paket wisata",
    "Membuat alur pemesanan mulai dari pemilihan paket hingga proses checkout",
    "Mengelola data transaksi agar dapat tersimpan dan ditampilkan pada dashboard",
    "Menyesuaikan status transaksi sesuai kebutuhan sistem",
    "Berkolaborasi dengan tim dalam integrasi fitur transaksi dengan fitur lain",
  ],
  technologies: ["Laravel", "PHP", "MySQL", "Git", "Team Project"],
  results: [
    "Fitur transaksi berhasil dibuat untuk mendukung proses pemesanan paket wisata",
    "Data transaksi dapat dikelola dan ditampilkan pada sistem",
    "Alur pemesanan menjadi lebih terstruktur dari sisi pengguna dan admin",
    "Project berhasil dikembangkan bersama tim sebagai tugas PBL kampus",
  ],
    githubUrls: ["https://github.com/neiruhitori/travel-agent-backend.git", "https://github.com/bimocahyo7/travel-agent-frontend.git"],
    websiteUrl: "",
    prototypeUrl: "",
    featured: true,
    date: "",
},
{
  id: "furniture-sales-analysis",
  title: "Furniture Sales Data Analystics",
  description: "Mini project Data Analyst untuk menganalisis data penjualan furniture menggunakan Excel, SQL, Python, dan Looker Studio.",
  image: "/images/project/furniture.png",
  overview: "Furniture Sales Data Analysis merupakan mini project dari Bootcamp Data Analyst Karirnex. Proyek ini menggunakan data dummy sebanyak 10.000 transaksi penjualan furniture untuk menganalisis performa penjualan, status order, revenue per kota, kategori produk, serta membuat dashboard interaktif menggunakan Looker Studio.",
  role: "Data Analyst",
  contributions: [
    "Melakukan data cleaning untuk mengecek missing values dan duplicate rows",
    "Mengubah tipe data tanggal agar dapat digunakan untuk analisis berbasis waktu",
    "Melakukan analisis revenue berdasarkan kota, kategori produk, dan status order",
    "Membuat insight bisnis berdasarkan hasil analisis menggunakan SQL dan Python",
    "Membuat visualisasi data menggunakan Matplotlib dan Looker Studio",
    "Menyusun dashboard interaktif berisi KPI, grafik revenue, trend order, dan tabel top produk",
  ],
  technologies: ["Excel", "SQL", "Python", "Pandas", "Matplotlib", "Looker Studio"],
  results: [
    "Dataset berhasil dibersihkan dan siap digunakan untuk analisis",
    "Jakarta Utara menjadi kota dengan revenue tertinggi pada transaksi completed",
    "Ditemukan bahwa ongkos kirim tinggi dapat memengaruhi risiko pembatalan pesanan",
    "Dashboard interaktif berhasil dibuat untuk menampilkan Total Revenue, Total Order, Avg Order Value, dan Completion Rate",
    "Insight bisnis disusun untuk membantu evaluasi strategi penjualan, promo, dan pengiriman",
  ],
  prototypeUrl: "https://datastudio.google.com/reporting/fb27edd5-6f11-43bb-9b7c-3188ddfc81e1 ",
  featured: true,
  date: "",
},
{
  id: "confidential-system-analysis-qa",
  title: "System Analysis & Manual QA",
  description: "Project internal bersifat confidential dengan fokus pada analisis kebutuhan sistem, dokumentasi fitur, dan pengujian manual.",
  image: "/images/project/system.png",
  overview: "Project ini merupakan pengembangan sistem internal yang bersifat confidential. Pada proyek ini, saya berperan dalam mendukung proses analisis kebutuhan sistem, penyusunan dokumentasi fitur, serta pengujian manual untuk memastikan fitur berjalan sesuai kebutuhan pengguna dan aturan bisnis yang telah ditentukan.",
  role: "System Analyst & Manual QA",
  contributions: [
    "Menganalisis kebutuhan sistem berdasarkan proses bisnis dan kebutuhan pengguna",
    "Menyusun dokumentasi fitur seperti user story, functional requirement, dan alur kerja sistem",
    "Membuat test case dan test scenario untuk kebutuhan pengujian manual",
    "Melakukan pengujian fitur berdasarkan skenario yang telah disusun",
    "Mencatat hasil pengujian, bug, dan evaluasi untuk disampaikan kepada tim pengembang",
    "Berkolaborasi dengan tim developer dan stakeholder dalam proses penyempurnaan fitur"
  ],
  technologies: [
    "System Analysis",
    "Manual Testing",
    "Test Case",
    "Test Scenario",
    "Documentation",
    "Trello",
    "Figma"
  ],
  results: [
    "Dokumentasi kebutuhan sistem berhasil disusun sebagai acuan pengembangan fitur",
    "Test case dan test scenario berhasil dibuat untuk mendukung proses pengujian manual",
    "Bug dan hasil pengujian terdokumentasi dengan lebih terstruktur",
    "Proses komunikasi antara tim analyst, QA, dan developer menjadi lebih terarah",
    "Kualitas fitur terbantu melalui proses validasi berdasarkan kebutuhan sistem"
  ],
  featured: true,
  date: "",
}
];

export function sortByDate(arr: Project[]): Project[] {
  return [...arr].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
