# Sequences.

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/naimyasirozcan/sequences-app)

# Server Structure

## Collections

### emotions

```javascript
{
      id,
      name,
      description,
    }
```

### triggers

```javascript
{
      id,
      name,
      description,
    }
```
### sequences

```javascript
 {
      id,
      creationDate,
      eventDate,
      image,
      title,
      triggerId,
      summary,
      emotionId,
      emotionPolarity,
      emotionIntensity,
      thought: {
        content,
        polarity,
        intensity,
      },
      behavior: {
        content,
        polarity,
        impact,
      },
      notes: [
        {
          content,
          date,
        },
        {
          content,
          date,
        }
      ],
    }}
```

## Used API Endpoints in the App

| HTTP Method | URL                                                        | Request Body                              | Description                                                                             |
| ----------- | ---------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| GET         | `/sequences`                                               |                                           | Sends all games                                                                         |
| GET         | `sequences/id`                                             |                                           | Sends selected sequence                                                                 |
| GET         | `/sequences/id?_expand=emotion&_expand=trigger`            |                                           | Sends all sequences with extended info based on emotion and trigger id's                |
| GET         | `/emotions`                                                |                                           | Sends all emotions                                                                      |
| GET         | `/triggers`                                                |                                           | Sends all triggers                                                                      |
| POST        | `/sequences`                                               | {newSequence}                             | Creates a new sequence                                                                  |
| POST        | `/upload`                                                  | {formData}                                | Send uploaded images to server via formData, returns url as response                    |
| PUT         | `/sequences/id`                                            | {editedSequence}                          | Edits sequence details                                                                  |
| DELETE      | `/sequences/id`                                            |                                           | Deletes a game object                                                                   |
 
## Links

### Project

[Repository Link Client](https://github.com/naimyasirozcan/sequences-app)

[Repository Link Server](https://github.com/naimyasirozcan/sequences-server)

[Deploy Link](https://sequences-app.vercel.app)

### Slides

[Slides Link](https://drive.google.com/file/d/1wCI5JwQx58febHmyuF0_9TlXU2LKUF-r/view?usp=sharing)

![App Logo](https://res.cloudinary.com/dq7qhhd0l/image/upload/v1763081748/logo_rwc08z.png)
