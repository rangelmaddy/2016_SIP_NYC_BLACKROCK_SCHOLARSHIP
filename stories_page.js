function get_user_name() {
    var user_name = new Array;

    var user_name_str = localStorage.getItem('user_name');

    if (user_name_str !== null) {
        user_name = JSON.parse(user_name_str);

    }
    return user_name;
}

function get_scholarships(){
    var scholarships = new Array;
    var scholarships_str = localStorage.getItem('scholarship');
    if(scholarships_str !== null){
      scholarships = JSON.parse(scholarships_str);
    }
    return scholarships;
}

function addUsern() {
    var name = document.getElementById('name').value;
    var task = document.getElementById('task').value;


    var user_name = get_user_name();
    user_name.push(name);
    localStorage.setItem('user_name', JSON.stringify(user_name));

    var scholarships = get_scholarships();
    scholarships.push(task);
    localStorage.setItem('scholarship', JSON.stringify(scholarships));



    showUsern();

    return false;
}

function removeUsern() {
    var id = this.getAttribute('id');

    var user_name = get_user_name();
    user_name.splice(id, 1);
    localStorage.setItem('user_name', JSON.stringify(user_name));

    var scholarships = get_scholarships();
    scholarships.splice(id, 1);
    localStorage.setItem('scholarship', JSON.stringify(scholarships));

    showUsern();

    return false;
}

function showUsern() {
    var user_name = get_user_name();
    var scholarships = get_scholarships();

    var html = '<ul>';

    for(var i=0; i<user_name.length; i++) {
        html += '<li style="list-style-type: none; font-family: ‘Arial Narrow’, sans-serif; font-size: 18px; font-weight:lighter;" >'+'Name: ' + user_name[i]+'<br>'
        + 'Scholarship description: ' + scholarships[i] + '<br>' + '<br>'+ '<div class = "container"><button class="btn btn-info btn-block removeUsern" id="' + i  + '">delete</button></div></li>' + '<br>' + '<br>';
    };
    html += '</ul>';


    document.getElementById('user_name').innerHTML = html;


    var buttons = document.getElementsByClassName('removeUsern');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeUsern);
    };
};






document.getElementById('addUsern').addEventListener('click', addUsern);

showUsern();
