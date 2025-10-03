require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "hassansohail4u",
  "id": 172537435,
  "node_id": "U_kgDOCki2Ww",
  "avatar_url": "https://avatars.githubusercontent.com/u/172537435?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hassansohail4u",
  "html_url": "https://github.com/hassansohail4u",
  "followers_url": "https://api.github.com/users/hassansohail4u/followers",
  "following_url": "https://api.github.com/users/hassansohail4u/following{/other_user}",
  "gists_url": "https://api.github.com/users/hassansohail4u/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hassansohail4u/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hassansohail4u/subscriptions",
  "organizations_url": "https://api.github.com/users/hassansohail4u/orgs",
  "repos_url": "https://api.github.com/users/hassansohail4u/repos",
  "events_url": "https://api.github.com/users/hassansohail4u/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hassansohail4u/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hassan Sohail",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "MERN Stack Developer | Proficient in React.js, Next.js, Node.js, Express.js, MongoDB | Passionate to building scalable, modern web applications",
  "twitter_username": null,
  "public_repos": 35,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2024-06-12T18:38:51Z",
  "updated_at": "2025-08-07T17:30:22Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/github" , (req, res) => {
    res.json(githubData)
})

app.get("/login", (req, res) => {
    res.send("Welcome to login page")
})

app.get("/signup" , (req, res) => {
    res.send("<h1>Welcome to the signup page</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
