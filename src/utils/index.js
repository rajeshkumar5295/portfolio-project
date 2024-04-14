export const Navigate=(id)=>{

       console.log(id ,"checking id");
            document.querySelector("#"+id).scrollIntoView({behavior:"smooth"});
}