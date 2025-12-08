 Practical 8 – Programmatic Package Installation in Sandbox

Name: Akshat Singh
Roll No.: GF202344124
Course: BCA Full Stack – Final Year

 Description

This script installs an npm package programmatically into an isolated sandbox folder and captures a deterministic package-lock.json.
It ensures the installed tree’s checksum is verified.

 Features

Creates isolated sandbox node_modules

Installs a specific version of a package

Captures and verifies package-lock.json deterministically

Uses npm CLI commands programmatically

How to Run

Open the folder Practical 8 in VS Code.

Run:

node main.js


The script will:

Create a sandbox folder

Install the chosen package version

Generate package-lock.json and verify integrity
