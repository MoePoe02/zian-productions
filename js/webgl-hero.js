/* ==========================================================================
   ZIAN PRODUCTIONS — THREE.JS WEBGL HERO BACKGROUND
   Interactive kinetic particle mesh with mouse parallax & scroll reaction
   ========================================================================== */

function initWebGLHero() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // Check for mobile or low capability
  if (window.innerWidth < 768) {
    canvas.style.display = 'none';
    return;
  }

  const heroSection = document.querySelector('.section-hero');
  if (!heroSection) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    heroSection.clientWidth / heroSection.clientHeight,
    1,
    1000
  );
  camera.position.z = 240;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });

  renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particle Mesh Geometry
  const particleCount = 280;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  const bounds = { x: 300, y: 180, z: 120 };

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;

    velocities.push({
      x: (Math.random() - 0.5) * 0.35,
      y: (Math.random() - 0.5) * 0.35,
      z: (Math.random() - 0.5) * 0.2
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Particle Material (Cian Zian #00ADEF)
  const particleMaterial = new THREE.PointsMaterial({
    color: 0x00ADEF,
    size: 2.8,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(geometry, particleMaterial);
  scene.add(particles);

  // Line Mesh for connections
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00ADEF,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });

  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = new Float32Array(particleCount * particleCount * 3);
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    mouseX = (e.clientX - halfWidth) / halfWidth;
    mouseY = (e.clientY - halfHeight) / halfHeight;
  }, { passive: true });

  // Scroll reaction
  let scrollOpacity = 1;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.clientHeight;
    scrollOpacity = Math.max(0, 1 - scrollY / (heroHeight * 0.8));
    if (canvas) {
      canvas.style.opacity = scrollOpacity;
    }
  }, { passive: true });

  // Animation Loop
  let animationFrameId;
  const connectionDistance = 48;

  function animate() {
    animationFrameId = requestAnimationFrame(animate);

    // Smooth camera mouse follow
    targetX += (mouseX * 25 - targetX) * 0.05;
    targetY += (-mouseY * 20 - targetY) * 0.05;

    camera.position.x = targetX;
    camera.position.y = targetY;
    camera.lookAt(scene.position);

    const pos = geometry.attributes.position.array;
    let lineIndex = 0;

    for (let i = 0; i < particleCount; i++) {
      // Move particles
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Bounce on boundaries
      if (Math.abs(pos[i * 3]) > bounds.x) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > bounds.y) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > bounds.z) velocities[i].z *= -1;

      // Interconnect nearby particles
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          const lPos = lineGeometry.attributes.position.array;
          lPos[lineIndex++] = pos[i * 3];
          lPos[lineIndex++] = pos[i * 3 + 1];
          lPos[lineIndex++] = pos[i * 3 + 2];

          lPos[lineIndex++] = pos[j * 3];
          lPos[lineIndex++] = pos[j * 3 + 1];
          lPos[lineIndex++] = pos[j * 3 + 2];
        }
      }
    }

    geometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.setDrawRange(0, lineIndex / 3);

    // Subtle rotation
    particles.rotation.y += 0.0008;
    lines.rotation.y += 0.0008;

    renderer.render(scene, camera);
  }

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    if (!heroSection) return;
    const width = heroSection.clientWidth;
    const height = heroSection.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}
