# Use official Playwright image with Node.js and browsers
FROM mcr.microsoft.com/playwright:v1.43.1

# Set working directory inside the container
WORKDIR /app

# Copy dependency files and install packages
COPY package*.json ./
RUN npm install

# Copy all test files
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Run tests and generate HTML report
CMD ["npx", "playwright", "test", "--reporter=html", "--output=/app/artifacts/playwright-report", "--workers=4"]
