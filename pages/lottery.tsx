/*
 * @Author: xinyue
 * @Date: 2023-05-08 16:29:53
 * @Description: 生成球体视图
 */
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Lottery = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth , window.innerHeight);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const scene = new THREE.Scene();

    // 添加灯光
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    // 定义一个函数，用于将一个中奖号码转化为球体上的坐标
    const getCoordinates = (number, radius) => {
      const phi = Math.acos(-1 + (2 * number) / (35 * 36));
      const theta = Math.sqrt(35 * 36) * phi;
      return new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
    };

    // 将球体上的所有坐标点存储在一个数组中，并且将数组索引与每个中奖号码对应起来
    const coordinates = [];
    const mapping = {};
    for (let i = 1; i <= 35 * 34 * 33 * 32 * 31 * 30 / (6 * 5 * 4 * 3 * 2); i++) {
      const coordinate = getCoordinates(i, 5);
      coordinates.push(coordinate);
      mapping[i] = coordinate;
    }

    // 根据购买的彩票号码将对应的坐标点设置为绿色
    const purchasedNumbers = [1, 2, 3, 4, 5, 6];
    purchasedNumbers.forEach((number) => {
      const coordinate = mapping[number];
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.copy(coordinate);
      scene.add(cube);
    });

    // 创建球体并将其添加到场景中
    const sphereRadius = 5; // 球体半径
    const sphereWidthSegments = 64; // 球体宽度细分数
    const sphereHeightSegments = 64; // 球体高度细分数
    const geometry = new THREE.SphereGeometry(
      sphereRadius,
      sphereWidthSegments,
      sphereHeightSegments
    );
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    // 设置环境光和平行光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    // 调整相机位置
    camera.position.z = 20;

    // 定义动画函数，每一帧都旋转球体
    const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
    };

    // 开始动画循环
    animate();
}, []);

return <canvas ref={canvasRef} />;
};

export default Lottery;

