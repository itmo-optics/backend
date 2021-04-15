dev:
	docker-compose up -d

prod:
	docker-compose -f production.yml up -d --build