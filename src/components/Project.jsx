import '/style.css'
function Project() {
  return (
    <section class = "page-section">

    <section class="page-section">
         <div id="Work" class="Work"></div>
         <h2>Work</h2>
                                       
    </section>
    
    <div class = "flex-container">

        <section class="flex-item surf-report" > 

                <div>Nature, I like hiking and camping</div> 
                <h3>I catch cat fish</h3>

        </section>

         <section class="flex-item led-wall"> 
            
                <div>I put the computer together</div>
                <h3>Programming, coding</h3>
            
        </section>  

        <section class="flex-item react-calc"> 
            
                <div>I like biking</div>
                <h3>Biking to the moon!</h3>

        </section>
    
    
        <section class="flex-item pastel-puzzles"> 
          
                <div>A.I., Python, Java, FUll Stack</div>
                <h3>Learning the future</h3>
             
        </section>
  
        <section class="flex-item run-buddy"> 
          
                <div>Cooking. I like spanish, and korean food</div>
                 <h3>I like to watch cooking competition</h3>
          
        </section>

    </div>

</section>
  );
}

export default Project;


// * A single `Project` component that will be used 
// multiple times in the Portfolio section