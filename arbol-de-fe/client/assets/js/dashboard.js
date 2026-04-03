/**
 * Dashboard Árbol de Fe - Lógica principal
 * Maneja la visualización del árbol, hojas, frutos y animaciones
 */

function dashboardApp() {
  return {
    // Estado reactivo
    stats: {
      totalPersonas: 0,
      bautizados: 0,
      interesados: 0,
      hojas: 0,
    },
    
    abcList: [],
    leaves: [],
    fruits: 0,
    showCelebration: false,
    celebrationMessage: '',
    
    // Socket.IO connection
    socket: null,
    
    // Configuración del árbol
    treeConfig: {
      centerX: 400,
      centerY: 350,
      maxRadius: 250,
      goldenAngle: Math.PI * (3 - Math.sqrt(5)), // Ángulo áureo en radianes
    },

    async init() {
      // Conectar a Socket.IO
      this.connectSocket();
      
      // Cargar datos iniciales
      await this.loadDashboardData();
      
      // Renderizar árbol inicial
      this.renderTree();
      
      // Actualizar cada 30 segundos
      setInterval(() => this.loadDashboardData(), 30000);
    },

    connectSocket() {
      this.socket = io();
      
      this.socket.on('connect', () => {
        console.log('✅ Conectado al servidor via Socket.IO');
      });
      
      this.socket.on('disconnect', () => {
        console.log('❌ Desconectado del servidor');
      });
      
      // Escuchar eventos del dashboard en tiempo real
      this.socket.on('dashboard:update', (data) => {
        console.log('📊 Actualización en tiempo real:', data);
        this.loadDashboardData();
      });
      
      this.socket.on('dashboard:celebration', (data) => {
        this.triggerCelebration(data.message);
      });
      
      this.socket.on('dashboard:new_leaf', (data) => {
        this.addLeaf(data);
      });
    },

    async loadDashboardData() {
      try {
        // Cargar estadísticas de personas
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
        
        // Calcular interesados (no bautizados)
        this.stats.interesados = this.stats.totalPersonas - this.stats.bautizados;
        
        // Las hojas son proporcionales a los bautizados
        this.stats.hojas = this.stats.bautizados * 3; // 3 hojas por bautizado
        
        // Actualizar contador de canasta
        this.fruits = Math.floor(this.stats.bautizados / 5); // 1 fruto por cada 5 bautizados
        document.getElementById('basket-count').textContent = this.fruits;
        
        // Cargar lista ABC (simulada por ahora)
        await this.loadABCList();
        
        // Re-renderizar árbol si cambió el número de hojas
        this.renderTree();
        
      } catch (error) {
        console.error('Error cargando datos del dashboard:', error);
      }
    },

    async loadABCList() {
      try {
        const response = await fetch('/api/personas?bautizado=false&limit=20');
        const data = await response.json();
        
        if (data.success) {
          // Agrupar por categorías simuladas A, B, C
          const personas = data.data;
          
          this.abcList = [
            { id: 1, nombre: 'A', personas: personas.slice(0, 7) },
            { id: 2, nombre: 'B', personas: personas.slice(7, 14) },
            { id: 3, nombre: 'C', personas: personas.slice(14, 20) },
          ];
        }
      } catch (error) {
        console.error('Error cargando lista ABC:', error);
      }
    },

    renderTree() {
      const container = document.getElementById('leaves-container');
      if (!container) return;
      
      // Limpiar hojas existentes
      container.innerHTML = '';
      this.leaves = [];
      
      const numLeaves = this.stats.hojas;
      const { centerX, centerY, maxRadius, goldenAngle } = this.treeConfig;
      
      // Generar hojas usando filotaxis áurea
      for (let i = 0; i < numLeaves; i++) {
        const angle = i * goldenAngle;
        const radius = Math.sqrt(i) * 8; // Espaciado proporcional
        
        if (radius > maxRadius) continue; // Fuera del límite
        
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Crear elemento hoja SVG
        const leaf = this.createLeafElement(x, y, i);
        container.appendChild(leaf);
        this.leaves.push({ element: leaf, index: i });
      }
      
      // Animar entrada de hojas
      this.animateLeavesEntrance();
    },

    createLeafElement(x, y, index) {
      const ns = 'http://www.w3.org/2000/svg';
      const group = document.createElementNS(ns, 'g');
      group.setAttribute('class', 'leaf');
      group.setAttribute('transform', `translate(${x}, ${y})`);
      
      // Hoja ovalada
      const ellipse = document.createElementNS(ns, 'ellipse');
      ellipse.setAttribute('cx', '0');
      ellipse.setAttribute('cy', '0');
      ellipse.setAttribute('rx', '8');
      ellipse.setAttribute('ry', '12');
      
      // Color verde con variaciones
      const greenShades = ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7'];
      const color = greenShades[index % greenShades.length];
      ellipse.setAttribute('fill', color);
      ellipse.setAttribute('opacity', '0.9');
      
      // Venas de la hoja
      const vein = document.createElementNS(ns, 'line');
      vein.setAttribute('x1', '0');
      vein.setAttribute('y1', '-10');
      vein.setAttribute('x2', '0');
      vein.setAttribute('y2', '10');
      vein.setAttribute('stroke', '#2E7D32');
      vein.setAttribute('stroke-width', '1');
      vein.setAttribute('opacity', '0.5');
      
      group.appendChild(ellipse);
      group.appendChild(vein);
      
      // Tooltip con información
      group.setAttribute('data-index', index);
      
      return group;
    },

    animateLeavesEntrance() {
      // Usar GSAP para animación suave de entrada
      gsap.from('.leaf', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: {
          amount: 2,
          from: 'center',
        },
        ease: 'back.out(1.7)',
      });
    },

    addLeaf(data) {
      // Añadir una nueva hoja cuando llega un evento en tiempo real
      const container = document.getElementById('leaves-container');
      if (!container) return;
      
      const newIndex = this.leaves.length;
      const { centerX, centerY, goldenAngle } = this.treeConfig;
      
      const angle = newIndex * goldenAngle;
      const radius = Math.sqrt(newIndex) * 8;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      const leaf = this.createLeafElement(x, y, newIndex);
      container.appendChild(leaf);
      this.leaves.push({ element: leaf, index: newIndex });
      
      // Animar la nueva hoja
      gsap.from(leaf, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
      
      this.stats.hojas++;
    },

    triggerCelebration(message = '¡Nuevo bautismo celebrado!') {
      this.celebrationMessage = message;
      this.showCelebration = true;
      
      // Animación de confeti con GSAP
      this.launchConfetti();
      
      // Ocultar después de 4 segundos
      setTimeout(() => {
        this.showCelebration = false;
      }, 4000);
    },

    launchConfetti() {
      const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
      const container = document.querySelector('.tree-container');
      
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = '0.8';
        
        container.appendChild(confetti);
        
        gsap.to(confetti, {
          y: window.innerHeight,
          rotation: Math.random() * 720 - 360,
          duration: Math.random() * 2 + 2,
          ease: 'power1.in',
          onComplete: () => confetti.remove(),
        });
      }
    },

    toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    },

    async refreshData() {
      await this.loadDashboardData();
    },
  };
}
