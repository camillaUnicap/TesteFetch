function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
// const url = 'https://randomuser.me/api/?results=10';
const url = 'https://dog.ceo/api/breeds/image/random';

// function exibir() {
//     fetch(url)
//     .then((resp) => resp.json())
//     .then(function (data) {
//         let authors = data.results;
//         return authors.map(function (author) {
//             let li = createNode('li');
//             let img = createNode('img');
//             let span = createNode('ul');
//             img.src = author.picture.medium;
//             span.innerHTML = `${author.name.first} ${author.name.last}`;
//             append(li, span);
//             append(ul, li);
//             append(li, img);
//         })
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

    function exibir() {
        fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let authors = data;
                let li = createNode('li');
                let img = createNode('img');
                let span = createNode('ul');
                img.src = authors.message;
                span.innerHTML = `${authors.status}`;
                append(li, span);
                append(ul, li);
                append(li, img);
           
        })
        .catch(function (error) {
            console.log(error);
        });
}
