 
// get element by their ID
const tableContainer = document.getElementById('table-container');

const header =document.getElementById('header');

// Function to fetch data from API endpoint 1
function promiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const posts = data.posts; // get the posts array
            createPostsTable(posts);
          resolve(true); // Resolve the promise
        })
        .catch(error => reject(error));
    }, 1000); // Simulate a delay of 1 second
  });
}

// API1 table
function createPostsTable(posts) {
    
    const postHeading = document.createElement('h1');
postHeading.innerText = "POSTS TABLE";
tableContainer.appendChild(postHeading);


   
  // Create table element
  const table = document.createElement('table');

  // Create table header
  const headerRow = table.insertRow();
  const idHeader = headerRow.insertCell();
  const titleHeader = headerRow.insertCell();
  const bodyHeader = headerRow.insertCell();
  const userIdHeader = headerRow.insertCell();
  const tagsHeader = headerRow.insertCell();
  const reactionsHeader = headerRow.insertCell();
  idHeader.innerText = "ID";
  titleHeader.innerText = "Title";
  bodyHeader.innerText = "Body";
  userIdHeader.innerText = "User ID";
  tagsHeader.innerText = "Tags";
  reactionsHeader.innerText = "Reactions";

  // Loop through the array of posts and create a row for each one
  posts.forEach(post => {
    const row = table.insertRow();
    const idCell = row.insertCell();
    const titleCell = row.insertCell();
    const bodyCell = row.insertCell();
    const userIdCell = row.insertCell();
    const tagsCell = row.insertCell();
    const reactionsCell = row.insertCell();
    idCell.innerText = post.id;
    titleCell.innerText = post.title;
    bodyCell.innerText = post.body;
    userIdCell.innerText = post.userId;
    tagsCell.innerText = post.tags;
    reactionsCell.innerText = post.reactions;
  });

  // Add table to container element
  tableContainer.appendChild(table);
}






// Function to fetch data from API endpoint 2
function promiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
          // Display data on the UI
          const products = data.products; // get the posts array
          createProductsTable(products);
          resolve(true);
        })
        .catch(error => reject(error));
    }, 2000); // Simulate a delay of 2 seconds
  });
}

// product table

function createProductsTable(products) {
    
    const productHeading =document.createElement('h1');
    productHeading.innerText = "PRODUCTS TABLE";
    tableContainer.appendChild(productHeading);
    // Create table element
    const table = document.createElement('table');
  
    // Create table header
    const headerRow = table.insertRow();
    const idHeader = headerRow.insertCell();
    const titleHeader = headerRow.insertCell();
    const descriptionHeader = headerRow.insertCell();
    const priceHeader = headerRow.insertCell();
    const discountPercentageHeader = headerRow.insertCell();
    const ratingHeader = headerRow.insertCell();
    const stockHeader = headerRow.insertCell();
    const brandHeader = headerRow.insertCell();
    const categoryHeader = headerRow.insertCell();
    const thumbnailHeader = headerRow.insertCell();
    const imagesHeader = headerRow.insertCell();
    idHeader.innerText = "ID";
    titleHeader.innerText = "Title";
    descriptionHeader.innerText = "Description";
    priceHeader.innerText = "Price";
    discountPercentageHeader.innerText = "Discount Percentage";
    ratingHeader.innerText = "Rating";
    stockHeader.innerText = "Stock";
    brandHeader.innerText = "Brand";
    categoryHeader.innerText = "Category";
    thumbnailHeader.innerText = "Thumbnail";
    imagesHeader.innerText = "Images";
  
    // Loop through the array of posts and create a row for each one
    products.forEach(product => {
      const row = table.insertRow();
      const idCell = row.insertCell();
      const titleCell = row.insertCell();
      const descriptionCell = row.insertCell();
      const priceCell = row.insertCell();
      const discountPercentageCell = row.insertCell();
      const ratingCell = row.insertCell();
      const stockCell = row.insertCell();
      const brandCell = row.insertCell();
      const categoryCell = row.insertCell();
      const thumbnailCell = row.insertCell();
      const imagesCell = row.insertCell();
      
      idCell.innerText = product.id;
      titleCell.innerText = product.title;
      descriptionCell.innerText = product.description;
      priceCell.innerText = product.price;
      discountPercentageCell.innerText = product.discountPercentage;
      ratingCell.innerText = product.rating;
      stockCell.innerText = product.stock;
      brandCell.innerText = product.brand;
      categoryCell.innerText = product.category;
      thumbnailCell.innerText = product.thumbnail;
      imagesCell.innerText = product.images;
  

    });
  
    // Add table to container element
    tableContainer.appendChild(table);
  }
  



// Function to fetch data from API endpoint 3
function promiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(data => {
            const todos = data.todos; // get the posts array
            createTodosTable(todos);
          resolve(true);
        })
        .catch(error => reject(error));
    }, 3000); // Simulate a delay of 3 seconds
  });
}


function createTodosTable(todos) {
  
    const todoHeading =document.createElement('h1');
    todoHeading.innerText = "TODOS TABLE";
    tableContainer.appendChild(todoHeading);
    // Create table element
    const table = document.createElement('table');
  
    // Create table header
    const headerRow = table.insertRow();
    const idHeader = headerRow.insertCell();
    const todoHeader = headerRow.insertCell();
    const completedHeader = headerRow.insertCell();
    const userIdHeader = headerRow.insertCell();
    idHeader.innerText = "ID";
    todoHeader.innerText = "Title";
    completedHeader.innerText = "Body";
    userIdHeader.innerText = "User ID";
   
    // Loop through the array of posts and create a row for each one
    todos.forEach(todo => {
      const row = table.insertRow();
      const idCell = row.insertCell();
      const todoCell = row.insertCell();
      const completedCell = row.insertCell();
      const userIdCell = row.insertCell();
      idCell.innerText = todo.id;
      todoCell.innerText = todo.todo;
      completedCell.innerText = todo.completed;
      userIdCell.innerText = todo.userId;
     
    });
  
    // Add table to container element
    tableContainer.appendChild(table);
  }


// Get the button element from the DOM

const button = document.getElementById('fetch-data-button');

// Add click event listener to the button
button.addEventListener('click', () => {
  // Call the promise chain
  promiseAPI1()
    .then(result => {
      if (result) {
        return promiseAPI2(); // Call the next promise function
      }
    })
    .then(result => {
      if (result) {
        return promiseAPI3(); // Call the next promise function
      }
    })
    .then(result => {
      if (result) {
        console.log('All promises resolved successfully!');
      }
    })
    .catch(error => console.error(error));
});
