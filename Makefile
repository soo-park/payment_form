OS := $(shell uname)
SHELL := /bin/bash
TODAY=`date +'%y.%m.%d %H:%M:%S'`
.PHONY: myapp-fake clean whatever all-fakes
SPL1 := PaymentWidgetService

clean:
	@echo '==================== Clean app folder ==================='
	cd $(SPL1) && rm -rf node_modules

stop-app:
	@echo '==================== Kill server ==================='
	kill $(lsof -n -i :3000 | awk ‘{print $2}’)

build:
	@echo '==================== Build Service ==================='
	cd $(SPL1) && yarn && yarn build

# Currently there is a bug with create-react app
# https://github.com/ionic-team/ionic/issues/20503
avoid-error:
	cd $(SPL1) && npm remove react-dev-utils && npm i react-dev-utils@10.0.0

start: 
	@echo '==================== Start Service ==================='
	cd $(SPL1) && yarn start

clean-start:
	make build && make avoid-error && make start

