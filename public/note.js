let ul = document.getElementById('days');
let listItems = ul.getElementsByTagName('li');
let currentDay = -1;
let myList

function setDay(day) {
    if (currentDay != -1) {
        listItems[currentDay-1].className = "";
    }
   
    currentDay = day
    listItems[currentDay-1].className= "activeDay";
    displayList();
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function openTask() {
    document.getElementById("tasks").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function closeTask() {
    document.getElementById("tasks").style.display = "none";
}

function addItem() {
    console.log('Add Item here');
    let n = document.getElementById('myText');
    n = n.value;

    console.log(currentDay);
    myList[currentDay - 1].push({name: n, done: false});

    console.log(myList);
    save();
    // load();
    displayList();
}

function displayList() {
    let div = document.getElementById('mydiv');
    let h = '';
    if (myList[currentDay-1] && myList[currentDay-1].length) {
        h = '<ul>\r\n';

        console.log(myList)
        i = 0;
        for (let li of myList[currentDay-1]) {
            h +=
                `<li class="text" style="color:${li.done ? "green" : "red"}; text-decoration: ${li.done ? "line-through" : "none"};"> <input class="todo-item" type="checkbox" id="don-btn" onclick="done(${i})" ${li.done ? "checked" : ""}>`
                + li.name +
                `<span class="del-btn" onclick="remove(${i})">&#9003</span>
            </li> `;
            i++;
        }
        h += '</ul>';
        div.innerHTML = 'Tasks:' + h;
    } else {
        div.innerHTML = '<p>No tasks to display</p>';
    }
}

function remove(i) {
    myList[currentDay-1].splice(i, 1);


    save();
    load();
    displayList();
}

function done(i) {
    let text = document.getElementsByClassName("text");
    console.log(text);
    let checkboxes = document.getElementsByClassName('todo-item')
    // https://www.designcise.com/web/tutorial/how-to-toggle-a-checkbox-using-javascript
    myList[currentDay-1][i].done = checkboxes[i].checked

    // condition ? true : false
    text[i].style.color = checkboxes[i].checked ? "green" : "red";
    text[i].style.textDecoration = checkboxes[i].checked ? "line-through" : "none";

    save();
}

function save() {
    const t = JSON.stringify(myList);
    localStorage.setItem('TODO', t);
    // setData('/default', myList);
}

function load() {
    const t = localStorage.getItem('TODO');

    let o = JSON.parse(t);
    if (o == null) {
        o = new Array(32);
        for (var i = 0; i < o.length; i++) {
            o[i] = [];
        }
    }
    myList = o;
    console.log(myList)

    displayList();
    if (!flag) {
        flag = true;
        watchData('/default', data => {
            if (data != null) {
                myList - data;
            }
            displayList();
        });
    }
}

// function remove(i) {
//     myList[currentDay-1].splice(i, 1);


//     save();
//     load();
//     displayList();
// }

// function done(i) {
//     let text = document.getElementsByClassName("text");
//     console.log(text);
//     let checkboxes = document.getElementsByClassName('todo-item')
//     // https://www.designcise.com/web/tutorial/how-to-toggle-a-checkbox-using-javascript
//     myList[currentDay-1][i].done = checkboxes[i].checked

//     // condition ? true : false
//     text[i].style.color = checkboxes[i].checked ? "green" : "red";
//     text[i].style.textDecoration = checkboxes[i].checked ? "line-through" : "none";

//     save();
// }

// function save() {
//     const t = JSON.stringify(myList);
//     localStorage.setItem('TODO', t);
//     // setData('/default', myList);
// }

// function displayList() {
//     let div = document.getElementById('mydiv');
//     let h = '';
//     if (myList[currentDay-1] && myList[currentDay-1].length) {
//         h = '<ul>\r\n';

//         console.log(myList)
//         i = 0;
//         for (let li of myList[currentDay-1]) {
//             h +=
//                 `<li class="text" style="color:${li.done ? "green" : "red"}; text-decoration: ${li.done ? "line-through" : "none"};"> <input class="todo-item" type="checkbox" id="don-btn" onclick="done(${i})" ${li.done ? "checked" : ""}>`
//                 + li.name +
//                 `<span class="del-btn" onclick="remove(${i})">&#9003</span>
//             </li> `;
//             i++;
//         }
//         h += '</ul>';
//         div.innerHTML = 'Tasks:' + h;
//     } else {
//         div.innerHTML = '<p>No tasks to display</p>';
//     }
// }

function onload() {
    load();
    displayList();
}

this.document.onload = onload();