#!/bin/sh
usage ()
{
  echo 'Syntax error.'
  exit
}

if [ "${#}" -ne 1 ]
then
  usage
fi

if [ "${1}" != 'YES' ]
then
  usage
fi


