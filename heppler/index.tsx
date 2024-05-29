import cheerio from 'cheerio';

export const getAllLevelThreeItems = (data: any) => {
    const levelThreeItems: any = [];
  
    for (const key in data) {
      const children = data[key].children;
      if (children) {
        children.forEach((child: any) => {
          if (child.children && child.children.length > 0) {
            child.children.forEach((levelThree: any) => {
              levelThreeItems.push(levelThree);
            });
          }
        });
      }
    }
  
    return levelThreeItems;
  };
  


  export function convertHtmlToPlainText(htmlString:any) {
      const $ = cheerio.load(htmlString);
      return $.text();
  }