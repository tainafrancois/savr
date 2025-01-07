import axios from 'axios'
import cheerio from 'cheerio'

export async function scrapeAmazonProduct(url: string){
    if (!url) return;

    // curl -i --proxy brd.superproxy.io:33335 --proxy-user brd-customer-hl_9551aff4-zone-savr:h8qce3f133pn -k "https://geo.brdtest.com/welcome.txt?product=unlocker&method=native"

    // BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 33335;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password, 
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }
    
    try {
        // Fetch the product page
        const response = await axios.get(url, {proxy: options});
    } catch (error: any) {
        throw new Error(`Faile to scrape product: ${error.message}`)
    }

}