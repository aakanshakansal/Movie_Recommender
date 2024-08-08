// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const BackgroundScene = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Set up the scene
//     const scene = new THREE.Scene();

//     // Set up the camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     // Set up the renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create a movie-themed background (e.g., a rotating plane with a movie texture)
//     const geometry = new THREE.PlaneGeometry(10, 10);
//     const texture = new THREE.TextureLoader().load(
//       "/path/to/your_movie_texture.jpg"
//     ); // Add your movie-themed texture here
//     const material = new THREE.MeshBasicMaterial({ map: texture });
//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);

//     // Create particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 5000;
//     const positions = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 10;
//     }

//     particlesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(positions, 3)
//     );

//     const particlesMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.05,
//     });
//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the plane for a dynamic effect
//       plane.rotation.y += 0.01;

//       // Update particles
//       particles.rotation.y += 0.002;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle window resize
//     window.addEventListener("resize", () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     return () => {
//       // Clean up
//       mountRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", () => {});
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         width: "100vw",
//         height: "100vh",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//       }}
//     />
//   );
// };

// export default BackgroundScene;

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const BackgroundScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up the scene
    const scene = new THREE.Scene();

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a movie-themed background (e.g., a rotating plane with a movie texture)
    const geometry = new THREE.PlaneGeometry(10, 10);
    const texture = new THREE.TextureLoader().load(
      "/path/to/your_movie_texture.jpg"
    ); // Add your movie-themed texture here
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the plane for a dynamic effect
      plane.rotation.y += 0.01;

      // Update particles
      particles.rotation.y += 0.002;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundScene;
