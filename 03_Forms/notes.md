# Forms
- Group input fields together
- ```onsubmit``` will gather data within the input fields and pass it on.
- Methods:
  - Types: (CRUD)
    - GET (Read)
    - POST (Create)
    - PUT / PATCH (Update)
    - DELETE
- Part of HTTP structure in how we pass data

## Some Attributes
- ```for``` helps tie labels with input fields
- ```autocomplete``` governs the browsers autocomplete feature
- ```name``` associates the name of the input.
  - Helps with label association
- ```type``` notes what type of data to expect.
- ```placeholder``` provides notes to users as to what might be input into our fields.
- ```value``` is what is held within the input when submitted.
  - This gets populated when a user types into it.

## Steps for DOM Manipulation
- **Create** the element.
- **Assign** any values to properties of *that* element
  - Provide text, class name, id name, etc.
- **Append** to a parent element.