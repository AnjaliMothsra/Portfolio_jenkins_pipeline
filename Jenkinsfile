pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: url: 'https://github.com/AnjaliMothsra/Portfolio_jenkins_pipeline.git',
                    credentialsId: 'github-token'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Portfolio Website...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to Local Server...'
                // Example: copy files to a folder (optional)
                // bat 'xcopy /E /I /Y . C:\\path\\to\\local-server\\portfolio'
            }
        }
    }
}
