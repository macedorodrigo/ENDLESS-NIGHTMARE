const title = (text) => {
  const title = document.createElement('h1');
  title.innerHTML = text;
  document.body.appendChild(title);
}

const subTile = (text) => {
  const subTile = document.createElement('h4');
  subTile.innerHTML = text
  document.body.appendChild(subTile);
}

const paragraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  document.body.appendChild(paragraph);
}

const button = (text) => {
  const button = document.createElement('button');
  button.innerHTML = text;
  button.setAttribute('type', 'submit'); // Define o tipo do botão como "submit"
  button.setAttribute('name', 'submit-button'); // Define o nome do botão como "submit-button"
  button.setAttribute('disabled', ''); // Desabilita o botão
  button.style.color = 'red'; // Define a cor do texto do botão como vermelho
  document.body.appendChild(button);
}

export {
  title,
  subTile,
  paragraph,
  button,
}
