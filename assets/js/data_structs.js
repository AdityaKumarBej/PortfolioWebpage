AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Arrays",
    cardImage: "images/arrays.png",
    description: "My custom portfoilio page using JavaScript, HTML and CSS.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Arrays",
  },
  {
    title: "Strings",
    cardImage: "images/strings.png",
    description: "Research Paper Publication link",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Strings",
  },
  {
    title: "Stacks",
    cardImage: "images/stacks.jpg",
    description: "Path Finding Visualizer for Dijkstra's, BFS, DFS and Bidirectional search Algorithms which finds the Shortest Possible Path between two points.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Stacks",
  },
  {
    title: "Linked Lists",
    cardImage: "images/linked_lists.png",
    description: "An Implementation of Neural Collaborative Filtering Models for Recommender Systems with emphasis on Implicit Data.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Linked%20Lists",
  },
  {
    title: "Trees",
    cardImage: "images/trees.jpg",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Trees",
  },
  {
    title: "Binary Search Trees",
    cardImage: "images/bst.png",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/BST",
  },
  {
    title: "Graphs",
    cardImage: "images/graphs.png",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Graphs",
  },
  {
    title: "Dynamic Programming",
    cardImage: "images/dp.png",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Dynamic%20Programming",
  },
  {
    title: "Recursion/BackTracking",
    cardImage: "images/recursion.png",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Recursion%20or%20Backtracking",
  },
  {
    title: "Tries",
    cardImage: "images/tries.jpg",
    description: "Realtime chat app with websockets using HTML, CSS, Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI.",
    Previewlink: "",
    Githublink: "https://github.com/AdityaKumarBej/DSA/tree/master/Tries",
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