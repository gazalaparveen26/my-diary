<!DOCTYPE html>
<html>
<head>
  <title>My Secret Diary</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="login">
  <h2>🔐 Login</h2>
  <input type="email" id="email" placeholder="Email"><br><br>
  <input type="password" id="password" placeholder="Password"><br><br>
  <button onclick="signup()">Sign Up</button>
  <button onclick="login()">Login</button>
</div>

<div id="diary" style="display:none;">
  <h1>📖 My Diary</h1>
  <textarea id="entry"></textarea><br><br>
  <button onclick="save()">Save</button>
  <button onclick="logout()">Logout</button>
</div>

<script type="module" src="script.js"></script>
</body>
</html>