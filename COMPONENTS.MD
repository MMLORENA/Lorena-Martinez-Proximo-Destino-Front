# COMPONENTS:

## **APP**:

- _Muestra_ ➡
- _Recibe_ ➡
- _Estado_ ➡
- _Acción_ ➡
  - Guarda o setea en el local storage el token.
  - Setea el store usuario logado o no.

## **BOTÓN**:

- _Muestra_ ➡ Un botón con su texto
- _Recibe por props_ ➡ El texto y la acción a realizar
- _Estado_ ➡ nada
- _Acción_ ➡ Al clickar, realiza la acción recibida.

## **DESTINATIONS LIST**:

- _Muestra_ ➡ Muestra tantos destinos como reciba.
- _Recibe por props_ ➡ Lista destinos.
- _Estado_ ➡ nada
- _Acción_ ➡ nada.

## **DESTINO CARD SIMPLE**:

- _Muestra_ ➡ Foto del destino con su título y su botón borrar.
- _Recibe por props_ ➡ el destino y la acción a realizar.
- _Estado_ ➡ nada.
- _Acción_ ➡ Al clickar, realiza la acción recibida.

## **DESTINO AL DETALLE**:

- _Muestra_ ➡
  - Foto destino.
  - 1 o 3 planes con su descripción.
  - 2 botones modificar & eliminar.
  - Mapa
- _Recibe_ ➡ El destino a mostar.
- _Estado_ ➡ nada
- _Acción_ ➡ nada

## **MODAL**:

- _Muestra_ ➡ Icono con su texto
- _Recibe por props_ ➡ Tipo de modal: "Loading" | "Error"
- _Estado_ ➡ nada
- _Acción_ ➡ nada

## **FEEDBACK USER ACTIONS**:

- _Muestra_ ➡ Texto con un icono para cerrar.
- _Recibe por props_ ➡ Tipo de modal: "correcto" | "incorrecto".
- _Estado_ ➡ nada.
- _Acción_ ➡ al clickar en la cruz, cerrar modal.

## **HEADER DESKTOP**:

- _Muestra_ ➡ Logo página y menú navegación.
- *Recibe por store*➡ Página en la que se encuentra.
- _Estado_ ➡ nada
- _Acción_ ➡ nada.

## **NAVEGACIÓN MOBILE**:

- _Muestra_ ➡ 2 iconos: Destinos y logout.
- _Recibe por store_ ➡ la página en la que está.
- _Estado_ ➡ nada.
- _Acción_ ➡ nada.

## **LOGIN**:

- _Muestra_: un formulario con un botón para login y enlace a register.
- _Recibe_: nada.
- _Estado_: ir actualizando los datos que va introduciendo usuario y si todo ha ido bien, redirigir al perfil de usuario.
- _Acción_: al clickar el usuario, enviar el formulario y los datos del usuario logado al store y acción abrir modal.

## **REGISTER**:

- _Muestra_: un formulario de registro, un botón registrarse y un enlace a login.
- _Recibe_: nada
- _Estado_: ir actualizando los datos que va introduciendo usuario y al final volver al estado inicial.
- _Acción_: al clickar, enviar formulario de registro y enviar acción abrir feedback.

## **MAPA**:

- _Muestra_ ➡ Mapa destino.
- _Recibe_ ➡ coordenadas destino.
- _Estado_ ➡ nada.
- _Acción_ ➡ nada.

## **FORM**:

- _Muestra_ ➡ un formulario con una foto y botón.
- _Recibe_ ➡ tipo de formulario.
- _Estado_ ➡ ir actualizando los datos que va introduciendo usuario y al final volver al estado inicial.
- _Acción_ ➡ al clickar, enviar formulario de registro y enviar acción abrir feedback.

# DATA

**_Destinos_**

✈ Listado destinos

◾ MODIFICACIONEs:

- Crear un destino.
- Borrar un destino.
- Modificar info destino.

**_Usuarios_**

😊 Usuario logado o no usuario

◾ MODIFCACIONES:

- Togglear usuario login/logout

**_Datos interfaz_**:

💫 Feedback y modal: tipo

◾ MODIFICACIONES:

- Texto según tipo
- Visible / no visible
