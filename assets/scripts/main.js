const setCardGithub = () => {
    const inputValue = document.querySelector('#input').value;
    console.log(inputValue);
    if (inputValue) {
        localStorage.setItem('github', inputValue);
        location.reload();
    } else {
        alert('Por favor, insira um nome valido de login do GitHub. Ex: "Guihsp"');
    }
}

const getGithubInfos = () => {
    const githubUsername = localStorage.getItem('github');
    if (githubUsername) {
        fetch(`https://api.github.com/users/${githubUsername}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do usuário');
                }
                return response.json();
            })
            .then(data => {
                document.querySelector('.user-login').innerHTML = data.login;
                document.querySelector('.user-login').setAttribute('href', data.html_url);
                document.querySelector('.user-avatar').setAttribute('src', data.avatar_url);
                document.querySelector('.user-name').innerHTML = data.name;
                document.querySelector('.user-bio').innerHTML = data.bio;
                document.querySelector('.user-followers').innerHTML = data.followers;
                document.querySelector('.user-repos').innerHTML = data.public_repos;
                document.querySelector('.user-location').innerHTML = data.location;
            });
    }
}

window.onload = getGithubInfos;

const flip = () => {
    const backElement = document.querySelector('#back');
    const frontElement = document.querySelector('#front');
    
    backElement.classList.toggle('flip');
    frontElement.classList.toggle('flip');
}
