let todoName = document.getElementById('todo-name');
let btnSimpan = document.getElementById('btn-simpan');

btnSimpan.addEventListener('click', function() {
    if (todoName.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todolist Harus Diisi',
            footer: 'Silahkan Masukkan Todolist!!!'
        })
    } else {
        let todoContainer = document.querySelector('.list-group');
        let todoHTML = todoContainer.innerHTML
        todoHTML += `
        <li class="list-group-item list-group-item-primary d-flex justify-content-between mb-2 rounded">
            <div>
                <input class="form-check-input me-1" type="checkbox" id="firstCheckbox">
                <label class="form-check-label" for="firstCheckbox"><span>${todoName.value}</span></label>
            </div>
            <button class="badge border-0 bg-danger btn-hapus">X</button>
        </li>`;
    
        todoContainer.innerHTML = todoHTML;
        
        todoName.value = '';
    
        todoName.focus();
    
        let checkTodo = document.querySelectorAll('.form-check-input');
        for (let i = 0; i < checkTodo.length; i++) {
            const input = checkTodo[i];
            input.addEventListener('change', function() {
                let todoSpan = input.nextElementSibling;
                todoSpan.classList.toggle('text-decoration-line-through');
            })
        }
    
        let btnHapus = document.querySelectorAll('.btn-hapus');
        for (let x = 0; x < btnHapus.length; x++) {
            const hapus = btnHapus[x];
            hapus.addEventListener('click', function() {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your todolist has been deleted.',
                            'success'
                            )
                            this.parentElement.remove();
                        }
                    })
            })
        }
    }
})