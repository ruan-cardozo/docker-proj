# Use the official Debian Buster image as the base
FROM debian:buster

# Install necessary packages
RUN apt update && \
    apt install -y curl

WORKDIR /tmp

# Install Go
RUN curl -fSL https://go.dev/dl/go1.22.5.linux-amd64.tar.gz -o go.tar.gz && \
    ls -lh && \
    tar -xvf go.tar.gz && \
    rm -rf go.tar.gz && \
    mv go /usr/local

# Set Go environment variables
ENV GOROOT=/usr/local/go
ENV GOPATH=/root/go
ENV PATH=$GOPATH/bin:$GOROOT/bin:$PATH

# Create a directory for Go projects
RUN mkdir -p /go

# Set the working directory
WORKDIR /go

# Set default command
CMD ["bash"]
