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
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: true,
  });

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("http://100.100.1.80/user.php");
  await page.type("#username", req.body.username);
  await page.type("#password", req.body.password);

  // Check content before reload
  const checkQueryBeforeReloadHandle = await page.$(
    "tbody tr:nth-child(2) td p:nth-child(3) font"
  );
  // const checkQueryBeforeReloadContent =
  //   await checkQueryBeforeReloadHandle?.evaluate((el) => el.innerHTML);
  // console.log("Content before reload:", checkQueryBeforeReloadContent);

  await page.click("#submit");

  // Wait for navigation to complete
  // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

  // Add a delay to ensure the page is fully loaded after navigation
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay time as needed

  // Check content after reload
  const checkQueryAfterReloadHandle = await page.$(
    "tbody tr:nth-child(2) td p:nth-child(3) font"
  );
  if (checkQueryAfterReloadHandle) {
    // const checkQueryAfterReloadContent =
    //   await checkQueryAfterReloadHandle.evaluate((el) => el.innerHTML);
    // console.log("Content after reload:", checkQueryAfterReloadContent);
    return res
      .status(401)
      .json({ msg: "اسم المستخدم غير صحيح أو كلمة المرور!" });
  } else {
    // console.log("Content after reload not found");
  }
  const userData = await getUserData(page);

  res.json(userData);
  // Close browser.
  await browser.close();
});

app.listen(5000, () => console.log("Server is running on port 5000"));
