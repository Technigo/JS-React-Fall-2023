# Project Brief: Music Festival Concert Slot Reservation

## Overview

This project involves creating a simple program that allows users to reserve concert slots for their preferred music genres during a music festival. Users will provide their name, choose a music genre, and then select an artist and time slot for their desired concert.

## Steps

### Welcome and Introduction

- Display a friendly welcome message to explain the purpose of the program.
- Use an alert to show: "Welcome to the Music Festival Concert Slot Reservation! Get ready to choose your favorite music genre."

### User Name Entry

- Prompt the user to enter their name using a pop-up window.
- Store the user's name in a variable.
- Provide a personalized greeting: "Hello, [User's Name]! Let's get started."

### Music Genre Selection

- Ask the user to select a music genre by entering a number.
- Offer options for Rock (1), Pop (2), and Electronic (3).
- Store the user's choice in a variable and determine the selected genre.

### Selected Genre Validation

- Based on the user's chosen genre, identify the corresponding genre (Rock, Pop, or Electronic).
- If the user selects an invalid choice, display an error message and halt the program: "Invalid choice. Please select a valid number."

### Confirmation of Genre

- Show the user's chosen genre using an alert message: "You've chosen [Selected Genre]!"

### Concert Slot Reservation

- Ask the user to pick a concert slot based on their selected genre.
- Present different artist options for the chosen genre and prompt the user to enter a number.
- Save the chosen concert slot in a variable and associate it with the appropriate artist names.

### Time Slot Assignment

- Determine the time slot corresponding to the selected concert slot number.
- Set the chosen time slot for the user based on their concert slot selection.

### Reservation Confirmation

- Display a personalized reservation confirmation message based on the user's choices.
- Include the selected artist's name, chosen time slot, and the selected genre.
- For example, if the user picked slot 1, show: "Great choice! You've reserved a spot to see [Artist Name] at [Selected Time Slot] for the [Selected Genre] concert!"

### Error Handling

- If the user chooses an invalid concert slot or artist, display an error message and exit the program: "Invalid slot choice."

### Program Termination

- Explain the purpose of the `exit(1)` command.
- In simpler terms, this command abruptly ends the program and indicates that something went wrong or an error occurred.

## Summary

This project guides users through the process of reserving concert slots at a music festival. They provide their name, choose a music genre, select an artist and time slot, and receive a personalized confirmation message. The program handles incorrect choices and explains the termination command's purpose.
