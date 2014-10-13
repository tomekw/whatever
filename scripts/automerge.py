#!/usr/bin/env python
import json
import requests
import datetime

OAUTH_KEY = "xxxxxxxxxxxx"
repos = ['whatever'] # Add all repo's you want to automerged here
ignore_branches = ['gh-pages'] # Add 'master' here if you don't want to automerge into master

# Print merge/no-merge message to logfile
def print_message(merging):
  if merging == True:
    message = "Merging: "
  else:
    message = "Not merging: "
  print message + str(pr_id) + " - " + user + " wants to merge " + head_ref + " into " + base_ref

# Merge the actual pull request
def merge_pr():
  r = requests.put("https://api.github.com/repos/:owner/%s/pulls/%d/merge"%(repo,pr_id,),
    data=json.dumps({"commit_message": "Auto_Merge"}),
    auth=('token', OAUTH_KEY))
  if "merged" in r.json() and r.json()["merged"]==True:
    print "Merged: " + r.json()['sha']
  else:
    print "Failed: " + r.json()['message']


# Main

print datetime.datetime.now()

for repo in repos:
  r = requests.get('https://api.github.com/repos/:owner/%s/pulls'%repo, auth=('token', OAUTH_KEY))
  data = r.json()

  for i in data:
    head_ref=i["head"]["ref"]
    base_ref=i["base"]["ref"]
    user=i["user"]["login"]
    pr_id = i["number"]
    if base_ref in ignore_branches:
      print_message(False)
    else:
      print_message(True)
      merge_pr()
