//This is all GLSL:


export const GlowShader = {
    //Vertex shader: processes each vertex of the shader, transforms it, then passes it to the fragment shader.
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize( normalMatrix * normal );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,
    //Fragment shader: processes each pixel and determines its color.
    fragmentShader: `
      uniform float c;
      uniform float p;
      varying vec3 vNormal;
      void main() {
        float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );
        gl_FragColor = vec4( 1.0, 0.5, 0.0, 1.0 ) * intensity;
      }
    `
  };


  //Vertex:
  // Varying is a keyword to denote a variable is shared. Vec3 is similar to what it means in three. vNormal holds the normal vector of each vertex. 
  //Void main(){ is the main function. Called for each vertex. Normal matrix is a 3x3 matrix that transforms normal vectors to eye space
  //normalize() ensures the vector has a unit length
  //   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  // This line transforms the vertex position (position) from object space to clip space.
  // modelViewMatrix transforms the position from object space to eye space.
  // projectionMatrix transforms the position from eye space to clip space.
  // vec4(position, 1.0) converts the 3D position to a 4D vector, with 1.0 as the w-component.

  //Fragment:
  