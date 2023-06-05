/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser) {
    const getHostname = url => url.split("/")[2],
          hostName = getHostname(startUrl),
          queue = [startUrl],
          seen = new Set([startUrl]);
    while(queue.length) {
        const curr = queue.shift();
        for(const url of htmlParser.getUrls(curr)) {
            if(!seen.has(url) && getHostname(url).includes(hostName)) {
                seen.add(url);
                queue.push(url);
            }
        }
    }
    return [...seen.values()];
};