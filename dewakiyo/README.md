# 🎵 Dewakiyo - Spotify Romantic Playlist Landing Page

Tema: **Sadewa & Kiyo** dengan desain aesthetic Dewakiyo

## ✨ Fitur Utama

### 🎨 Desain & Visual
- **Glassmorphism Effect**: Kartu dengan efek kaca modern dan backdrop blur
- **Aesthetic Design**: Tema Sadewa & Kiyo dengan gradien warna romantic
- **Animated Background**: Blur gradient yang bergerak dinamis
- **Floating Animation**: Elemen-elemen yang mengapung dengan smooth
- **Music Visualizer**: Visualizer audio sederhana di hero section
- **Responsive Layout**: Desain yang sempurna di semua ukuran device

### 🎚️ Interaktif & Fungsionalitas
- **Horizontal Scrollable Carousel**: Geser playlist secara horizontal
- **Swipe Support**: Gesture swipe pada mobile untuk navigasi
- **Keyboard Navigation**: Arrow keys untuk menggeser playlist
- **Click to Play**: Klik kartu atau tombol untuk buka di Spotify
- **Smooth Transitions**: Transisi yang halus di semua interaksi
- **Scroll Indicators**: Dot indicator yang menunjukkan posisi scroll

### 📱 Mobile Friendly
- Fully responsive design
- Touch-friendly buttons dan controls
- Optimized untuk semua screen sizes
- Swipe gesture recognition

## 📂 Struktur File

```
dewakiyo/
├── index.html       # Main HTML file
├── styles.css       # Modern CSS dengan animations
├── script.js        # Interactive JavaScript
└── README.md        # Documentation
```

## 🚀 Cara Menggunakan

1. **Buka file** `index.html` di browser
2. **Scroll atau swipe** untuk melihat semua playlist
3. **Klik tombol** "Putar di Spotify" untuk membuka playlist
4. **Gunakan arrow keys** untuk navigasi keyboard
5. **Mobile users** dapat swipe untuk menggeser playlist

## 🎯 Fitur Teknis

### HTML5
- Semantic markup
- Accessibility attributes
- Meta tags untuk responsive design

### CSS3
- CSS Grid & Flexbox
- CSS Animations & Transitions
- Backdrop-filter & Blur effects
- CSS Variables untuk theming
- Media Queries untuk responsive

### JavaScript
- Vanilla JavaScript (no dependencies)
- Touch event handling
- Intersection Observer API
- Smooth scroll behavior
- Event delegation
- Keyboard navigation

## 🎨 Color Palette

- **Primary**: #1DB954 (Spotify Green)
- **Secondary**: #191414 (Dark Background)
- **Accent**: #FFB6C1 (Light Pink)
- **Light**: #FFDAB9 (Peach)
- **Text**: #FFFFFF (White)
- **Muted**: #B3B3B3 (Gray)

## 🔧 Kustomisasi

### Menambah Playlist Baru

Tambahkan elemen baru di `index.html`:

```html
<div class="playlist-card" data-spotify="https://open.spotify.com/playlist/YOUR_ID">
    <div class="card-cover">
        <img src="https://your-image-url.jpg" alt="Playlist Name">
        <div class="cover-overlay">
            <button class="play-btn" title="Putar di Spotify">
                <span>▶</span>
            </button>
        </div>
    </div>
    <div class="card-content">
        <h3>Playlist Name</h3>
        <p class="playlist-desc">Deskripsi playlist</p>
        <button class="spotify-btn">Putar di Spotify</button>
    </div>
</div>
```

### Mengubah Warna

Edit CSS variables di `styles.css`:

```css
:root {
    --primary-color: #1DB954;
    --secondary-color: #191414;
    --accent-color: #FFB6C1;
    /* ... */
}
```

### Mengubah Font

Tambahkan Google Fonts atau gunakan system fonts di `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 📊 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 🎯 Performance

- **Lazy Loading**: Images load on demand
- **Smooth 60fps Animations**: Optimized animations
- **Minimal JavaScript**: Vanilla JS, no heavy libraries
- **Efficient CSS**: Using CSS for animations instead of JS
- **Mobile Optimized**: Touch-optimized interactions

## 🔗 Spotify Integration

Setiap playlist terhubung ke Spotify melalui:
- Playlist URLs: `https://open.spotify.com/playlist/[PLAYLIST_ID]`
- Opens in new tab dengan `target="_blank"`
- Support untuk Spotify app deep links

## 📝 Lisensi

Free to use dan modify untuk personal atau commercial projects.

## �� Credits

- **Theme**: Sadewa & Kiyo
- **Design**: Aesthetic Dewakiyo
- **Music**: Powered by Spotify
- **Images**: Unsplash

## 💡 Tips

1. Gunakan Spotify playlist IDs untuk mengganti links
2. Customize warna sesuai brand Anda
3. Tambahkan lebih banyak playlist untuk koleksi lengkap
4. Test di mobile untuk memastikan swipe bekerja
5. Update images dengan cover yang sesuai tema

## 🐛 Troubleshooting

### Swipe tidak bekerja di mobile?
- Pastikan touch events terdaftar dengan baik
- Check console untuk errors
- Test di berbagai browser mobile

### Smooth scroll tidak bekerja?
- Browser yang lama mungkin perlu polyfill
- Fallback ke regular scroll sudah included

### Spotify links tidak terbuka?
- Verify Spotify playlist IDs benar
- Check window.open() permissions di browser
- Pastikan URLs dimulai dengan `https://open.spotify.com/playlist/`

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Check browser console untuk errors
2. Verify HTML structure
3. Test di browser lain
4. Review CSS media queries untuk responsive issues

---

**Made with 💖 for Sadewa & Kiyo** ✨🎵
