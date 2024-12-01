# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the static files to the Nginx html directory
COPY index.html script.js styles.css /etc/nginx/ORS/

# Copy the custom Nginx configuration file to the Nginx configuration directory, replacing the existing one
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world  |  CHANGE AS PE DOMAIN NEED
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]