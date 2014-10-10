include makefile

pack: all
	rm *.png
	./tools/genplist.ls
	./pack-this.sh
