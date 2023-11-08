document.getElementById('cadastroForm').addEventListener('submit', cadastrarLivro);
var result = 0;
function cadastrarLivro(event) {
    event.preventDefault();

    const name = document.getElementById('descricao').value;
    const plataform = document.getElementById('isbn').value;

    fetch('http://localhost:8080/livro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isbn, descricao }),
    })
        .then(response => response.json())
        .then(data => {
            alert('Livro cadastrado com sucesso!');
            document.getElementById('cadastroForm').reset();            
        })
        .catch(error => {
            console.error('Erro ao cadastrar livro:', error);
        });
}
function pesquisarLivro() {
    const searchId = document.getElementById('searchId').value;

    fetch(`http://localhost:8080/livro/${searchId}`)
        .then(response => {
            if (response.status === 404) {
                return Promise.reject('Livro não encontrado');
                result = 0;
            }
            return response.json();
        })
        .then(data => {
            result = 1;
            document.getElementById('isbn').value = `${data.name}`;
            document.getElementById('descricao').value = `${data.plataform}`;
        })
        .catch(error => {
            console.error('Erro ao pesquisar livro:', error);
            const resultadoPesquisa = document.getElementById('resultadoPesquisa');
            resultadoPesquisa.innerHTML = 'Livro não encontrado.';
            var timer = window.setTimeout(atualizarPagina, 3000);

        });
}
function atualizarLivro() {
    pesquisarLivro();
    if (result == 1) {
        const name = document.getElementById('isbn').value;
        const plataform = document.getElementById('descricao').value;
        const searchId = document.getElementById('searchId').value;

        fetch(`http://localhost:8080/livros/${searchId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isbn, descricao }),
        })
            .then(response => response.json())
            .then(data => {
                alert('Livro atualizado com sucesso!');
                document.getElementById('cadastroForm').reset();                
            })
            .catch(error => {
                console.error('Erro ao atualizar livro:', error);
            });
    } else {
        alert('ID não encontrado na base de dados. Nenhum livro foi alterado. Favor pesquisar livro a ser alterado !!!');
    }
    
    }
    function excluirLivro() {
    pesquisarLivro();
    if (result == 1) {
        const name = document.getElementById('isbn').value;
        const plataform = document.getElementById('descricao').value;
        const searchId = document.getElementById('searchId').value;

        fetch(`http://localhost:8080/livros/${searchId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isbn, descricao }),
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('cadastroForm').reset();                
            })
            .catch(error => {
                console.error('Erro ao deletar livro:', error);
            });
    } else {
        alert('ID não encontrado na base de dados. Nenhum livro foi alterado. Favor pesquisar livro a ser alterado !!!');
    }
                    alert('Livro deletado com sucesso!');
}
}
