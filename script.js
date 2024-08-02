const rodInput = document.querySelector('#RodInput');
const povolaniInput = document.querySelector('#PovolaniInput');
const rasaInput = document.querySelector('#RasaInput');

rodInput.addEventListener('change', updateRodImg);
povolaniInput.addEventListener('change', updatePovolaniImg);
rasaInput.addEventListener('change', updateRasaImg);

function updateRodImg() {
  console.log('update url');
  const inputValue = RodInput.value.toLowerCase().trim();
      if (inputValue === 'muz') {
          RodDiv.innerHTML = '<img src="image/muz.jpg" alt="Muz">';
      } else if (inputValue === 'zena') {
          RodDiv.innerHTML = '<img src="image/zena.jpg" alt="Zena">';
      } else {
          RodDiv.innerHTML = '';
      }
}

function updateRasaImg() {
  console.log('update url');
  const inputValue = RasaInput.value.toLowerCase().trim();
      if (inputValue === 'clovek') {
          RasaDiv.innerHTML = '<img src="image/clovek.jpg" alt="Clovek">';
      } else if (inputValue === 'elf') {
          RasaDiv.innerHTML = '<img src="image/elf.jpg" alt="Elf">';
      }  else if (inputValue === 'trpaslik') {
          RasaDiv.innerHTML = '<img src="image/trp.jpg" alt="Trpaslik">';
      } else if (inputValue === 'hobit') {
          RasaDiv.innerHTML = '<img src="image/hobit.jpg" alt="Hobit">';
      } else if (inputValue === 'tifling') {
          RasaDiv.innerHTML = '<img src="image/tifling.jpg" alt="Tifling">';
      } else {
          RasaDiv.innerHTML = '';
      }
}

function updatePovolaniImg() {
  console.log('update url');
  const inputValue = PovolaniInput.value.toLowerCase().trim();
      if (inputValue === 'carodej') {
          PovolaniDiv.innerHTML = '<img src="image/wizard.jpg" alt="Muz">';
      } else if (inputValue === 'bojovnik') {
          PovolaniDiv.innerHTML = '<img src="image/bojovnik.jpg" alt="Zena">';
      } else if (inputValue === 'kouzelnik') {
          PovolaniDiv.innerHTML = '<img src="image/kouzelnik.jpg" alt="Zena">';
      } else if (inputValue === 'palladin') {
          PovolaniDiv.innerHTML = '<img src="image/palladin.jpg" alt="Zena">';
      } else if (inputValue === 'bard') {
          PovolaniDiv.innerHTML = '<img src="image/bard.jpg" alt="Zena">';
      } else if (inputValue === 'druid') {
          PovolaniDiv.innerHTML = '<img src="image/druid.jpg" alt="Zena">';
      } else {
          PovolaniDiv.innerHTML = '';
      }
}

//
//
//

// const rButton = document.querySelector('#RasaBtn');
// const pButton = document.querySelector('#PovolaniBtn');
// const popButton = document.querySelector('#PopisBtn');


// rButton.addEventListener('click', rasy);
// pButton.addEventListener('click', povolani);
// popButton.addEventListener('click', popisy);

// function rasy() {
//   window.location.href = 'rasy.html';
//   console.log('swag');
// }

// function povolani() {
//   window.location.href = 'povolani.html';
// }

// function popisy() {
//   window.location.href = 'popis.html';
// }