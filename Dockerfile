# Base image with Bun installed
FROM oven/bun:1

WORKDIR /usr/src/app

# Install dependencies first (cached separately)
COPY package.json bun.lock locales ./
RUN bun install --frozen-lockfile

# Copy the application source code
COPY src ./src
COPY locales ./locales

# Expose port
EXPOSE 5001

# Launch the application
ENTRYPOINT ["bun", "run", "src/index.ts"]
