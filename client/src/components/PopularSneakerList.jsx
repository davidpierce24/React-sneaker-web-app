import { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

// import cors from 'cors';

const PopularSneakerList = props => {

    const sneaksPop = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://stockx.com/sneakers/most-popular")
        const pageData = await page.evaluate( () => {
            return {
                html: document.documentElement.innerHtml
            };
        })
        console.log(pageData)


        await browser.close();
    }

    return (
        <>
            <button onClick={sneaksPop}>Click</button>
        </>
    )
}

export default PopularSneakerList