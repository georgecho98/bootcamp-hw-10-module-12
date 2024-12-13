// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">

        <h1>Hon's Porfolio'</h1>
            <nav>
                <a href = "#About Me"
                onClick={() => handlePageChange('About Me')}
                className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}>
                 About Me </a>   
                <a href = "#Porfolio" 
                onClick={() => handlePageChange('Porfolio')}
                className={currentPage === 'Porfolio' ? 'nav-link active' : 'nav-link'}>
                  Work </a>    
                <a href = "#Contact Me"
                onClick={() => handlePageChange('Contact Me')}
                className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}>
                 Contact Me </a>               
                <a href="Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                Resume </a>    

            </nav>
        <div>
            <h1> About Me </h1>
            <p>
                  Hon chau,  I m graduates from University of Texas at Austin . I like hiking, biking, watching movies, and have a good meal with friends. 
                  Austin is indeed the best place to place even in pandemic. This city has a lot of food restaurants from around the world. Most my friends all live around here. 
                  I m also a tech savy. I like to explore the best computers, phones, software and apps in the industry. Thank you. 
            </p>          
        </div>

    </header>
  );
}

export default Header;

//* A single `Header` component that appears on multiple pages

