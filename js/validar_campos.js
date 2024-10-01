// Validações de Campos Obrigatórios utilizando Javascript Nativo.

// Validação para o Formulário de Login.
function ValidarCamposLogin(){
    // alert("teste.");

    if(document.formLogin.email.value == ""){
        alert("Preencher o camop obrigatório E-MAIL!");
        document.formLogin.email.focus();
        return false;
    }

    if(document.formLogin.senha.value == ""){
        alert("Preencher o campo obrigatório SENHA!");
        document.formLogin.senha.focus();
        return false;
    }
}

// Validação para o Formulário de Cadastro.
function ValidarCamposCadastro(){
    if(document.formCadastro.nome.value == ""){
        alert("Preencher o campo obrigatório NOME!");
        document.formCadastro.nome.focus();
        return false;
    }

    if(document.formCadastro.email.value == ""){
        alert("Preencher o camop obrigatório E-MAIL!");
        document.formCadastro.email.focus();
        return false;
    }

    if(document.formCadastro.data.value == ""){
        alert("Preencha o camop obrigatório DATA!");
        document.formCadastro.data.focus();
        return false;
    }

    if(document.formCadastro.cpf.value == ""){
        alert("Preencher o camop obrigatório CPF!");
        document.formCadastro.cpf.focus();
        return false;
    }

    if(document.formCadastro.bairro.value == ""){
        alert("Preencher o camop obrigatório BAIRRO!");
        document.formCadastro.bairro.focus();
        return false;
    }

    if(document.formCadastro.rua.value == ""){
        alert("Preencher o camop obrigatório RUA!");
        document.formCadastro.rua.focus();
        return false;
    }

    if(document.formCadastro.numero.value == ""){
        alert("Preencher o camop obrigatório NÚMERO");
        document.formCadastro.numero.focus();
        return false;
    }

    if(document.formCadastro.cep.value == ""){
        alert("Preencher o camop obrigatório CEP!");
        document.formCadastro.cep.focus();
        return false;
    }

    if(document.formCadastro.complemento.value == ""){
        alert("Preencher o camop obrigatório COMPLEMENTO!");
        document.formCadastro.complemento.focus();
        return false;
    }

    if(document.formCadastro.senha.value == ""){
        alert("Preencher o campo obrigatório SENHA!");
        document.formCadastro.senha.focus();
        return false;
    }

    if(document.formCadastro.repSenha.value == ""){
        alert("Preencher o campo obrigatório REPETIR SENHA!");
        document.formCadastro.repSenha.focus();
        return false;
    }
}