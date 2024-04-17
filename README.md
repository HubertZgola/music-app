![image](https://github.com/HubertZgola/music-app/assets/99662754/3a905b41-be24-4299-b71c-2013a1d6db13)

![image](https://github.com/HubertZgola/music-app/assets/99662754/5d815490-34cb-4691-963e-9cc6aebf4452)

# GothicMusic

It is a music player related to my favorite game "Gothic" written using React, enabling basic activities available in this type of applications.

## How to run the application on your local machine

To run the application, follow these steps:

### 1. Install Docker and Ansible

Make sure you have Docker and Ansible installed on your system. If not, follow the instructions on the following pages:

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

### 2. Run the Ansible Playbook

Go to the music-app application directory.
Run the Ansible playbook located in the repository by executing CLI command:
ansible-playbook playbook.yml

This playbook will create a directory, clone the repository, build a Docker image, and run a Docker container with the NukePol application, which will be accessible on port 9123 on your localhost.

### 3. Open the Application in your Browser

After the playbook execution is finished, open your web browser and navigate to:

http://localhost:9898/
