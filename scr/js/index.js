function createsCard (products) {
    const divBody = document.createElement('div');
    divBody.setAttribute('class', 'cards__card');

    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'card__img');

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.setAttribute('class', 'card__imgFavorite');

    const hr = document.createElement('hr');

    const divInformation = document.createElement('div');
    divInformation.setAttribute('class', 'card__information');

    const h4 = document.createElement('h4');

    const divCardValues = document.createElement('div');
    divCardValues.setAttribute('class', 'card__values');

    const pPrice = document.createElement('p');
    pPrice.setAttribute('class', 'card__price');

    const pOffers = document.createElement('p');
    pOffers.setAttribute('class', 'card__offers');

    const divBtn = document.createElement('div');
    divBtn.setAttribute('class', 'card__btns');

    const buttonAdd =  document.createElement('button');
    buttonAdd.setAttribute('class', 'card__btn card__btn--add');

    const buttonCard = document.createElement('button');
    buttonCard.setAttribute('class', 'card__btn card__btn--card');

    divBody.appendChild(divContent);
    divBody.appendChild(hr);
    divBody.appendChild(divInformation);
    divBody.appendChild(divBtn);

    divContent.appendChild(figure);

    figure.appendChild(img);

    divInformation.appendChild(h4);
    divInformation.appendChild(divCardValues);

    divCardValues.appendChild(pPrice);
    divCardValues.appendChild(pOffers);

    divBtn.appendChild(buttonAdd);
    divBtn.appendChild(buttonCard);

    return divBody
}
createsCard(products)