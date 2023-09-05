// import Image from 'next/image'
// import Header from'../components/header'

// export default function Home() {
//   return (
//    <div>
//    <Headers></Headers>
//    </div>
//   )
// }

import Image from 'next/image';
import gapura from'../public/kalurahan.jpg';

export default function Fill(){
    return(
        <div
            style={{ 
                display:'grid',
                gridGap: '8px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))',
         }}
        >
          <div style={{ position: 'relative', height: '750px' }}>
            <Image
             alt="Gapura"
             src={gapura}
             fill
             quality={100}
             sizes='100vw'
             style={{ 
                objectFit:'fill',
                opacity:0.5,
              }}
              />
             {/* Kotak Pencarian */}
        <div
          style={{
            position: 'absolute',
            top: '40%', // Atur tinggi kotak pencarian
            left: '50%', // Pusatkan di tengah horizontal
            transform: 'translate(-50%, -50%)', // Pusatkan elemen di tengah
            display: 'flex',
            flexDirection: 'column', // Susun elemen secara vertikal
            alignItems: 'center', // Pusatkan elemen secara horizontal
          }}
        >
          {/* Kotak Pencarian */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Cari Seputar Pringombo..."
          style={{
          padding: '10px',
          width: '1000px', // Ubah lebar input sesuai kebutuhan
          borderRadius: '8px',
      }}
    />
    <button
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        marginLeft: '-30px', // Sesuaikan jarak antara ikon dan input
        cursor: 'pointer',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="21" y1="21" x2="15.8" y2="15.8" />
      </svg>
    </button>
          </div>
        </div>
       {/* Navigasi Bar */}
    <div
      style={{
      position: 'absolute',
      top: '50%', // Tempatkan di atas kotak pencarian
      left: '50%', // Pusatkan di tengah horizontal
      transform: 'translate(-50%, 0)', // Pusatkan elemen secara horizontal
      // backgroundColor: 'rgba(255, 255, 255, 0.7)', // Warna latar belakang dengan transparansi
      padding: '5px', // Ruang di sekitar navigasi bar
      borderRadius: '10px', // Tambahkan radius sudut
      display: 'flex',
      justifyContent: 'center', // Pusatkan item secara horizontal
      alignItems: 'center', // Pusatkan item secara vertikal
      
  }}
    >
    {/* Navigasi bar Anda dapat ditambahkan di sini */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: '100px' }}>
      <li>
      <a href="/">
        <img 
         src="profile.png" 
         alt="Home" 
         width="60" // Atur lebar ikon
         height="60" // Atur tinggi ikon/
         />Profile 
         </a>
    </li>
    <li>
      <a href="/berita">
        <img 
         src="newspaper.png" 
         alt="News" 
         width="60" // Atur lebar ikon
         height="60" // Atur tinggi ikon/
        /> Berita
      </a>
    </li>
    <li>
      <a href="/layanan">
        <img 
         src="customer-service.png" 
         alt="Layanan" 
         width="60" // Atur lebar ikon
         height="60" // Atur tinggi ikon/
         /> Layanan
      </a>
    </li>
    <li>
      <a href="/galeri">
        <img 
         src="galery.png" 
         alt="Galeri" 
         width="60" // Atur lebar ikon
         height="60" // Atur tinggi ikon/
         /> Galeri
      </a>
    </li>
    <li>
      <a href="/contact">
        <img 
         src="info.png" 
         alt="contact"
         width="60" // Atur lebar ikon
         height="60" // Atur tinggi ikon/ 
         /> Kontak
      </a>
    </li>
    <li>
      <a href="/Lainlain">
        <img 
         src="more.png" 
         alt="LainLain" 
         width="60" // Atur lebar ikon
         height="60" // Atur tinggi ikon/
         /> Lain Lain
      </a>
    </li>
    {/* Tambahkan ikon untuk item navigasi lainnya  */}
  </ul>
</div>
</div>
</div>

      
              
    );
}