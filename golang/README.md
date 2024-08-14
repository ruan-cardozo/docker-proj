## Commands to run golang container to study

`docker build -t golang-debian-buster .`

`docker run -it --name golang-container -v $(pwd)/src:/go/src golang-debian-buster`
