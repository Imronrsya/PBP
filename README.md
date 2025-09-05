# Dropdown Form Project

Proyek ini berisi implementasi form dengan dropdown yang saling terhubung, di mana pilihan pada dropdown "Program Studi" akan berubah berdasarkan pilihan pada dropdown "Fakultas".

## File yang Tersedia

### 1. `dropdown_form.html` - Versi Basic
File HTML standalone dengan CSS dan JavaScript dalam satu file. Cocok untuk pembelajaran atau prototype cepat.

**Fitur:**
- Dropdown fakultas dan program studi yang saling terhubung
- Validasi form sederhana
- Tampilan hasil yang dipilih
- Styling CSS yang bersih

### 2. `index.html` + `script.js` + `styles.css` - Versi Modular
Versi yang dipisah menjadi beberapa file untuk organisasi kode yang lebih baik.

**Fitur:**
- Struktur kode yang lebih terorganisir
- Class-based JavaScript dengan OOP approach
- CSS terpisah dengan desain yang lebih menarik
- Button reset tambahan
- Responsive design

### 3. `advanced_form.html` - Versi Advanced
Versi paling lengkap dengan menggunakan Bootstrap 5 dan fitur-fitur advanced.

**Fitur:**
- UI/UX yang profesional dengan Bootstrap 5
- Loading animation saat memuat program studi
- Toast notifications untuk feedback
- Form validation yang lebih baik
- Input tambahan (nama)
- Informasi deskripsi program studi
- Animasi dan transisi yang smooth
- Card layout yang informatif

## Data Fakultas dan Program Studi

### Fakultas Sains dan Matematika (FSM)
- Informatika
- Matematika
- Fisika
- Kimia
- Biologi

### Fakultas Teknik (FT)
- Teknik Sipil
- Arsitektur
- Teknik Elektro
- Teknik Mesin
- Teknik Industri

### Fakultas Ekonomi (FE)
- Manajemen
- Akuntansi
- Ekonomi Pembangunan
- Ekonomi Islam

## Cara Menggunakan

### Versi Basic (`dropdown_form.html`)
1. Buka file `dropdown_form.html` di browser
2. Pilih fakultas dari dropdown pertama
3. Pilih program studi dari dropdown kedua (akan aktif otomatis)
4. Klik tombol Submit untuk melihat hasil

### Versi Modular (`index.html`)
1. Pastikan semua file (`index.html`, `script.js`, `styles.css`) berada dalam folder yang sama
2. Buka file `index.html` di browser
3. Gunakan form seperti versi basic
4. Gunakan tombol Reset untuk mengosongkan form

### Versi Advanced (`advanced_form.html`)
1. Buka file `advanced_form.html` di browser (memerlukan koneksi internet untuk Bootstrap dan Font Awesome)
2. Pilih fakultas dan tunggu loading selesai
3. Pilih program studi
4. Isi nama (opsional)
5. Submit untuk melihat hasil lengkap

## Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **CSS3**: Styling dan animasi
- **JavaScript (ES6+)**: Logika interaksi
- **Bootstrap 5**: Framework UI (versi advanced)
- **Font Awesome**: Icon set (versi advanced)

## Customization

### Menambah Fakultas Baru
Edit bagian data dalam JavaScript:

```javascript
const programStudi = {
    'FSM': [...],
    'FT': [...],
    'FE': [...],
    'FAKULTAS_BARU': [
        { value: 'prodi1', text: 'Program Studi 1' },
        { value: 'prodi2', text: 'Program Studi 2' }
    ]
};
```

Dan tambahkan option di HTML:
```html
<option value="FAKULTAS_BARU">Nama Fakultas Baru</option>
```

### Mengubah Styling
- **Versi Basic**: Edit bagian `<style>` dalam file HTML
- **Versi Modular**: Edit file `styles.css`
- **Versi Advanced**: Edit bagian `<style>` atau gunakan custom CSS

## Browser Support

Semua versi mendukung browser modern:
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Catatan Pengembangan

1. **Performance**: Versi advanced menggunakan simulasi delay untuk menunjukkan loading state
2. **Accessibility**: Form menggunakan proper labels dan ARIA attributes
3. **Validation**: Client-side validation dengan HTML5 dan JavaScript
4. **Responsive**: Semua versi responsive untuk mobile dan desktop

## Lisensi

Proyek ini bebas digunakan untuk keperluan edukasi dan pembelajaran.
