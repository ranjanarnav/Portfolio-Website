const terminal = document.getElementById("terminal-text");
const terminalBody = document.querySelector(".terminal-body");

const CHAR_DELAY = 40;
const LINE_DELAY = 400;
const LOOP_DELAY = 6000;

const lines = [

"➜  ~ whoami",
"arnav",

"",

"➜  ~ hostname",
"arnav-dev-server",

"",

"➜  ~ uname -a",
"Linux arnav-dev-server 6.5.0-ubuntu x86_64",

"",

"➜  ~ pwd",
"/home/arnav",

"",

"➜  ~ ls",
"projects   skills.txt   infrastructure   deploy.sh   logs",

"",

"➜  ~ cat skills.txt",
"Python",
"Django",
"Docker",
"Linux",
"AWS",
"PostgreSQL",
"Redis",
"Nginx",
"CI/CD",

"",

"➜  ~ ps aux | grep django",
"arnav   2145   0.3   django_app   running",

"",

"➜  ~ docker ps",
"CONTAINER ID   NAME           STATUS",
"d1a2b3c4       django_app     Up 3 hours",
"e5f6g7h8       postgres_db    Up 3 hours",
"i9j0k1l2       redis_cache    Up 3 hours",

"",

"➜  ~ systemctl status nginx",
"nginx.service - active (running)",

"",

"➜  ~ free -h",
"RAM: 16GB   Used: 6.2GB   Free: 9.8GB",

"",

"➜  ~ df -h",
"/dev/sda1   512G   178G   334G   35%",

"",

"➜  ~ git status",
"On branch main",
"Your branch is up to date with origin/main",

"",

"➜  ~ git log --oneline -3",
"a3f21c2 Fix deployment bug",
"91bc82a Improve API performance",
"72ac91f Initial production release",

"",

"➜  ~ uptime",
"up 42 days, 7 hours, 12 minutes",

"",

"➜  ~ tail -n 3 logs/system.log",
"[OK] Server started",
"[OK] Database connected",
"[OK] All services running",

"",

"➜  ~ echo $MISSION",
"Build secure, scalable, production-ready systems.",

"",

"➜  ~"
];

let line = 0;
let char = 0;

function type() {

  if (line < lines.length) {

    if (char < lines[line].length) {

      terminal.innerHTML += lines[line][char];
      char++;

      autoScroll();
      setTimeout(type, CHAR_DELAY);

    }
    else {

      terminal.innerHTML += "\n";
      line++;
      char = 0;

      autoScroll();
      setTimeout(type, LINE_DELAY);

    }

  }
  else {

    setTimeout(() => {

      terminal.innerHTML = "";
      line = 0;
      char = 0;
      type();

    }, LOOP_DELAY);

  }

}

function autoScroll() {
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

type();