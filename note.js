let myList = [];
let comp = 0;
let need = 0;

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

function listToScreen() {
    let c = "";
    for (let l of myList) {
        c += `<li>${l.text}</li>\r\n`;
    }
    document.getElementById("List1").innerHTML = c;
}
function addItem() {
    console.log('Add Item here');
    let n = document.getElementById('myText');
    n = n.value;
    need++;
    myList.push({ name: n });
    save();
    displayList();
}
function load() {
    const t = localStorage.getItem('TODO');
    const update = localStorage.getItem('Count')
    const k = localStorage.getItem('need')
    let o = JSON.parse(t);
    if (o == null) o = [];
    myList = o;
    comp = update;
    need = k;
    displayList();
    if (!flag){
        flag = true;
        watchData('/default', data =>{
            if (data != null){
                myList - data;
            }
            displayList();
        });
    }
}

function clearItem() {
    myList.splice(0, myList.length);
    console.log("working");
    comp = 0;
    need = 0;
    save();
    displayList();
}
function remove(i) {
    myList.splice(i, 1);
    need--;
    save();
    displayList();
}
function done(i) {
    comp++;
    need--;
    myList[i].name += ' -DONE';
    save();
    displayList();
}
function save() {
    const t = JSON.stringify(myList);
    localStorage.setItem('TODO', t);
    localStorage.setItem('Count', comp);
    localStorage.setItem('need', need);
    setData('/default', myList);
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
            h += '<li>' + li.name + " " + " " + '<button onclick="done(' + i + ')">do</button>' + " " + " " + '<button onclick="remove(' + i + ')">X</button>' + '</li>\r\n';
            i++;
        }
        h += '</ul>';
        div.innerHTML = '<h1>Here is the List:</h1>' + h;
    } else {
        div.innerHTML = '<h1> Enter something</h1>';
    }
    console.log("Here is the html: ", h)
    let coun = document.getElementById("countUp");
    coun.innerHTML = need;
    let down = document.getElementById("countDown");
    down.innerHTML = comp;
}
this.document.onload = load();