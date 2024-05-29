## Express Blog Project

This is a blog API built with Node.js, Express, and MongoDB. It allows users to create, view, delete and edit blog posts with basic category functionality.

### Setting Up the Project Locally

**Prerequisites:**

- **Node.js and npm:** To run a Node.js application, you'll need Node.js and npm (Node Package Manager) installed on your machine.

**Installation Steps:**

1.  **Download or Clone the Repository:**

    - **Option 1: Download ZIP:** Visit the project repository on GitHub ([https://github.com/topics/express-blog](https://github.com/topics/express-blog)) and download the ZIP file.
    - **Option 2: Clone Repository:** If you're comfortable with Git, you can clone the repository using the following command in your terminal:

      ```bash
      git clone https://github.com/simioluwatomi/express-blog.git
      ```

2.  **Install Dependencies:**

    - Open your terminal and navigate to the project directory (where you downloaded the ZIP or cloned the repository).
    - Run the following command to install the project's dependencies:

      ```bash
      npm install
      ```

      This command will download and install all the necessary libraries required for the project to function.

3.  **Run Mongo locally:**

    - Download and install MongoDB community server and Mongo Shell.
    - Add them to your system environmental variables.
    - Open your CMD and run

      ```cmd
      mongod
      ```

      This command will start and keep MongoDB server running

    - In your code editor terminal, run this command:

      ```cmd
      mongosh <your_DB_NAME> < storage/seeder/index.js
      ```

      This command insert blog posts in the file into your database.

4.  **Environment Variables:**

    - The project uses environment variables to store sensitive information like database connection details.
    - Create a file named `.env` in the project root directory (**ignore this file when committing to version control**).
    - Add the following environment variable to the `.env` file,

      ```
         PORT=<your_PORT>
         DB_CONNECTION=<your_DB_CONNECTION>
         DB_HOST=<your_DB_HOST>
         DB_PORT=<your_DB_PORT>
         DB_DATABASE=<your_DB_DATABASE>
      ```

             * Follow the official documentation to set up a connection URI (search online for "mongodb connection string").

5.  **Start the Server:**

    - Once the dependencies are installed and environment variables are set, you can start the development server by running:

      ```bash
      npm start
      ```

      This will start the server, and the application should be accessible at `http://localhost:3000` in your web browser.

**Additional Notes:**

- This guide assumes you have a basic understanding of using a terminal or command prompt.
- If you encounter any issues during the installation process, refer to the project's documentation (if available) or search online for solutions related to specific errors.

Now that you have set up the project locally, you can explore the codebase, create new blog posts, or customize the application further based on your needs.
