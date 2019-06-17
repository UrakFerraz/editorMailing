function getSelectedValue() {
  var selectedValue = document.getElementById("ip12").value;
  var ExcludeBlockDiv = document.getElementById("templatesBlockLayer");
  console.log(selectedValue);
  ExcludeBlockDiv = ExcludeBlockDiv.style.display = "none";
}

var fecharErro = document.querySelector('.AlertBox');
var fecharBtn = document.querySelector('#alertBoxBtn');

  fecharBtn.onclick = function() {
    fecharErro.style.display = 'none';
  }

var EnableSave = document.querySelector('.SalvarNomeMailingBtn');
var SaveBtn = document.querySelector('.SalvarSeguirBtn');

EnableSave.onclick = function() {
  SaveBtn.setAttribute('id','inputMailingBtn');
  SaveBtn.classList.remove('inputMailingBtn');
	novoMailingContainer.style.display = 'none';
	releaseListContainer.style.display = 'flex';
	releaseListDialogBox.classList.add('flipInX');
}


// ação clique bloco1
var bloco1 = document.querySelector('#bloco1Btn');
var novoMailingContainer = document.querySelector('.bloco1DialogBoxContainer');
var novoMailingDialogBox = document.querySelector('.inputMailingNameWrapper');
var releaseListContainer = document.querySelector('.releaseListWrapper');
var releaseListDialogBox = document.querySelector('.releaseList');

bloco1.onclick = function() {
	novoMailingContainer.style.display = 'flex';
	novoMailingDialogBox.classList.add('flipInX');
}


// botão continuar release e exibir recibo
var continuarReleaseBtn = document.querySelector('.continuarBtn');
var reciboDialogBox = document.querySelector('.mailingConfirmWrapper');

continuarReleaseBtn.onclick = function() {
	releaseListContainer.style.display = 'none';
	reciboDialogBox.style.display = 'grid';
}


// ação clique bloco2
var bloco2 = document.querySelector('#bloco2Btn');
var mailingSalvoDialogBoxContainer = document.querySelector('.mailingSalvoDialogBoxContainer');
var mailingSalvoDialogBox = document.querySelector('.mailingSalvoDialogBox');
var mailingSalvoInput = document.querySelector('.mailingSalvoInput');
var mailingSalvoDialogBoxCh1 = document.querySelector('.mailingSalvoDialogBoxCh1');
var mailingSalvoDialogBoxCh2 = document.querySelector('.mailingSalvoDialogBoxCh2');

var continuarBtnSalvo = document.querySelector('.continuarBtnSalvo');

bloco2.onclick = function() {
	mailingSalvoDialogBoxContainer.style.display = 'flex';
	mailingSalvoDialogBox.classList.add('flipInX');
}

mailingSalvoDialogBoxCh1.onclick = function() {
	reciboDialogBox.style.display = 'grid';
	mailingSalvoDialogBoxContainer.style.display = 'none';
	releaseListContainer.style.display = 'flex';
	releaseListDialogBox.classList.add('flipInX');
}

continuarBtnSalvo.onclick = function() {
	mailingSalvoDialogBoxContainer.style.display = 'none';
	reciboDialogBox.style.display = 'grid';

}

mailingSalvoDialogBoxCh2.onclick = function() {
	mailingSalvoInput.style.display = 'block';
}


// ação liberar o btn continuar no bloco2
var inputUltimoMailingSalvo = document.querySelector('.mailingSalvoInput');
var continuarBtnSalvoMask = document.querySelector('.continuarBtnSalvoMask');

if (inputUltimoMailingSalvo.value !== '') {
	continuarBtnSalvoMask.style.display = 'none';
}


// ação clique bloco3
var bloco3Btn = document.querySelector('#bloco3Btn');
var mailingSalvoBloco3DialogBoxContainer = document.querySelector('.mailingSalvoBloco3DialogBoxContainer');
var mailingSalvoBloco3DialogBox = document.querySelector('.mailingSalvoBloco3DialogBox');

