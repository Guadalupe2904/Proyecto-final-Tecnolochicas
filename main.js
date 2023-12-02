let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Realizo pólizas, facturas y otros trámite, a la vez programo en HTML.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
