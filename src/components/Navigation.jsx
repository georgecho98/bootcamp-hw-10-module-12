import './style.css'
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

return (
    <nav>
    
    <Link to = "About"
 
    className={'a'}>
     About Me</Link>   
     
    <Link to = "Project" 
    
    className={'a'}>
      Portfolio </Link>    
    <Link to = "Contact"
    
    className={'a'}>
     Contact Me </Link>               
    <Link to="/Resume"
 
    className={'a'}>
    Resume </Link>    

</nav>

)}

export default Navigation;
//* A single `Navigation` component within the header that will use `Link` components 
// from `react-router-dom` to conditionally render the different sections of your portfolio