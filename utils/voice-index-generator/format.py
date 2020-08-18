import json
import os
import sys
import pandas as pd

####WorkPath Support####

dirName= os.path.split(os.path.abspath(sys.argv[0]))[0]

####ReadFile####

rawCategory = pd.read_csv(os.path.join(dirName,'category.csv'),encoding='utf-8-sig')
rawVoice = pd.read_csv(os.path.join(dirName,'voice.csv'),encoding='utf-8-sig')

####Teform Category####

category =  rawCategory.to_dict(orient="index")


for index in range(len(category)):
    category[index]["group_name"] = category[index]["name"]
    category[index]["group_description"] = {}
    category[index]["group_description"]["zh"] = category[index]["zh"]
    category[index]["group_description"]["en"] = category[index]["en"]
    category[index]["group_description"]["ja"] = category[index]["ja"]
    del category[index]["name"]
    del category[index]["zh"]
    del category[index]["en"]
    del category[index]["ja"]
    category[index]["voice_list"] = []

print(category)
# 读入Voice
voice = rawVoice.to_dict(orient="index")

voiceDescription_CN = {}

# Start from "1"
for index in range(len(voice)):

    # voice[index]["name"] = voice[index]["name"]
    voice[index]["path"] = "/" + voice[index]["name"] + ".mp3"
    voice[index]["description"] = {}
    # Conflict Dealing
    if voice[index]["zh"] in voiceDescription_CN.keys():
        voice[index]["en"] = str(voice[index]["en"]) + " " + str(voiceDescription_CN[voice[index]["zh"]])
        voice[index]["ja"] = str(voice[index]["ja"]) + " " + str(voiceDescription_CN[voice[index]["zh"]])
        voiceDescription_CN[voice[index]["zh"]] += 1
        voice[index]["zh"] = str(voice[index]["zh"]) + " " + str(voiceDescription_CN[voice[index]["zh"]]-1)
    else:
        voiceDescription_CN[voice[index]["zh"]] = 2

    voice[index]["description"]["zh"] = voice[index]["zh"]
    voice[index]["description"]["ja"] = voice[index]["ja"]
    voice[index]["description"]["en"] = voice[index]["en"]
    del voice[index]["zh"]
    del voice[index]["ja"]
    del voice[index]["en"]

# ADD 1 For conflicted group
for key,item in voiceDescription_CN.items():
    if item != 2:
        for vk,vi in voice.items():
            if vi["description"]["zh"] == key:
                vi["description"]["en"] = str(vi["description"]["en"]) + " 1"
                vi["description"]["ja"] = str(vi["description"]["ja"]) + " 1"
                vi["description"]["zh"] = str(vi["description"]["zh"]) + " 1"



print(voice)

####Merge&Generate####

for i,cat in category.items():
    for j,vocal in voice.items():
        if vocal.__contains__("category"):
            if vocal["category"] == cat["group_name"]:
                del vocal["category"]
                cat["voice_list"].append(vocal)


# append

result = {}
result["groups"] = []

for k,item in category.items():
    result["groups"].append(item)


print(result)
with open("autogen-voices.json",'w', encoding='utf-8-sig') as out:
    json.dump(obj=result, fp=out, indent=2,ensure_ascii=False)