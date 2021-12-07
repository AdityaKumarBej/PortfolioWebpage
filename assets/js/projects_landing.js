/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Software Engineering Projects",
        description : "Projects focused on back-end or full-stack engineering",
        image : "images/software_engineeringh.webp",
        link: "redirectToProjects1()"
    },
    {
        title : "Data Structures and Algorithms",
        description : "Data Structures and Algorithm problem solving",
        image : "images/dsa.jpg",
        link: "redirectToProjects2()"
    }
];
AOS.init();   

function redirectToProjects1(){
    location.href = 'projects.html';
}

function redirectToProjects2(){
    location.href = 'data_structs.html';
}


const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, description, conferences, researchYr, citebox, citation, absbox, abstract, link}) =>
        (output +=`
            <tr > 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                        <br></br>
                    <div> ${description} </div>
        
                    <br></br>
                    <!--VIEW BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button"  onclick= "${link}">
                            VIEW
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>


                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
           
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

