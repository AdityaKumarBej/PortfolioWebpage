AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "My Portfolio Page",
    cardImage: "images/Portfolio.png",
    description: "My custom portfoilio page using JavaScript, HTML and CSS.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/PortfolioWebpage",
  },
  {
    title: "Mind-Controlled Wheelchair",
    cardImage: "images/mind_controlled_wheelchair.jpeg",
    description: "Research Paper Publication link",
    Previewlink: "",
    Githublink: "https://www.jardcs.org/backissues/abstract.php?archiveid=3646",
  },
  {
    title: "Path-Finding-Visualizer",
    cardImage: "images/pathfinder.png",
    description: "Path Finding Visualizer for Dijkstra's, BFS, DFS and Bidirectional search Algorithms which finds the Shortest Possible Path between two points.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/Path-Finding-Visualizer/tree/master/PathFindingVisualizer-main",
  },
  {
    title: "Neural Move Recommendation System",
    cardImage: "images/neural_movie.png",
    description: "An Implementation of Neural Collaborative Filtering Models for Recommender Systems with emphasis on Implicit Data.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/Neural-Movie-Recommendation-System",
  },
  {
    title: "Chat Application",
    cardImage: "images/chat_application.png",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/Chat-Application",
  }
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header" style="background-color: #6a0000;">
            <b >${description}</b>
            </div>
            <div class="data" onclick="window.location='${Githublink}';">
              <div class="content">
            
              <div class="title-div">
                <h1 class="title">${title}</h1>
                </div>            
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}