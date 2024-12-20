# EnMemoria

## Current Status
This project is currently a work in progress.

## Overview
EnMemoria is a customizable digital photo frame application built with Next.js, designed to run on a Raspberry Pi 5 with a touch screen. This application allows users to display a rotating gallery of images stored locally on the Raspberry Pi, transforming it into a beautiful and interactive photo display.

## Features
+ **Dynamic Image Display**: Automatically cycles through images stored in a specified folder on the Raspberry Pi.
+ **Responsive Design**: Optimized for screens of all sizes to ensure high-quality image rendering.
+ **Customizable Settings**: Easily modify display intervals and other parameters to suit your preferences.
+ **Local Storage**: Access and display images directly from the Raspberry Pi's file system for quick and effective loading.
+ **Docker Support**: Simplified deployment using Docker, allowing for consistent environments and easy updates.

## Installation
To set up EnMemoria app on your Raspberry Pi, follow these steps:
1. Clone the Repository:
    ```bash
    $ git clone https://gitlab.com/yourusername/nameofyourrepo.git

    $ cd en-memoria
    ```
2. Build and Run with Docker:
   Ensure your have Docker installed on your Raspberry Pi. Then, run:
    ```bash
    $ docker-compose up --build
    ```
3. Access the Application
   Open your web browser and navigate to `http://<your-pi-ip>:3000` to view your photo frame

## Usage
Simply place your images in the designated folder (configured in `docker-compose.yml`), and the application will automatically load and display them. You can customize the settings within the code to adjust how often images change or add additional features.

## Developer
+ **Name**: Cesar Villanueva
+ **Website**: [Ardent Forms](https://ardentforms.com)

## Privacy
This project is intended for personal use and is designed to run locally on your Raspberry Pi. All images are stored locally, ensuring your privacy and security.

## License and Usage Restrictions
**IMPORTANT: This is a private project and is not open for public use, distribution, or modification.**

Copyright(c) Cesar Villanueva 2024

All rights reserved. This project and its source code are the exclusive property of Cesar Villanueva. No part of this project, including but not limited to the source code, documentation, and associated files, may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the owner, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.

Unauthorized use, reproduction, or distribution of this project or any portion of it may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law.

For permission requests or further information, please use the contact form on [Ardent Forms](https://ardentforms.com).
