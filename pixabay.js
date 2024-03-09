

console.log('pixabay.js loaded');
const makePosts = () => {
    for (let j = 0; j < 31; j++) {
        let id_no = j;

        let card = $('<div class="card blog"></div>').attr('id', 'card-' +id_no).appendTo
        ($('.blog-column'));

        let body = $('<div class="card-body blog"></div>').attr('id', 'card-body' +id_no).appendTo(card);

        let title = $('<h5 class="card-title blog"></h5>').attr('id', 'card-title' +id_no).appendTo(body);
       
        let pic = $('<img>').attr('id', 'img-' +id_no).addClass('blog-pic').css('max-height', '100px').appendTo(body);

        let text = $('<p class="card-text blog"></p>').attr('id', 'card-text' +id_no).appendTo(body);

        let sub = $('<p class="userId blog"></p>').attr('id', 'sub-' +id_no).appendTo(body);

        let post_id = $('<span></span>').attr('id', "post-" +id_no).appendTo(sub);

        let user_id = $('<span></span>').attr('id', "user-" +id_no).text('\tUser #:' +id_no).appendTo(sub);
    }

    getPics();
};

const getPics = () => {
   
    PIXABAY_KEY = '34307200-d9d40f7d91792ea09ef6fe4a9'
    PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=dramatic&landscapes&image_type=photo&per_page=30';

    const url = PIXABAY_URL.replace('<KEY>',PIXABAY_KEY);

    console.log(`URL: ${url}`);

    fetch(url)
    .then( (response) => {
   return response.json()
})
    .then((data) => {
        console.log(data);
        for (let i = 0; i < 31; i++) {
            let picSrc = data['hits'][i]
            ['webformatURL']
            let altText = data['hits'][i]['tags']
            console.log(`Pic: ${picSrc} 
            Alt: ${altText}`);
            $('#img-' +i)
            .attr("src", picSrc)
            .attr('alt', altText)
        }
    })
    .catch(error => console.log(error));
}

makePosts();