FROM oven/bun:alpine AS base

# Install dependencies
FROM base AS dependencies
WORKDIR /app
COPY ./apps/api/ .
RUN bun install --production

# Build the app
FROM base AS build
WORKDIR /app
COPY --from=dependencies /app .
RUN ls -la && bun run build

# Run the app on dist folder
FROM base AS release
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist .
EXPOSE 3000
CMD ["bun", "index.js"]
