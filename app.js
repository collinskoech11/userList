class User{
    constructor (name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
}

class UI{
    addUserTolist(user){
        const list = document.getElementById('user-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td><a href="" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }
    showAlert(message,className){
        const div = document.createElement('div');
        //add className
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        //get form
        const form = document.querySelector('#user-form');
        //insert alert
        container.insertBefore(div,form);
        //timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    
    }
    deleteBook(target){
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}

//event listening
document.getElementById('user-form').addEventListener('submit',function(e)
     //get form values
    {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password= document.getElementById('password').value;
        //instantiate user
        const user = new User(name,email,password);
        //instantiate ui
        const ui = new UI();
        //validate
        if(name=== '' || email === '' || password === ''){
            //error alert
            ui.showAlert('please fill in all fields','error');
        }
        else{
            //add user to list
            ui.addUserTolist(user);
            //show success
            ui.showAlert('User Added','success');
            //clear fields
            ui.clearFields();
        }
        e.preventDefault();
    })

//event listening for delete
document.getElementById('user-list').addEventListener('click',function(e){
    //instantiate UL
    const ui = new UI();
    //DELETE BOOK
    ui.deleteUser(e.target);
    //show message
    ui.showAlert('User removed!' ,'success');

    e.preventDefault();
});  







