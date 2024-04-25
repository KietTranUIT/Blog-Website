run:
	node index.js
migrate_create:
	migrate create -ext sql -dir ./migration -seq init_blogs
migrate_up:
	migrate -path ./migration/ -database "mysql://admin:admin@tcp(127.0.0.1:3306)/Blogs" -verbose up
migrate_down:
	migrate -path ./migration/ -database "mysql://admin:admin@tcp(127.0.0.1:3306)/Blogs" -verbose down
migrate_fix:
	migrate -path ./schema/migration/ -database "mysql://admin:admin@tcp(127.0.0.1:3306)/Blogs" force 1