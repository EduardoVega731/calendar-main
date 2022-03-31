let myList = [];


function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function openTask(i) {
    document.getElementById(i).style.display = "block";
}


function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function closeTask(i) {
    document.getElementById(i).style.display = "none";
}

function addItem() {
    console.log('Add Item here');
    let n = document.getElementById('myText');
    n = n.value;
    // need++;
    myList.push({ name: n, done: false });

    save();
    load();
    displayList();
}
function load() {
    const t = localStorage.getItem('TODO');
    
    let o = JSON.parse(t);
    if (o == null) o = [];
    myList = o;
   
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

function clearItem() {
    myList.splice(0, myList.length);
    console.log("working");
    // comp = 0;
    // need = 0;
    save();

    displayList();
}
function remove(i) {
    myList.splice(i, 1);
    // need--;
    save();
    load();
    displayList();
}
function done(i) {
    let text = document.getElementsByClassName("text");
    let checkboxes = document.getElementsByClassName('todo-item')
    // https://www.designcise.com/web/tutorial/how-to-toggle-a-checkbox-using-javascript
    myList[i].done = checkboxes[i].checked

    // condition ? true : false
    text[i].style.color = checkboxes[i].checked ? "green" : "red";
    text[i].style.textDecoration = checkboxes[i].checked ? "line-through" : "none";

    save();
}
function save() {
    const t = JSON.stringify(myList);
    localStorage.setItem('TODO', t);
    // localStorage.setItem('Count', comp);
    // localStorage.setItem('need', need);
    // setData('/default', myList);
}
function displayList() {
    let div = document.getElementById('mydiv');
    let h = '';
    if (myList && myList.length) {
        h = '<ul>\r\n';

        console.log(myList)
        i = 0;
        for (let li of myList) {
            console.log(li.name);
            // h += '<li>' + li.name + " " + " " + '<button onclick="done(' + i + ')">do</button>' + " " + " " + '<button onclick="remove(' + i + ')">X</button>' + '</li>\r\n';
            // i++;
            h +=
                `<li class="text" style="color:${li.done ? "green" : "red"}; text-decoration: ${li.done ? "line-through" : "none"};"> <input class="todo-item" type="checkbox" id="don-btn" onclick="done(${i})" ${li.done ? "checked" : ""}>`
                + li.name +
                `<span class="del-btn" onclick="remove(${i})">&#9003</span>
            </li> `;
        }
        h += '</ul>';
        div.innerHTML = '' + h;
    } else {
        div.innerHTML = '<p>No tasks to display</p>';
    }
    console.log("Here is the html: ", h)
    // let coun = document.getElementById("countUp");
    // coun.innerHTML = need;
    // let down = document.getElementById("countDown");
    // down.innerHTML = comp;
}

function onload(){
    load();
    displayList();
}

this.document.onload = onload();