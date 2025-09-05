// Data program studi berdasarkan fakultas
const programStudi = {
    'FSM': [
        { value: 'informatika', text: 'Informatika' },
        { value: 'matematika', text: 'Matematika' },
        { value: 'fisika', text: 'Fisika' },
        { value: 'kimia', text: 'Kimia' },
        { value: 'biologi', text: 'Biologi' }
    ],
    'FT': [
        { value: 'sipil', text: 'Teknik Sipil' },
        { value: 'arsitektur', text: 'Arsitektur' },
        { value: 'elektro', text: 'Teknik Elektro' },
        { value: 'mesin', text: 'Teknik Mesin' },
        { value: 'industri', text: 'Teknik Industri' }
    ],
    'FE': [
        { value: 'manajemen', text: 'Manajemen' },
        { value: 'akuntansi', text: 'Akuntansi' },
        { value: 'ekonomi_pembangunan', text: 'Ekonomi Pembangunan' },
        { value: 'ekonomi_islam', text: 'Ekonomi Islam' }
    ]
};

class DropdownController {
    constructor() {
        this.fakultasSelect = document.getElementById('fakultas');
        this.prodiSelect = document.getElementById('prodi');
        this.form = document.getElementById('form_mahasiswa');
        this.resultDiv = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.resetProdiDropdown();
    }
    
    setupEventListeners() {
        // Event listener untuk perubahan fakultas
        this.fakultasSelect.addEventListener('change', (e) => {
            this.handleFakultasChange(e.target.value);
        });
        
        // Event listener untuk submit form
        this.form.addEventListener('submit', (e) => {
            this.handleFormSubmit(e);
        });
    }
    
    handleFakultasChange(selectedFakultas) {
        this.resetProdiDropdown();
        
        if (selectedFakultas === '') {
            this.prodiSelect.disabled = true;
        } else {
            this.prodiSelect.disabled = false;
            this.populateProdiOptions(selectedFakultas);
        }
        
        this.hideResult();
    }
    
    resetProdiDropdown() {
        this.prodiSelect.innerHTML = '<option value="">---Pilih Program Studi---</option>';
    }
    
    populateProdiOptions(fakultasCode) {
        const prodiOptions = programStudi[fakultasCode];
        
        if (prodiOptions) {
            prodiOptions.forEach(prodi => {
                const option = document.createElement('option');
                option.value = prodi.value;
                option.textContent = prodi.text;
                this.prodiSelect.appendChild(option);
            });
        }
    }
    
    handleFormSubmit(e) {
        e.preventDefault();
        
        const fakultasValue = this.fakultasSelect.value;
        const fakultasText = this.fakultasSelect.options[this.fakultasSelect.selectedIndex].text;
        const prodiValue = this.prodiSelect.value;
        const prodiText = this.prodiSelect.options[this.prodiSelect.selectedIndex].text;
        
        if (fakultasValue && prodiValue) {
            this.showResult(fakultasText, fakultasValue, prodiText, prodiValue);
        } else {
            alert('Mohon pilih fakultas dan program studi terlebih dahulu!');
        }
    }
    
    showResult(fakultasText, fakultasValue, prodiText, prodiValue) {
        this.resultDiv.innerHTML = `
            <h3>Data yang dipilih:</h3>
            <p><strong>Fakultas:</strong> ${fakultasText} (${fakultasValue})</p>
            <p><strong>Program Studi:</strong> ${prodiText} (${prodiValue})</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString('id-ID')}</p>
        `;
        this.resultDiv.style.display = 'block';
    }
    
    hideResult() {
        this.resultDiv.style.display = 'none';
    }
    
    resetForm() {
        this.fakultasSelect.value = '';
        this.resetProdiDropdown();
        this.prodiSelect.disabled = true;
        this.hideResult();
    }
}

// Inisialisasi setelah DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    const dropdownController = new DropdownController();
    
    // Buat reset button tersedia secara global
    window.resetForm = () => dropdownController.resetForm();
});
