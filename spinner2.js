const spin = ["\r|   ","\r/   ","\r-   ","\r\\   ","\r|   ","\r/   ","\r-   ","\r\\   ","\r|   "];
let timer = 100;

for (const char of spin) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 200;
}