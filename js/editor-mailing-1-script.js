    var topicCurtain = document.querySelector('#ListaFiltroTopico');
//script abrir curtina topico de filtros
  function TopicListCurtain() {
    if (topicCurtain.style.display === "none") {
      topicCurtain.style.display = "flex";
    } else {
      topicCurtain.style.display = "none";
    }
  }
//final script abrir curtina topico de filtros


// blocos editoria 100% e 50%
  var hoverCheckEditoriaFt = document.querySelector(".blocoEditoriaFirst");
  var hoverCheckEditoriaSec = document.querySelector(".blocoEditoria2Sec");
  var dardo50 = document.querySelector('#editoriaTargetIconDardo50');
  var dardo100 = document.querySelector('#editoriaTargetIconDardo100');
  var dardo50Enable = true;
  var dardo100Enable = false;

  hoverCheckEditoriaFt.onmouseover = function() {
    if (dardo50Enable === true) {
      dardo100.style.display = 'block';
      dardo100.style.opacity = '0.3';
    }
  }

    hoverCheckEditoriaFt.onmouseout = function() {
      if (dardo50Enable === true) {
        dardo100.style.display = 'none';
      }
  }

    hoverCheckEditoriaSec.onmouseover = function() {
      if (dardo100Enable === true) {
    dardo50.style.display = 'block';
    dardo50.style.opacity = '0.3';
      }
  }

    hoverCheckEditoriaSec.onmouseout = function() {
      if (dardo100Enable === true) {
    dardo50.style.display = 'none';
      }
  }

    hoverCheckEditoriaFt.onclick = function() {
      dardo100Enable = true;
      dardo50Enable = false;
      dardo100.style.display = 'block';
      dardo100.style.opacity = '1';
      dardo50.style.display = 'none';
      dardo50.style.opacity = '1';
  }

    hoverCheckEditoriaSec.onclick = function() {
      dardo100Enable = false;
      dardo50Enable = true;
      dardo50.style.display = 'block';
      dardo50.style.opacity = '1';
      dardo100.style.display = 'none';
      dardo100.style.opacity = '1';
  }
  // fim blocos editoria 100% e 50%


  // girar ponteiro
  var girarPonteiro = document.querySelector('#ponteiro');
  var cont = document.querySelector('#graphicNumber');
  girarPonteiro.style.transform = "rotate(-90deg)";

  if (cont.textContent <= 0) {
      girarPonteiro.style.transform = "rotate(-90deg)";
  } else if (cont.textContent >= 1 && cont.textContent <= 100) {
      girarPonteiro.style.transform = "rotate(-85deg)";
  } else if (cont.textContent >= 101 && cont.textContent <= 200) {
      girarPonteiro.style.transform = "rotate(-80deg)";
  } else if (cont.textContent >= 201 && cont.textContent <= 300) {
      girarPonteiro.style.transform = "rotate(-61deg)";
  } else if (cont.textContent >= 301 && cont.textContent <= 400) {
      girarPonteiro.style.transform = "rotate(-50deg)";
  } else if (cont.textContent >= 401 && cont.textContent <= 500) {
      girarPonteiro.style.transform = "rotate(-40deg)";
  } else if (cont.textContent >= 501 && cont.textContent <= 1000) {
      girarPonteiro.style.transform = "rotate(-20deg)";
  } else if (cont.textContent >= 1001 && cont.textContent <= 2000) {
      girarPonteiro.style.transform = "rotate(0deg)";
  } else if (cont.textContent >= 2001 && cont.textContent <= 2600) {
      girarPonteiro.style.transform = "rotate(10deg)";
  } else if (cont.textContent >= 2601 && cont.textContent <= 3000) {
      girarPonteiro.style.transform = "rotate(35deg)";
  } else if (cont.textContent >= 3001 && cont.textContent <= 3500) {
      girarPonteiro.style.transform = "rotate(45deg)";
  } else if (cont.textContent >= 3501 && cont.textContent <= 4000) {
      girarPonteiro.style.transform = "rotate(55deg)";
  } else if (cont.textContent >= 4001 && cont.textContent <= 4500) {
      girarPonteiro.style.transform = "rotate(65deg)";
  } else if (cont.textContent >= 4501 && cont.textContent <= 4900) {
      girarPonteiro.style.transform = "rotate(77deg)";
  } else {
      girarPonteiro.style.transform = "rotate(90deg)";
  }
// girar ponteiro




// fechar dialog boxes
    
var dialogBox = document.querySelector('.DialogBox');
var alertDialogBox = document.querySelector('.alertDialogBox');
var maskBox = document.querySelector('.alertDialogBoxMask');
function fecharDialogBox() {
  dialogBox.style.display = ('none');
}

function fecharAlertDialogBox() {
  alertDialogBox.style.display = ('none');
  maskBox.style.display = ('none');
}

var dialogBoxTimer10 = setTimeout(FecharDialogAutomatic, 10500);
var dialogBoxFader = setTimeout(FecharDialogAutomaticFader, 10000);

