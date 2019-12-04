const template = `
    Welcome to dust, {user}!
`;
const compiled = dust.compile(template, "tmp1");
dust.loadSource(compiled);
const weatherDiv = document.getElementById("weather");

dust.render("tmp1", { user: "UserName" }, function(err, out) {
  weatherDiv.innerHTML = out;
});
