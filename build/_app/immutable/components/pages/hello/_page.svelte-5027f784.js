import{S as P,i as z,s as G,a as x,k as g,w as k,q as F,$ as E,h as o,c as _,l as u,m as h,x as $,r as A,n as c,b as M,y as B,Q as l,R as N,f as I,t as S,z as V}from"../../../chunks/singletons-14896c65.js";import{H as j}from"../../../chunks/Header-db80454f.js";function q(C){let a,e,r,v,t,s,y,i,f,m;return r=new j({props:{"uk-sticky":"start: 400; show-on-up: true; animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent; media: 960"}}),{c(){a=x(),e=g("div"),k(r.$$.fragment),v=x(),t=g("div"),s=g("div"),y=x(),i=g("script"),f=F(`import {
                Box,
                Camera,
                Mesh,
                Program,
                Renderer,
                Transform,
            } from '../../../static/assets/ogl/src/index.mjs';
            const vertex = /* glsl */ \`
                attribute vec3 position;
                attribute vec3 normal;

                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform mat3 normalMatrix;

                varying vec3 vNormal;

                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            \`;

            const fragment = /* glsl */ \`
                precision highp float;

                varying vec3 vNormal;

                void main() {
                    vec3 normal = normalize(vNormal);
                    float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
                    gl_FragColor.rgb = vec3(0.2, 0.8, 1.0) + lighting * 0.1;
                    gl_FragColor.a = 1.0;
                }
            \`;

            {
                const renderer = new Renderer({ dpr: 2 });
                const gl = renderer.gl;
                document.getElementById('myCanvas').appendChild(gl.canvas);
                gl.clearColor(1, 1, 1, 1);

                const camera = new Camera(gl, { fov: 35 });
                camera.position.set(0, 1, 7);
                camera.lookAt([0, 0, 0]);
                const controls = new Orbit(camera);

                function resize() {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
                }
                window.addEventListener('resize', resize, false);
                resize();

                const scene = new Transform();

                const planeGeometry = new Plane(gl);
                const sphereGeometry = new Sphere(gl);
                const cubeGeometry = new Box(gl);
                const cylinderGeometry = new Cylinder(gl);

                const program = new Program(gl, {
                    vertex,
                    fragment,

                    // Don't cull faces so that plane is double sided - default is gl.BACK
                    cullFace: null,
                });

                const plane = new Mesh(gl, { geometry: planeGeometry, program });
                plane.position.set(0, 1.3, 0);
                plane.setParent(scene);

                const sphere = new Mesh(gl, { geometry: sphereGeometry, program });
                sphere.position.set(1.3, 0, 0);
                sphere.setParent(scene);

                const cube = new Mesh(gl, { geometry: cubeGeometry, program });
                cube.position.set(0, -1.3, 0);
                cube.setParent(scene);

                const cylinder = new Mesh(gl, { geometry: cylinderGeometry, program });
                cylinder.position.set(-1.3, 0, 0);
                cylinder.setParent(scene);

                requestAnimationFrame(update);
                function update() {
                    requestAnimationFrame(update);
                    controls.update();

                    plane.rotation.y -= 0.02;
                    sphere.rotation.y -= 0.03;
                    cube.rotation.y -= 0.04;
                    cylinder.rotation.y -= 0.02;

                    renderer.render({ scene, camera });
                }
            }`),this.h()},l(n){E("svelte-1afnz0t",document.head).forEach(o),a=_(n),e=u(n,"DIV",{class:!0});var d=h(e);$(r.$$.fragment,d),v=_(d),t=u(d,"DIV",{class:!0});var p=h(t);s=u(p,"DIV",{id:!0,class:!0}),h(s).forEach(o),y=_(p),i=u(p,"SCRIPT",{type:!0});var b=h(i);f=A(b,`import {
                Box,
                Camera,
                Mesh,
                Program,
                Renderer,
                Transform,
            } from '../../../static/assets/ogl/src/index.mjs';
            const vertex = /* glsl */ \`
                attribute vec3 position;
                attribute vec3 normal;

                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform mat3 normalMatrix;

                varying vec3 vNormal;

                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            \`;

            const fragment = /* glsl */ \`
                precision highp float;

                varying vec3 vNormal;

                void main() {
                    vec3 normal = normalize(vNormal);
                    float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
                    gl_FragColor.rgb = vec3(0.2, 0.8, 1.0) + lighting * 0.1;
                    gl_FragColor.a = 1.0;
                }
            \`;

            {
                const renderer = new Renderer({ dpr: 2 });
                const gl = renderer.gl;
                document.getElementById('myCanvas').appendChild(gl.canvas);
                gl.clearColor(1, 1, 1, 1);

                const camera = new Camera(gl, { fov: 35 });
                camera.position.set(0, 1, 7);
                camera.lookAt([0, 0, 0]);
                const controls = new Orbit(camera);

                function resize() {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
                }
                window.addEventListener('resize', resize, false);
                resize();

                const scene = new Transform();

                const planeGeometry = new Plane(gl);
                const sphereGeometry = new Sphere(gl);
                const cubeGeometry = new Box(gl);
                const cylinderGeometry = new Cylinder(gl);

                const program = new Program(gl, {
                    vertex,
                    fragment,

                    // Don't cull faces so that plane is double sided - default is gl.BACK
                    cullFace: null,
                });

                const plane = new Mesh(gl, { geometry: planeGeometry, program });
                plane.position.set(0, 1.3, 0);
                plane.setParent(scene);

                const sphere = new Mesh(gl, { geometry: sphereGeometry, program });
                sphere.position.set(1.3, 0, 0);
                sphere.setParent(scene);

                const cube = new Mesh(gl, { geometry: cubeGeometry, program });
                cube.position.set(0, -1.3, 0);
                cube.setParent(scene);

                const cylinder = new Mesh(gl, { geometry: cylinderGeometry, program });
                cylinder.position.set(-1.3, 0, 0);
                cylinder.setParent(scene);

                requestAnimationFrame(update);
                function update() {
                    requestAnimationFrame(update);
                    controls.update();

                    plane.rotation.y -= 0.02;
                    sphere.rotation.y -= 0.03;
                    cube.rotation.y -= 0.04;
                    cylinder.rotation.y -= 0.02;

                    renderer.render({ scene, camera });
                }
            }`),b.forEach(o),p.forEach(o),d.forEach(o),this.h()},h(){document.title="YOOtheme Pro - UIkit",c(s,"id","myCanvas"),c(s,"class","uk-container"),c(i,"type","module"),c(t,"class","uk-section uk-height-viewport"),c(e,"class","uk-section-default tm-section-intro")},m(n,w){M(n,a,w),M(n,e,w),B(r,e,null),l(e,v),l(e,t),l(t,s),l(t,y),l(t,i),l(i,f),m=!0},p:N,i(n){m||(I(r.$$.fragment,n),m=!0)},o(n){S(r.$$.fragment,n),m=!1},d(n){n&&o(a),n&&o(e),V(r)}}}class T extends P{constructor(a){super(),z(this,a,null,q,G,{})}}export{T as default};
