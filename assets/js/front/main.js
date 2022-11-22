import {data1} from "../common/data";
import '../../../public/assets/css/style..css';

let todo = document.getElementById('Todo');
let divIn = document.getElementById('divInput');
let insert = document.getElementById('insert');
let add = document.getElementById('puching');
let clearItems = document.getElementById('clear');
let result = document.getElementById('result');
let resultId = 1;



add.style.color = 'red'; // test



function addList() {

    if(insert.value !== '') {

        // creat 3 div
        let lister = document.createElement('div');
        let listD = document.createElement('div');
        let listG = document.createElement('div');
        let good = document.createElement('i');
        let comment = document.createElement('i');
        let trash = document.createElement('i');

        lister.id = resultId;

        good.className = 'fa-solid fa-check';
        comment.className= 'fa-solid fa-pen-to-square';
        trash.className = 'fa-solid fa-trash-can';

        result.append(lister);

        lister.prepend(listG);
        lister.append(listD);

        listD.append(good);
        listD.append(comment);
        listD.append(trash);

        lister.style.width = '99%';
        lister.style.height = '40px';
        lister.style.borderRadius = '5px';
        lister.style.marginTop = '5px';
        lister.style.backgroundColor = '#bfbfed';
        lister.style.display = 'flex';


        //div Left
        listG.style.width = '70%';
        listG.style.height = '99%';
        listG.style.borderRight = '1px solid black';
        listG.innerHTML = insert.value;
        listG.id = 'text' + resultId;

        //div Right
        listD.style.width = '29%';
        listD.style.height = '99%';
        listD.style.display = 'flex';
        listD.style.flexDirection = 'row';
        listD.style.justifyContent = 'space-evenly';
        listD.style.alignItems = 'center';

        good.style.color = 'green';
        comment.style.color = 'blue';
        trash.style.color = 'red';

        insert.value = '';


        function cleaning() {

            lister.remove();

        }
        clearItems.addEventListener('click', cleaning);

        resultId++;

        function dele () {
            listG.parentNode.remove();
        }

        function modif () {
            listG.setAttribute('contenteditable', 'true');
            listG.focus();
            listG.addEventListener('keydown', (event) => {
                let keyName = event.key;
                if(keyName === 'Enter') {
                    listG.setAttribute('contenteditable', 'false');
                }
                else {

                }
            })

        }

        function bare () {
            listG.classList.toggle('textB');
        }

        good.addEventListener('click', bare);
        comment.addEventListener('click', modif);
        trash.addEventListener('click', dele);
    }

    else {

        let para = document.createElement('p');
        para.innerHTML = "vous devez écrire dans le champ";
        para.style.color = 'red';
        para.style.textAlign = 'center';
        divIn.append(para);



        function cleaning() {

            para.remove();

        }
        clearItems.addEventListener('click', cleaning);
    }
}




add.addEventListener('click',addList);
