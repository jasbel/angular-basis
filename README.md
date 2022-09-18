// Creacion de modulo dbz
ng g m dbz

// generacion de componentes sin estilos
ng g c dbz/mainPage -st
ng g c dbz/mainPage --style=none

// generacion de componentes sin test
ng g c dbz/mainPage --skip-tests

// generate component ts and html (not speck, not styles)
ng g c dbz/mainPage6 --style=none --skip-tests

// [] trae los datos,
// () emite acciones,