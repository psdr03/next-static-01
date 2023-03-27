deploy:
	npm run build
	aws s3 cp out s3://next-static-01/ --recursive