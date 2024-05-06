# Queues with RabbitMQ: Splitting Work for Faster API Calls

This repository contains a demonstration of splitting work across different servers using RabbitMQ messaging queue. It consists of two folders: `auth` and `mail_service`. The main purpose of this project is to illustrate how splitting work can result in faster API calls.

## Article Details
- **Author:** Adeleke Joshua A.
- **Date:** 2024/05/04
- **Medium Article Link:** [Link]((https://lekejosh.medium.com/message-queuing-with-rabbitmq-splitting-work-for-faster-api-calls-80deb37aaaeb))

## Prerequisites

- RabbitMQ installed and running locally or accessible from your environment.
- Docker (optional, if you prefer to run RabbitMQ in a containerized environment).

## Medium Article

For a detailed explanation and walkthrough of this project, please refer to the accompanying Medium article: [Message Queuing with RabbitMQ: Splitting Work for Faster API Calls](https://lekejosh.medium.com/message-queuing-with-rabbitmq-splitting-work-for-faster-api-calls-80deb37aaaeb).

## Getting Started

To get started with this demo, follow the steps below:

### Installation

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/Lekejosh/Queues-rabbitmq.git
   ```

2. Navigate to the cloned repository.
   ```bash
   cd Queues-rabbitmq
   ```

### Running RabbitMQ Locally

If you have RabbitMQ installed locally, make sure it's running before proceeding.

### Running RabbitMQ with Docker (Optional)

If you prefer to run RabbitMQ in a Docker container:

   ```bash
   docker compose up -d
   ```

### Running the Demo

1. **Auth Service:**
   - Navigate to the `auth` folder.
   - install dependencies.
     ```bash
     npm install
     ```
   - start the auth service
     ```bash
     npm start
     ```

2. **Email Service:**
   - Navigate to the `mail_service` folder.
   - install dependencies.
     ```bash
     npm install
     ```
   - start the auth service
     ```bash
     npm start
     ```

### Usage

1. **Auth Service:**
   - Once the auth service is running, it exposes an endpoint for demo purposes. Users can provide a name and email, which will be published through RabbitMQ to the email service.
   - Endpoint: `POST /register`
     - Request Body:
       ```json
       {
         "name": "John Doe",
         "email": "john@example.com"
       }
       ```

2. **Email Service:**
   - The email service listens for messages from the RabbitMQ queue and sends an email to the new user with the provided details.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
