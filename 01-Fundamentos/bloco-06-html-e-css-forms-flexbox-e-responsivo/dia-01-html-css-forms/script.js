const estados = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];
// Seletores:
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputCpf = document.getElementById('input-cpf');
const inputEndereco = document.getElementById('input-endereco');
const inputCidade = document.getElementById('input-cidade');
const inputEstado = document.getElementById('select-estado');
const inputCasa = document.getElementById('casa');
const inputApartamento = document.getElementById('apartamento');
const resumoCurriculo = document.getElementById('resumo-curriculo');
const cargoAnterior = document.getElementById('cargo-anterior');
const descricaoCargo = document.getElementById('descricao-cargo');
const dataInicio = document.getElementById('data-inicio');
const submitBtn = document.querySelector('.submit-button');

// Adicionar os estados às opções do select:
for (const estado of estados) {
  // https://stackoverflow.com/questions/17001961/how-to-add-drop-down-list-select-programmatically
  const option = document.createElement('option');
  option.value = estado;
  option.text = estado;
  inputEstado.appendChild(option);
}
// Validações:

function validaInputs() {
  const inputs = document.querySelectorAll('input');
  for (const input of inputs) {
    if (input.value.trim() === '') {
      input.classList.add('error');
    }
  }
  if (document.querySelector('.error')) {
    return false;
  }
  return true;
}

function validaRadio() {
  if (inputCasa.checked === false && inputApartamento.checked === false) {
    alert('Por favor informe o tipo de moradia.');
    return false;
  }
  return true;
}

function validaDataInicio(d) {
  const data = d.value;
  const arr = data.split('/');
  const dia = arr[0];
  const mes = arr[1];
  const ano = arr[3];

  if (dia < 1 || dia > 31) {
    d.classList.add('error');
  }

  if (mes < 0 || mes > 12) {
    d.classList.add('error');
  }

  if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia === 31) {
    d.classList.add('error');
  }

  if (ano < 0) {
    d.classList.add('error');
  }

  if (d.classList.contains('error')) {
    alert('Preencha a data corretamente.');
    return false;
  }

  return true;
}

function removeMarcacaoErro() {
  const erros = document.querySelectorAll('.error');
  for (const erro of erros) {
    erro.classList.remove('error');
  }
}

// Prevent default:
submitBtn.addEventListener('click', function (click) {
  click.preventDefault();
  if (validaInputs() || validaRadio() || validaDataInicio(dataInicio)) {
    removeMarcacaoErro();
  } else {
    alert('b');
  }
});
