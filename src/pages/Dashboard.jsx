import './Dashboard.css'

function Dashboard() {
    return (
        <section id='dashboard'>
            <h1>Bienvenu sur votre espace Administrateur</h1>
            <p>
                Vous êtes sur la page d'accueil de votre espace administrateur.<br />
                Dans un potentiel future, on pourait voir de nouvelles commandes aparaîtres ici.
            </p>
            <p>
                À votre gauche se trouve les différents onglets des services que vous procure les privilèges administrateur.<br />
                Le dernier onglet est un lien vous menant vers le site. Pensé à vous rendre sur <span className='bold'>http://localhost:3000/dashboard</span> pour retourner sur votre espace administrateur.
            </p>
        </section>
    )
}

export default Dashboard