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

export {
  title,
  subTile,
  paragraph,
}
