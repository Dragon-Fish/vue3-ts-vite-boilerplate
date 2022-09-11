default: install build

install:
	npm -v
	npm i -g pnpm
	pnpm i

build:
	pnpm build
