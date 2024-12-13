const styles = {
  contact address {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 100%
  }
  
  contact address a {
    color: var(--tertiary);
    padding: 5px;
    text-decoration: none;
    font-size: 1.3rem;
    font-style: normal;
    background-image: linear-gradient(270deg, var(--primary) 0%, var(--primary) 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: bottom;
    transition: all 0.25s ease-in;
    margin: 0 0.2rem 0.1rem;
    display: inline-block;
  }
  
  contact address a:hover {
    background-size: 100% 88%;
    color: var(--secondary);
  }
};

function Footer() {
  return (
    <div style={contact.address}>
      <a> Twitter</a> 
      <a> TikTok </a>
      <a> xxxx@yahoo.com</a>     
      <a> Facebook </a> 
      
    </div>
  );
}

export default Footer;


//
//* A single `Footer` component that appears on multiple pages
