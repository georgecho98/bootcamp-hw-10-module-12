import './style.css'

const styles = {
  AboutStyle: {
    fontSize : '2rem',
    textAlign: 'left'
  }
};
function About() {
  return (
    <div>
            <div style = {styles.AboutStyle}> ABOUT ME </div>
            
            <div className="Mypic" ></div>
            
            <p>
                  My name is Hon chau and I had graduated with a electric power engineering degree 16 years ago. 
                  I worked on manufacturing ontrol logics and whiskey brewery control design. I also worked in chips fabrication company. 
                  I had completed Java and python certificates courses. My passion is learning as such I m taking coding course to strength my programming skills. 
                  &nbsp;
                  &nbsp;

                  My family is from Taiwan.            
                  My interest are hiking, biking, watching movies, and have a good meal with friends. Austin is indeed the best place to place even in pandemic. 
                  This city has a lot of food restaurants from around the world. Most my friends all live around here. 
                  I like to browse the latest technology, software, apps, phone and watch. My favourite company is Tesla Thank you. 
            </p>          
    </div>
  );
}

export default About;

//* A single `Header` component that appears on multiple pages

