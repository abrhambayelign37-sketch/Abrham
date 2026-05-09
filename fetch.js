import https from 'https';

function check(url) {
  https.get(url, (res) => {
    console.log(res.statusCode, url);
  });
}

check('https://upload.wikimedia.org/wikipedia/commons/1/1d/Heydar_Aliyev_Center_in_Baku_%281%29.jpg');
check('https://upload.wikimedia.org/wikipedia/commons/e/eb/Church_of_the_Light.jpg');
check('https://upload.wikimedia.org/wikipedia/commons/9/98/Villa_Savoye_-_Poissy.jpg');
check('https://images.unsplash.com/photo-1541888040-520c1ec25db4?q=80&w=2670&auto=format&fit=crop');
