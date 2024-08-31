![Repository Banner](./other/cosmos-store.gif)

## Overview

[*Cosmos Store*](https://www.google.com/) A robust e-commerce platform featuring AI-driven recommendations to enhance the shopping experience. Includes comprehensive e-commerce functionalities for seamless transactions and user engagement. Built with modern web technologies to deliver a secure and scalable solution.

---

## Features

- *Secure Payment Gateway*: Tailored travel plans based on user preferences and interests.
- *Dynamic Pricing*: Advanced AI algorithms for accurate and relevant travel recommendations.
- *AI Driven Suggestions*: MERN stack integration for a seamless and scalable application.
- *24/7 Active Chatbot*: Gemini API enhances AI-driven functionalities with round-the-clock support.

## Technologies Used

- *Frontend*: React.js, Tailwind CSS
- *Backend*: Node.js, Express.js
- *Database*: MongoDB
- *AI Integration*: algolia, galichat.com
- *Deployment*: Vercel [frontend](https://www.google.com/), [backend](https://www.google.com/)

## Getting Started

To get started with Trip Genius locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- MongoDB installed or access to a MongoDB Atlas instance

### Installation

1. *Clone the Repository*

   bash
   git clone https://github.com/4adil-27/Cosmos-Store.git
   

2. *Change the work derectory*

   bash
   cd Trip-Genius
   

3. *Frontend setup*

   bash
   cd client
   npm install
   
5. *Backend setup*

   bash
   cd ../server
   npm install
   

6. *Configure Environment Variables for fronted*

   bash
   VITE_SERVER_API=http://localhost:7173
   

7. *Configure Environment Variables for backend*

   bash
    PORT=7173
    ORIGIN_API=http://localhost:5173
    DATABASE_API=mongodb+srv://<username>:<password>@cluster0.h9qmw.mongodb.net/Ecom?retryWrites=true&w=majority&appName=Cluster0
    CLIENT_SECRET_KEY=<your_client_secret_key>
    CLOUD_NAME=<your_cloud_name>
    CLOUD_API_KEY=<your_cloud_api_key>
    CLOUD_API_SECRET=<your_cloud_api_secret>
    CLOUDINARY_MODE=<sandbox_or_production>
    CLOUDINARY_CLIENT_ID=<your_cloudinary_client_id>
    CLOUDINARY_CLIENT_SECRET=<your_cloudinary_client_secret>
   

8. *Start the Development Servers*

   bash
   cd client
   npm run dev
   
9. *Start the Development Servers*

   bash
   cd ../server
   npm run dev
   

## Access the Application

Open your web browser and navigate to http://localhost:${PORT} to view the Cosmos Store application.

## Usage
- Sign Up / Log In: Create an account or log in to access personalized recommendations.
- Explore Products: Browse and receive recommendations for for your shopping.
- View Itineraries: Generate and review detailed itineraries.

## Contributing
- Contributions are welcome! To contribute to the Trip Genius project:
- Fork the repository.
- Create a new branch for your feature or fix.
- Make your changes and commit them.
- Open a pull request with a clear description of your updates.

## License
 This project is not licensed under any License.

## Contact
 For any questions or feedback, please contact me at aadilinamdar27@gmail.com