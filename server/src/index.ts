import express from "express";

import "dotenv/config";
import fs from "node:fs";
import puppeteer from "puppeteer";
import cors from "cors";
import getUserData from "./actions/getUserData";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", async function (req, res) {
  console.log(req.body);
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
  });

  // Create a page
  const page = await browser.newPage();
  console.log("Running tests..");

  // Go to your site
  await page.goto("http://100.100.1.80/user.php");
  // await page.screenshot({ path: "testresult2.png", fullPage: true });
  console.log(`All done, check the screenshot. ✨`);
  await page.type("#username", req.body.username);
  await page.type("#password", req.body.password);
  await page.click("#submit");
  const userData = await getUserData(page);


  res.send("Ok")
  // Close browser.
  // await browser.close();
});

app.listen(5000, () => console.log("Server is running on port 5000"));
