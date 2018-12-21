all:

db:
	@docker run -d -p 27017:27017 mongo

setEnv:
	@. src/config/secrets.env