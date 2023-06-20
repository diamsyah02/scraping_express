const cheerio = require('cheerio');
const { getData } = require("./configs/fetching");

const brokeDataSearch = async (param) => {
  const res = await getData(param);
  const $ = cheerio.load(res);
  const data = $('.list-berita > article > a')
  let result = []
  data.map((i, el) => {
    let url = $(el)
    let title = $(`.title`)
    let content = $(`.box_text > p`)
    result.push({
      url: url[0].attribs.href,
      title: title[i].children[0].data,
      content: content[i].children[0].data
    })
  })
  return result
};

module.exports = { brokeDataSearch }