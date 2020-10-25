function main() {
  /* Objek 1 yang harus dibuat adalah huruf N dan A (Nodas uziel Putra Serpara) */
  /* Objek 2 yang harus dibuat adalah angka 12 (NRP 7007, ASCII dari A adalah 65, 7+5 = 12) */

  // Elemen canvas
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [
  /* Pada pembuatan angka 1 saya mengunakan gl.TRIANGLE_FAN dengan 3 bagian yang berbeda */
  /* Untuk pewarnaan segitiga dapat terlihat pada masing-masing bagian dengan warna ungu dan biru langit */

  //Angka 1.1 
  -0.9, -0.4, 0.0, 1.0, 1.0,  
  -0.7, -0.4, 1.0, 0.0, 1.0,     
  -0.7, -0.25, 1.0, 1.0, 1.0,      
  -0.9, -0.25, 0.0, 1.0, 1.0,

  //Angka 1.2 
  -0.85, -0.25, 0.0, 1.0, 1.0,    
  -0.85, 0.4, 1.0, 0.0, 1.0,     
  -0.75, 0.4, 1.0, 1.0, 1.0,       
  -0.75, -0.25, 0.0, 1.0, 1.0,
  
  //Angka 1.3 
  -0.85, 0.4, 0.0, 1.0, 1.0,         
  -0.85, 0.15, 1.0, 0.0, 1.0,      
  -0.9, 0.05, 1.0, 1.0, 1.0,     
  -0.9, 0.3, 0.0, 1.0, 1.0,

  /* Pada pembuatan angka 2 saya mengunakan gl.TRIANGLE_FAN dengan 5 bagian yang berbeda */
  /* Untuk pewarnaan tiap segitiga dapat terlihat pada masing-masing bagian dengan warna ungu dan biru langit */

  //Angka 2.1
  -0.55, -0.4, 0.0, 1.0, 1.0,       
  -0.55, -0.25, 1.0, 0.0, 1.0,       
  -0.25, -0.25, 1.0, 1.0, 1.0, 
  -0.25, -0.4, 0.0, 1.0, 1.0,      
  
  //Angka 2.2 
  -0.55, -0.25, 0.0, 1.0, 1.0,     
  -0.35, 0.0, 1.0, 0.0, 1.0,      
  -0.25, 0.0, 1.0, 1.0, 1.0, 
  -0.43, -0.25, 0.0, 1.0, 1.0,    
  
  //Angka 2.3
  -0.35, 0, 0.0, 1.0, 1.0,       
  -0.35, 0.2, 1.0, 0.0, 1.0,       
  -0.25, 0.2, 1.0, 1.0, 1.0,
  -0.25, 0, 0.0, 1.0, 1.0,      
  
  //Angka 2.4
  -0.25, 0.2, 0.0, 1.0, 1.0,
  -0.32, 0.4, 1.0, 0.0, 1.0,
  -0.45, 0.4, 1.0, 1.0, 1.0,
  -0.45, 0.2, 0.0, 1.0, 1.0,  

  //Angka 2.5
  -0.55, 0.2, 0.0, 1.0, 1.0,
  -0.45, 0.4, 1.0, 0.0, 1.0,
  -0.45, 0, 1.0, 1.0, 1.0,
  -0.55, 0, 0.0, 1.0, 1.0,

  /* Pada pembuatan huruf N saya mengunakan gl.LINE_LOOP dan menambahkan efek bayang dengan mengunakan gl.LINE_STRIP */
  /* Untuk pewarnaan tiap titip dapat terlihat pada masing-masing bagian warna yang berbeda-beda*/

  //huruf N
  0.1, 0.4, 1.0, 0.0, 0.0,        
  0.1, -0.4, 0.0, 1.0, 0.0,     
  0.15, -0.4, 0.0, 0.0, 1.0,     
  0.15, 0.2, 1.0, 0.0, 0.0,    
  0.25, -0.4, 0.0, 1.0, 0.0,
  0.3, -0.4, 0.0, 0.0, 1.0,
  0.3, 0.4, 1.0, 0.0, 0.0,
  0.25, 0.4, 0.0, 1.0, 0.0,
  0.25, -0.15, 0.0, 0.0, 1.0,
  0.15, 0.4, 0.0, 1.0, 0.0,

  //bayangan N.1
  0.1, 0.4, 1.0, 0.0, 0.0,      
  0.12, 0.45, 0.0, 1.0, 0.0,       
  0.17, 0.45, 0.0, 0.0, 1.0,       
  0.25, 0, 1.0, 0.0, 0.0,        
  
  //bayangan N.2
  0.25, 0.4, 0.0, 1.0, 0.0,
  0.27, 0.45, 0.0, 0.0, 1.0,
  0.32, 0.45, 0.0, 1.0, 0.0,
  0.32, -0.35, 1.0, 0.0, 0.0,
  0.3, -0.4, 0.0, 1.0, 0.0,
  
  //bayangan N.3
  0.15, -0.4, 1.0, 0.0, 0.0,        
  0.17, -0.35, 0.0, 1.0, 0.0,
  0.17, 0.073, 0.0, 0.0, 1.0,

  /* Pada pembuatan huruf A saya mengunakan gl.LINE_LOOP dan menambahkan efek bayang dengan mengunakan gl.LINE_STRIP */
  /* Untuk pewarnaan tiap titip dapat terlihat pada masing-masing bagian warna yang berbeda-beda*/
  
  //huruf A.1
  0.5, 0.4, 1.0, 0.0, 0.0,
  0.6, 0.4, 0.0, 1.0, 0.0,
  0.7, -0.4, 0.0, 0.0, 1.0,
  0.65, -0.4, 1.0, 0.0, 0.0,
  0.61, -0.1, 0.0, 1.0, 0.0,
  0.49, -0.1, 0.0, 0.0, 1.0,
  0.45, -0.4, 1.0, 0.0, 0.0,
  0.4, -0.4, 0.0, 1.0, 0.0,

  //huruf A.2
  0.53, 0.25, 1.0, 0.0, 0.0,
  0.57, 0.25, 0.0, 1.0, 0.0,
  0.6, 0, 0.0, 0.0, 1.0,
  0.5, 0, 0.0, 1.0, 0.0,

  //bayangan A.1
  0.5, 0.4, 1.0, 0.0, 0.0,
  0.52, 0.45, 0.0, 1.0, 0.0,
  0.62, 0.45, 0.0, 0.0, 1.0,
  0.72, -0.35, 1.0, 0.0, 0.0,
  0.7, -0.4, 0.0, 0.0, 1.0,

  //bayangan A.2
  0.45, -0.4, 1.0, 0.0, 0.0,
  0.48, -0.35, 0.0, 1.0, 0.0,
  0.51, -0.1, 0.0, 0.0, 1.0,

  //bayangan A.3
  0.52, 0., 1.0, 0.0, 0.0,
  0.55, 0.25, 0.0, 1.0, 0.0,
  ];

  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  // Script untuk vertex shader dan fragment shader
  var vertexShaderSource = `
  attribute vec2 a_Position;
  attribute vec3 a_Color;
  varying vec3 v_Color;
  void main() {
    v_Color = a_Color;
    gl_Position = vec4(a_Position, 0.0, 1.0);
  }
  `;
  var fragmentShaderSource = `
  precision mediump float;
  varying vec3 v_Color;
  void main() {
    gl_FragColor = vec4(v_Color, 1.0);
  }
  `;
  
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  var shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);

  gl.useProgram(shaderProgram);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");

  gl.vertexAttribPointer(aPositionLoc, 
    2, 
    gl.FLOAT, 
    false, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    0);
  gl.vertexAttribPointer(
    aColorLoc, 
    3, 
    gl.FLOAT, 
    false, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT);

  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(50, 0, canvas.width, canvas.height);

  /* Pada bagian ini akan menentukan jumlah titik (vertex) dan jenis line atau triangel */
  /* yang nantinya mau dimasukan di canvas untuk membentuk objek 1 dan 2 */

  //Angaka 1.1
  var primitive = gl.TRIANGLE_FAN;
  var offset = 0;
  var nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 1.2
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 1.3
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 2.1
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 2.2
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 2.3
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 2.4
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //Angaka 2.5
  primitive = gl.TRIANGLE_FAN;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //huruf N
  primitive = gl.LINE_LOOP;
  offset += nVertex;
  nVertex = 10;
  gl.drawArrays(primitive, offset, nVertex);

  //bayangan N.1
  primitive = gl.LINE_STRIP;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //bayangan N.2
  primitive = gl.LINE_STRIP;
  offset += nVertex;
  nVertex = 5;
  gl.drawArrays(primitive, offset, nVertex);

  //bayangan N.3
  primitive = gl.LINE_STRIP;
  offset += nVertex;
  nVertex = 3;
  gl.drawArrays(primitive, offset, nVertex);

  //huruf A.1
  primitive = gl.LINE_LOOP;
  offset += nVertex;
  nVertex = 8;
  gl.drawArrays(primitive, offset, nVertex);
  
  //huruf A.2
  primitive = gl.LINE_LOOP;
  offset += nVertex;
  nVertex = 4;
  gl.drawArrays(primitive, offset, nVertex);

  //bayangan A.1
  primitive = gl.LINE_STRIP;
  offset += nVertex;
  nVertex = 5;
  gl.drawArrays(primitive, offset, nVertex);

  //bayangan A.2
  primitive = gl.LINE_STRIP;
  offset += nVertex;
  nVertex = 3;
  gl.drawArrays(primitive, offset, nVertex);

  //bayangan A.3
  primitive = gl.LINE_STRIP;
  offset += nVertex;
  nVertex = 2;
  gl.drawArrays(primitive, offset, nVertex);
  }