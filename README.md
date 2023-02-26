# Empezando una App React con create-react ... 
## Partiendo de un ejercicio de @PedroTechnologies en Youtube!:
------------
#### [Proyecto en Youtube](https://www.youtube.com/watch?v=3P8orW_DeEw&ab_channel=PedroTech "Proyecto en Youtube")
------------
*Notas*
- Yarn para crear la aplicación de ejemplo para empezar.
-:fa-flag: Sí no tienes yarn, instala con **npm install -g yarn**.
- Comando: **yarn create-react-app .**
:fa-flag: ¡**el punto** usa la carpeta actual como nombre del proyecto al crearlo!
- Se han añadido salidas a consola para verificar cuando y cuantas veces se ejecutan los Hooks, que ahora se usan con preferencia para evitar los métodos shouldComponentUpdate() y componentDidMount().  He entendido que cuando un componente se actualiza con useState, renderiza únicamente aquella parte del componente que necesita mostrar el cambio, haciendo mas eficiente al mismo.