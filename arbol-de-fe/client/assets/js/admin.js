/**
 * Panel Administrativo - Lógica principal
 */

function adminApp() {
  return {
    // Estado reactivo
    currentView: 'dashboard',
    currentUser: null,
    showModal: false,
    editingPersona: null,
    searchQuery: '',
    
    // Datos
    stats: {
      totalPersonas: 0,
      bautizados: 0,
      interesados: 0,
      estudiosActivos: 0,
    },
    
    personas: [],
    filteredPersonas: [],
    
    // Gráficos
    distritosChart: null,
    crecimientoChart: null,
    
    // Títulos de vistas
    viewTitles: {
      dashboard: 'Dashboard',
      personas: 'Gestión de Personas',
      feligresia: 'Feligresía',
      abc: 'Lista ABC',
      literatura: 'Literatura',
      estudios: 'Estudios Bíblicos',
      reportes: 'Reportes',
    },
    
    // Formulario
    formData: {
      nombre: '',
      apellido: '',
      telefono: '',
      direccion: '',
      distrito: '',
      bautizado: false,
      fecha_bautismo: '',
    },

    async init() {
      // Simular usuario logueado (en producción sería real)
      this.currentUser = { username: 'admin', rol: 'Administrador' };
      
      // Cargar datos iniciales
      await this.loadDashboardData();
      await this.loadPersonas();
      
      // Inicializar gráficos
      this.$nextTick(() => {
        this.initCharts();
      });
    },

    async loadDashboardData() {
      try {
        const [personasRes, bautizadosRes] = await Promise.all([
          fetch('/api/personas/count'),
          fetch('/api/personas/count?bautizado=true'),
        ]);
        
        const personasData = await personasRes.json();
        const bautizadosData = await bautizadosRes.json();
        
        if (personasData.success) {
          this.stats.totalPersonas = personasData.data.total;
        }
        
        if (bautizadosData.success) {
          this.stats.bautizados = bautizadosData.data.total;
        }
        
        this.stats.interesados = this.stats.totalPersonas - this.stats.bautizados;
        this.stats.estudiosActivos = Math.floor(this.stats.interesados / 2); // Simulado
        
        // Actualizar gráficos si existen
        this.updateCharts();
        
      } catch (error) {
        console.error('Error cargando dashboard:', error);
      }
    },

    async loadPersonas() {
      try {
        const response = await fetch('/api/personas');
        const data = await response.json();
        
        if (data.success) {
          this.personas = data.data;
          this.filteredPersonas = data.data;
        }
      } catch (error) {
        console.error('Error cargando personas:', error);
      }
    },

    filterPersonas() {
      if (!this.searchQuery.trim()) {
        this.filteredPersonas = this.personas;
        return;
      }
      
      const query = this.searchQuery.toLowerCase();
      this.filteredPersonas = this.personas.filter(p => 
        p.nombre.toLowerCase().includes(query) ||
        p.apellido.toLowerCase().includes(query) ||
        (p.distrito && p.distrito.toLowerCase().includes(query))
      );
    },

    initCharts() {
      // Gráfico de distritos
      const distritosCtx = document.getElementById('distritosChart');
      if (distritosCtx) {
        this.distritosChart = new Chart(distritosCtx, {
          type: 'doughnut',
          data: {
            labels: ['Centro', 'Norte', 'Sur', 'Este', 'Oeste'],
            datasets: [{
              data: [30, 25, 20, 15, 10],
              backgroundColor: [
                '#2E7D32',
                '#66BB6A',
                '#81C784',
                '#A5D6A7',
                '#C8E6C9',
              ],
            }],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: '#ffffff' },
              },
            },
          },
        });
      }
      
      // Gráfico de crecimiento
      const crecimientoCtx = document.getElementById('crecimientoChart');
      if (crecimientoCtx) {
        this.crecimientoChart = new Chart(crecimientoCtx, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
              label: 'Bautismos',
              data: [5, 8, 12, 10, 15, 18],
              borderColor: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              tension: 0.4,
              fill: true,
            }],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: '#b0b0b0' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
              },
              x: {
                ticks: { color: '#b0b0b0' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
              },
            },
            plugins: {
              legend: {
                labels: { color: '#ffffff' },
              },
            },
          },
        });
      }
    },

    updateCharts() {
      // Actualizar datos de gráficos con datos reales
      if (this.distritosChart) {
        // Aquí iría la lógica para actualizar con datos reales
        this.distritosChart.update();
      }
      
      if (this.crecimientoChart) {
        this.crecimientoChart.update();
      }
    },

    openModal(type) {
      if (type === 'persona') {
        this.editingPersona = null;
        this.formData = {
          nombre: '',
          apellido: '',
          telefono: '',
          direccion: '',
          distrito: '',
          bautizado: false,
          fecha_bautismo: '',
        };
        this.showModal = true;
      }
    },

    closeModal() {
      this.showModal = false;
      this.editingPersona = null;
    },

    editPersona(persona) {
      this.editingPersona = persona;
      this.formData = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        telefono: persona.telefono || '',
        direccion: persona.direccion || '',
        distrito: persona.distrito || '',
        bautizado: persona.bautizado,
        fecha_bautismo: persona.fecha_bautismo ? persona.fecha_bautismo.split('T')[0] : '',
      };
      this.showModal = true;
    },

    async savePersona() {
      try {
        const url = this.editingPersona 
          ? `/api/personas/${this.editingPersona.id}`
          : '/api/personas';
        
        const method = this.editingPersona ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.formData),
        });
        
        const data = await response.json();
        
        if (data.success) {
          alert(this.editingPersona ? 'Persona actualizada correctamente' : 'Persona creada correctamente');
          this.closeModal();
          await this.loadPersonas();
          await this.loadDashboardData();
        } else {
          alert('Error: ' + data.error);
        }
      } catch (error) {
        console.error('Error guardando persona:', error);
        alert('Error al guardar persona');
      }
    },

    async deletePersona(id) {
      if (!confirm('¿Estás seguro de eliminar esta persona?')) return;
      
      try {
        const response = await fetch(`/api/personas/${id}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        
        if (data.success) {
          alert('Persona eliminada correctamente');
          await this.loadPersonas();
          await this.loadDashboardData();
        } else {
          alert('Error: ' + data.error);
        }
      } catch (error) {
        console.error('Error eliminando persona:', error);
        alert('Error al eliminar persona');
      }
    },

    async refreshData() {
      await this.loadDashboardData();
      await this.loadPersonas();
      alert('Datos actualizados');
    },

    logout() {
      // En producción, aquí se cerraría la sesión real
      alert('Función de cerrar sesión no implementada en demo');
    },
  };
}
