
function alerttime(){ 
    window.onload = setTimeout(function(){
      alert('Bem vindo ao site CarWash');}, 5000);
}

$("#myform").submit(function(e) {
  // Prevent form submission
  e.preventDefault();

  // Clear previous error messages
  $(".error").remove();

  // Validate fields
  let valid = true;

  if ($("#first_name").val() === "") {
    $("#first_name").after('<p class="error">Please enter your first name</p>');
    valid = false;
  }

  if ($("#apelido_form").val() === "") {
    $("#apelido_form").after('<p class="error">Please enter your last name</p>');
    valid = false;
  }

  let email = $("#email_form").val();
  if (email === "") {
    $("#email_form").after('<p class="error">Please enter your email</p>');
    valid = false;
  } else {
// email format validation
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
 $("#email_form").after('<p class="error">Por favor digite seu Email corretamente</p>');
 valid = false;
}
}

let phone = $("#telemovel_form").val();
if (phone === "") {
$("#telemovel_form").after('<p class="error">Por favor, digite seu número</p>');
valid = false;
}
else {
// Validate phone number format (9 digits starting with "91")
let phonePattern = /^91\d{7}$/;
if (!phonePattern.test(phone)) {
  $("#telemovel_form").after('<p class="error">Telemove (9 digitos e comece por 91)</p>');
  valid = false;
}
}
if ($("#box_mensagem").val() === "") {
$("#box_mensagem").after('<p class="error">Por favor, Escreva uma mensagem!</p>');
valid = false;
}
if (valid) {
// If all fields are valid, you can submit the form
alert("Formulário submetido com sucesso!");
}
/*  */
});

// ajax div //
var contentDiv = document.getElementById('ajaxdiv');
function loadAjax() {
  const xhr = new XMLHttpRequest();
  
  
  xhr.open('GET', '../conteudo.html', true);
  
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          contentDiv.innerHTML = xhr.responseText;
      }
  };
  
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('togglebtn');

  
  toggleButton.addEventListener('click', function() {
      contentDiv.classList.toggle('hidden');
      if (!contentDiv.classList.contains('hidden')) {
          loadAjax();
      }
  });
  
  
});


  // RSS FEED
  const news = $("#rssFeed");
  $.ajax({
    url:  "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    method: "GET",
    dataType: "xml",
    success: function(xmlData) {
      parseAndDisplayNews(xmlData, news);
    },
    error: function() {
      newsContainer.html("Error loading news.");
    }
  });
  /* RSS Parse Xml data function */
  function parseAndDisplayNews(xmlData, container) {
    const items = $(xmlData).find("item");
  
    let newsHTML = "";
    items.each(function() {
      const title = $(this).find("title").text();
      const link = $(this).find("link").text();
      const description = $(this).find("description").text();
  
      newsHTML += `
        <div class="news-item">
          <h2><a href="${link}" target="_blank">${title}</a></h2>
          <p>${description}</p>
        </div>
      `;
    });
  
    container.html(newsHTML);
  }

/* Side Content */
$(".toggleSlide").click(function() {
  var slideContent = $(".side-content");
  var currentPosition = parseInt(slideContent.css("right"));

  if (currentPosition === 0) {
    slideContent.css("right", "-300px"); // Slide out
  } else {
    slideContent.css("right", "0"); // Slide in
  }
});

$(".close").click(function() {
  var slideContent = $(".side-content");
  var currentPosition = parseInt(slideContent.css("right"));

  if (currentPosition === 0) {
    slideContent.css("right", "-300px"); // Slide out
  } else {
    slideContent.css("right", "0"); // Slide in
  }
});

// DEADLINES

// DEADLINES

function calcularDesconto(estimativa) {
  const maxDiscountMonths = 4;
  const maxDiscountPercentage = 20;
  const discountPercentagePerMonth = 5;

  if (estimativa > maxDiscountMonths) {
    return maxDiscountPercentage;
  } else {
    const totalDiscount = Math.min(estimativa * discountPercentagePerMonth, maxDiscountPercentage);
    return totalDiscount;
  }
}

const valoresViaturas = {
  'opt1': 100, // Carro ligeiro
  'opt2': 150, // Carrinha ligeira
  'opt3': 200  // Veículo pesado
};

function calcularValorEstimado() {
  const servicos = {
    'ilavagem': 400,       // Valor da lavagem
    'ipolimento': 400,    // Valor do polimento
    'ibatechapa': 400,    // Valor do bate-chapa
    'ipintura': 400       // Valor da pintura
  };

  const viaturaSelect = document.getElementById('viatura_form');
  const valorViatura = valoresViaturas[viaturaSelect.value]; // Obter valor da viatura

  let valorTotal = valorViatura; // Começar com o valor da viatura

  const checkboxes = document.querySelectorAll('.checkboxitems');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const servico = checkbox.name;
      valorTotal += servicos[servico];
    }
  });

  const estimativaInput = document.getElementById('deadline');
  const estimativa = parseFloat(estimativaInput.value);

  const desconto = calcularDesconto(estimativa);
  const valorDesconto = (valorTotal * desconto) / 100;
  valorTotal -= valorDesconto;

  const precoInput = document.getElementById('preco_form');
  if (!isNaN(valorTotal)) {
    precoInput.value = valorTotal.toFixed(2) + ' €';
  } else {
    precoInput.value = '0.00 €';
  }
}

const checkboxes = document.querySelectorAll('.checkboxitems');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', calcularValorEstimado);
});

const estimativaInput = document.getElementById('deadline');
estimativaInput.addEventListener('input', calcularValorEstimado);

calcularValorEstimado();

