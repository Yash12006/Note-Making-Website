let button = document.getElementById('addButton');

show();
// Dispaly the notes
function show() {
    let notesObj = [];
    let notes =localStorage.getItem('notes');
    if(notes!=null)
    notesObj=JSON.parse(notes);
    if (notesObj.length != 0 ) {
        

        let html = "";
        notesObj.forEach(function (element, index) {

            html += `<div class="notecard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h3>${index}</h3>
          <p class="card-text">${element}</p>
          <button type="button" id="${index}" onclick="Delete(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`

        });
        let content = document.getElementById('container');
        content.innerHTML = html;
    }
    else {
        let content = document.getElementById('container');
        content.innerHTML = "No notes"
    }

}
button.addEventListener('click', function () {
    let text = document.getElementById('note');
    let note = text.value;
    if (note != "") {
        let notesObj = [];
        let notes = localStorage.getItem('notes');
        if (notes != null) {
            notesObj = JSON.parse(notes);
            notesObj.push(note);
            localStorage.setItem('notes', JSON.stringify(notesObj));
        }
        else {

            notesObj.push(note);
            localStorage.setItem('notes', JSON.stringify(notesObj));
        }
        show();
        text.value ="";
    }
    else {
        alert("Write Someting");
    }
});
function Delete(index) {

    let content = localStorage.getItem('notes');
    let notesObj = JSON.parse(content);
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    // console.log(notesObj+" "+index);
    show();

}

let search=document.getElementById('Searchtxt');
search.addEventListener("input",function() {
    let inputval=search.value;
    console.log(inputval);
    let notecard=document.getElementsByClassName('notecard');
    
    Array.from(notecard).forEach(function(element) {
        let cardtxt=element.getElementsByTagName('p')[0].innerText;
        console.log(typeof(cardtxt));
        if(cardtxt.includes(inputval))
        {
            element.style.display='block';
        }
        else
        element.style.display='none';
    })

})