function FecharDialogAutomaticFader() {
  dialogBox.style.transition = '0.5s ease-out';
  dialogBox.style.opacity = '0';
}

function FecharDialogAutomatic() {
  dialogBox.style.display = ('none');
}

  // animação item check icon
  var filterItemBoxIncluir = document.getElementById("hoverItemFiltrosIncluir");
  var checkIconIncluir = document.getElementById("baseBoxItemIconCheckIncluir");
  var closeIconIncluir = document.getElementById("baseBoxItemIconCloseIncluir");

  filterItemBoxIncluir.onmouseover = function() {   
    checkIconIncluir.style.width = "0px";
    closeIconIncluir.style.width = "14px";
    closeIconIncluir.style.height = "14px";
    closeIconIncluir.style.opacity = "1";
    checkIconIncluir.style.opacity = "0";
  }

  filterItemBoxIncluir.onmouseout = function() {   
    checkIconIncluir.style.width = "17px";
    closeIconIncluir.style.width = "0px";
    closeIconIncluir.style.opacity = "0";
    checkIconIncluir.style.opacity = "1";
  }

// ação click para apagar item do filtro
  filterItemBoxIncluir.onclick = function() {
    filterItemBoxIncluir.parentNode.removeChild(filterItemBoxIncluir);
  }
// fim ação click para apagar item do filtro


// animação item check icon
  var filterItemBox = document.getElementById("hoverItemFiltros");
  var checkIcon = document.getElementById("baseBoxItemIconCheck");
  var closeIcon = document.getElementById("baseBoxItemIconClose");

  filterItemBox.onmouseover = function() {   
    checkIcon.style.width = "0px";
    closeIcon.style.width = "14px";
    closeIcon.style.height = "14px";
    closeIcon.style.opacity = "1";
    checkIcon.style.opacity = "0";
  }

  filterItemBox.onmouseout = function() {   
    checkIcon.style.width = "17px";
    closeIcon.style.width = "0px";
    closeIcon.style.opacity = "0";
    checkIcon.style.opacity = "1";
  }



// ação click para apagar item do filtro
  filterItemBox.onclick = function() {
    filterItemBox.parentNode.removeChild(filterItemBox);
  }
// fim ação click para apagar item do filtro

// fim animação item check icon




// abrir e fechar abas dos filtros
  function TopicListAbasCurtain1(obj) {
    console.dir(obj);
    var o = obj.parentNode.parentNode.parentNode;
    var topicCurtain = o.getElementsByClassName('baseAbasBoxItemWrapperIncluir')[0];
    var borderCorrect = o.getElementsByClassName('baseAbasBoxTitleIncluir')[0];
    if (topicCurtain.style.display === "none") {
      topicCurtain.style.display = "flex";

    } else {
      topicCurtain.style.display = "none";

    }
  }
// fim abrir e fechar abas dos filtros



// abrir e fechar abas dos filtros editoria
  function TopicListAbasCurtain2(obj) {
    var o = obj.parentNode.parentNode.parentNode;
    var topicCurtain = o.getElementsByClassName('baseAbasBoxItemWrapperEditoria')[0];
    var borderCorrect = o.getElementsByClassName('baseAbasBoxTitleEditoria')[0];
    if (topicCurtain.style.display === "none") {
      topicCurtain.style.display = "flex";

    } else {
      topicCurtain.style.display = "none";

    }
  }
// fim abrir e fechar abas dos filtros editoria


// excluir janelas de filtros das abas

var fecharFiltroEditoria = document.querySelector('.FecharJanelaEditoria');
var janelaFiltroAbaEditoria = document.querySelector('.filtrosAbasBoxWrapperEditoria');
fecharFiltroEditoria.onclick = function() {
    janelaFiltroAbaEditoria.parentNode.removeChild(janelaFiltroAbaEditoria);
}


var fecharFiltro = document.querySelector('.FecharJanela');
var janelaFiltroAba = document.querySelector('.filtrosAbasBoxWrapperIncluir');
fecharFiltro.onclick = function() {
    janelaFiltroAba.parentNode.removeChild(janelaFiltroAba);
}


// excluir janelas de filtros das abas
var fecharFiltro1 = document.querySelector('.fecharJanela1');
var janelaFiltroAbaExcluir = document.querySelector('.filtrosExcluirAbasBoxWrapper');
fecharFiltro1.onclick = function() {
    janelaFiltroAbaExcluir.parentNode.removeChild(janelaFiltroAbaExcluir);
}



// abrir e fechar abas dos filtros
  function TopicListAbasCurtain() {
    var topicCurtain = document.querySelector('#baseAbasBoxItemWrapper');
    var borderCorrect = document.querySelector('.baseAbasBoxTitle');
    if (topicCurtain.style.display === "none") {
      topicCurtain.style.display = "flex";
      borderCorrect.style.borderBottom = '1px solid #4d4d4d';

    } else {
      topicCurtain.style.display = "none";
      borderCorrect.style.borderBottom = '2px solid #4d4d4d';

    }
  }
// fim abrir e fechar abas dos filtros