https://adoring-hopper-d38cc0.netlify.com/#/


https://julian-linux.github.io/ayenda-test/ (maybe not working yet)

--------------------------------------------------------------------
# React Test

You are going to fetch information from `Rubitify` API: https://rubytify.herokuapp.com/api/v1

### Requirements:
- The application should have react, react-router, redux, redux-thunk, action-types, action-creators
- The app should have a route for each of the following end points:
```
- /api/v1/genres
- /api/v1/artists
- /api/v1/artists/:id/albums
- /api/v1/albums/:id/songs
- /api/v1/genres/:genre_name/random_song
```
- Then:
```
- There should be a component to list all artists
- In each artist info should be a list of albums
- In each album should be the list of songs and the posibility to play any of them
- In the component where I play the song should be atleast another 3 random songs of this artist as suggestions
- From home should be a button to play a random song
```

### What you should know we expect:

- We expect you to deploy this app somewhere we can see it live.
- We expect you to structure your app in a way that makes sense and it's easy to understand.
- We expect you to write unit tests and integration tests for your app(Probably not for every single line but make sure you cover critical paths).
The 2 outputs we expect from this test are a base url for the working app and a url to a public repository with the code.
- We expect you to design Frontend like this:
  - Artists list: https://ayendapublic.s3.amazonaws.com/1-Rubity-Artists.png
  - Albums list: https://ayendapublic.s3.amazonaws.com/2-Rubity-Albums.png
  - Songs list: https://ayendapublic.s3.amazonaws.com/3-Rubity-Songs.png
  - NoPreviewSongs list: https://ayendapublic.s3.amazonaws.com/3a-Rubity-NoPreviewSongs.png
  - PlaySong: https://ayendapublic.s3.amazonaws.com/4-Rubity-PlaySong.png
