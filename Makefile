herokuProcessType := web
apiKey := $(shell pass spacegoats/tm-check-api-key)

herokuLogin:
	@heroku container:login

herokuPush:
	@heroku container:push ${herokuProcessType}

herokuDeploy: herokuPush
	@heroku container:release ${herokuProcessType}
	@heroku ps:scale ${herokuProcessType}=1

request:
	@http ':3000/tmdn?tmName=varento' key:${apiKey}
