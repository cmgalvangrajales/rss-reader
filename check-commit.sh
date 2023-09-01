#!/bin/sh
BITBUCKET_COMMIT_NAME="$(git log -1 --pretty=%B --no-merges)"

if [[ $BITBUCKET_COMMIT_NAME != "["*"-"*"]"* ]] && [[ $BITBUCKET_COMMIT_NAME != *"[skip ci]"* ]]
then
  echo "the commit name must match the  pattern [history-id]* i.e. '[WEB-123] Add pipeline file'"
  echo $BITBUCKET_COMMIT_NAME
  exit 125
fi
