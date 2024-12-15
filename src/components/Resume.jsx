import './style.css'

const styles = {
  AboutStyle: {
    fontSize : '1rem',
    textAlign: 'left',
    alignContent: 'left'
  }
};
function Resume() {
  return (
    <div>
            
           <ul>
            <li>Programming skills:</li>
            <li>Use java and python to develop payroll report programming logic, database organization/sorting program,
            warehouse and equipment database.</li>
            <li>Python Jupyterlab training</li>
            <li>Write html, java script, and CSS code to design website, flexbox layout. Deploy on git hub.</li>
            <li>Proficient in using React, visual studio code and IntelliJ  software.</li>
            <li>Use Bootstrap, tailwind CSS template</li>
            <li>Use CSS code to modify images pixel, sizes and padding.</li>
            <a href style = {styles.AboutStyle}> Download My resume </a>
            
            </ul>
            
            <p>
                  
            </p>          
    </div>
  );
}

export default Resume;

//* A single `Header` component that appears on multiple pages

