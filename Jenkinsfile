pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url:'https://github.com/AnjaliMothsra/Portfolio_jenkins_pipeline.git',
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
        // Copy all files from your workspace to the deployment folder
        bat 'xcopy /E /I /Y * C:\\PortfolioDeployment\\'
    }
   }


    }
}
