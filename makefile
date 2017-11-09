.DEFAULT_GOAL := all

.build/0-cache.js: src/cache.ls
	lsc -p -c src/cache.ls > .build/0-cache.js

.build/1-feedback.js: src/feedback.ls
	lsc -p -c src/feedback.ls > .build/1-feedback.js

.build/2-filter.js: src/filter.ls
	lsc -p -c src/filter.ls > .build/2-filter.js

.build/3-querycache.js: src/querycache.ls
	lsc -p -c src/querycache.ls > .build/3-querycache.js

.build/4-workflow.js: src/workflow.ls
	lsc -p -c src/workflow.ls > .build/4-workflow.js

lib/cache.js: .build/0-cache.js
	@mkdir -p lib/
	cp .build/0-cache.js $@

lib/feedback.js: .build/1-feedback.js
	@mkdir -p lib/
	cp .build/1-feedback.js $@

lib/filter.js: .build/2-filter.js
	@mkdir -p lib/
	cp .build/2-filter.js $@

lib/querycache.js: .build/3-querycache.js
	@mkdir -p lib/
	cp .build/3-querycache.js $@

lib/workflow.js: .build/4-workflow.js
	@mkdir -p lib/
	cp .build/4-workflow.js $@

.PHONY : lib
lib: lib/cache.js lib/feedback.js lib/filter.js lib/querycache.js lib/workflow.js

.PHONY : all
all: lib

.PHONY : clean-5
clean-5: 
	rm -rf .build/0-cache.js .build/1-feedback.js .build/2-filter.js .build/3-querycache.js .build/4-workflow.js lib/cache.js lib/feedback.js lib/filter.js lib/querycache.js lib/workflow.js

.PHONY : clean-6
clean-6: 
	rm -rf .build

.PHONY : clean-7
clean-7: 
	mkdir -p .build

.PHONY : clean
clean: clean-5 clean-6 clean-7

.PHONY : clean-8
clean-8: 
	rm -rf .build/0-cache.js .build/1-feedback.js .build/2-filter.js .build/3-querycache.js .build/4-workflow.js lib/cache.js lib/feedback.js lib/filter.js lib/querycache.js lib/workflow.js

.PHONY : clean-9
clean-9: 
	rm -rf .build

.PHONY : clean-10
clean-10: 
	mkdir -p .build

.PHONY : clean-11
clean-11: 
	rm -rf lib

.PHONY : dist-clean
dist-clean: clean-8 clean-9 clean-10 clean-11
