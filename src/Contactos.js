import React from 'react';

function Contacto() {
  return (
    <div>
      <h2>Contacto</h2>
      <p>¡Bienvenido al mundo del contacto en JavaScript!</p>
      <p>Si tienes alguna pregunta sobre JavaScript, no dudes en contactarnos.</p>
      <p>Puedes enviarnos un correo electrónico a javascript@gmail.com o completar el formulario a continuación:</p>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" /><br />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="mensaje">Mensaje:</label><br />
        <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
