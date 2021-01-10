def email():
    file_number = 0
    for i in range(10000):
        str_i = len(str(i))
        temp = ""
        while str_i < 4:
            temp+="0"
            str_i+=1
        temp+=str(i)
        if i % 500 == 0:
            file_number+=1
        f = open('file'+str(file_number)+'.txt',"a")
        f.write("Lin"+temp+"@Gmail.com,"+"\n")
        f.close()
email()


import shutil
import os
from os import path
from zipfile import ZipFile
from shutil import make_archive

directory = "/Users/chenyunzhang/leetcode/email"
zipObj = ZipFile('email.zip',"w")

for filename in os.listdir(directory):
    if filename.endswith("txt"):
        zipObj.write(filename)
zipObj.close()