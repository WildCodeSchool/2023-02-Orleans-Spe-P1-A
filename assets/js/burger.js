// Fonction pour ouvrir et fermer le menu et ajout de class open pour le menu burger

function openMenu() {
    // je récupère les classes dont j'ai besoin
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.hamburger_bloc');
    //J'initialise une variable bouléene en false
    let menuOpen = false;

    burger.addEventListener('click', () => {
        navbar.classList.toggle('open_nav');
        // quand le menuOpen n'est pas false on ajoute la classe 'open'
        if (!menuOpen) {
            burger.classList.add('open');
            menuOpen = true;
        } else {
            // sinon on la retire
            burger.classList.remove('open');
            menuOpen = false;
        }
    })
}

openMenu();