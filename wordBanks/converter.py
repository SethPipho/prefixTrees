# converts word bank file into javacript varible

wordFile = open("smallList.txt")
jsFile = open("../js/wordBank.js","w")

jsFile.write("wordBank = [")

for line in wordFile:

    if "'" in line:
        continue
    word = line.strip()
    
    if len(word) <= 2:
        print(word)
        continue

    jsFile.write("'" + word + "',")
    

smallWords = ["of","to","a","in","is","on","by","i","it","or","be","at","as","an","we","us","if","my","do","no","he","up","so","pm"]

for word in smallWords:
    jsFile.write("'" + word + "',")

jsFile.write("];")