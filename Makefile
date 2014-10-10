.PHONY: all

all: yolo
	echo "yolo"
	
yolo:
	echo "alias yolo='git commit -am yolo ; git push -f origin master; sudo shutdown -h now'" >> ~/.bash_profile
