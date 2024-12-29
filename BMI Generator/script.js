const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const under=document.querySelector('.under');
    const normal=document.querySelector('.normal');
    const over=document.querySelector('.over');
        //console.log(height);
        under.style.backgroundColor = "";
        normal.style.backgroundColor = "";
        over.style.backgroundColor = "";

    
    const results=document.querySelector('#results');

    if(height ==='' || height< 0 || isNaN(height)){
        results.innerHTML=`Please give a valid height${height}`;
    }else if(weight ==='' || weight< 0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight${weight}`;
    }else{
        const bmi =(weight/((height*height)/10000).toFixed(2));
        //show the result
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            under.style.backgroundColor ="Yellow";
        }
        else if(bmi>=18.6 && bmi<=24.9){
            normal.style.backgroundColor ="green";
        }
        else{
            over.style.backgroundColor ="red";
        }
    }

});
 