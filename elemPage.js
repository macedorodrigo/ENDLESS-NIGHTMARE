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

const button = (id, href, text) => {
  const button = document.createElement('a');
  button.setAttribute("id", id);
  button.setAttribute('href', href);
  button.innerHTML = text;
  button.setAttribute('href', name);
  document.body.appendChild(button);
}

export {
  title,
  subTile,
  paragraph,
  button,
}
