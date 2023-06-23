id = 0;

var listaUsers = [];
var listaUsers = [
        {id: 1,
        nome: "adm",
        email: "adm@gmail.com",
        senha: "1234"
        },
        
];
//-----------------------------------------------------------------
function checkUserExistenceCad(){
const email_cad = document.getElementById("email_cad").value;    
const emailProcurado = email_cad;
  
const contaRegistrada = listaUsers.some(verify => verify.email === emailProcurado);
  
if (contaRegistrada) {
  window.alert(`A conta com o email ` + emailProcurado + ` já está registrada.`);
} else {
  
  window.alert(`A conta com o email ` + emailProcurado + ` ainda não está registrada.`);
  confirmaSenha();
}
}
//-----------------------------------------------------------------
function checkUserExistenceLog(){
const email_login = document.getElementById("email_login").value;  
const senha_login = document.getElementById("senha_login").value;
  
const usuarioEncontrado = listaUsers.find(user => user.email === email_login && user.senha === senha_login);

if (usuarioEncontrado) {
  window.alert("As credenciais são válidas. Bem-vindo, " + usuarioEncontrado.nome + "!");
  window.location.href = "https://voar.aero/";

} else {
  window.alert("As credenciais são inválidas. Por favor, verifique seu email e senha.");
}
  
}
//-----------------------------------------------------------------
function confirmaSenha() {
  const nome_cad = document.getElementById("nome_cad").value;    
  const email_cad = document.getElementById("email_cad").value;
  const senha_cad = document.getElementById("senha_cad").value;    
  const senha_confirma = document.getElementById("senha_confirma").value;  
  
  if (nome_cad === "" || email_cad === ""|| senha_cad === "" || senha_confirma=== ""){
  window.alert("Preencha todos os campos do cadastro antes de prosseguir!");
  } 
  else {
  if (senha_cad != senha_confirma) {
    window.alert("Senhas incompatíveis");
  } 
  else {
  criaUser();
  transferirListaUsers();
  }
}
}
//-----------------------------------------------------------------
function criaUser() {
  
  const nome_cad = document.getElementById("nome_cad").value; 
  const email_cad = document.getElementById("email_cad").value;    
  const senha_cad = document.getElementById("senha_cad").value;    
  const senha_confirma = document.getElementById("senha_confirma").value;
  
    const idUser= Math.floor(Math.random() * 99999);
    console.log(nome_cad, email_cad, senha_cad, idUser);
    addUser(idUser, nome_cad, email_cad, senha_cad);
    console.log(Object.values(listaUsers));
    window.alert("Conta criada com sucesso!");
    
   }
//-----------------------------------------------------------------
function addUser(id, nome, email, senha) {
  listaUsers.push({id, nome, email, senha });
}
//-----------------------------------------------------------------
function cadastroUser() {    
  checkUserExistenceCad();
}
//-----------------------------------------------------------------
function LogarUser(){
  window.alert("Teste.");
  checkUserExistenceLog();
}
//-----------------------------------------------------------------
function transferirListaUsers(){ 
localStorage.setItem('BancoUsers', JSON.stringify(listaUsers));
// Redireciona para a página de destino
window.location.href = 'https://genilsonogrande.github.io/VOAR-LIVROS/login.html';   
}
/*
# Autor: Arthur J de Oliveira Santos
# Data: 21 de junho de 2023
# Descrição: Este código possui funcionalidades de cadastro e login de um usuário.
# Linkedin: https://www.linkedin.com/in/arthur-jacintho-de-oliveira-santos-3737b8261
# Github: https://github.com/ArthurJos04
# Obs: 1. Inserir segurança mínima exigida para uma criação de senha...
       2. Inserir identificação de campo vazio simultaneamente/eficiente das páginas login e cadastro
       *Apenas a de cadastro está operacional*
*/