// bloco3Btn.onclick = function() {
// 	mailingSalvoBloco3DialogBoxContainer.style.display = 'flex';
// 	mailingSalvoBloco3DialogBox.classList.add('flipInX');
// }


var mailingSalvoBloco3DialogBoxCh1 = document.querySelector('.mailingSalvoBloco3DialogBoxCh1');

mailingSalvoBloco3DialogBoxCh1.onclick = function() {
	mailingSalvoBloco3DialogBoxContainer.style.display = 'none';
	releaseListContainer.style.display = 'flex';
	releaseListDialogBox.classList.add('flipInX');
}

var mailingSalvoBloco3DialogBoxCh2 = document.querySelector('.mailingSalvoBloco3DialogBoxCh2');
var mailingSalvoBloco3Input = document.querySelector('.mailingSalvoBloco3Input');

mailingSalvoBloco3DialogBoxCh2.onclick = function() {
	mailingSalvoBloco3Input.style.display = 'block';
}

// botão bloco3 continuar release e exibir recibo
var continuarBtnSalvoBloco3 = document.querySelector('.continuarBtnSalvoBloco3');
var reciboDialogBox = document.querySelector('.mailingConfirmWrapper');

continuarReleaseBtn.onclick = function() {
	releaseListContainer.style.display = 'none';
	reciboDialogBox.style.display = 'grid';
}

continuarBtnSalvoBloco3.onclick = function() {
	mailingSalvoBloco3DialogBoxContainer.style.display = 'none';
}

// ação bloco4
var bloco4Btn = document.querySelector('#bloco4Btn');
var etiquetasDialogBoxContainer = document.querySelector('.etiquetasDialogBoxContainer');
var etiquetasDialogBox = document.querySelector('.etiquetasDialogBox');
var continuarBtnSalvoBloco4 = document.querySelector('.continuarBtnSalvoBloco4');


bloco4Btn.onclick = function() {
	etiquetasDialogBoxContainer.style.display = 'flex';
	etiquetasDialogBox.classList.add('flipInX');
}

continuarBtnSalvoBloco4.onclick = function() {
	etiquetasDialogBoxContainer.style.display = 'none';
}

var etiquetasDialogBoxCh1 = document.querySelector('.etiquetasDialogBoxCh1');
var etiquetasDialogBoxCh2 = document.querySelector('.etiquetasDialogBoxCh2');
var inputEtiquetas = document.querySelector('.input-etiquetas');
var etiquetasBloco4Input = document.querySelector('.etiquetasBloco4Input');

etiquetasDialogBoxCh1.onclick = function() {
	inputEtiquetas.style.display = 'flex';
	etiquetasBloco4Input.style.display = 'none';
}

etiquetasDialogBoxCh2.onclick = function() {
	inputEtiquetas.style.display = 'none';
	etiquetasBloco4Input.style.display = 'flex';
}



var mailingDropdown = document.querySelector('.mailing-dropdown');
var mailingOpt = mailingDropdown.options[mailingDropdown.selectedIndex].value;


mailingDropdown.onchange = function() {
	mailingSalvoBloco3DialogBoxContainer.style.display = 'flex';
	mailingSalvoBloco3DialogBox.classList.add('flipInX');

}


// fechar janelas
var closeDialogBox1 = document.querySelector('.closeDialogBox1');
var closeDialogBox2 = document.querySelector('.closeDialogBox2');
var closeDialogBox3 = document.querySelector('.closeDialogBox3');
var closeDialogBox4 = document.querySelector('.closeDialogBox4');
var closeDialogBox5 = document.querySelector('.closeDialogBox5');

closeDialogBox1.onclick = function() {
	novoMailingContainer.style.display = 'none';
}

closeDialogBox2.onclick = function() {
	releaseListContainer.style.display = 'none';
}

closeDialogBox3.onclick = function() {
	mailingSalvoDialogBoxContainer.style.display = 'none';
}

closeDialogBox4.onclick = function() {
	mailingSalvoBloco3DialogBoxContainer.style.display = 'none';
}

closeDialogBox5.onclick = function() {
	etiquetasDialogBoxContainer.style.display = 'none';
}

