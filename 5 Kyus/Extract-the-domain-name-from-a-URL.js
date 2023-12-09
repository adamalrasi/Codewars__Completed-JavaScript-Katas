/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example: */

function domainName(url){
  // TASK: Parse url and return domain name 
  
  // 1. replace the urls and split random items
  const domainName = url.replace('http://', '').replace('https://','')
  .replace('www.','').split(/[/?#]/)[0]
  
  // 2. split and store the first index before the full stop
  const newStr = domainName.split('.')[0]
  
  // 3. return the new string
  return newStr  
  
}