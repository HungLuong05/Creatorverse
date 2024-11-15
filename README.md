*Creatorverse*

Submitted by: **Duc Hung Luong**

About this web app: **A web application to manage favorite content creators! With this app, users can easily add, edit, and delete content creators, ensuring that their list of favorites is always up-to-date**

Time spent: **25** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Validator to prevent user enter symbol '?' into field "Name". The value of "Name" is used in URL, and the symbol '?' breaks the logic to extract params from URL.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./creatorverse.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with LiceCap

## Notes

Challenges I went through:
- It took me a signficant amount of time to design the website and modify the css files.
- Getting params from URL did not went as expected when the symbol '?' was presented in the name field. It took me a while to figure out this issue, so I made a validator function and alert message to address the issue.

## License

Copyright [2024] [Duc Hung Luong]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
