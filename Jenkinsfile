pipeline {
    environment {
        mountTarget = "/static_www"
        baseDir = "/static_www"
        CLIENT_ID = credentials('CLIENT_ID')
        CLIENT_SECRET = credentials('CLIENT_SECRET')
        API_GATEWAY_URL = credentials('API_GATEWAY_URL')
        API_GATEWAY_WS = credentials('API_GATEWAY_WS')
        NODE_ENV = 'production'
    }
    agent {
        docker {
            image 'node:8-alpine'
            args "-v static_www:/static_www"
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        /*
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        */

        stage('Build Relay') {
            steps {
                sh 'npm run relay'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Copy to www_dir') {
            steps {
                sh "mkdir -p ${baseDir}"
                sh "cp -R static/* ${baseDir}/"
                sh "cp -R bundle/* ${baseDir}/"
            }
        }
    }
}