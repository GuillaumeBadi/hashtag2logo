// This is server

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	credentials = require('./credentials.js'),
	reverterMerger = require('./reverterMerger.js'),
	Twit = require('twit'),
	T = new Twit(credentials.twitter),
	fs = require('fs'),
	gm = require('gm'),
	gmstate,
	imagesArray = [];

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// this is where the Parse API should make a post reques
/*app.post('/parse/', function (req, res) {
	res.send(req.body);
	console.log(req.body);
});*/

// This function handle the attachment
function handleAttachment(att){
	//I am handling the attachment which is in PNG

	// I need to resize the photo in order to cut unused space

	// Revert the transparent with white color and the non-transparent in transparent
}

function handleHashtag(hash){
	//Look for the hashtag on twitter
	T.get('search/tweets', { q: 'aghacks', count: 16 }, function(err, data, response) {
		for (var i = 0; i < data.statuses.length; i++) {
				imagesArray.push(data.statuses[i].user.profile_image_url);
		};
  		if (err) {
  			console.log(err);
  		}
  			// Get all the pictures of all the users and put them in a single photo

console.log("ok");

gmstate = gm(imagesArray[0]);
for (var i = 1; i < 4; i++) {
	gmstate.append(imagesArray[i], true);
}

// finally write out the file asynchronously
gmstate.write('1.png', function (err) {
  if (!err) console.log('Hooray!');
});

gmstate = gm(imagesArray[4]);
for (var i = 5; i < 8; i++) {
	gmstate.append(imagesArray[i], true);
}

// finally write out the file asynchronously
gmstate.write('2.png', function (err) {
  if (!err) console.log('Hooray!');
});

gmstate = gm(imagesArray[8]);
for (var i = 9; i < 12; i++) {
	gmstate.append(imagesArray[i], true);
}

// finally write out the file asynchronously
gmstate.write('3.png', function (err) {
  if (!err) console.log('Hooray!');
});

gmstate = gm(imagesArray[12]);
for (var i = 13; i < 16; i++) {
	gmstate.append(imagesArray[i], true);
}

// finally write out the file asynchronously
gmstate.write('4.png', function (err) {
  if (!err) console.log('Hooray!');
});

gmstate = gm("1.png");
for (var i = 2; i <= 4; i++) {
	gmstate.append(i + ".png");
}

// finally write out the file asynchronously
gmstate.write('output.png', function (err) {
  if (!err) console.log('Hooray!');
  server.close();
});

	// a b c d  ->  ab
//              cd
/*gm()
    .in('-page', '+0+0')  // Custom place for each of the images
    .in(imagesArray[0])
    .in('-page', '+0+48')
    .in(imagesArray[1])
    .in('-page', '+0+96')
    .in(imagesArray[1])
    .in('-page', '+48+0')
    .in(imagesArray[2])
    .in('-page', '+48+48')
    .in(imagesArray[2])
    .in('-page', '+48+96')
    .in(imagesArray[2])
    .in('-page', '+96+0')
    .in(imagesArray[2])
    .in('-page', '+96+48')
    .in(imagesArray[3])
    .in('-page', '+96+96')
    .in(imagesArray[3])
    .mosaic()  // Merges the images as a matrix
    .write('output.jpg', function (err) {
        if (err) console.log(err);
    });*/
  		console.log(imagesArray);
	});
	// Get all users who tweeted on the #

	//Turn that photo into the logo (merge with handleAttachment)
}
handleHashtag("hash");

function sendEmail(address){
	//Send the image to that address

}

// this function will take the two photos and try to get the best size possible for them
function syncImageSizes(logo, picFrame, outputName){
	gm(picFrame)
	.size(function (err, sizePicFrame) {
		if (!err){
			gm(logo)	
			.resizeExact(sizePicFrame.width, sizePicFrame.width)
			.write(outputName, function (err) {
  				if (!err) console.log('done');
  			});
		}
		else
			console.log('error while calling size on picFrame in function syncImageSizes');
	});
}

// this function will revert And Merge the Photos 
function revertAndMergePhotos(logo, picFrame, outputName){
	reverterMerger.revertAndMerge(logo, picFrame, outputName);
}

function save(finalImage, date, address, hash, picFrame){
	//Store in the db the final image with the date when it was created, the address of the requester, the hashtag and the original frame of all users
}


var server = app.listen(3000, function () {
  var host = server.address().address,
  	  port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});